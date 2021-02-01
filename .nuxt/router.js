import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0fb1d576 = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _5651f22b = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _74249b9d = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _52da0e46 = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _e5e79922 = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _03e2fbb9 = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _854587ac = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

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
    component: _0fb1d576,
    children: [{
      path: "",
      component: _5651f22b,
      name: "Home"
    }, {
      path: "/login",
      component: _74249b9d,
      name: "Login"
    }, {
      path: "/register",
      component: _74249b9d,
      name: "Register"
    }, {
      path: "/profile/:username",
      component: _52da0e46,
      name: "Profile"
    }, {
      path: "/settings",
      component: _e5e79922,
      name: "Settings"
    }, {
      path: "/editor",
      component: _03e2fbb9,
      name: "Editor"
    }, {
      path: "/article/:slug",
      component: _854587ac,
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
