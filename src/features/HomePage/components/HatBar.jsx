import React from 'react'

function HatBar({ item, onClick }) {
  return (
    <button onClick={onClick}>
      <img
        src={item.image || item.Hat.image}
        alt={item.name || item.Hat.name}
        className="w-[150px] sm:min-w-[70px] mx-auto lg:w-[400px] h-[52px]"
      />
    </button>
  )
}

export default HatBar
