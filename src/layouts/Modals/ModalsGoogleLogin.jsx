import React, { useEffect, useState } from 'react'
import { IiX } from '../../icons'

function ModalsGoogleLogin({ id, title, header, children, className = '' }) {
  const [show, setShow] = useState(false)
  return (
    <div>
      <div className={` ${className}`} onClick={() => setShow(true)}>
        {title}
      </div>
      <div
        className={`fixed flex justify-center items-center top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.5)] ${
          show ? 'visible' : 'invisible'
        }`}
      >
        <form className="modal-box" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={() => setShow(false)}
            type="button"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            <IiX />
          </button>
          <h3 className="font-bold text-lg">{header}</h3>

          {children}
        </form>
      </div>
    </div>
  )
}

export default ModalsGoogleLogin
