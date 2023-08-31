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
