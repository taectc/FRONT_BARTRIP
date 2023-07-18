import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IiHead } from '../../../icons'
import {
  editPostApi,
  getHatByHatId,
  getAvatarByAvatarId,
  getDrinkByDrinkId,
} from '../../../api/post-api'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

function AdminEditProduct() {
  const [noPic, setNopic] = useState(true)
  const [file, setFile] = useState(null)
  const [fileUrl, setFileUrl] = useState('')
  const { productId } = useParams()

  console.log(productId)

  const [product, setProduct] = useState(null)

  useEffect(() => {
    const path = window.location.pathname

    const fetchData = async () => {
      try {
        let response = null
        if (path.includes('hat')) {
          console.log(productId)
          response = await getHatByHatId(productId)
          console.log('--------', response)
        } else if (path.includes('avatar')) {
          response = await getAvatarByAvatarId(productId)
          console.log('--------', response)
        } else if (path.includes('drink')) {
          response = await getDrinkByDrinkId(productId)
          console.log('--------', response)
        }
        if (response) {
          setProduct(
            response.data.hat || response.data.avatar || response.data.drink
          )
        }
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [productId])

  const chooseFileFn = (e) => {
    if (e.target.files[0]) {
      setFileUrl(URL.createObjectURL(e.target.files[0]))
      setFile(e.target.files[0])
      setNopic(false)
    }
  }
  const [editInput, setPost] = useState({})

  const navigate = useNavigate()

  useEffect(() => {
    const path = window.location.pathname
    if (path.includes('hat')) {
      document.getElementById('category').value = 'Hat'
    }
    if (path.includes('avatar')) {
      document.getElementById('category').value = 'Avatar'
    }
    if (path.includes('drink')) {
      document.getElementById('category').value = 'Drink'
    }
  }, [])

  const handleEditInput = (e) =>
    setPost({ ...editInput, [e.target.name]: e.target.value })
  console.log(editInput)

  const handleBack = (e) => {
    e.preventDefault()
    navigate('/admin')
    window.location.reload()
  }
  const handleUpload = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    if (editInput.name) {
      formData.append('name', editInput.name)
    }
    if (editInput.description) {
      formData.append('description', editInput.description)
    }
    if (editInput.price) {
      formData.append('price', +editInput.price)
    }
    if (file) {
      console.log(file)
      formData.append('image', file)
    }
    const category = document.getElementById('category').value
    const endpoint =
      category === 'Hat'
        ? `/product/hat/${productId}`
        : category === 'Drink'
        ? `/product/drink/${productId}`
        : category === 'Avatar'
        ? `/product/avatar/${productId}`
        : ''

    const res = await editPostApi(formData, endpoint)
    console.log(res)
    navigate('/admin')
    window.location.reload()
  }

  return (
    <div className="flex flex-col items-center h-[100vh] justify-center">
      <input
        id="uploadPic"
        type="file"
        placeholder="You can't touch this"
        className="hidden"
        onChange={(e) => chooseFileFn(e)}
      />

      <label
        htmlFor="uploadPic"
        className="relative h-[160px] w-[160px] aspect-[4/6] bg-slate-200 flex justify-center items-center"
      >
        <img
          className={`absolute w-full h-full object-cover ${
            noPic ? 'hidden' : ''
          }`}
          src={fileUrl}
          alt="upload picture"
          onError={(e) => setNopic(true)}
        />
        <img src={product?.image} className="h-[160px] w-[160px]" />
        {/* <IiHead /> */}
      </label>
      <label for="category">Choose category</label>
      <select name="category" id="category">
        <option value="Avatar">Avatar</option>
        <option value="Hat">Hat</option>
        <option value="Drink">Drink</option>
      </select>
      <textarea
        placeholder={product?.name}
        name="name"
        value={editInput.name}
        className="w-[40%] h-[100px] text-xl border border-slate-200 shadow-md my-4 p-4"
        onChange={handleEditInput}
      ></textarea>
      <textarea
        placeholder={product?.description}
        name="description"
        value={editInput.description}
        className="w-[40%] h-[100px] text-xl border border-slate-200 shadow-md my-4 p-4"
        onChange={handleEditInput}
      ></textarea>
      <textarea
        placeholder={product?.price}
        name="price"
        value={editInput.price}
        className="w-[40%] h-[100px] text-xl border border-slate-200 shadow-md my-4 p-4"
        onChange={handleEditInput}
      ></textarea>
      <div className="flex gap-5">
        <button className="btn btn-outline" onClick={handleBack}>
          Back
        </button>
        <button className="btn btn-outline" onClick={handleUpload}>
          UPLOAD
        </button>
      </div>
    </div>
  )
}

export default AdminEditProduct
