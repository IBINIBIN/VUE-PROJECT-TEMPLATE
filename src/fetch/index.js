import axios from 'axios'

const http = axios.create({ baseURL: import.meta.env.VITE_API_BASE_URL, withCredentials: true })

// 响应拦截器
http.interceptors.response.use(
  (response) => {
    return response.data
  },

  (error) => {
    return Promise.reject(error)
  },
)

export default http
