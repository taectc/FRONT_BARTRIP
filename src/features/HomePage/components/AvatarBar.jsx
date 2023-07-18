import React from 'react'

function AvatarBar({ item, onClick }) {
  return (
    <button onClick={onClick}>
      <img
        src={item.image || item.Avatar.image}
        alt={item.name || item.Avatar.name}
        className="w-[150px] sm:min-w-[70px] mx-auto lg:w-[400px] h-[52px]"
      />
    </button>
  )
}

export default AvatarBar
