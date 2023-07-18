import { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import { getAvatarApi, getAvatarByUserId } from '../api/post-api'

const AvatarContext = createContext()

function AvatarContextComponent({ children }) {
  const [Avatar, setAvatar] = useState([])
  const [userAvatar, setUserAvatar] = useState([])
  const [AvatarsOfUser, setAvatarsOfUser] = useState([])

  const getAvatars = async () => {
    const res = await getAvatarApi()
    setAvatar(res.data)
  }

  const getAvatarsByUserId = async () => {
    const res = await getAvatarByUserId()
    setAvatarsOfUser(res.data.avatars)
  }
  useEffect(() => {
    getAvatars()
    getAvatarsByUserId()
  }, [])

  return (
    <AvatarContext.Provider
      value={{ Avatar, setAvatar, userAvatar, setUserAvatar, AvatarsOfUser }}
    >
      {children}
    </AvatarContext.Provider>
  )
}
export { AvatarContext }
export default AvatarContextComponent
