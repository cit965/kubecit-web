import request from './request'

// 获取讲师详情
export function getTeacherDetail(id){
    return request({
        url:`/api/teacher/${id}`,
        method:'get',
    })
  }
  // 申请讲师
export function applyBeTeacher(data){
    return request({
        url: '/api/teacher/become',
        method: 'post',
        data
    })
}
// 讲师申请列表
export function teacherApplyList(data){
    return request({
        url: '/api/teacher/becomeRecord',
        method: 'post',
        data
    })
}
// 讲师审核
export function teacherReview(teacherId){
    return request({
        url: '/api/teacher/review' + teacherId,
        method: 'patch'
    })
}
