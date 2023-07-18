import React, { useEffect } from 'react'
import ModalsGoogleLogin from './ModalsGoogleLogin'
import { useNavigate } from 'react-router-dom'
import { IiGoogle, IiLogin, IiRegister, IiTick } from '../../icons'
import useGoogle from '../../hooks/useGoogle'
import { GoogleLogin } from 'react-google-login'
import { GOOGLE_CLIENT_ID } from '../../configs/env'
import { gapi } from 'gapi-script'

function Login() {
  const { glogin } = useGoogle()

  const handleCallbackResponse = (response) => {
    console.log(response.tokenId)
    glogin(response.tokenId)
  }

  useEffect(() => {
    const initializeGoogleAPI = () => {
      gapi.load('client:auth2', () => {
        gapi.client.init({
          clientId: GOOGLE_CLIENT_ID,
          scope: '',
        })
      })
    }

    initializeGoogleAPI()
  }, [])

  const navigate = useNavigate()

  const handleClickLogin = () => {
    navigate('/login')
  }

  const handleClickRegister = () => {
    navigate('/register')
  }

  const renderCustomGoogleButton = ({ onClick }) => (
    <IiGoogle className="w-20" onClick={onClick} />
  )

  return (
    <div className="w-28">
      <ModalsGoogleLogin
        title={<IiLogin />}
        header={'ล็อคอินกัน!!'}
        id={'signin'}
      >
        <div className="flex">
          <IiTick className="w-10" />
          <p className="py-4">ได้เครื่องดื่มฟรี คนละแก้ว</p>
        </div>
        <div className="flex">
          <IiTick className="w-10" />
          <p className="py-4">ไม่หลุดออกจากห้องเวลารีเฟรช</p>
        </div>
        <hr />
        <div className="flex flex-col items-center mt-2">
          <GoogleLogin
            icon="eiei"
            clientId={GOOGLE_CLIENT_ID}
            buttonText="login"
            cookiePolicy="single_host_origin"
            onSuccess={handleCallbackResponse}
            render={renderCustomGoogleButton}
          />
        </div>
        <div
          className="flex flex-col items-center mt-2"
          onClick={handleClickLogin}
        >
          <IiLogin className="w-20" />
          <p>LOG IN</p>
        </div>
        <div
          className="flex flex-col items-center mt-2"
          onClick={handleClickRegister}
        >
          <IiRegister className="w-20" />
          <p>REGISTER</p>
        </div>
      </ModalsGoogleLogin>
    </div>
  )
}

export default Login
