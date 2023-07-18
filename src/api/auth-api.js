import axios from './axios'

export const register = (input) => axios.post('/auth/register', input)
export const login = (input) => axios.post('/auth/login', input)
export const getMe = () => axios.get('/auth/me')
export const editNameByUserId = (id, nickname) =>
  axios.patch('/auth/me', { id, nickname })
