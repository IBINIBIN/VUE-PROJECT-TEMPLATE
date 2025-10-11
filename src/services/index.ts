import fetch from '@/fetch'

export const COMMON_API = {
  demo: async () => fetch.get<number>('/demo'),
}
;(async function () {
  const res = await COMMON_API.demo()
})()
