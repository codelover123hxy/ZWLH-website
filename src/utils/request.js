import axios from 'axios'
import store from '../store';
 
// 配置项
const axiosOption = {
    baseURL: 'https://api.familystudy.cn:8085',
    // baseURL:'https://localhost:8085',
    timeout: 50000
}

// 创建一个单例
const instance = axios.create(axiosOption);
 
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token')
  if(token){
    config.headers = {
      'token': token
    }
    console.log("token2", token)
  }
  if (config.url === '/chat/chat') {
    config.responseType = 'stream'
    config.baseURL = "http://api.familystudy.cn:85"
  }  
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});
 
// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response.data;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});
 
export default instance;