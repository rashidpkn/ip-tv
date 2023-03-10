import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
// import { setLoginStatus } from '../../redux/slice/authSlice'
import { setMenu } from '../../redux/slice/utilSlice'

import { HomeOutlined, SubscriptionsOutlined, QuizOutlined, SettingsAccessibilityOutlined, AccountCircleOutlined, PsychologyAltOutlined } from '@mui/icons-material'



import { useEffect } from "react";
import { useLocation } from "react-router-dom";


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}







function NavBar() {
  const { menu } = useSelector(state => state.util)
  const dispatch = useDispatch()

  useEffect(() => {
    if(menu){
        document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'visible'
    }

  }, [menu])


  return (
    <div className={` w-full overflow-hidden font-inter`}>
      <ScrollToTop />
      <div className={`${menu && 'blur-sm'} md:hidden h-14 fixed z-50 w-full top-0 bg-black flex justify-between items-center px-2`}>
        <div className=""></div>
        <Link to={'/'}>
          <img src="/image/common/logo.png" width={125} alt="logo" />
        </Link>
        <AccountCircleOutlined className='hover:drop-shadow-[2px_1px_7px_#03BAFA] text-white' onClick={() => { dispatch(setMenu(!menu)) }} />

      </div>

      {
        menu && <div onClick={() => { dispatch(setMenu(!menu)) }} className="md:hidden fixed top-14 right-0 z-50 bg-black/50 rounded-3xl   text-white py-5 px-2 space-y-5">
          <div className="flex justify-start items-center">
            {/* <img src="/image/common/icon/how.png" alt="" /> */}
            <PsychologyAltOutlined />
            <span className='text-base font-semibold'>How it works</span>
          </div>
          <div className="flex justify-start items-center">
            <SettingsAccessibilityOutlined />
            <span className='text-base font-semibold'>Referral</span>
          </div>

          <div className="flex justify-center text-black">
            <Link to={'/login'}>
              <button className='w-20 h-8 rounded-lg bg-[#FEDE00]'>Login</button>
            </Link>
          </div>
          <div className="flex justify-center items-center gap-3 text-xs">
            <span className='text-[#03A1FA]'>Forget Password</span>
            <Link to={'/subscribe'}>
              <span>Sign Up</span>
            </Link>
          </div>
        </div>
      }

      <DeskTopNavbar />
    </div>
  )
}

export default NavBar


const DeskTopNavbar = () => {
  const { loginStatus } = useSelector(state => state.auth)
  // const dispatch = useDispatch()
  return (
    <div className="hidden md:flex justify-between items-center font-medium text-lg h-24 w-full bg-black  text-white z-50 px-[5%]">
      
      <NavLink to='/'>
        <img src="/image/common/logo.png" width={125} alt="logo" />
      </NavLink>

      <NavLink className={'flex justify-center items-center gap-1 hover:drop-shadow-[2px_1px_7px_#03BAFA]'} to='/'>
        <HomeOutlined />
        <span className='text-base font-semibold hover:text-[1.2rem] duration-200'>Home</span>
      </NavLink>

      <NavLink className={'flex justify-center items-center gap-1 hover:drop-shadow-[2px_1px_7px_#03BAFA] text-[#FEDE00]'} to='/subscribe'>
        <SubscriptionsOutlined />
        <span className='text-base font-semibold hover:text-[1.2rem] duration-200'>Subscibe</span>
      </NavLink>

      <NavLink className={'flex justify-center items-center gap-1 hover:drop-shadow-[2px_1px_7px_#03BAFA]'} to='#'>
        <PsychologyAltOutlined />
        {/* <img src="/image/common/icon/how.png" alt="" />           */}
        <span className='text-base font-semibold hover:text-[1.2rem] duration-200'>How it works</span>
      </NavLink>

      <NavLink className={'flex justify-center items-center gap-1 hover:drop-shadow-[2px_1px_7px_#03BAFA]'} to='/faq'>
        <QuizOutlined />
        <span className='text-base font-semibold hover:text-[1.2rem] duration-200'>FAQ</span>
      </NavLink>

      <NavLink className={'flex justify-center items-center gap-1 hover:drop-shadow-[2px_1px_7px_#03BAFA]'} to={'#'}>
        <SettingsAccessibilityOutlined />
        <span className='text-base font-semibold hover:text-[1.2rem] duration-200'>Referral</span>
      </NavLink>

      {
        loginStatus ?
          <div className="flex flex-col items-center justify-center">
            <AccountCircleOutlined/>
            <h2>User</h2>
          </div>:
          <NavLink to={'/login'}>
            <button className='h-[43px] w-[169px] bg-[#FEDE00] font-medium text-xl rounded-2xl text-black' >Login</button>
          </NavLink>
      }
    </div>
  )
}







// eslint-disable-next-line
{/* <div className={`${menu ? 'h-full' : 'h-[100px]'} min-h-[100px] duration-500 bg-black/70 sticky z-50 text-white w-full`}>
          <div className="flex justify-end items-center w-full h-[100px] px-[5%]">
            <button onClick={() => setMenu(!menu)}>
              <img className='float-right ' src="/image/common/hamburger.svg" alt="" />
            </button>
          </div>
          <div className={`h-full w-full flex-col justify-center items-center text-2xl font-medium gap-3 ${menu ? 'flex' : 'hidden'}`}>
            <NavLink to={'/'}> HOME </NavLink>
            <NavLink to={'/subscribe'}> SUBSCRIBE NOW </NavLink>
            <NavLink to={'#'}> HOW TO ? </NavLink>
            <NavLink to={'/faq'}> FAQ </NavLink>
            <NavLink to={'#'}> LIVE SUPPORT </NavLink>
            <NavLink to={'#'}> CHANNEL LIST </NavLink>
            <NavLink to={'#'}>REFERRAL PROGRAM</NavLink>
          </div>
        </div> */}