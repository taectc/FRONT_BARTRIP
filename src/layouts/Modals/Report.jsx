import React from 'react'
import { IiReport } from '../../icons'
import ModalsReuse from './ModalsReuse'

function Report() {
  return (
    <div>
      {' '}
      <ModalsReuse title={<IiReport className="w-6" />} header={'รีพอร์ต'}>
        <div>
          <div className="flex flex-col items-center">
            <p className="py-4">
              เราต้องการให้เว็บเป็นพื้นที่ปลอดภัยสำหรับการพูดคุยหากพบยูสเชอร์ที่ไม่เป็นพื้นที่ปลอดภัย
            </p>
            <p className="py-4 text-green-700">
              สามารถกดปุ่มรีพอร์ตที่ข้างชื่อได้เลย
            </p>
            <p className="py-4">
              โดยยูสเซอร์ที่ล็อคอินมีสิทธิ์รีพอร์ต 1 ครั้ง/วัน
            </p>
            <p className="py-4">ยูสเซอร์บูสต์มีสิทธิ์รีพอร์ต 3 คร้ัง/วัน</p>
            <div className="w-20">
              <IiReport />
            </div>
            <p className="py-4">เมื่อยูสเซอร์ถูกรีพอร์ตจำนวนหนึ่ง</p>
            <p className="py-4">ระบบจะทำการแบนตามหลักการข้างล่างนี้</p>
            <br />
            <p className="py-4">โดนแบนครั้งที่ 1 : 3 วัน</p>
            <p className="py-4">โดนแบนครั้งที่ 2 : 7 วัน</p>
            <p className="py-4">โดนแบนครั้งที่ 3 : 1 เดือน</p>
            <p className="py-4">โดนแบนครั้งที่ 4 : ตลอดไป</p>
            <p className="py-4">
              ซึ่งการโดนแบนจากระบบนี้
              ถือเป็นการตัดสินใจของยูสเซอร์ในระบบทางเว็บจะไม่เข้าไปตรวจสอบเพื่อปลดแบนเป็นรายกรณีแต่อย่างใด
            </p>
            <p className="py-4 text-teal-700">
              การรีพอร์ตนี้ส่งผลกระทบต่อยูสเซอร์คนอื่น
              ขอให้ใช้วิจารณญาณในการรีพอร์ต
            </p>
          </div>
        </div>
      </ModalsReuse>
    </div>
  )
}

export default Report
