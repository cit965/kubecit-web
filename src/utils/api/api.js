import request from './request'

export function getFristCategorys(){
	return request({
		url:'/api/course/category/getFirstCategorys',
	})
}