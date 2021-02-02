<!-- 用户信息页 -->
<template>
  <div class="profile-page">
    <div class="user-info">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <img :src="profile.image" class="user-img" />
            <h4>{{ profile.username }}</h4>
            <p v-if="profile.bio">{{ profile.bio }}</p>
            <button
              class="btn btn-sm btn-outline-secondary action-btn"
              :disabled="followDisabled"
              :class="{active: profile.following}"
              @click="onFollow"
            >
              <i :class="isMe ? 'ion-gear-a' : 'ion-plus-round'"></i>
              &nbsp; {{ isMe ? 'Edit Profile Settings' : ((profile.following ? 'Unfollow ' : 'Follow ') + profile.username)}}
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <nuxt-link
                  class="nav-link"
                  :to="{
                    name: 'Profile'
                  }"
                  :class="{active: !$route.query.tab}"
                  exact
                >
                  My Articles
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link
                  class="nav-link"
                  :to="{
                    name: 'Profile',
                    params: {
                      username: profile.username,
                    },
                    query: {
                      tab: 'favorites'
                    }
                  }"
                  :class="{active: $route.query.tab === 'favorites'}"
                  exact
                >
                  Favorited Articles
                </nuxt-link>
              </li>
            </ul>
          </div>

          <article-list :articles="articles"></article-list>

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
                    name: 'Profile',
                    query: {
                      page: item,
                      tab
                    }
                  }"
                >{{ item }}</nuxt-link>
              </li>
            </ul>
          </nav>
          <!-- /分页列表 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ArticleList from '@/components/Article/list'
import { getProfile, followUser, unFollowUser } from '@/api/profile'
import { getArticles } from '@/api/article'
export default {
  middleware: 'authenticated',
  name: "UserProfile",
  components: { ArticleList },
  data () {
    return {
      followDisabled: false
    }
  },
  watchQuery: ['tab', 'page'],
  computed: {
    ...mapState(['user']),
    isMe() {
      return this.user.username === this.profile.username
    },
    totalPage () {
      return Math.ceil(this.articlesCount / this.limit)
    }
  },
  async asyncData(context) {
    const { params, query } = context
    const { tab } = query
    const limit = 5
    const page = Number.parseInt(query.page || 1)
    const articleParams = tab === 'favorites' ? { favorited: params.username } : { author: params.username }
    articleParams.limit = limit
    articleParams.offset = (page - 1) * limit

    const [ profileRes, articleRes ] = await Promise.all([getProfile(params.username), getArticles(articleParams)])
    const { data: { profile } } = profileRes
    const { data: { articles, articlesCount } } = articleRes
    articles.forEach(article => article.favoriteDisabled = false)

    return {
      profile,
      articles,
      articlesCount,
      page,
      tab,
      limit,
    }
  },
  methods: {
    async onFollow() {
      if (this.isMe) {
        this.$router.push({ name: 'Settings' })
      } else {
        this.followDisabled = true
        if (this.profile.following) {
          await unFollowUser(this.profile.username)
          this.profile.following = false
        } else {
          await followUser(this.profile.username)
          this.profile.following = true
        }
        this.followDisabled = false
      }
    }
  },
  head () {
    const tab = this.$route.query.tab
    return {
      title: `${tab === 'favorites' ? 'Articles favorites by' : ''} ${this.profile.username} - RealWorld`,
    }
  }
}
</script>

<style>
</style>