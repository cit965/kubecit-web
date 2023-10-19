import request from './request'
// 获取课程标签
export function queryCategoryList(params){
  return request({
      url:'/api/categories/v2',
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
// 获取课程详细信息
export function courseDetail(courseId){
  return request({
    url:'/api/course/' + courseId,
    method:'get'
  })
}
// 获取课程的章节
export function courseChapters(courseId){
  return request({
    url: `/api/course/${courseId}/lessons`,
    method: 'get'
  })
}
// 获取某节课程视频链接
export function courseVideoInfo(params){
  return request({
    url: '/api/video/player/get_player_param',
    method: 'get',
    params
  })
}
// 新增课程
export function cerateCourse(data){
  return request({
    url: '/api/course',
    method: 'post',
    data
  })
}
// 创建讲师
export function createTeacher(data){
  return request({
    url: '/api/teacher',
    method: 'post',
    data
  })
}