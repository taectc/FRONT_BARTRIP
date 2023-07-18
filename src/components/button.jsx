import { IiMessageBox } from '../icons'
export default function Button({ text }) {
  return (
    <>
      <div className="cursor-pointer flex justify-center items-center w-full py-2 px-4  ">
        <IiMessageBox className="w-full " />
        <button className="w-full py-6 px-16 absolute">
          <p className="text-lg">{text}</p>
        </button>
      </div>
    </>
  )
}
