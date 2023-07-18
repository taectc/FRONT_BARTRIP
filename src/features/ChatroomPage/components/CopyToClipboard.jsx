import React from 'react'
import { useRef } from 'react'
import { IiFace } from '../../../icons'

function CopyToClipboard({ r }) {
  const textToCopyRef = useRef(null)

  const copyToClipboard = () => {
    const textToCopy = textToCopyRef.current.innerText
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        alert('คัดลอกข้อความเสร็จสิ้น!')
      })
      .catch((error) => {
        console.error('เกิดข้อผิดพลาดในการคัดลอกข้อความ:', error)
      })
  }

  return (
    <div className="flex">
      <p ref={textToCopyRef}>{r}</p>
      <button onClick={copyToClipboard}>
        {' '}
        <IiFace className="h-5" />
      </button>
    </div>
  )
}

export default CopyToClipboard
