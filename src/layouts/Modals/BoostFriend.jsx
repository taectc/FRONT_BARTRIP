import React from 'react'
import { IiBoost, IiBoy } from '../../icons'
import ModalsReuse from './ModalsReuse'

function BoostFriend() {
  const handleClick = () => {}
  return (
    <div className="w-20" onClick={handleClick}>
      <ModalsReuse
        title={<IiBoost />}
        header={'ยินดีด้วย! มียูสเซอร์บูสอยู่ในห้องนี้'}
      >
        <IiBoy className="mx-auto" />

        <p className="py-4">
          เค้ามีพลังลดการดีเลย์ในการส่งข้อความ ทำให้แชทกันได้เร็วขึ้น แถมเพื่อนๆ
          ในห้องได้ผลพลอยได้ไปด้วย
        </p>
      </ModalsReuse>
    </div>
  )
}

export default BoostFriend
