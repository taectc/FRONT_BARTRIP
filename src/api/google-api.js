import axios from './axios'

export const googleLogin = (credential) =>
  axios.post('auth/glogin', { credential })
