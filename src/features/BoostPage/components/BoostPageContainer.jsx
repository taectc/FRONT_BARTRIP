import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  IiBartender,
  IiChatBoxNew,
  IiDonate100,
  IiDonate30,
  IiDonate300,
  IiDonate60,
  IiLogo,
  IiTick,
} from '../../../icons'
import * as paymentService from '../../../api/payment-api'

function BoostPageContainer() {
  const navigate = useNavigate()
  // const handleClickBuyBoost = (id) => {
  //   handleClickPayment(id)
  //   // navigate('/payment')
  // }

  const handleClickPayment = async (input) => {
    console.log(input)
    const response = await paymentService.payment({ apiId: input })
    console.log(response)
    window.location.replace(response.data.url)
  }
  return (
    <>
      <div className="max-w-5xl flex flex-col justify-center mx-auto">
        <div className="flex justify-center">
          <div className="w-44 flex">
            <IiLogo />
          </div>
          <div>
            <div className="py-2 relative w-[80%]">
              <IiChatBoxNew className="relative w-full " />
              <div className="absolute z-20 top-6 px-10 py-2">
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

                <div className="flex mt-5 mr-2 items-center"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col mx-auto">
          <h1 className="text-xl">Donate</h1>
          <div className="flex flex-col lg:flex-row justify-evenly">
            <button onClick={(e) => handleClickPayment(e.target.id)}>
              {' '}
              <IiDonate30 className="w-[360px]" />
            </button>
            <button onClick={(e) => handleClickPayment(e.target.id)}>
              {' '}
              <IiDonate60 className="w-[360px]" />
            </button>
            <button onClick={(e) => handleClickPayment(e.target.id)}>
              {' '}
              <IiDonate100 className="w-[360px]" />
            </button>
            <button onClick={(e) => handleClickPayment(e.target.id)}>
              {' '}
              <IiDonate300 className="w-[360px]" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default BoostPageContainer
