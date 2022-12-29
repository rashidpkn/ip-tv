import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setLoginStatus } from '../../redux/slice/authSlice'
function NavBar() {
  const [menu, setMenu] = useState(false)

  const { loginStatus } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  return (
    <div className="w-full overflow-hidden">
      <div className="md:hidden">
        <div className={`${menu ? 'h-full' : 'h-[100px]'} min-h-[100px] duration-500 bg-black/70 fixed z-50 text-white w-full`}>
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
        </div>
      </div>

      <div className="hidden md:flex justify-between h-24 w-full navbar fixed text-white z-50 px-[5%]">
        <div className="flex  gap-7 h-full items-center">
          <NavLink to='/'>
            <img src="/image/common/logo.png" width={125} alt="logo" />
          </NavLink>
          {
            loginStatus ? <NavLink to={'/dashboard'}>DASHBOARD</NavLink> : <NavLink to='/subscribe'>SUBSCRIBE NOW</NavLink>
          }
          <NavLink to='#'>LIVE SUPPORT</NavLink>
          <NavLink to='#'>HOW TO ?</NavLink>
          <NavLink to='#'>CHANNELS</NavLink>
          <NavLink to='/faq'>FAQ</NavLink>
          <NavLink to={'#'}>REFERRAL PROGRAM</NavLink>
          
        </div>
        <div className="flex items-center h-full">
          {
            loginStatus ?
              <button className='h-12 w-28 bg-red-500 rounded-md text-white' onClick={()=>{dispatch(setLoginStatus(false))}}>LOGOUT</button> :
              <NavLink to={'/login'}>
                <button className='h-12 w-28 bg-red-500 rounded-md text-white' >LOGIN</button>
              </NavLink>
          }

        </div>
      </div>



    </div>
  )
}

export default NavBar