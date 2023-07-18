import axios from 'axios'
import { BACKEND_URL } from '../configs/env'
import { getAccessToken } from '../utils/localStorage'
axios.defaults.baseURL = BACKEND_URL

axios.interceptors.request.use(
  (config) => {
    const token = getAccessToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (err) => Promise.reject(err)
)

export default axios
