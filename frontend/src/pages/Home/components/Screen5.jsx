import React from 'react'
import { useNavigate } from 'react-router-dom'

function Screen5() {
  const navigate = useNavigate()
  return (
    <div className=' w-full flex flex-col gap-10 justify-center items-center py-[5%]'>
            <h2 className='text-4xl font-bold'>REVIEWS</h2>
            <div className="">
            
            <div class="elfsight-app-4ca00499-c523-4b98-8543-8da6a0b9a289"></div>
            </div>
            
            <button data-aos="fade-right" data-aos-duration="2000" className={` w-[280px] h-[70px] border  float-right  flex group`} onClick={() => { navigate('/subscribe') }}>
          <div className="h-full w-4/5 flex relative">
            <h2 className={`absolute h-full w-full flex justify-center items-center group-hover:text-black text-xl font-medium`}>SUBSCRIBE NOW</h2>
            <div className="flex justify-center items-center h-full w-full group-hover:w-0 duration-500"></div>
            <div className={`flex justify-center items-center h-full bg-[#FEDE00] w-0 group-hover:w-full duration-500`}></div>
          </div>
          <div className="h-full w-1/5  bg-[#FEDE00] flex justify-center items-center">
            <span className="material-symbols-outlined text-[40px] group-hover:text-black">
              nest_remote
            </span>
          </div>
        </button>
    </div>
  )
}

export default Screen5