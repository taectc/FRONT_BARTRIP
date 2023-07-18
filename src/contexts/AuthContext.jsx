import { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getMe } from '../api/auth-api'
import { getAccessToken, removeAccessToken } from '../utils/localStorage'

const AuthContext = createContext()

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null)
  const [onlineUserRoom, setOnlineUserRoom] = useState([])

  const [isLoading, setLoading] = useState(false)
  const [reload, setReload] = useState(false)
  useEffect(() => {
    let token = getAccessToken()

    if (token) {
      getMe(token).then((rs) => {
        setUser(rs.data.user)
      })
    }
  }, [])
  const logout = () => {
    removeAccessToken()
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        logout,
        onlineUserRoom,
        setOnlineUserRoom,
        isLoading,
        setLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext }
export default AuthContextProvider
