import axios from 'axios'

// Criar instância configurada do Axios
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Interceptor de request
axiosInstance.interceptors.request.use(
  (config) => {
    // Adicionar token de autenticação se necessário
    // const token = localStorage.getItem('token')
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`
    // }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Interceptor de response
axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    // Tratamento global de erros
    if (error.response) {
      // Erro de resposta do servidor
      console.error('Erro de resposta:', error.response.status)

      switch (error.response.status) {
        case 401:
          // Não autorizado - redirecionar para login se necessário
          break
        case 404:
          console.error('Recurso não encontrado')
          break
        case 500:
          console.error('Erro interno do servidor')
          break
        default:
          console.error('Erro:', error.response.data)
      }
    } else if (error.request) {
      // Erro de rede
      console.error('Erro de rede:', error.request)
    } else {
      console.error('Erro:', error.message)
    }

    return Promise.reject(error)
  }
)

export default axiosInstance
