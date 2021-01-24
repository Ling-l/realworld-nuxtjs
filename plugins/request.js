// axios 请求 作为插件
import axios from 'axios'

export const request = axios.create({
  baseURL: 'https://conduit.productionready.io', // 基础url
})

/**
 * 通过插件获取上下文 - context
 */
export default (context) => {
  const { store } = context
  // 请求拦截器
  request.interceptors.request.use(config => {
    const { user } = store.state
    if (user && user.token) {
      config.headers.Authorization = `Token ${user.token}`
    }
    return config
  }, error => {
    // 请求失败（请求未发出去的情况）
    return Promise.reject(error)
  })
  // 响应拦截器

}
