import request from './request'
// 获取课程标签
export function queryCategoryList(params){
  return request({
      url:'/api/categories',
      method:'get',
      params
  })
}
// 获取分类下课程
export function searchCourse(data){
  return request({
      url:'/api/course/search',
      method:'post',
      data
  })
}