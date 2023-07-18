import React from 'react'
import { Link } from 'react-router-dom'
import {
  IiBtnNew,
  IiChatBoxNew,
  IiMessageBox,
  IiTee,
  IiX,
} from '../../../icons'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { register } from '../../../api/auth-api'
import validateRegister from './validate/validate-registor'
import useAuth from '../../../hooks/useAuth'
import Loading from '../../../components/Loading'

const registerInput = {
  nickname: '',
  email: '',
  password: '',
  confirmPassword: '',
}

function RegisterPageContainer() {
  const [input, setInput] = useState(registerInput)
  const [error, setError] = useState('')
  const { isLoading, setLoading } = useAuth()

  const hdlChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const hdlSubmit = async (e) => {
    try {
      e.preventDefault()
      setLoading(true)
      const result = validateRegister(input)
      if (result) {
        return setError(result)
      }
      setError({})
      await register(input)
      toast.success('register successfully')
    } catch (err) {
      toast.error(err.response.data.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      {isLoading ? <Loading /> : <></>}
      <IiChatBoxNew className="relative mx-auto w-[328px]" />
      <form
        className="w-[20vw] mx-auto flex flex-col justify-center items-center py-8 absolute"
        onSubmit={hdlSubmit}
      >
        <Link to="/">
          <IiX className="absolute top-4 right-4 w-8 cursor-pointer" />
        </Link>
        <IiTee className="w-16" />
        <div>
          <div className="cursor-pointer flex justify-center items-center w-full py-2 px-4 relative">
            <IiMessageBox className="w-full" />
            <div className="w-full py-4 px-6 absolute flex">
              <input
                type="text"
                placeholder="Nickname"
                className="w-full"
                value={input.nickname}
                name="nickname"
                onChange={hdlChangeInput}
              />
            </div>
          </div>
          {error.nickname && <p className="text-red-500">{error.nickname}</p>}
          <div className="cursor-pointer flex justify-center items-center w-full py-2 px-4 relative">
            <IiMessageBox className="w-full" />
            <div className="w-full py-6 px-6 absolute flex">
              <input
                type="email"
                placeholder="email"
                className="w-full"
                value={input.email}
                name="email"
                onChange={hdlChangeInput}
              />
            </div>
          </div>
          {error.email && <p className="text-red-500">{error.email}</p>}
          <div className="cursor-pointer flex justify-center items-center w-full py-2 px-4 relative">
            <IiMessageBox className="w-full" />
            <div className="w-full py-6 px-6 absolute flex">
              <input
                type="password"
                placeholder="password"
                className="w-full"
                value={input.password}
                name="password"
                onChange={hdlChangeInput}
              />
            </div>
          </div>
          {error.password && <p className="text-red-500">{error.password}</p>}
          <div className="cursor-pointer flex justify-center items-center w-full py-2 px-4 relative">
            <IiMessageBox className="w-full" />
            <div className="w-full py-6 px-6 absolute flex">
              <input
                type="password"
                placeholder="confirm password"
                className="w-full"
                value={input.confirmPassword}
                name="confirmPassword"
                onChange={hdlChangeInput}
              />
            </div>
          </div>
          {error.confirmPassword && (
            <p className="text-red-500">{error.confirmPassword}</p>
          )}
        </div>
        <button
          className="cursor-pointer flex justify-center items-center w-32 py-2 px-4 relative"
          type="submit"
        >
          <IiBtnNew />
          <span className="absolute top-3 z-10">register</span>
        </button>
      </form>
    </div>
  )
}

export default RegisterPageContainer
