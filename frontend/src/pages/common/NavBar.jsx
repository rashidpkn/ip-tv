import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setLoginStatus } from '../../redux/slice/authSlice'
function NavBar() {
  const [menu, setMenu] = useState(false)

  const { loginStatus } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  return (
    <div className="w-full overflow-hidden font-inter">
      <div className="md:hidden h-14 fixed z-50 w-full top-0 bg-black flex justify-between items-center px-2">
        <div className=""></div>
        <img src="/image/common/logo.png" width={125} alt="logo" />
        <img src="/image/common/user.png" className='hover:drop-shadow-[2px_1px_7px_#03BAFA]' onClick={()=>{setMenu(!menu)}} alt="user" />
      </div>
      
      {
        menu && <div className="md:hidden fixed top-14 right-0 z-50 bg-black/50 rounded-3xl w-36 h-44"></div>
      }
      

      <div className="hidden md:flex justify-between items-center font-medium text-lg h-24 w-full bg-black sticky text-white z-50 px-[5%]">
        <NavLink to='/'>
          <img src="/image/common/logo.png" width={125} alt="logo" />
        </NavLink>
        <NavLink className={'flex justify-center items-center gap-1 hover:drop-shadow-[2px_1px_7px_#03BAFA]'} to='/'>          <img src="/image/common/icon/home.png" alt="" />         <span className='text-base font-semibold hover:text-[1.2rem] duration-200'>Home</span>         </NavLink>
        <NavLink className={'flex justify-center items-center gap-1 hover:drop-shadow-[2px_1px_7px_#03BAFA]'} to='/subscribe'> <img src="/image/common/icon/subscription.png" alt="" /> <span className='text-base font-semibold hover:text-[1.2rem] duration-200'>Subscibe</span>     </NavLink>
        <NavLink className={'flex justify-center items-center gap-1 hover:drop-shadow-[2px_1px_7px_#03BAFA]'} to='#'>          <img src="/image/common/icon/how.png" alt="" />          <span className='text-base font-semibold hover:text-[1.2rem] duration-200'>How it works</span> </NavLink>
        <NavLink className={'flex justify-center items-center gap-1 hover:drop-shadow-[2px_1px_7px_#03BAFA]'} to='/faq'>       <img src="/image/common/icon/faq.png" alt="" />          <span className='text-base font-semibold hover:text-[1.2rem] duration-200'>FAQ</span>          </NavLink>
        <NavLink className={'flex justify-center items-center gap-1 hover:drop-shadow-[2px_1px_7px_#03BAFA]'} to={'#'}>        <img src="/image/common/icon/ref.png" alt="" />          <span className='text-base font-semibold hover:text-[1.2rem] duration-200'>Referral</span>     </NavLink>
        {
          loginStatus ?
            <button className='h-[43px] w-[169px] bg-[#FEDE00] rounded-2xl text-black' onClick={() => { dispatch(setLoginStatus(false)) }}>Logout</button> :
            <NavLink to={'/login'}>
              <button className='h-[43px] w-[169px] bg-[#FEDE00] font-medium text-xl rounded-2xl text-black' >Login</button>
            </NavLink>
        }
      </div>



    </div>
  )
}

export default NavBar




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