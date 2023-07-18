import axios from './axios'

const configWithAuthorization = {
  headers: {
    Authorization: 'Bearer ' + localStorage.getItem('accessItem'),
  },
}

export const editPostApi = (editInput, endpoint) =>
  axios.patch(endpoint, editInput)
export const postApi = (postInput, endpoint) => axios.post(endpoint, postInput)

export const getDrinkByUserId = () =>
  axios.get('product/userDrink', configWithAuthorization)

export const getHatByUserId = () =>
  axios.get('product/userHat', configWithAuthorization)

export const getAvatarByUserId = () =>
  axios.get('product/userAvatar', configWithAuthorization)
export const getDrinkApi = () => axios.get('/product/drink')
export const getAvatarApi = () => axios.get('/product/avatar')
export const getHatApi = () => axios.get('/product/hat')
export const deletePostApi = (id) => axios.delete(`/post/${id}`)
export const getHatByHatId = (id) => axios.get(`product/hat/${id}`)
export const getAvatarByAvatarId = (id) => axios.get(`product/avatar/${id}`)
export const getDrinkByDrinkId = (id) => axios.get(`product/drink/${id}`)
export const DeleteDrinkByDrinkId = (id) => axios.delete(`product/drink/${id}`)
export const DeleteAvatarByAvatarId = (id) =>
  axios.delete(`product/avatar/${id}`)
export const DeleteHatByHatId = (id) => axios.delete(`product/hat/${id}`)
export const UpdateAvatarByUserId = (input) =>
  axios.patch(`product/userAvatar`, input, configWithAuthorization)
export const GetFullAvatarByUserId = () =>
  axios.get('product/meAvatar', configWithAuthorization)
export const GetFullAvatarByUserOnlineId = (id) =>
  axios.post('product/meAvatar', id)

// export const addDrinkByUserId = (input) => axios.post('/product/drinkUser',input)
