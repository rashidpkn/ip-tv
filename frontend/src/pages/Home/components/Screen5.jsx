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
            <button className={`w-[280px] h-[70px] border border-black  flex group`} onClick={()=>{navigate('/subscribe')}}>
                <div className="h-full w-4/5 flex relative">
                    <h2 className={`absolute h-full w-full flex justify-center items-center group-hover:text-white text-xl font-medium`}>SUBSCRIBE NOW</h2>
                    <div className="flex justify-center items-center h-full w-full group-hover:w-0 duration-500"></div>
                    <div className={`flex justify-center items-center h-full bg-black w-0 group-hover:w-full duration-500`}></div>
                </div>
                <div className="h-full w-1/5 bg-black"></div>
            </button>
    </div>
  )
}

export default Screen5