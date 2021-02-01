<template>
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
    <div class="info">
      <nuxt-link class="author"
        :to="{
          name: 'Profile',
          params: {
            username: article.author.username
          }
        }"
      >{{ article.author.username }}
      </nuxt-link>
      <span class="date">{{ article.updatedAt | date('MMM DD, YYYY') }}</span>
    </div>
    <template v-if="article.author.username === user.username">
      <button
        class="btn btn-sm btn-outline-secondary"
        @click="editArticle"
      >
        <i class="ion-edit"></i>
        &nbsp; Edit Article
      </button>
      &nbsp;&nbsp;
      <button class="btn btn-outline-danger btn-sm" @click="deleteArticle">
        <i class="ion-trash-a"></i> Delete Article
      </button>
    </template>
    <template v-else>
      <button
        class="btn btn-sm btn-outline-secondary"
        :class="{active: article.author.following}"
        :disabled="followDisabled"
        @click="onFollow"
      >
        <i class="ion-plus-round"></i>
        &nbsp; {{ article.author.following ? 'UnFollow': 'Follow' }} {{ article.author.username }}
      </button>
      &nbsp;&nbsp;
      <button
        class="btn btn-sm btn-outline-primary"
        :class="{active: article.favorited}"
        :disabled="article.favoriteDisabled"
        @click="onFavorite"
      >
        <i class="ion-heart"></i>
        &nbsp; Favorite Post <span class="counter">({{ article.favoritesCount }})</span>
      </button>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { delArticle, addFavorite, delFavorite } from '@/api/article'
import { followUser, unFollowUser } from '@/api/profile'

export default {
  name: 'ArticleMeta',
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      followDisabled: false
    }
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    editArticle () {
      this.$router.push({ name: 'Editor', params: { slug: this.article.slug } })
    },
    async deleteArticle () {
      const result = await delArticle(this.article.slug)
      this.$router.replace('/')
    },
    // 关注 or 取关
    async onFollow() {
      this.followDisabled = true
      if (this.article.author.following) {
        await unFollowUser(this.article.author.username)
        this.article.author.following = false
      } else {
        await followUser(this.article.author.username)
        this.article.author.following = true
      }
      this.followDisabled = false
    },
    // 点赞文章
    async onFavorite () {
      this.article.favoriteDisabled = true
      if (this.article.favorited) {
        await delFavorite(this.article.slug)
        this.article.favorited = false
        this.article.favoritesCount--
      } else {
        await addFavorite(this.article.slug)
        this.article.favorited = true
        this.article.favoritesCount++
      }
      this.article.favoriteDisabled = false
    }
  }
}
</script>

<style>
</style>