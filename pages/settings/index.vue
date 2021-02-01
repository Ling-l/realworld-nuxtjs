<!-- 设置页 -->
<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Your Settings</h1>
          <ul class="error-messages">
            <template v-for="(messages, field) in errors">
              <li v-for="(message, index) in messages" :key="index">
                {{ field }} {{ messages}}
              </li>
            </template>
          </ul>

          <form @submit.prevent="onSubmit">
            <fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control"
                  type="text"
                  placeholder="URL of profile picture"
                  v-model="user.image"
                  :disabled="isConfirm"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Your Name"
                  v-model="user.username"
                  :disabled="isConfirm"
                  required
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control form-control-lg"
                  rows="8"
                  placeholder="Short bio about you"
                  v-model="user.bio"
                  :disabled="isConfirm"
                  required
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                  v-model="user.email"
                  :disabled="isConfirm"
                  required
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  v-model="user.password"
                  :disabled="isConfirm"
                  required
                />
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right">
                Update Settings
              </button>
            </fieldset>
          </form>

          <hr/>
          <button class="btn btn-outline-danger" @click="logout">
            Or click here to logout.
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { updateUser } from '@/api/user'
const Cookie = process.client ? require('js-cookie'): undefined

export default {
  middleware: 'authenticated',
  name: 'SettingsIndex',
  data () {
    return {
      user: {
        image: null,
        email: '',
        bio: null,
        username: '',
        password: ''
      },
      errors: {},
      isConfirm: false, // 是否点击了提交
    }
  },
  computed: {
    ...mapState({storeUser: 'user'})
  },
  created () {
    for (const key in this.storeUser) {
      if (this.user.hasOwnProperty(key)) {
        this.user[key] = this.storeUser[key]
      }
    }
  },
  methods: {
    async onSubmit () {
      this.isConfirm = true
      try {
        const { data } = await updateUser({ user: this.user })
        Cookie.set('user', data.user)
        this.$router.push({ name: 'Profile', params: { username: this.storeUser.username }})
      } catch (err) {
        this.errors = err.response.data.errors
      } finally {
        this.isConfirm = false
      }
    },
    logout () {
      this.$store.commit('setUser', null)
      Cookie.set('user', null)
      this.$router.push('/')
    }
  }
}
</script>

<style>
</style>