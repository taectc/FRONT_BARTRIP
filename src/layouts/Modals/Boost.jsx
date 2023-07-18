import React from 'react'
import ModalsReuse from './ModalsReuse'
import Button from '../../components/button'
import { useNavigate } from 'react-router-dom'
import { IiBartender, IiBoostS, IiTick } from '../../icons'

function Boost() {
  const navigate = useNavigate()
  const handleClickBoost = () => {
    navigate('/boost')
  }
  return (
    <div className="w-16 ">
      <ModalsReuse title={<IiBoostS />} header={'BarTrip Boost'}>
        <br />

        <div className="w-40 mx-auto">
          <IiBartender />
        </div>

        <br />
        <div className="flex flex-col px-9">
          <div className="flex">
            <IiTick className="w-10" />
            <div>สนับสนุนให้เราเพิ่มเครื่องดื่มมากขึ้น</div>
          </div>
          <div className="flex">
            <IiTick className="w-10" />

            <div>สนับสนุนให้เราเพิ่มหมวกมากขึ้น</div>
          </div>
          <div className="flex">
            <IiTick className="w-10" />
            <div>สนับสนุนให้เราเพิ่มอวตารมากขึ้น</div>
          </div>

          <div className="flex items-start">
            <IiTick className="w-10" />

            <div>สนับสนุนทีมงาน BARTRIP</div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div onClick={handleClickBoost}>
          <Button text="ไปหน้าซื้อบูส" />
        </div>
      </ModalsReuse>
    </div>
  )
}

export default Boost
