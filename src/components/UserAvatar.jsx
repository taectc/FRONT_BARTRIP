import React from 'react'
import { IiBoy } from '../icons'

function UserAvatar({ drink }) {
  return (
    <div>
      <div className="relative w-24 top-14 mx-auto self-end  ">
        <IiBoy className="w-24" />
      </div>
      <div className="relative w-24 -top-8 right-5 mx-auto self-end  ">
        <img
          src={drink.image}
          alt={drink.name}
          className="absolute top-0 w-[40px] "
        />
      </div>
    </div>
  )
}

export default UserAvatar
