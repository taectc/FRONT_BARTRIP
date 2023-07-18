import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarAdmin from '../features/AdminPage/Components/NavbarAdmin'

function AdminContainer() {
  return (
    <div>
      <div>
        <NavbarAdmin />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default AdminContainer
