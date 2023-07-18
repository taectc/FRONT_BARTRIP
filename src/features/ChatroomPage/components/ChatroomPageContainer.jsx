import Button from '../../../components/button'
import {
  IiFace,
  IiShopping,
  IiBoy,
  IiBeer,
  IiLogo,
  IiBGDark,
  IiBGcafe,
} from '../../../icons'
import Sponsors from './Sponsors'
import Chatbox from './Chatbox'
import { useContext, useEffect, useState } from 'react'
import CopyToClipboard from './CopyToClipboard'

import { useLocation } from 'react-router-dom'
import socket from '../../../configs/socket'
import { useNavigate } from 'react-router-dom'
import Leave from '../../../layouts/Modals/Leave'
import useAuth from '../../../hooks/useAuth'
import {
  GetFullAvatarByUserId,
  GetFullAvatarByUserOnlineId,
} from '../../../api/post-api'

export default function ChatroomPage() {
  const { user } = useAuth()
  // console.log(user.id)
  const [userAvatar, setUserAvatar] = useState()
  const [userHat, setUserHat] = useState()
  const [userDrink, setUserDrink] = useState()
  const { onlineUserRoom } = useAuth()
  const [onlineAvatar, setOnlineAvatar] = useState()
  const [onlineHat, setOnlineHat] = useState()
  const [onlineDrink, setOnlineDrink] = useState()

  const navigate = useNavigate()
  const location = useLocation()
  const room = location?.state?.room
  const leaveRoom = async () => {
    setOnlineAvatar(null)
    setOnlineDrink(null)
    setOnlineHat(null)
    await socket.emit('leaveRoom', room)
    setTimeout(() => {
      navigate('/')
      window.location.reload()
    }, 1000)
  }

  const handleRefresh = () => {
    window.location.reload()
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const rs = await GetFullAvatarByUserId()
        setUserAvatar(rs.data.user[0].Avatar.image)
        setUserDrink(rs.data.user[0].Drink.image)
        setUserHat(rs.data.user[0].Hat.image)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      // console.log(onlineUserRoom[onlineUserRoom.length - 1])

      const id = onlineUserRoom.filter((el) => +el !== +user.id)[0]

      // console.log(onlineUserRoom.filter((el) => +el !== +user.id))
      const rs = await GetFullAvatarByUserOnlineId({
        id,
      })

      setOnlineAvatar(rs.data.user.Avatar.image)
      setOnlineDrink(rs.data.user.Drink.image)
      setOnlineHat(rs.data.user.Hat.image)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [onlineUserRoom])
  const [bg, setBg] = useState(false)

  return (
    <>
      <div className="flex justify-center lg:px-0 ">
        <div className="max-w-7xl w-full mt-7">
          <div className="flex justify-center mb-3 relative">
            <IiLogo className="w-40" />
          </div>
          <div className="flex max-w-5xl lg:flex-row w-full mx-auto relative">
            <div className="left-4 top-0 flex items-center absolute">
              <CopyToClipboard r={room} />
              {/* <IiFace className="h-5" /> */}
              <input
                className="toggle bg-black"
                type="checkbox"
                onChange={() => setBg((p) => !p)}
              />
              <div className="flex">
                <IiShopping className="w-24" />
              </div>
            </div>

            <div className=" w-full flex flex-col  px-0 sm:px-10 justify-center">
              <div className="relative top-36 ">
                {bg ? (
                  <IiBGDark className="absolute bottom-32" />
                ) : (
                  <IiBGcafe className="absolute bottom-28" />
                )}

                <div className="mb-20">
                  <div className="relative top-[-230px] left-[-100px]">
                    <div>
                      <div className="relative w-24 top-1 mx-auto self-end  ">
                        <img
                          src={userHat}
                          className="absolute top-5 left-5 w-[50px] z-10"
                        />
                        {/* <IiBoy className="w-24" /> */}
                      </div>
                      <div className="relative w-24 top-14 mx-auto self-end  ">
                        <img
                          src={userAvatar}
                          alt={userAvatar?.name || userAvatar?.Avatar?.name}
                          className="absolute top-0 w-[100px] z-[0] "
                        />
                        {/* <IiBoy className="w-24" /> */}
                      </div>
                      <div className="relative w-24 -top-7 right-4 mx-auto self-end  ">
                        <img
                          src={userDrink}
                          alt={userDrink?.name || userDrink?.Drink?.name}
                          className="absolute top-20 w-[40px] "
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative top-[-165px] left-[100px]">
                <div>
                  <div className="relative w-24 top-1 mx-auto self-end  ">
                    <img
                      src={onlineHat}
                      className="absolute top-5 left-5 w-[50px] z-10"
                    />
                    {/* <IiBoy className="w-24" /> */}
                  </div>
                  <div className="relative w-24 top-14 mx-auto self-end  ">
                    <img
                      src={onlineAvatar}
                      alt={onlineAvatar?.name || onlineAvatar?.Avatar?.name}
                      className="absolute top-0 w-[100px] z-[0] "
                    />
                    {/* <IiBoy className="w-24" /> */}
                  </div>
                  <div className="relative w-24 -top-7 right-4 mx-auto self-end  ">
                    <img
                      src={onlineDrink}
                      alt={onlineDrink?.name || onlineDrink?.Drink?.name}
                      className="absolute top-20 w-[40px] "
                    />
                  </div>
                </div>
              </div>
              <div className="hidden lg:block mb-4 mt-8 text-center">
                <br />
                <p className="text-sm">
                  👋หากไม่มีการส่งข้อความนานเกิน 5 นาที
                  อาจโดนผู้เล่นคนอื่นเตะออกได้
                </p>
              </div>
              <br />
              <Leave leaveRoom={leaveRoom} />
            </div>
            <Chatbox />
          </div>
          <div className="flex flex-col items-center mt-3">
            <p className="text-sm mb-1">หากระบบก่งก๊ง กดปุ่ม Sync เล้ย</p>
            <div onClick={() => handleRefresh()} className="w-40">
              <Button text="Sync" />
            </div>
          </div>
        </div>
      </div>
      <Sponsors />
      {/* </div> */}
    </>
  )
}
