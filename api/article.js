// 文章 api
import { request } from '@/plugins/request'

// 获取公共文章列表
export const getArticles = params => {
  return request({
    method: 'GET',
    url: '/api/articles',
    params
  })
}

// 获取关注的用户文章列表
export const getYourFeedArticles = (params) => {
  return request({
    method: 'GET',
    url: '/api/articles/feed',
    params
  })
}

// 点赞
export const addFavorite = slug => {
  return request.post(`/api/articles/${slug}/favorite`)
}

// 取消点赞
export const delFavorite = slug => {
  return request.delete(`/api/articles/${slug}/favorite`)
}

// 获取文章详情
export const getArticle = slug => {
  return request({
    method: 'GET',
    url: `/api/articles/${slug}`
  })
}

// 获取文章评论
export const getComments = slug => {
  return request({
    method: 'GET',
    url: `/api/articles/${slug}/comments`
  })
}

// 评论文章 /api/articles/:slug/comments
export const addComment = (slug, data) => {
  return request.post(`/api/articles/${slug}/comments`, data)
}

// 创建文章
export const createArticle = data => {
  return request.post('/api/articles', data)
}

// 更新文章 /api/articles/:slug
export const updateArticle = (slug, data) => {
  return request.put(`/api/articles/${slug}`, data)
}

// 删除文章
export const delArticle = slug => {
  return request.delete(`/api/articles/${slug}`)
}
