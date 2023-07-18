import React from 'react'
import { IiTick } from '../../icons'
import ModalsReuse from './ModalsReuse'

function AboutUs() {
  return (
    <ModalsReuse title={'About Us'} header={'We are a Newbies'}>
      <div className="py-4">
        Hello everyone! We're excited to introduce our new web application for a
        chat bar community. It's a platform where you can connect with
        like-minded individuals, engage in meaningful conversations, and share
        your thoughts and ideas.
        <p>Key features of our web application:</p>
        <div className="flex">
          <IiTick className="w-6" />
          <p> Real-time chat: Instantly chat with other.</p>
        </div>
        <div className="flex">
          <IiTick className="w-6" />

          <p>Listen Music: Express yourself using a playlist of music</p>
        </div>
        <div className="flex">
          <IiTick className="w-6" />

          <p>
            Privacy and security: We prioritize the privacy and security of our
            users' data.
          </p>
        </div>
        <p>
          {' '}
          Whether you're looking to expand your network, seek advice, or simply
          have fun conversations, our chat bar community is the perfect place
          for you. To get started, visit our website at [BarTrip] Best regards,
          [BarTrip Team]
        </p>{' '}
      </div>
    </ModalsReuse>
  )
}

export default AboutUs
