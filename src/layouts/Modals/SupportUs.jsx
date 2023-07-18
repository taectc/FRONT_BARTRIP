import React from 'react'
import { IiQRcode } from '../../icons'
import ModalsReuse from './ModalsReuse'

function SupportUs() {
  return (
    <ModalsReuse title={'Support Us'} header={'Thank you for using!'}>
      <p className="py-4">Buy us a Drinks</p>
      <p className="py-4">via Bank Transfer</p>
      <IiQRcode />
    </ModalsReuse>
  )
}

export default SupportUs
