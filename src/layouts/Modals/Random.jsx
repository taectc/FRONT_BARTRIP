import React from 'react'
import ModalsReuse from './ModalsReuse'
import { useNavigate } from 'react-router-dom'
import { IiMessageBox, IiRandom2, IiRandom5 } from '../../icons'

function Random({ randRoom }) {
  return (
    // <ModalsReuse
    //   title={
    <div className="relative cursor-pointer flex justify-center items-center w-full py-2 px-4 ">
      <IiMessageBox className=" w-full h-full " />
      <div className="w-full py-6 px-16 absolute " onClick={randRoom}>
        <p className="text-lg whitespace-nowrap flex justify-center">
          แรนด้อมไปคุยกับเพื่อนใหม่
        </p>
      </div>
    </div>
  )
  // }
  // header={'อยากเลือกคุยกับเพื่อนแบบไหนดี'}
  // >
  {
    /* <div className="flex justify-center space-x-4 ">
        <div className="flex flex-col items-center mt-2" onClick={handleClick}>
          <IiRandom2 className="w-56" />
          <p>เลือกสองต่อสอง</p>
        </div>
        <div className="flex flex-col items-center mt-2 " onClick={handleClick}>
          <IiRandom5 className="w-56" />
          <p>เลือกเปิดตี้หมู่</p>
        </div>
      </div> */
  }
  // <br />
  ;<div className="flex justify-end">
    <button className=" border-2 border-black w-16 rounded-md">จอย</button>
  </div>
  // </ModalsReuse>
}

export default Random
