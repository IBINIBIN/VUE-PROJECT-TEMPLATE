import axios, { type AxiosInstance, type AxiosResponse } from 'axios'

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

function createFetch<
  T extends Extract<keyof AxiosInstance, 'delete' | 'get' | 'head' | 'options' | 'post' | 'put' | 'patch'>,
  P extends Parameters<AxiosInstance[T]>,
>(type: T) {
  return async <D = any, R = AxiosResponse<D>['data']>(...args: P): Promise<R> => {
    // @ts-expect-error 这里使用any[]暂时解决类型扩展问题
    return http[type](...args)
  }
}

export default {
  get: createFetch('get'),
  delete: createFetch('delete'),
  head: createFetch('head'),
  options: createFetch('options'),
  post: createFetch('post'),
  put: createFetch('put'),
  patch: createFetch('patch'),
}
