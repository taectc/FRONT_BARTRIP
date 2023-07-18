import React from 'react'
import {
  IiCodeCamp,
  IiPEarth,
  IiPJiang,
  IiPVee,
  IiRelearn,
} from '../../../icons'

function Sponsors() {
  return (
    <div className="mt-6 lg:mt-0 mb-6">
      <p className="font-semibold text-2xl mb-2 text-center lg:text-left ">
        Sponsors
      </p>

      <div className="carousel carousel-center rounded-box">
        <div className="carousel-item">
          <IiPEarth className="w-[360px]" />
        </div>
        <div className="carousel-item">
          <IiCodeCamp className="w-[360px]" />
        </div>
        <div className="carousel-item">
          <IiPVee className="w-[360px]" />
        </div>
        <div className="carousel-item">
          <IiRelearn className="w-[360px]" />
        </div>
        <div className="carousel-item">
          <IiPJiang className="w-[360px]" />
        </div>
        <div className="carousel-item">
          <IiCodeCamp className="w-[360px]" />
        </div>
        <div className="carousel-item">
          <IiRelearn className="w-[360px]" />
        </div>
      </div>
      <p className="text-center lg:text-right">สนใจเป็น sponsors</p>
    </div>
  )
}

export default Sponsors
