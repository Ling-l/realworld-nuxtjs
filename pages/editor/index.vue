<!-- 编辑页 -->
<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <ul class="error-messages" v-if="errors">
            <div v-for="(value, field) in errors" :key="field" class="ng-scope">
              <li v-for="error in value" :key="error" class="ng-binding ng-scope">
                {{ field }} {{ error }}
              </li>
            </div>
          </ul>

          <form>
            <fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Article Title"
                  :min="1"
                  :disabled="isConfirm"
                  v-model="article.title"
                  required
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="What's this article about?"
                  :min="1"
                  :disabled="isConfirm"
                  v-model="article.description"
                  required
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control"
                  rows="8"
                  placeholder="Write your article (in markdown)"
                  :disabled="isConfirm"
                  v-model="article.body"
                  required
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter tags"
                  :disabled="isConfirm"
                  v-model="tag"
                  @keydown.enter="addTag"
                />
                <div class="tag-list">
                  <span v-for="tag in article.tagList" :key="tag" class="tag-default tag-pill ng-binding ng-scope">
                  <i class="ion-close-round" @click="removeTag(tag)"></i>
                  {{ tag }}
                </span>
                </div>
              </fieldset>
              <button
                class="btn btn-lg pull-xs-right btn-primary"
                type="button"
                @click="onSubmit"
              >
                Publish Article
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getArticle, createArticle, updateArticle } from '@/api/article'
export default {
  // 在路由匹配组件渲染之前会先执行中间件处理
  middleware: 'authenticated',
  name: 'EditorIndex',
  data () {
    return {
      slug: '',
      article: {
        title: '',
        description: '',
        body: '',
        tagList: [],
      },
      tag: '', // 输入的tag
      isConfirm: false, // 是否提交
      errors: {} // 错误信息
    }
  },
  created () {
    this.getData()
  },
  methods: {
    async getData () {
      const { slug } = this.$route.params
      if (!slug) return
      this.slug = slug
      const { data: { article } } = await getArticle(slug)
      for( let key in article) {
        if (this.article.hasOwnProperty(key)) {
          this.article[key] = article[key]
        }
      }
    },
    async onSubmit () {
      this.isConfirm = true
      try {
        const saveData = { article: this.article }
        const { data } = this.slug
          ? await updateArticle(this.slug, saveData)
          : await createArticle(saveData)
        const { article } = data
        this.$router.push({ name: 'Article', params: { slug: article.slug } })
      } catch (err) {
        this.errors = err.response.data.errors
      } finally {
        this.isConfirm = false
      }
    },
    addTag () {
      if (this.article.tagList.includes(this.tag)) return
      this.article.tagList.push(this.tag)
      this.tag = ''
    },
    removeTag (tag) {
      const idx = this.article.tagList.findIndex(item => item === tag)
      this.article.tagList.splice(idx, 1)
    }
  }
}
</script>

<style>
</style>