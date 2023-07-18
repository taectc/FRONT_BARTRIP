import React from 'react'
import { Navigate } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'

function ProtectedRouteAdmin({ children }) {
  const { user } = useAuth()
  const Admin = user?.isAdmin

  if (user) {
    if (Admin) return <>{children}</>
    else {
      return <Navigate to="/" />
    }
  }
  return <></>
}

export default ProtectedRouteAdmin
