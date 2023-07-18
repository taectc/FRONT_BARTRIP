import { IiBuyitem, IiMilktea } from '../icons'

export default function BuyCard({ image, name, price, description, id }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center relative w-40 gap-4">
        <img src="src/assets/iBoxbuy.svg" alt="Buybox" />
        <div className="w-30 py-2 px-10 absolute top-5">
          {/* <IiMilktea /> */}
          <img src={image} className="w-[60px]" />
        </div>
        <div>{name}</div>
        <div>{description}</div>
        <div>ราคา {price} บาท</div>
        <button className="w-20 cursor-pointer">
          <IiBuyitem />
        </button>
      </div>
    </>
  )
}
