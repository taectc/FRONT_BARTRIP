import React from 'react'
import { IiChatBox, IiHelp, IiMessageBox, IiReport } from '../../../icons'
import socket from '../../../configs/socket'
import useAuth from '../../../hooks/useAuth'
import { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

function Chatbox() {
  const { user } = useAuth()
  const location = useLocation()
  const room = location.state?.room
  const [message, setMessage] = useState('')
  const [messageList, setMessageList] = useState([])

  const chatElement = useRef()
  useEffect(() => {
    // chatElement.current?.lastChild?.scrollIntoView()
  }, [messageList])
  useEffect(() => {
    socket.on('messageReturn', (data) => {
      setMessageList((prev) => [...prev, data])
      chatElement.current?.scrollTo({
        top: chatElement.current.scrollHeight + 300,
      })
    })

    return () => {
      socket.off('messageReturn')
      socket.off('occupantLeft')
    }
  }, [])

  const sendMessage = async (e) => {
    e.preventDefault()
    if (message) {
      const now = new Date()
      const messageContent = {
        id: user.id,
        nickname: user.nickname,
        message: message,
        room: room,
        date: now.getHours() + ':' + now.getMinutes(),
      }

      await socket.emit('message', messageContent)
      setMessageList((prev) => [...prev, messageContent])
      chatElement.current?.scrollTo({
        top: chatElement.current.scrollHeight + 300,
      })
      console.log(chatElement.current)
      // chatElement.current.scrollTop = chatElement.current?.scrollHeight
      // chatElement.current.scroll({
      //   top: chatElement.current.scrollHeight
      //   , behavior: "smooth"
      // })
      setMessage('')
    }
  }

  return (
    <div className="mx-auto relative">
      <div className="flex justify-between items-center mx-6 mt-0">
        <div className="flex justify-center my-1"></div>
        <div className="flex items-center">
          <IiReport className="h-9 mr-2" />
          <button className="mr-2">
            <IiHelp className="h-9" />
          </button>
        </div>
      </div>

      <div className="py-2 relative">
        <IiChatBox className="relative w-full " />
        <div className="absolute z-20 top-6 px-10 py-2">
          <div className=" h-[428px] mt-5 ">
            <div
              ref={chatElement}
              className="overflow-y-scroll h-[470px]  hidscroll pb-20"
            >
              <div className="my-1 px-2">
                <p className="text-sm border rounded-lg shadow-sm bg-gray-200">
                  "🤟 เพื่อความปลอดภัยในการใช้งาน
                  เราขอแนะนำให้งดส่งข้อมูลส่วนตัวให้กับคนแปลกหน้า
                  ทางเว็บขอสงวนสิทธิ์ในการรับผิดชอบใด ๆ
                  อันเกิดจากการเปิดเผยข้อมูลส่วนตัว"
                </p>
              </div>
              <div className="my-1 px-2">
                <p className="text-sm border rounded-lg shadow-sm bg-gray-200">
                  "👻 หากพบตัวละครที่กลายเป็นผี
                  จะหมายถึงยูสเซอร์ที่ไม่แอคทีฟแล้ว สามารถกดปุ่มไล่ผีได้เลย !"
                </p>
              </div>
              {messageList.map((message, index) =>
                message.id === user.id ? (
                  <div
                    key={index}
                    className=" my-1 px-2 flex flex-col items-end justify-end gap-1"
                  >
                    <p className="bg-red-200 text-sm border rounded-lg shadow-sm ">
                      {message.message}
                    </p>
                    <div className="flex gap-2 ">
                      <p>{message.nickname}</p>
                      <p>{message.date}</p>
                    </div>
                  </div>
                ) : (
                  <div
                    key={index}
                    className="my-1 px-2 flex flex-col items-start justify-start gap-1"
                  >
                    <p className="bg-green-200 text-sm border rounded-lg shadow-sm ">
                      {message.message}
                    </p>
                    <div className="flex gap-2 ">
                      <p>{message.nickname}</p>
                      <p>{message.date}</p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* <div className="h-4 mt-2 px-2">is texting</div> */}
          <div className="flex mt-5 mr-2 items-center">
            <div className="cursor-pointer flex justify-center items-center w-full py-2 px-2">
              <IiMessageBox className="w-full " />
              <form
                className="w-full py-6 px-16 absolute  flex"
                onSubmit={(e) => sendMessage(e)}
              >
                <input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full"
                  type="text"
                  placeholder="คุยเลย..."
                />
                <button className=" border-2 border-black w-16 rounded-md">
                  ส่ง
                </button>
              </form>
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

export default Chatbox
