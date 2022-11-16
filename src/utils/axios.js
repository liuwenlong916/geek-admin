import axios from 'axios'
import { getToken } from './getToken'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

//请求拦截
service.interceptors.request.use(
  config => {
    //配置token
    config.headers['token'] = getToken()
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

//相应拦截
service.interceptors.response.use(
  res => {
    if (res.status != 200) {
      return Promise.reject(res)
    } else {
      return res
    }
  },
  error => {
    return Promise.reject(error)
  }
)
export default service
