<!-- 文章列表 - 组件 -->
<template>
  <div>
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
              username: article.author.username,
            },
          }"
        >
          <img :src="article.author.image" />
        </nuxt-link>
        <div class="info">
          <nuxt-link
            class="author"
            :to="{
              name: 'Profile',
              params: {
                username: article.author.username,
              },
            }"
          >
            {{ article.author.username }}
          </nuxt-link>
          <span class="date">{{
            article.createdAt | date("MMM DD, YYYY")
          }}</span>
        </div>
        <button
          class="btn btn-outline-primary btn-sm pull-xs-right"
          :class="{ active: article.favorited }"
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
            slug: article.slug,
          },
        }"
      >
        <h1>{{ article.title }}</h1>
        <p>{{ article.description }}</p>
        <span>Read more...</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { addFavorite, delFavorite } from '@/api/article'

export default {
  name: 'ArticleList',
  props: {
    articles: {
      type: Array,
      required: true
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