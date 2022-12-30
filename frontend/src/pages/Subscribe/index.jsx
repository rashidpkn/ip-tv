import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAddress, setEmail, setEmirates, setFName, setLName, setPackage, setPassword, setPhone } from '../../redux/slice/userSlice'
import Footer from '../common/Footer'
import NavBar from '../common/NavBar'
import axios from 'axios'
import backendIP from '../../backendIP'
import { setLoginStatus, setRole } from '../../redux/slice/authSlice'
import { useNavigate } from 'react-router-dom'
function Subscribe() {

  const { fname, lname, phone, address, emirates, packages, email, password } = useSelector(state => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const formHandler = async () => {
    const res = await (await axios.post(`${backendIP}/user/create`, { fname, lname, phone, address, emirates, packages, email, password })).data
    const { loginStatus, error } = res
    if (loginStatus === true) {
      dispatch(setLoginStatus(true))
      dispatch(setRole('user'))
      navigate('/dashboard')
    }
    else {
      window.alert(error)
    }
  }

  return (
    <div className='font-jost'>
      <NavBar />
      <div className="px-[10%] mt-36 mb-24">
        <h1 className='text-center text-4xl font-semibold'>Get started by filling the below order form.</h1>

        <form className='w-full lg:w-[800px] mx-auto   border-[#BABCBB] mt-5 space-y-5' onSubmit={e => { e.preventDefault(); formHandler(); }}>

          <div className="space-y-2">
            <label htmlFor="">Name</label>
            <div className="flex justify-between gap-5 flex-wrap">
              <input value={fname} onChange={e => dispatch(setFName(e.target.value))} required className='h-12 w-full lg:w-96 rounded-md border outline-none border-[#BABCBB] pl-3' placeholder='First Name' type="text" />
              <input value={lname} onChange={e => dispatch(setLName(e.target.value))} required className='h-12 w-full lg:w-96 rounded-md border outline-none border-[#BABCBB] pl-3' placeholder='Last Name' type="text" />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="">Phone</label>
            <div className="">
              <input value={phone} onChange={e => dispatch(setPhone(e.target.value))} required className='h-12 w-full rounded-md border outline-none border-[#BABCBB] pl-3' placeholder='Phone No' type="tel" />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="">Address</label>
            <div className="space-y-3">
              <input value={address} onChange={e => dispatch(setAddress(e.target.value))} required className='h-12 w-full rounded-md border outline-none border-[#BABCBB] pl-3' placeholder='Address' type="text" />
              <select value={emirates} onChange={e => dispatch(setEmirates(e.target.value))} required className='h-12 w-48 rounded-md border outline-none border-[#BABCBB] p-3' name="" id="">
                <option value="">Select Emirates</option>
                <option value='Dubai'>Dubai</option>
                <option value='Abu Dhabi'>Abu Dhabi</option>
                <option value='Sharjah'>Sharjah</option>
              </select>
            </div>
          </div>




          <div className="space-y-2">
            <label htmlFor="">Package</label>
            <div className="flex gap-3">
              <div className="">
                <input checked onChange={e => dispatch(setPackage(3))} className='rounded-md border outline-none border-[#BABCBB] p-3' type={'radio'} name='package' id='1' />
                <label htmlFor="1"> Three Months</label>
              </div>
              <div className="">
                <input onChange={e => dispatch(setPackage(6))} className='rounded-md border outline-none border-[#BABCBB] p-3' type={'radio'} name='package' id='2' />
                <label htmlFor="2"> Six Months</label>
              </div>
              <div className="">
                <input onChange={e => dispatch(setPackage(12))} className='rounded-md border outline-none border-[#BABCBB] p-3' type={'radio'} name='package' id='3' />
                <label htmlFor="3"> Twelve Months</label>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="">Email</label>
            <div className="">
              <input value={email} onChange={e => dispatch(setEmail(e.target.value))} required className='h-12 w-full rounded-md border outline-none border-[#BABCBB] pl-3' placeholder='Email' type="email" />
            </div>
          </div>


          <div className="space-y-2">
            <label htmlFor="">Password</label>
            <div className="flex justify-between gap-5 flex-wrap">
              <input value={password} onChange={e => dispatch(setPassword(e.target.value))} minLength={8} required className='h-12 w-full lg:w-96 rounded-md border outline-none border-[#BABCBB] pl-3' placeholder='Password' type="password" />
              <input minLength={8} required className='h-12 w-full lg:w-96 rounded-md border outline-none border-[#BABCBB] pl-3' placeholder='Confirm Password' type="password" />
            </div>
          </div>

          <button type="submit" className='h-12 w-28 bg-red-500 rounded-md float-right text-white' >ORDER NOW</button>

        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Subscribe