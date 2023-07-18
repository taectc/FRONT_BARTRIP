import { useContext } from 'react'
import { GoogleContext } from '../contexts/GoogleContextProvider'

export default function useGoogle() {
  return useContext(GoogleContext)
}
