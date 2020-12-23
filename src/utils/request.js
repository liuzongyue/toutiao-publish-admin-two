// 基于axios
import axios from 'axios'
// 创建一个axios实例
const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/' // 请求的基础URL
})

// 请求拦截器

//
// 导出请求方法
export default request

// 谁要使用就加载 request 模块
// import request from 'request.js'
// request.xxx
// request({
//   method: ,
//   url: '',
// })
