import React from 'react'
import { Link } from 'react-router-dom'

function NavbarAdmin() {
  return (
    <div className="navbar bg-base-100 ">
      <div className="flex-none">
        <button className="btn  btn-ghost">Dashboard</button>
      </div>
      <div className="flex-none">
        <Link to="/adminproduct">
          <button className="btn  btn-ghost">add Product</button>
        </Link>
      </div>
    </div>
  )
}

export default NavbarAdmin
