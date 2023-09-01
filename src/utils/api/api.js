import request from './request'

export function getFristCategorys(){
	return request({
		url:'/api/course/category/getFirstCategorys',
	})
}

export function getTagsList(data){
    return request({
		url:'/api/course/tags/list',
        method: 'post',
        data
	})
}

export function searchCourse(data){
    return request({
        url:'/api/course/search',
        method:'post',
        data
    })
}

export function getSliders(){
    return request({
        url:'/api/slider/getSliders',
    })
}


//查询最新课程
export function mostNewCourse( data ){
	return request({
		url:'/api/course/mostNew',
		method:'post',
		data
	})
}


//用户名密码登录
export function loginByJson( data ){
	return request({
		url:'/api/u/loginByJson',
		method:'post',
		data
	})
}
//获取个人信息
export function getInfo( params ){
	return request({
		url:'/api/member/getInfo',
		params
	})
}

//创建Token
export function createToken(){
	return request({
		url:'/api/token/createToken',
	})
}
