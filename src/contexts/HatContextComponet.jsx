import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'
import { getHatApi, getHatByUserId } from '../api/post-api'
import { useEffect } from 'react'

const HatContext = createContext()

function HatContextComponet({ children }) {
  const [hat, setHat] = useState([])
  const [userHat, setUserHat] = useState([])
  const [hatsOfUser, setHatsOfUser] = useState([])

  const getHats = async () => {
    const res = await getHatApi()
    setHat(res.data)
  }

  const getHatsByUserId = async () => {
    const res = await getHatByUserId()

    setHatsOfUser(res.data.hats)
  }

  useEffect(() => {
    getHats()
    getHatsByUserId()
  }, [])
  return (
    <HatContext.Provider
      value={{ hat, setHat, userHat, setUserHat, hatsOfUser }}
    >
      {children}
    </HatContext.Provider>
  )
}

export { HatContext }
export default HatContextComponet
