import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { DrinkContext } from '../../../contexts/DrinkContextComponent'
import useAuth from '../../../hooks/useAuth'
import { IiBoy, IiEdit, IiLogo, IiShopping } from '../../../icons'
import JoinChatContainer from '../../ChatroomPage/components/JoinChatContainer'
import DrinkBar from './DrinkBar'
import { useEffect } from 'react'
import { editNameByUserId } from '../../../api/auth-api'
import { HatContext } from '../../../contexts/HatContextComponet'
import { AvatarContext } from '../../../contexts/AvatarContextComponents'
import HatBar from './HatBar'
import AvatarBar from './AvatarBar'
import {
  UpdateAvatarByUserId,
  GetFullAvatarByUserId,
} from '../../../api/post-api'

export default function Home() {
  const { user } = useAuth()

  const { userDrink, setUserDrink, defalutDrinks, drinksOfUser } =
    useContext(DrinkContext)

  console.log(drinksOfUser)
  const { userHat, setUserHat, hatsOfUser } = useContext(HatContext)
  const { userAvatar, setUserAvatar, AvatarsOfUser } = useContext(AvatarContext)
  const [edit, setEdit] = useState(false)
  const [editName, setEditName] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rs = await GetFullAvatarByUserId()
        setUserAvatar(rs.data.user[0].Avatar)
        setUserDrink(rs.data.user[0].Drink)
        setUserHat(rs.data.user[0].Hat)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  console.log(userDrink)

  useEffect(() => {
    setEditName(user?.nickname || '')
  }, [user])

  function ChooseDrink(item) {
    setUserDrink(item)
  }

  function ChooseHat(item) {
    setUserHat(item)
  }

  function ChooseAvatar(item) {
    setUserAvatar(item)
  }

  const handleEditName = async (e) => {
    try {
      e.preventDefault()
      await editNameByUserId(user.id, editName)
      console.log('Nickname updated successfully')
    } catch (error) {
      console.log('Error updating nickname:', error)
    } finally {
      e.target.firstChild.blur()
    }
  }

  const input = {
    drinkId: userDrink?.Drink?.id,
    hatId: userHat?.Hat?.id,
    avatarId: userAvatar?.Avatar?.id,
  }
  const handleSaveAvatar = async () => {
    UpdateAvatarByUserId(input)
  }
  return (
    <>
      <div className="flex justify-center items-center py-14 lg:py-0 px-0 mb-6">
        <div className="max-w-7xl w-full mt-7  mx-auto">
          <div className="flex justify-center mb-3 relative">
            <IiLogo className="w-40 " />
          </div>
          {user ? (
            <div className="flex max-w-5xl flex-col   lg:flex-row w-full mx-auto">
              <div className=" w-full flex flex-col mt-6 px-0 sm:px-10 relative mb-4">
                <div className="max-w-[450px] mx-auto">
                  <div className="flex w-full justify-center  item-center">
                    <p className="text-3xl mr-2 ">สวัสดี...</p>
                    <form onSubmit={(e) => handleEditName(e)} className="flex">
                      <input
                        id="editName"
                        onFocus={() => setEdit(true)}
                        onBlur={() => setEdit(false)}
                        defaultValue={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        type="text"
                        placeholder="บอกชื่อเราหน่อยนะ"
                        maxLength="20"
                        autoComplete="off"
                        className="bg-transparent max-w-[270px] h-full text-3xl focus:ring-transparent ring-offset-transparent border-hidden   "
                      />
                      {edit ? (
                        <button type="submit">
                          <IiEdit className="w-[38px] h-[38px] mx-1" />
                        </button>
                      ) : (
                        <label htmlFor="editName">
                          <IiEdit className="w-[38px] h-[38px] mx-1" />
                        </label>
                      )}
                    </form>
                  </div>
                  {!user ||
                  (drinksOfUser.length === 0 &&
                    hatsOfUser.length === 0 &&
                    AvatarsOfUser.length === 0) ? (
                    <></>
                  ) : (
                    <div className="rounded-2xl shadow-lg py-4 px-6 text-center mt-6">
                      <p className="text-xl">เลือกเครื่องดื่มของคุณ</p>
                      <div className="flex  w-full overflow-x-scroll">
                        {Array.isArray(drinksOfUser) &&
                          drinksOfUser?.map((el, idx) => (
                            <DrinkBar
                              key={idx}
                              item={el}
                              onClick={() => ChooseDrink(el)}
                            />
                          ))}
                      </div>
                      <div className="flex  w-full overflow-x-scroll">
                        <div className="rounded-2xl shadow-lg py-4 px-6 text-center mt-6">
                          <p className="text-xl">เลือกหมวกของคุณ</p>
                          <div className="flex">
                            {hatsOfUser?.map((el, idx) => (
                              <HatBar
                                key={idx}
                                item={el}
                                onClick={() => ChooseHat(el)}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex  w-full overflow-x-scroll">
                        <div className="rounded-2xl shadow-lg py-4 px-6 text-center mt-6">
                          <p className="text-xl">เลือกอวตารของคุณ</p>
                          <div className="flex">
                            {AvatarsOfUser?.map((el, idx) => (
                              <AvatarBar
                                key={idx}
                                item={el}
                                onClick={() => ChooseAvatar(el)}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="px-3 py-3">
                    <p className="text-xl underline">
                      {userDrink?.Drink?.name ||
                        userAvatar?.Avatar?.name ||
                        userHat?.Hat?.name}
                    </p>
                    <p className="mt-2">
                      {userDrink?.Drink?.description ||
                        userHat?.Hat?.description ||
                        userAvatar?.Avatar?.description}
                    </p>
                  </div>
                </div>

                <div className="relative">
                  {!user ||
                  (drinksOfUser.length === 0 &&
                    hatsOfUser.length === 0 &&
                    AvatarsOfUser.length === 0) ? (
                    <></>
                  ) : (
                    <button
                      className="bg-green-300 rounded-full p-2"
                      onClick={handleSaveAvatar}
                    >
                      บันทึก Avatar
                    </button>
                  )}
                  {!user ||
                  (drinksOfUser.length === 0 &&
                    hatsOfUser.length === 0 &&
                    AvatarsOfUser.length === 0) ? (
                    <>
                      {' '}
                      <img
                        src="https://drinksonme.live/counter-page/counter.png"
                        alt="counter"
                        className="relative top-36 "
                      />{' '}
                      <IiBoy className="w-24 mt-14 mx-auto" />
                    </>
                  ) : (
                    <>
                      <img
                        src="https://drinksonme.live/counter-page/counter.png"
                        alt="counter"
                        className="relative top-36 "
                      />
                      <div>
                        <div className="relative w-24 top-2 mx-auto self-end  ">
                          <img
                            src={userHat?.image || userHat?.Hat?.image}
                            alt={userHat?.name || userHat?.Hat?.name}
                            className="absolute top-5 left-5 w-[50px] z-10"
                          />
                          {/* <IiBoy className="w-24" /> */}
                        </div>
                        <div className="relative w-24 top-14 mx-auto self-end  ">
                          <img
                            src={userAvatar?.image || userAvatar?.Avatar?.image}
                            alt={userAvatar?.name || userAvatar?.Avatar?.name}
                            className="absolute top-0 w-[100px] z-[0] "
                          />
                          {/* <IiBoy className="w-24" /> */}
                        </div>
                        <div className="relative w-24 -top-7 right-4 mx-auto self-end  ">
                          <img
                            src={userDrink?.image || userDrink?.Drink?.image}
                            alt={userDrink?.name || userDrink?.Drink?.name}
                            className="absolute top-20 w-[40px] "
                          />
                        </div>
                      </div>
                    </>
                  )}
                  <Link to="/shop" className="absolute bottom-5 right-4 ">
                    <IiShopping className="w-28" />
                  </Link>
                </div>
              </div>
              <JoinChatContainer />
            </div>
          ) : (
            <div className="flex max-w-5xl flex-col items-center  lg:flex-row w-full mx-auto">
              <div className=" w-full flex flex-col mt-6 px-0 sm:px-10 relative mb-4">
                <div className="max-w-[450px] mx-auto">
                  <div className="flex w-full justify-center  item-center">
                    <p className="text-3xl mr-2 ">สวัสดี...</p>
                    <form onSubmit={(e) => handleEditName(e)} className="flex">
                      <input
                        id="editName"
                        onFocus={() => setEdit(true)}
                        onBlur={() => setEdit(false)}
                        defaultValue={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        type="text"
                        placeholder="บอกชื่อเราหน่อยนะ"
                        maxLength="20"
                        autoComplete="off"
                        className="bg-transparent max-w-[270px] h-full text-3xl focus:ring-transparent ring-offset-transparent border-hidden   "
                      />
                      {edit ? (
                        <button type="submit">
                          <IiEdit className="w-[38px] h-[38px] mx-1" />
                        </button>
                      ) : (
                        <label htmlFor="editName">
                          <IiEdit className="w-[38px] h-[38px] mx-1" />
                        </label>
                      )}
                    </form>
                  </div>
                  {!user ||
                  (drinksOfUser.length === 0 &&
                    hatsOfUser.length === 0 &&
                    AvatarsOfUser.length === 0) ? (
                    <></>
                  ) : (
                    <div className="rounded-2xl shadow-lg py-4 px-6 text-center mt-6">
                      <p className="text-xl">เลือกเครื่องดื่มของคุณ</p>
                      <div className="flex  w-full overflow-x-scroll">
                        {Array.isArray(drinksOfUser) &&
                          drinksOfUser?.map((el, idx) => (
                            <DrinkBar
                              key={idx}
                              item={el}
                              onClick={() => ChooseDrink(el)}
                            />
                          ))}
                      </div>
                      <div className="flex  w-full overflow-x-scroll">
                        <div className="rounded-2xl shadow-lg py-4 px-6 text-center mt-6">
                          <p className="text-xl">เลือกหมวกของคุณ</p>
                          <div className="flex">
                            {hatsOfUser?.map((el, idx) => (
                              <HatBar
                                key={idx}
                                item={el}
                                onClick={() => ChooseHat(el)}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex  w-full overflow-x-scroll">
                        <div className="rounded-2xl shadow-lg py-4 px-6 text-center mt-6">
                          <p className="text-xl">เลือกอวตารของคุณ</p>
                          <div className="flex">
                            {AvatarsOfUser?.map((el, idx) => (
                              <AvatarBar
                                key={idx}
                                item={el}
                                onClick={() => ChooseAvatar(el)}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="px-3 py-3">
                    <p className="text-xl underline">
                      {userDrink?.Drink?.name ||
                        userAvatar?.Avatar?.name ||
                        userHat?.Hat?.name}
                    </p>
                    <p className="mt-2">
                      {userDrink?.Drink?.description ||
                        userHat?.Hat?.description ||
                        userAvatar?.Avatar?.description}
                    </p>
                  </div>
                </div>

                <div className="relative">
                  {!user ||
                  drinksOfUser.length === 0 ||
                  hatsOfUser.length === 0 ||
                  AvatarsOfUser === 0 ? (
                    <></>
                  ) : (
                    <button
                      className="bg-green-300 rounded-full p-2"
                      onClick={handleSaveAvatar}
                    >
                      บันทึก Avatar
                    </button>
                  )}
                  {!user ||
                  drinksOfUser.length === 0 ||
                  hatsOfUser.length === 0 ||
                  AvatarsOfUser === 0 ? (
                    <>
                      {' '}
                      <img
                        src="https://drinksonme.live/counter-page/counter.png"
                        alt="counter"
                        className="relative top-36 "
                      />{' '}
                      <IiBoy className="w-24 mt-14 mx-auto" />
                    </>
                  ) : (
                    <>
                      <img
                        src="https://drinksonme.live/counter-page/counter.png"
                        alt="counter"
                        className="relative top-36 "
                      />
                      <div>
                        <div className="relative w-24 top-1 mx-auto self-end  ">
                          <img
                            src={userHat?.image || userHat?.Hat?.image}
                            alt={userHat?.name || userHat?.Hat?.name}
                            className="absolute top-5 left-5 w-[50px] z-10"
                          />
                          {/* <IiBoy className="w-24" /> */}
                        </div>
                        <div className="relaive w-24 top-14 mx-auto self-end  ">
                          <img
                            src={userAvatar?.image || userAvatar?.Avatar?.image}
                            alt={userAvatar?.name || userAvatar?.Avatar?.name}
                            className="absolute top-0 w-[100px] z-[0] "
                          />
                          {/* <IiBoy className="w-24" /> */}
                        </div>
                        <div className="relative w-24 -top-7 right-4 mx-auto self-end  ">
                          <img
                            src={userDrink?.image || userDrink?.Drink?.image}
                            alt={userDrink?.name || userDrink?.Drink?.name}
                            className="absolute top-20 w-[40px] "
                          />
                        </div>
                      </div>
                    </>
                  )}
                  <Link to="/shop" className="absolute bottom-5 right-4 ">
                    <IiShopping className="w-28" />
                  </Link>
                </div>
              </div>
              <JoinChatContainer />
            </div>
          )}
        </div>
      </div>
    </>
  )
}
