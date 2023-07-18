import { useState, useEffect, useContext } from 'react'
// import BuyCard from '../../../components/buyCard'
import * as productService from '../../../api/post-api'

// import { useContext } from 'react'
import { AuthContext } from '../../../contexts/AuthContext'
import * as paymentService from '../../../api/payment-api'
import { IiBuyitem, IiBought } from '../../../icons'

function ShopPageContainer() {
  const { user } = useContext(AuthContext)
  const [drink, setDrink] = useState([])
  const [hat, setHat] = useState([])
  const [avatar, setAvatar] = useState([])

  const handleClickPayment = async (input) => {
    console.log(input)
    const response = await paymentService.payment(input)
    window.location.replace(response.data.url)
  }

  const hdlBuyDrink = async (idx) => {
    try {
      paymentService.createOrder({ drinkId: drink[idx].id })
      // await productService.addDrinkByUserId({ drinkId: drink[idx].id, status: "Paid" })
      handleClickPayment({ apiId: drink[idx].apiId, drinkId: drink[idx].id })

      // const rs = await productService.getDrinkApi()
      // setDrink(rs.data)
    } catch (err) {
      console.log(err)
    }
  }
  const hdlBuyHat = async (idx) => {
    try {
      paymentService.createOrder({ hatId: hat[idx].id })
      // await productService.addDrinkByUserId({ drinkId: drink[idx].id, status: "Paid" })
      handleClickPayment({ apiId: hat[idx].apiId, hatId: hat[idx].id })

      // const rs = await productService.getDrinkApi()
      // setDrink(rs.data)
    } catch (err) {
      console.log(err)
    }
  }
  const hdlBuyAvatar = async (idx) => {
    try {
      paymentService.createOrder({ avatarId: avatar[idx].id })
      // await productService.addDrinkByUserId({ drinkId: drink[idx].id, status: "Paid" })
      handleClickPayment({ apiId: avatar[idx].apiId, avatarId: avatar[idx].id })

      // const rs = await productService.getDrinkApi()
      // setDrink(rs.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    productService.getDrinkApi().then((rs) => {
      setDrink(rs.data)
    })
    productService.getHatApi().then((rs) => {
      setHat(rs.data)
    })
    productService.getAvatarApi().then((rs) => {
      setAvatar(rs.data)
    })
  }, [])

  return (
    <>
      <div className="h-full flex flex-col justify-center items-center">
        <div className="flex flex-wrap  bg-yellow-300 justify-center w-full mt-20">
          <h1 className="w-full m-4 font-semibold text-2xl">Drinks</h1>
          {drink?.map((el, idx) => (
            <>
              <div className="flex flex-col justify-center items-center relative w-40 gap-4">
                <img src="src/assets/iBoxbuy.svg" alt="Buybox" />
                <div className="w-30 py-2 px-10 absolute top-5">
                  {/* <IiMilktea /> */}
                  <img src={el.image} className="w-[60px]" />
                </div>
                <div>{el.name}</div>
                <div>{el.description}</div>
                <div>ราคา {el.price} บาท</div>
                {el.UserDrinks.find((omg) => omg.userId == user?.id) ? (
                  <IiBought className="w-20" />
                ) : (
                  <button
                    className="w-20 cursor-pointer"
                    onClick={(e) => {
                      hdlBuyDrink(idx, e.target.id)
                      console.log(e.target.id)
                    }}
                  >
                    <IiBuyitem id={el.apiId} />
                  </button>
                )}
              </div>
            </>
          ))}
        </div>

        <div className="flex flex-wrap  bg-yellow-300 justify-center w-full mt-20">
          <h1 className="w-full m-4 font-semibold text-2xl">Drinks</h1>
          {hat?.map((el, idx) => (
            <>
              <div className="flex flex-col justify-center items-center relative w-40 gap-4">
                <img src="src/assets/iBoxbuy.svg" alt="Buybox" />
                <div className="w-30 py-2 px-10 absolute top-5">
                  {/* <IiMilktea /> */}
                  <img src={el.image} className="w-[60px]" />
                </div>
                <div>{el.name}</div>
                <div>{el.description}</div>
                <div>ราคา {el.price} บาท</div>
                {el.UserHats.find((omg) => omg.userId == user?.id) ? (
                  <IiBought className="w-20" />
                ) : (
                  <button
                    className="w-20 cursor-pointer"
                    onClick={(e) => {
                      hdlBuyHat(idx, e.target.id)
                      console.log(e.target.id)
                    }}
                  >
                    <IiBuyitem id={el.apiId} />
                  </button>
                )}
              </div>
            </>
          ))}
        </div>

        <div className="flex flex-wrap  bg-yellow-300 justify-center w-full mt-20">
          <h1 className="w-full m-4 font-semibold text-2xl">Drinks</h1>
          {avatar?.map((el, idx) => (
            <>
              <div className="flex flex-col justify-center items-center relative w-40 gap-4">
                <img src="src/assets/iBoxbuy.svg" alt="Buybox" />
                <div className="w-30 py-2 px-10 absolute top-5">
                  {/* <IiMilktea /> */}
                  <img src={el.image} className="w-[60px]" />
                </div>
                <div>{el.name}</div>
                <div>{el.description}</div>
                <div>ราคา {el.price} บาท</div>
                {el.UserAvatars.find((omg) => omg.userId == user?.id) ? (
                  <IiBought className="w-20" />
                ) : (
                  <button
                    className="w-20 cursor-pointer"
                    onClick={(e) => {
                      hdlBuyAvatar(idx, e.target.id)
                      console.log(e.target.id)
                    }}
                  >
                    <IiBuyitem id={el.apiId} />
                  </button>
                )}
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  )
}

export default ShopPageContainer
