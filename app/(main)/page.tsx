
import bg from '@/public/background.jpg'
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-screen fixed z-[-1] bg-cover bg-x-center top-0 " style={{backgroundImage: `url(${bg.src})`}}>
      <div className='ml-24 mt-5 flex justify-between flex-col h-[70%] text-white uppercase tracking-wider text-base font-bold'>
        <Image src="/logo.png" alt="logo" width={75.65} height={70}/>
        <div>
          <div className=''>
              SHOP
              <div></div>
          </div>
          <div className=''>sales</div>
          <div className=''>archive</div>
          <div className=''>contact</div>
        </div>
        <div>
          <div className=''>shop</div>
          <div className=''>sales</div>
          <div className=''>archive</div>
          <div className=''>contact</div>
        </div>
      </div>
    </main>
  )
}
