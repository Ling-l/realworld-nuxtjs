// 配置文件
module.exports = {
  router: {
    linkActiveClass: 'active', // 路由高亮类名
    // 自定义扩展路由表
    extendRoutes(routes, resolve) {
      // 清除 nuxtjs 基于 pages 目录默认生成的路由规则
      routes.splice(0)
      routes.push(...[
        {
          path: '/',
          component: resolve(__dirname, 'pages/layout/'),
          children: [
            {
              path: '', // 默认子路由
              name: 'Home',
              component: resolve(__dirname, 'pages/home/'),
            },
            {
              path: '/login',
              name: 'Login',
              component: resolve(__dirname, 'pages/login/'),
            },
            {
              path: '/register',
              name: 'Register',
              component: resolve(__dirname, 'pages/login/'),
            },
            {
              path: '/profile/:username',
              name: 'Profile',
              component: resolve(__dirname, 'pages/profile/'),
            },
            {
              path: '/settings',
              name: 'Settings',
              component: resolve(__dirname, 'pages/settings/'),
            },
            {
              path: '/editor',
              name: 'Editor',
              component: resolve(__dirname, 'pages/editor/'),
            },
            {
              path: '/article/:slug',
              name: 'Article',
              component: resolve(__dirname, 'pages/article/'),
            }
          ]
        }
      ])
    }
  },
  server: {
    host: '0.0.0.0', // 会监听所有网点
    port: 3333
  },
  // 注册插件
  plugins: [
    '~/plugins/request.js',
    '~/plugins/dayjs.js'
  ]
}