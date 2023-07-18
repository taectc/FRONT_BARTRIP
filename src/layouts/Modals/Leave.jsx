import React, { useState } from 'react'
import { IiCorrect, IiNo } from '../../icons'
import ModalsReuse from './ModalsReuse'

function Leave({ leaveRoom }) {
  const [show, setShow] = useState(true)

  const handleCloseModal = () => {
    setShow(false)
    window.location.reload()
  }

  return (
    show && (
      <ModalsReuse
        title={'ออกจากโต๊ะ?'}
        header={'แน่ใจนะว่าจะออกจากห้อง เปลี่ยนใจไหม'}
        className="cursor-pointer mt-8"
      >
        <div className="w-40 mx-auto"></div>
        <div className="flex">
          <div className="w-20 mx-auto cursor-pointer">
            <IiCorrect onClick={() => leaveRoom()} />
          </div>
          <div className="w-20 mx-auto cursor-pointer">
            <IiNo onClick={handleCloseModal} />
          </div>
        </div>
      </ModalsReuse>
    )
  )
}

export default Leave
