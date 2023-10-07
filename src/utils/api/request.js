import axios from 'axios';
import { useUserStore } from '@/store/user';

//1. 创建axios对象
const service = axios.create();

console.log(import.meta.env.VITE_BASE_URL)
service.defaults.baseURL = import.meta.env.VITE_BASE_URL

//2. 请求拦截器
service.interceptors.request.use(config => {
  const userStore = useUserStore();
  let token = userStore.token;
  if( token ){
  	config.headers['Authorization'] = token;
  }
  return config;
}, error => {
  Promise.reject(error);
});

//3. 响应拦截器
service.interceptors.response.use(response => {
  //判断code码
  return response.data;
},error => {
  if (error.response.data.reason == "用户ID不存在") {
    console.log('token error')
    window['$router'].replace({name: 'login'})
  }
  return Promise.reject(error);
});

export default service;