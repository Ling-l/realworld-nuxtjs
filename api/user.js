// 用户 api
import { request } from '@/plugins/request'

// 登录
export const login = data => {
  return request.post('/api/users/login', data)
  // return request({
  //   url: '/api/users/login',
  //   method: 'POST',
  //   data
  // })
}

// 注册
export const register = data => {
  return request.post('/api/users', data)
}

// 更新用户信息
export const updateUser = data => {
  return request.put('/api/user', data)
}
