import React from 'react'
import Random from '../../../layouts/Modals/Random'
// import { Link } from 'react-router-dom'
import { IiBG, IiMessageBox } from '../../../icons'
import { useState } from 'react'
import socket from '../../../configs/socket'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import useAuth from '../../../hooks/useAuth'
import { toast } from 'react-toastify'

function JoinChatContainer() {
  const { user } = useAuth()
  const [onlineUser, setOnlineUser] = useState([])
  const { onlineUserRoom, setOnlineUserRoom } = useAuth()

  const [room, setRoom] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    socket.on('onlinefriends', (data) => {
      const count = Object.keys(data)
      setOnlineUser(count)
    })
    return () => {
      socket.off('onlinefriends')
    }
  }, [])
  const handleChangeRoom = (e) => {
    setRoom(e.target.value)
  }

  const sendRoom = () => {
    if (user) {
      socket.emit('room', room)

      socket.on('roomJoined', (data) => {
        console.log(data)
        setOnlineUserRoom(data.onlineUserRoom)
        if (!room || data.occupants > 2) {
          navigate('/')
        } else if (data.occupants <= 2) {
          navigate('/chat', { state: { room } })
        }
      })
    } else {
      navigate('/login')
      toast.error('Please Login')
    }
  }

  const randRoom = () => {
    if (user) {
      socket.emit('randRoom')
      // socket.on('userJoin', (room) => {
      //   socket.emit('userJoined', room)
      // })

      socket.on('roomJoined', (data) => {
        console.log(data)
        setOnlineUserRoom(data.onlineUserRoom)
        const room = data.room
        if (!room) {
          navigate('/')
          toast.error('No Any Room Empty')
        } else if (data.occupants <= 2) {
          navigate('/chat', { state: { room } })
        }
      })
    } else {
      console.log('login')
      navigate('/login')
      toast.error('Please Login')
    }
  }

  useEffect(() => {
    socket.on('roomFull', (data) => {
      toast.error('room is full')
    })

    return () => {
      socket.off('roomFull')
    }
  }, [room])

  const createRoom = async () => {
    if (user) {
      console.log('user')
      const newRoom = Math.random().toString(36).substring(7)

      socket.emit('room', newRoom)

      socket.on('roomJoined', (data) => {
        console.log(data)
        setOnlineUserRoom(data.onlineUserRoom)
        if (data.occupants > 2 || !newRoom) {
          navigate('/')
        } else {
          navigate('/chat', { state: { room: newRoom } })
        }
      })
    } else {
      navigate('/login')
    }
  }

  return (
    <div className="  mx-auto relative rounded-md">
      <div className="flex justify-center mt-0 lg:mt-4">
        {user && (
          <p className="text-xl">{onlineUser?.length} Users are Online</p>
        )}
      </div>
      <div className=" justify-center mt-0 lg:mt-4">
        {/* <img
            className="-z-1 absolute w-[550px] top-4"
            src="src/assets/iChatBox.svg"
            alt="chatbox"
            /> */}
        <div className="px-8 py-2">
          <p className="mt-3 text-xl px-4 text-center m-4">อยากทำอะไร?</p>
          <IiBG />

          {/* <Button text="แรนด้อมไปคุยกับเพื่อนใหม่" /> */}
          <Random socket={socket} randRoom={randRoom} />
          {/* <Button text="สร้างห้องใหม่คุยกับเพื่อน" /> */}

          <div className="cursor-pointer flex justify-center items-center ">
            <IiMessageBox className="w-[369px]" />
            <div
              className="w-full py-2 px-16 absolute text-lg flex justify-center"
              onClick={createRoom}
            >
              สร้างห้องใหม่คุยกับเพื่อน
            </div>
          </div>

          <div className="flex justify-center">
            <p className="font-semibold">หรือ</p>
          </div>
          <div className="flex mt-5">
            <div className="cursor-pointer flex justify-center items-center w-full py-2 px-4">
              <IiMessageBox className="w-full " />
              <div className="w-full py-6 px-16 absolute flex">
                <input
                  type="text"
                  placeholder="ใส่รหัสโต๊ะ..."
                  className="w-full"
                  onChange={handleChangeRoom}
                />
                <button
                  className=" border-2 border-black w-16 rounded-md"
                  onClick={sendRoom}
                >
                  จอย
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex w-[400px] mx-auto mb-8">
        <div className="text-center text-sm mx-auto">
          <p>*มือถืออาจมีข้อจำกัดทาง Browser แนะนำให้เล่นในคอม</p>
          <p>แจ้งปัญหาหรือตามหาเพื่อนที่หายไปได้ที่</p>
        </div>
      </div>
    </div>
  )
}

export default JoinChatContainer
