import request from './request'

// 获取讲师详情
export function getTeacherDetail(id){
    return request({
        url:`/api/teacher/${id}`,
        method:'get',
    })
  }