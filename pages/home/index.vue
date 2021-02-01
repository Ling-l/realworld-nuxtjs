<!-- 首页 -->
<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.拉勾教育</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item" v-if="user">
                <nuxt-link
                  exact
                  class="nav-link"
                  :to="{
                    name: 'Home',
                    query: {
                      tab: 'your_feed'
                    }
                  }"
                  :class="{
                    active: tab === 'your_feed'
                  }"
                >Your Feed</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link
                  exact
                  class="nav-link"
                  :class="{
                    active: tab === 'global_feed'
                  }"
                  :to="{
                    name: 'Home',
                    query: {
                      tab: 'global_feed'
                    }
                  }"
                >Global Feed</nuxt-link>
              </li>
              <li class="nav-item" v-if="$route.query.tag">
                <nuxt-link
                  exact
                  class="nav-link"
                  :class="{
                    active: tab === 'tag'
                  }"
                  :to="{
                    name: 'Home',
                    query: {
                      tab: 'tag'
                    }
                  }"
                  
                ># {{ tag }}</nuxt-link>
              </li>
            </ul>
          </div>

          <div
            class="article-preview"
            v-for="article in articles"
            :key="article.slug"
          >
            <div class="article-meta">
              <nuxt-link
                :to="{
                  name: 'Profile',
                  params: {
                    username: article.author.username
                  }
                }"
              >
                <img :src="article.author.image" />
              </nuxt-link>
              <!-- <a href="profile.html"
                ></a> -->
              <div class="info">
                <nuxt-link
                  class="author"
                  :to="{
                    name: 'Profile',
                    params: {
                      username: article.author.username
                    }
                }">
                  {{ article.author.username }}
                </nuxt-link>
                <span class="date">{{ article.createdAt | date('MMM DD, YYYY') }}</span>
              </div>
              <button
                class="btn btn-outline-primary btn-sm pull-xs-right"
                :class="{active: article.favorited}"
                :disabled="article.favoriteDisabled"
                @click="onFavorite(article)"
              >
                <i class="ion-heart"></i> {{ article.favoritesCount }}
              </button>
            </div>
            <nuxt-link
              class="preview-link"
              :to="{
                name: 'Article',
                params: {
                  slug: article.slug
                }
            }">
              <h1>{{ article.title }}</h1>
              <p>{{ article.description }}</p>
              <span>Read more...</span>
            </nuxt-link>
          </div>

          <!-- 分页列表 -->
          <nav>
            <ul class="pagination">
              <li
                class="page-item"
                v-for="item in totalPage"
                :key="item"
                :class="{
                  active: item === page
                }"
              >
                <nuxt-link
                  class="page-link"
                  :to="{
                    name: 'Home',
                    query: {
                      page: item,
                      tag: $route.query.tag,
                      tab
                    }
                  }"
                >{{ item }}</nuxt-link>
              </li>
            </ul>
          </nav>
          <!-- /分页列表 -->
        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>

            <div class="tag-list">
              <template v-for="tag in tags">
                <nuxt-link
                  class="tag-pill tag-default"
                  v-if="!!tag"
                  :key="tag"
                  :to="{
                    name: 'Home',
                    query: {
                      tab: 'tag',
                      tag,
                    }
                  }"
                >
                  {{ tag }}
                </nuxt-link>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getArticles, getYourFeedArticles, addFavorite, delFavorite } from '@/api/article'
import { getTags } from '@/api/tag'

export default {
  name: "HomeIndex",
  watchQuery: ['page', 'tag', 'tab'],
  computed: {
    ...mapState(['user']),
    totalPage () {
      // 向上取整
      return Math.ceil(this.articlesCount / this.limit)
    }
  },
  // 为了提高 SEO & 首屏渲染的速度，因此放入 asyncData 中
  async asyncData ({ query, store }) {
    const limit = 20
    const page = Number.parseInt(query.page || 1)
    const tab = query.tab || 'global_feed'
    const tag = query.tag
    const params = {
      limit,
      offset: (page - 1) * limit,
      tag
    }
    const isYourFeed = tab === 'your_feed' && store.state.user
    const loadArticles = isYourFeed ? getYourFeedArticles : getArticles
    const [articleRes, tagRes ] = await Promise.all([
      loadArticles(params),
      getTags()]
    )
    const { articles, articlesCount } = articleRes.data
    const { tags } = tagRes.data

    articles.forEach(article => article.favoriteDisabled = false)

    return {
      articles, // 文章列表
      articlesCount, // 文章总数
      tags, // 标签列表
      limit, // 每页大小
      page, // 页码
      tab, // 选项卡
      tag // 数据标签
    }
  },
  methods: {
    async onFavorite (article) {
      article.favoriteDisabled = true
      if (article.favorited) {
        await delFavorite(article.slug)
        article.favorited = false
        article.favoritesCount--
      } else {
        await addFavorite(article.slug)
        article.favorited = true
        article.favoritesCount++
      }
      article.favoriteDisabled = false
    }
  }
}
</script>

<style>
</style>