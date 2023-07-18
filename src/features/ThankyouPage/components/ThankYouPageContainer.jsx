import { useCallback, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IiThankYou } from '../../../icons'
import { useSearchParams } from 'react-router-dom'
import { PostContext } from '../../../contexts/AdminPostContextProvider'
import * as paymentService from '../../../api/payment-api'
import { useContext } from 'react'

function ThankYouPageContainer() {
  const [search] = useSearchParams()
  const idSession = search.get('session_id')
  const navigate = useNavigate()
  console.log(idSession)
  const [isFirstFetch, setIsFirstFetch] = useState(true)

  //   const dataPayment = async () => {
  //     const res = await agencyService.createPaymentData();
  //     console.log("--------success---------", res);
  //   };
  const listenSuccessSession = useCallback(async () => {
    try {
      if (!isFirstFetch) {
        return
      }
      const res = await paymentService.paymentData(idSession)
      console.log(res)
      console.log(idSession)

      console.log('res callback')
    } catch (error) {
      console.log(error)
    }
  }, [isFirstFetch])

  useEffect(() => {
    if (isFirstFetch && idSession) {
      listenSuccessSession()
      setIsFirstFetch(false)
    }
  }, [isFirstFetch, idSession])

  const onClickBackHomePage = () => {
    navigate('/')
    window.location.reload()
  }
  return (
    <div>
      <div className="flex justify-center items-center">
        <IiThankYou />
      </div>
      <div className="flex justify-center items-center">
        <div>--ขอบคุณสำหรับการสนับสนุนเว็บไซต์ของพวกเรานะครับ--</div>
      </div>
      <br />

      <div className="flex justify-center items-center">
        <Link
          onClick={onClickBackHomePage}
          className="w-40 flex justify-center border-2 border-black rounded-md"
        >
          กลับหน้าหลัก
        </Link>
      </div>
    </div>
  )
}

export default ThankYouPageContainer
