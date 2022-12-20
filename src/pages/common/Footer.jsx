import React from 'react'

function Footer() {
  return (
    <div className='bg-black text-white p-[5%] space-y-5'>
      <div className="flex flex-col lg:flex-row gap-x-5">
        <div className="w-full lg:w-2/5 lg:h-full space-y-10">
          <ul className='flex flex-wrap w-full text-3xl font-normal gap-y-5'>
            <li className='w-1/2 hover:text-[#c63128]'>SUBSCRIBE NOW</li>
            <li className='w-1/2 hover:text-[#c63128]'>LIVE SUPPORT</li>
            <li className='w-1/2 hover:text-[#c63128]'>CHANNEL LIST</li>
            <li className='w-1/2 hover:text-[#c63128]'>HOW TO ?</li>
            <li className='w-1/2 hover:text-[#c63128]'>FAQ</li>
          </ul>
          <img src="/image/common/logo.png" width={125} alt="logo" />
        </div>

        <div className="w-full lg:w-3/5 lg:h-full space-y-5">
          <h2 className='text-3xl font-normal'>OFFICE LOCATIONS</h2>
          <hr />
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            <div className="w-[242px] h-[165px] border"></div>
            <div className="w-[242px] h-[165px] border"></div>
            <div className="w-[242px] h-[165px] border"></div>
            <div className="w-[242px] h-[165px] border"></div>
            <div className="w-[242px] h-[165px] border"></div>
          </div>
        </div>

      </div>
      <p className='text-[#bbbbba]'>© 2022. IPTV Dubai, LLC. All rights reserved</p>
    </div>
  )
}

export default Footer