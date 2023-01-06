import React from 'react'
import { Link } from 'react-router-dom'
import { SettingsAccessibilityOutlined, SubscriptionsOutlined, QuizOutlined, PsychologyAltOutlined, MenuBookOutlined, CallOutlined, HomeOutlined, WhatsApp } from '@mui/icons-material'
import { useSelector } from 'react-redux'
function Footer() {
  const {menu} = useSelector(state=>state.util)
  return (
    <div className={`${menu && 'blur-sm'}`}>
      <div className="flex md:hidden bg-black fixed bottom-0 w-full h-14 justify-between items-center text-white px-3 z-[99999]">

        <Link to={'/'} >
          <div className="flex flex-col justify-center items-center hover:drop-shadow-[2px_1px_7px_#03BAFA]">
            <HomeOutlined />
            <span>Home</span>
          </div>
        </Link>

        <Link to={'/subscribe'}>
          <div className="flex flex-col justify-center items-center hover:drop-shadow-[2px_1px_7px_#03BAFA] text-[#FEDE00]">
            {/* <img src="/image/common/icon/yellow-subscription.png" alt="" /> */}
            <SubscriptionsOutlined />
            <span>Subscribe</span>
          </div>
        </Link>

        <Link to={'/faq'}>
          <div className="flex flex-col justify-center items-center hover:drop-shadow-[2px_1px_7px_#03BAFA]">
            <QuizOutlined />
            <span>FAQ</span>
          </div>
        </Link>
      </div>


      <div className="bg-black min-h-[245px] pb-[70px] md:pb-0 flex justify-start flex-wrap px-5 py-10 gap-28 text-white">
        <Link to={'/'}>
          <img src="/image/common/logo.png" className='h-11' alt="" />
        </Link>
        <div className="">
          <h3 className='text-[#8D8E92] text-xl font-medium'>Quick Links</h3>
          <ul className='mt-5 space-y-8'>
            <li className=''><Link to={'/subscribe'}> <SubscriptionsOutlined />Subcribe </Link></li>
            <li className=' '><PsychologyAltOutlined />How it works</li>
          </ul>
        </div>
        <div className="">
          <h3 className='text-black text-xl font-medium'>.</h3>
          <ul className='mt-5 space-y-8'>
            <li className='flex items-center '><Link to={'/faq'}><QuizOutlined />FAQ</Link></li>
            <li className='flex items-center'><SettingsAccessibilityOutlined />Referral</li>
          </ul>
        </div>
        <div className="">
          <h3 className='text-[#8D8E92] text-xl font-medium'>Resources</h3>
          <ul className='mt-5 flex flex-row md:flex-col gap-8'>
            <li className='flex items-center '><MenuBookOutlined />Blog</li>
            <li className='flex items-center'><CallOutlined />Contact Us</li>
          </ul>
        </div>
      </div>
      <div className="fixed bottom-16 lg:bottom-10  right-3 lg:right-10 rounded-full h-12 w-12 bg-green-500 flex justify-center items-center text-white  z-50">
        <WhatsApp className='whatsapp-icon'/>
      </div>
    </div>
  )
}


export default Footer