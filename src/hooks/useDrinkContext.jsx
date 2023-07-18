import { useContext } from 'react'

import { DrinkContext } from '../contexts/DrinkContextComponent'

export const useDrinkContext = () => useContext(DrinkContext)
