import axios from './axios'
const configWithAuthorization = {
  headers: {
    Authorization: 'Bearer ' + localStorage.getItem('accessItem'),
  },
}

export const payment = (input) => {
  // console.log(input)
  return axios.post('/order/checkout', input)
}

export const paymentData = (idSession) => {
  // console.log(idSession)
  return axios.get(
    '/order/payment?session_id=' + idSession,
    configWithAuthorization
  )
}

export const createOrder = (input) => {
  return axios.post('order/createOrder', input, configWithAuthorization)
}
// export const savePayment = (payload) => {
//     return axios.post('/order/save-payment', payload)
// }
