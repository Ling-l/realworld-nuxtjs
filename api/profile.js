// profile api
import { request } from '@/plugins/request'

// 获取用户信息
export const getProfile = username => {
  return request({
    method: 'GET',
    url: `/api/profiles/${username}`,
  })
}

// 关注用户
export const followUser = username => {
  return request.post(`/api/profiles/${username}/follow`)
}

// 取消关注用户
export const unFollowUser = username => {
  return request.delete(`/api/profiles/${username}/follow`)
}