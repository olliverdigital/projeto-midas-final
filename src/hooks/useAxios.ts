import axios, { AxiosInstance } from 'axios'

let api: AxiosInstance | null = null

export function getApi(): AxiosInstance {
  if (api) return api
  api = axios.create({ baseURL: '/api', timeout: 15000 })

  // Request interceptor
  api.interceptors.request.use((config) => {
    // Exemplo: anexar token se existir
    // const token = localStorage.getItem('token')
    // if (token) config.headers.Authorization = `Bearer ${token}`
    return config
  })

  // Response interceptor
  api.interceptors.response.use(
    (res) => res,
    (error) => {
      // Tratamento centralizado de erros
      console.error('[API ERROR]', error?.response?.status, error?.message)
      return Promise.reject(error)
    }
  )

  return api
}
