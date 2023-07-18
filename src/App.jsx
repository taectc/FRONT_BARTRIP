import Router from './route/Router'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import useAuth from './hooks/useAuth'
import socket from './configs/socket'
import { useEffect } from 'react'

function App() {
  const { user } = useAuth()

  const id = user?.id
  useEffect(() => {
    if (!socket.connected && id) {
      socket.auth = { id }
      socket.connect()
    }
  }, [id, socket])
  return (
    <div>
      <Router />
      <ToastContainer position="bottom-center" theme="dark" autoClose={4000} />
    </div>
  )
}

export default App
