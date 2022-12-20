import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
function NavBar() {
  const [menu, setMenu] = useState(false)
  return (
    <div className="w-full overflow-hidden">
        <div className="md:hidden">
          <div className={`${menu ? 'h-full' : 'h-[100px]'} min-h-[100px] duration-500 bg-black/70 fixed z-50 text-white w-full`}>
            <div className="flex justify-end items-center w-full h-[100px] px-[5%]">
              <button onClick={()=>setMenu(!menu)}>
                <img className='float-right ' src="/image/common/hamburger.svg" alt="" />
              </button>
            </div>
            <div className={`h-full w-full flex-col justify-center items-center text-2xl font-medium gap-3 ${menu? 'flex' : 'hidden'}`}>
              
                <NavLink to={'/'}> HOME </NavLink>
                <NavLink to={'/subscribe'}> SUBSCRIBE NOW </NavLink>
                <NavLink to={'#'}> HOW TO ? </NavLink>
                <NavLink to={'/faq'}> FAQ </NavLink>
                <NavLink to={'#'}> LIVE SUPPORT </NavLink>
                <NavLink to={'#'}> CHANNEL LIST </NavLink>
            </div>    
          </div>
        </div>




        <div className="hidden md:flex h-24 w-full navbar items-center gap-7  fixed text-white z-50 px-[5%]">
            <NavLink to='/'>
                <img src="/image/common/logo.png" width={125} alt="logo" />
            </NavLink>
            <NavLink to='/subscribe'>SUBSCRIBE NOW</NavLink>
            <NavLink to='#'>LIVE SUPPORT</NavLink>
            <NavLink to='#'>HOW TO ?</NavLink>
            <NavLink to='#'>CHANNELS</NavLink>
            <NavLink to='/faq'>FAQ</NavLink>
        </div>
    </div>
  )
}

export default NavBar