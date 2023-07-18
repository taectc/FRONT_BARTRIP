import React from 'react'
import { Ii5headN } from '../icons'

function Loading() {
  return (
    <div className="fixed w-screen h-screen top-0 left-0 bg-[rgba(0,0,0,0.6)] backdrop-blur-[2px] flex justify-center items-center z-50">
      <Ii5headN className="loading loading-ring bg-white w-36" />
    </div>
  )
}

export default Loading
