import React from 'react'
import { DrinkContext } from '../../../contexts/DrinkContextComponent'
import { useContext } from 'react'
import { AvatarContext } from '../../../contexts/AvatarContextComponents'
import { HatContext } from '../../../contexts/HatContextComponet'
import { useNavigate } from 'react-router-dom'
import {
  DeleteAvatarByAvatarId,
  DeleteDrinkByDrinkId,
  DeleteHatByHatId,
} from '../../../api/post-api'

export default function AdminAllProduct() {
  const { allDrinks } = useContext(DrinkContext)
  const { Avatar } = useContext(AvatarContext)
  const { hat } = useContext(HatContext)
  const navigate = useNavigate()

  const handleClickEditDrink = (id) => {
    navigate(`/admin/editdrink/${id}`)
  }

  const handleClickEditHat = (id) => {
    navigate(`/admin/edithat/${id}`)
  }

  const handleClickEditAvatar = (id) => {
    navigate(`/admin/editavatar/${id}`)
  }

  const handleDeleteDrink = (id) => {
    console.log(id)
    DeleteDrinkByDrinkId(id)
    window.location.reload()
  }

  const handleDeleteHat = (id) => {
    console.log(id)
    DeleteHatByHatId(+id)
    window.location.reload()
  }

  const handleDeleteAvatar = (id) => {
    console.log(id)
    DeleteAvatarByAvatarId(+id)
    window.location.reload()
  }

  return (
    <div className="border-solid border-2 border-black">
      <div className="w-full grid grid-cols-6  text-center p-4">
        <p className=" font-semibold">Image</p>
        <p className=" font-semibold">Name</p>
        <p className=" font-semibold">Description</p>
        <p className=" font-semibold">Price</p>
      </div>
      <div className="text-2xl w-full ">Drinks</div>
      <div className="w-full   text-center p-4">
        {allDrinks?.map((el) => (
          <div className="grid grid-cols-6 m-4 items-center" key={el.id}>
            <div className="flex justify-center">
              <img src={el.image} alt="" className="w-[50px] h-[50px]  " />
            </div>
            <div>{el.name}</div>
            <div>{el.description}</div>
            <div>{el.price}</div>
            <button
              className="bg-green-300 rounded-full m-4"
              onClick={() => handleClickEditDrink(el.id)}
            >
              Edit
            </button>
            <button
              className="bg-red-300 rounded-full"
              onClick={() => handleDeleteDrink(el.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <div className="text-2xl w-full  ">Avatars</div>
      <div className="w-full   text-center p-4">
        {Avatar?.map((el) => (
          <div className="grid grid-cols-6 m-4 items-center" key={el.id}>
            <div className="flex justify-center">
              <img src={el.image} alt="" className="w-[50px] h-[50px]  " />
            </div>
            <div>{el.name}</div>
            <div>{el.description}</div>
            <div>{el.price}</div>
            <button
              className="bg-green-300 rounded-full m-4"
              onClick={() => handleClickEditAvatar(el.id)}
            >
              Edit
            </button>
            <button
              className="bg-red-300 rounded-full"
              onClick={() => handleDeleteAvatar(el.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <div className="text-2xl w-full ">Hats</div>
      <div className="w-full   text-center p-4">
        {hat?.map((el) => (
          <div className="grid grid-cols-6 m-4 items-center" key={el.id}>
            <div className="flex justify-center">
              <img src={el.image} alt="" className="w-[50px] h-[50px]  " />
            </div>
            <div>{el.name}</div>
            <div>{el.description}</div>
            <div>{el.price}</div>
            <button
              className="bg-green-300 rounded-full m-4"
              onClick={() => handleClickEditHat(el.id)}
            >
              Edit
            </button>
            <button
              className="bg-red-300 rounded-full"
              onClick={() => handleDeleteHat(el.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
