import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import LoginPage from '../Pages/Login'
import RegisterPage from '../Pages/Register'
import HomePage from '../Pages/HomePage'
import ChatroomPage from '../Pages/ChatroomPage'
import BoostPage from '../Pages/BoostPage'
import AdminPage from '../Pages/AdminPage'
import ShopPage from '../Pages/ShopPage'
import PaymentPage from '../Pages/PaymentPage'

import AdminContainer from '../layouts/AdminContainer'
import Layout from '../layouts/Container'
import ThankYouPage from '../Pages/ThankyouPage'
import AdminAllProduct from '../features/AdminPage/Components/AdminAllProduct'
import AdminEditProduct from '../features/AdminPage/Components/AdminEditProduct'
import ProtectedRouteAdmin from '../features/AdminPage/Components/ProtectedRouteAdmin'

const router = createBrowserRouter([
  {
    path: '/login',

    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/admin',
    element: (
      // <ProtectedRouteAdmin>
      <AdminContainer />
      // </ProtectedRouteAdmin>
    ),
    children: [
      {
        path: '/admin',
        element: <AdminAllProduct />,
      },
      {
        path: '/admin/editdrink/:productId',
        element: <AdminEditProduct />,
      },
      {
        path: '/admin/editavatar/:productId',
        element: <AdminEditProduct />,
      },
      {
        path: '/admin/edithat/:productId',
        element: <AdminEditProduct />,
      },
    ],
  },
  {
    path: '/adminproduct',
    element: <AdminPage />,
  },

  {
    path: '/',
    element: <Layout />,

    children: [
      { path: '/', element: <HomePage /> },
      { path: '/chat', element: <ChatroomPage /> },
      { path: '/chat/:id', element: <ChatroomPage /> },
      { path: '/Boost', element: <BoostPage /> },
      { path: '/shop', element: <ShopPage /> },
      { path: '/payment', element: <PaymentPage /> },
    ],
  },

  {
    path: '/thank',
    element: <ThankYouPage />,
  },
])

export default function Router() {
  return <RouterProvider router={router} />
}
