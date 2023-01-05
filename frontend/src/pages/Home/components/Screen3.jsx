import React from 'react'
import { useNavigate } from 'react-router-dom'

function Screen3() {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col lg:flex-row gap-5  bg-black text-white h-full w-full overflow-hidden '>
      <div data-aos="fade-right" data-aos-duration="2000" className="w-full lg:w-1/2">
        <img className='w-full h-full object-cover' src="/image/home/movie-remote.webp" alt="" />
      </div>

      <div data-aos="fade-left" data-aos-duration="2000" className="w-full px-[5%]  lg:w-1/2 flex flex-col justify-center gap-7 py-5">
        <div className="flex  items-center">
          <h2 className='text-[34px] font-medium'>WHY</h2> <img className='w-[172px]' src="/image/common/logo.png" alt="" />
        </div>
        <p className='text-2xl font-light'>Every premiership football game live.</p>

        <h2 className='text-5xl lg:text-7xl font-semibold'>INSPIRE EXTRAORDINARY</h2>
        <h3 className='text-2xl font-semibold'>Flexibility. Convenience. Varienty.</h3>

        









        <ul className='space-y-5'>

          <li className='flex justify-start'>
            <span className="material-symbols-outlined">
              nest_remote
            </span>
            <p className='text-2xl'>Cash on delivery which means you don’t pay until the system is set up in your property and you are 100% satisfied.</p>
          </li>

          <li className='flex justify-start'>
            <span className="material-symbols-outlined">
              nest_remote
            </span>
            <p className='text-2xl'>24/7 customer support giving your peace of mind.</p>
          </li>

          <li className='flex justify-start'>
            <span className="material-symbols-outlined">
              nest_remote
            </span>
            <p className='text-2xl'>Every sky channel and Uk terrestrial channels</p>
          </li>

          <li className='flex justify-start'>
            <span className="material-symbols-outlined">
              nest_remote
            </span>
            <p className='text-2xl'>All pay per view events free and live.</p>
          </li>

        </ul>







        <button data-aos="fade-right" data-aos-duration="2000" className={`self-end w-[280px] h-[70px] border border-white float-right  flex group`} onClick={() => { navigate('/subscribe') }}>
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


    </div>
  )
}

export default Screen3