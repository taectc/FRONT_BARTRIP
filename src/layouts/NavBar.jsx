import Login from './Modals/Login'
import Boost from './Modals/Boost'
import { Link, useNavigate } from 'react-router-dom'
import DropMusic from './Modals/DropMusic'
import { IiHomeS } from '../icons'
import { IiLogout } from '../icons'
import useAuth from '../hooks/useAuth'
import socket from '../configs/socket'
import { useLocation } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()
  const { user, logout } = useAuth()
  const handleLogout = () => {
    socket.emit('leaveRoom', room)
    logout()
    setTimeout(() => {
      navigate('/')
      window.location.reload()
    }, 1000)
  }
  const location = useLocation()
  const room = location?.state?.room

  const handleDisconnect = () => {
    socket.emit('leaveRoom', room)
    setTimeout(() => {
      navigate('/')
      window.location.reload()
    }, 1000)
  }
  return (
    <>
      <button>
        <Link onClick={handleDisconnect}>
          <IiHomeS className="w-12 fixed top-5 left-5" />
        </Link>
      </button>
      <div className="flex fixed top-5 right-2 z-50 cursor-pointer ">
        <Boost />
        <DropMusic />
        {user ? (
          <div className="w-20" onClick={handleLogout}>
            <IiLogout />
          </div>
        ) : (
          <Login />
        )}
      </div>
    </>
  )
}
