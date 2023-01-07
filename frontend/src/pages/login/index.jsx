import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import backendIP from '../../backendIP'
import { setLoginStatus, setRole } from '../../redux/slice/authSlice'
import { setEmail, setFName, setLName, setPackage, setPassword } from '../../redux/slice/userSlice'
import Footer from '../common/Footer'
import NavBar from '../common/NavBar'

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {menu} = useSelector(state=>state.util)
  const {email,password} = useSelector(state=>state.user)

  const formHandler = async () =>{
    const res = await (await axios.post(`${backendIP}/user`, { email,password })).data
    const { loginStatus, role, error,fname,lname,packages } = res
    if (loginStatus === true) {
     
      dispatch(setFName(fname))
      dispatch(setLName(lname))
      dispatch(setLoginStatus(true))
      dispatch(setPackage(packages))

      if (role==='admin') {
        dispatch(setRole('admin'))
      } else {
        dispatch(setRole('user'))
      }
      navigate('/dashboard')
    }
    else {
      window.alert(error)
    }
  }

  return (
    <div className='font-inter'>
      <NavBar />
      <div className={`${menu && 'blur-sm'} px-[10%] mt-36 mb-24`}>
        <h1 className='text-center text-4xl font-semibold'>Get started by filling the below order form.</h1>

        <form className='w-full md:w-[500px] mx-auto   border-[#BABCBB] mt-5 space-y-5' onSubmit={e=>{e.preventDefault();formHandler();}}>        

          <div className="space-y-2">
            <label htmlFor="">Email</label>
            <div className="">
              <input value={email} onChange={e=>dispatch(setEmail(e.target.value))} required className='h-12 w-full rounded-md border outline-none border-[#BABCBB] pl-3' placeholder='Email' type="email" />
            </div>
          </div>


          <div className="space-y-2">
            <label htmlFor="">Password</label>
            <div className="">
              <input value={password} onChange={e=>dispatch(setPassword(e.target.value))} minLength={8} required className='h-12 w-full rounded-md border outline-none border-[#BABCBB] pl-3' placeholder='password' type="password" />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <Link to={'#'}>
              <p className='text-lg font-light text-[#03A1FA]'>Forgot Password ?</p>
            </Link>
            <Link to={'/subscribe'}>
              <p className='text-lg font-light text-[#03A1FA]'>Sign Up</p>
              </Link>
            <button type="submit" className='h-12 w-28 bg-[#FEDE00] rounded-md  text-black'>Login</button>
          </div>

        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Login