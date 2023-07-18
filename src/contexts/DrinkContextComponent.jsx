import React, { createContext, useEffect, useState } from 'react'
import { getDrinkApi, getDrinkByUserId } from '../api/post-api'

const DrinkContext = createContext()

function DrinkContextComponent({ children }) {
  const defaultDrinks = [
    {
      name: 'Beer',
      description: 'รู้สึกคอแห้ง เยี่ยวแตกก็ไม่เป็นไร',
      image: 'public/assets/iBeer.svg',
    },
    {
      name: 'Red wine',
      description: 'ลงรูปดื่มไวน์ ชีวิตจริงแดกเอ็มร้อย',
      image: 'src/assets/iRedwine.svg',
    },
    {
      name: 'Midori Sour',
      description: 'เปรี้ยวจี๊ด ปี๊ดซ่า',
      image: 'src/assets/iCherry.svg',
    },
    {
      name: 'Magarita',
      description: 'ซิญญอริต้า มาการิต้้า กิกี้กาก้า',
      image: 'src/assets/iLemon.svg',
    },
    {
      name: 'Ontherock',
      description: 'ออนเดอะล็อค น็อคเดอะสเตจ',
      image: 'src/assets/iOntherock.svg',
    },
    {
      name: 'Blue Hawaii',
      description: 'บลูฮาวาย จบ',
      image: 'src/assets/iPineapple.svg',
    },
  ]

  const [allDrinks, setDrinks] = useState([])
  const [userDrink, setUserDrink] = useState([])
  const [drinksOfUser, setDrinksOfUser] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getDrinks = async () => {
    const res = await getDrinkApi()
    setDrinks(res.data)
  }

  const getDrinksByUserId = async () => {
    const res = await getDrinkByUserId()
    setDrinksOfUser(res.data.drinks)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        await Promise.all([getDrinks(), getDrinksByUserId()])
        setIsLoading(false)
      } catch (error) {
        console.log('Error fetching data:', error)
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <DrinkContext.Provider
      value={{
        allDrinks,
        userDrink,
        setUserDrink,
        getDrinks,
        defaultDrinks,
        drinksOfUser,
      }}
    >
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        // เนื้อหาหลักของ component จะถูกแสดงเมื่อ isLoading เป็น false
        children
      )}
    </DrinkContext.Provider>
  )
}

export { DrinkContext }
export default DrinkContextComponent
