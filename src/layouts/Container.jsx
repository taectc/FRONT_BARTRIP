import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './NavBar'

export default function Layout() {
  return (
    <div className="relative">
      <div className="fixed top-0 z-50">
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
      <div className="bottom-0 z-50">
        <Footer />
      </div>
    </div>
  )
}
