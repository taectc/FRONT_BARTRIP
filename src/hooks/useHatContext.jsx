import { useContext } from 'react'

import { HatContext } from '../contexts/HatContextComponet'

export const useHatContext = () => useContext(HatContext)
