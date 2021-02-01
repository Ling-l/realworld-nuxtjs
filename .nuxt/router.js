import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _9f1ef8aa = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _1fe0a9a0 = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _47265a70 = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _4daa1148 = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _0e4faf38 = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _b6bcac24 = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _34745495 = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _9f1ef8aa,
    children: [{
      path: "",
      component: _1fe0a9a0,
      name: "Home"
    }, {
      path: "/login",
      component: _47265a70,
      name: "Login"
    }, {
      path: "/register",
      component: _47265a70,
      name: "Register"
    }, {
      path: "/profile/:username",
      component: _4daa1148,
      name: "Profile"
    }, {
      path: "/settings",
      component: _0e4faf38,
      name: "Settings"
    }, {
      path: "/editor/:slug?",
      component: _b6bcac24,
      name: "Editor"
    }, {
      path: "/article/:slug",
      component: _34745495,
      name: "Article"
    }]
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
