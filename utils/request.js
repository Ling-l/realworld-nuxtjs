// axios 请求
import axios from 'axios'

const request = axios.create({
  baseURL: 'https://conduit.productionready.io', // 基础url
})

// 请求拦截器
request.interceptors.request.use(config => {
  console.log('hello');
  return config
}, error => {
  // 请求失败（请求未发出去的情况）
  return Promise.reject(error)
})
// 相应拦截器

export default request
