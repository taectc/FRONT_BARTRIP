import React from 'react'
import { IiFacebook, IiGoogle, IiInstagram } from '../icons'
import AboutUs from './Modals/AboutUs'
import SupportUs from './Modals/SupportUs'

function Footer() {
  return (
    <footer className="py-3 flex justify-center items-center bg-slate-100 w-full">
      <div className="flex justify-center items-center">
        <span className="underline cursor-pointer ">
          <AboutUs />
        </span>{' '}
        |{' '}
        <span className=" underline cursor-pointer">
          <SupportUs />
        </span>
      </div>

      <div className="flex justify-center mx-1 ">
        <a href="#" className="cursor-pointer px-1 w-9">
          <IiGoogle />
        </a>
        <a href="#" className="cursor-pointer px-1 w-9">
          <IiInstagram />
        </a>
        <a href="#" className="cursor-pointer px-1 w-9">
          <IiFacebook />
        </a>
      </div>
    </footer>
  )
}

export default Footer
