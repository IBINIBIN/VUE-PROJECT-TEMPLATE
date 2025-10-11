import fetch from '@/fetch'

export const COMMON_API = {
  demo: () => fetch.get('/demo'),
}
