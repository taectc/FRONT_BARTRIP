import { useContext } from 'react'

import { AvatarContext } from '../contexts/AvatarContextComponents'

export const useAvatarContext = () => useContext(AvatarContext)
