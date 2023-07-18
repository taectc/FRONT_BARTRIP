import { useContext } from 'react'
import { PostContext } from '../contexts/AdminPostContextProvider'

export const usePostContext = () => useContext(PostContext)
