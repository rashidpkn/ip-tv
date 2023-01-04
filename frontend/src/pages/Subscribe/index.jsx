import React from 'react'
import NavBar from '../common/NavBar'
import { useDispatch, useSelector } from 'react-redux'
import { setAddress, setEmail, setEmirates, setFName, setLName, setPackage, setPassword, setPhone } from '../../redux/slice/userSlice'
import axios from 'axios'
import backendIP from '../../backendIP'
import { setLoginStatus, setRole } from '../../redux/slice/authSlice'
import { useNavigate } from 'react-router-dom'
import { CheckCircleOutline } from '@mui/icons-material'
import Footer from '../common/Footer'

function Subscribe() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { fname, lname, phone, address, emirates, packages, email, password } = useSelector(state => state.user)

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
        <div>
            <NavBar />
            <div className="flex flex-col lg:flex-row w-full h-fit lg:p-4">
                <div className="h-1/2 lg:h-auto w-full lg:w-1/2 px-[10%] py-10 pt-12 lg:pl-[67px] lg:pt-[27px] bg-black text-white space-y-10 ">
                    <h2 className='text-4xl font-medium '>Package</h2>
                    <div className="flex flex-col justify-center lg:justify-start gap-10">

                        <button onClick={() => { dispatch(setPackage(1)) }} className={`${packages === 1 ? 'border-[#FEDE00] border-2 text-[#FEDE00]' : 'hover:border-2 border-white'} w-full lg:w-[328px] h-24 rounded-3xl border   flex justify-between items-center p-4 gap-2`}>
                            <CheckCircleOutline />
                            <div className="flex flex-col items-start justify-center gap-2 h-full">
                                <div className=""></div>
                                <span className='text-lg font-medium'>Monthly</span>
                                <span className='text-md'>Billed monthly</span>
                            </div>
                            <div className="text-xl font-medium">145 AED/<span className='font-normal'>mo</span></div>
                        </button>

                        <button onClick={() => { dispatch(setPackage(2)) }} className={`${packages === 2 ? 'border-[#FEDE00] border-2 text-[#FEDE00]' : 'hover:border-2 border-white'} w-full lg:w-[328px] h-24 rounded-3xl border  flex justify-between items-center p-4 gap-2`}>
                            <CheckCircleOutline />
                            <div className="flex flex-col items-start justify-center gap-2 h-full">
                                <div className=""></div>
                                <span className='text-lg font-medium'>6 Month</span>
                                <span className='text-md'>Billed 6 month</span>
                            </div>
                            <div className="text-xl font-medium">700 AED/<span className='font-normal'>6 mo</span></div>
                        </button>

                        <button onClick={() => { dispatch(setPackage(3)) }} className={`${packages === 3 ? 'border-[#FEDE00] border-2 text-[#FEDE00]' : 'hover:border-2 border-white'} w-full lg:w-[328px] h-24 rounded-3xl border  flex justify-between items-center p-4 gap-2`}>
                            <CheckCircleOutline />
                            <div className="flex flex-col items-start justify-center gap-2 h-full">
                                <div className=""></div>
                                <span className='text-lg font-medium'>Yearly</span>
                                <span className='text-md'>Billed yearly</span>
                            </div>
                            <div className="text-xl font-medium">1100 AED/<span className='font-normal'>yr</span></div>
                        </button>

                    </div>
                </div>
                <div className="h-1/2 lg:h-full w-full lg:w-1/2 px-[5%] pt-5 pb-3 bg-[#F5F5F5] space-y-3">
                    <h2 className='text-4xl font-medium '>Checkout</h2>

                    <form onSubmit={e => { e.preventDefault(); formHandler() }} className="space-y-2">

                        <div className="flex justify-between gap-5 flex-wrap">
                            <div className="w-full lg:w-3/6 space-y-2">
                                <label className='text-lg' htmlFor="">First Name</label>
                                <input value={fname} onChange={e => dispatch(setFName(e.target.value))} required className='h-12 w-full rounded-2xl border outline-none border-[#BABCBB] pl-3' type="text" />
                            </div>
                            <div className="w-full lg:w-2/6 space-y-2">
                                <label className='text-lg' htmlFor="">Last Name</label>
                                <input value={lname} onChange={e => dispatch(setLName(e.target.value))} required className='h-12 w-full rounded-2xl border outline-none border-[#BABCBB] pl-3' type="text" />
                            </div>
                        </div>

                        <div className="flex justify-between gap-5 flex-wrap">
                            <div className="w-full lg:w-3/6 space-y-2">
                                <label className='text-lg' htmlFor="">Phone</label>
                                <input value={phone} onChange={e => dispatch(setPhone(e.target.value))} required className='h-12 w-full rounded-2xl border outline-none border-[#BABCBB] pl-3' type={'tel'} />
                            </div>
                            <div className="w-full lg:w-2/6 space-y-2">
                                <label className='text-lg' htmlFor="">Emirate</label>
                                <select value={emirates} onChange={e => dispatch(setEmirates(e.target.value))} required className='h-12 w-full rounded-2xl border outline-none border-[#BABCBB] pl-3'  >
                                    <option value="">Select Emirates</option>
                                    <option value='Dubai'>Dubai</option>
                                    <option value='Abu Dhabi'>Abu Dhabi</option>
                                    <option value='Sharjah'>Sharjah</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className='text-lg' htmlFor="">Address</label>
                            <div className="">
                                <textarea value={address} onChange={e => dispatch(setAddress(e.target.value))} required className='h-24 w-full rounded-2xl border outline-none border-[#BABCBB] pl-3' />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className='text-lg' htmlFor="">Email</label>
                            <div className="">
                                <input value={email} onChange={e => dispatch(setEmail(e.target.value))} required className='h-12 w-full lg:w-3/6 rounded-2xl border outline-none border-[#BABCBB] pl-3' type={'email'} />
                            </div>
                        </div>

                        <div className="flex justify-between gap-5 flex-wrap">
                            <div className="w-full lg:w-[45%] space-y-2">
                                <label className='text-lg' htmlFor="">Password</label>
                                <input value={password} onChange={e => dispatch(setPassword(e.target.value))} required className='h-12 w-full rounded-2xl border outline-none border-[#BABCBB] pl-3' type="password" />
                            </div>
                            <div className="w-full lg:w-[45%] space-y-2">
                                <label className='text-lg' htmlFor="">Confirm Password</label>
                                <input required className='h-12 w-full rounded-2xl border outline-none border-[#BABCBB] pl-3' type="password" />
                            </div>
                        </div>
                        <button type='submit' className='h-12 px-2 bg-black text-white rounded-2xl text-3xl hover:rounded-xl duration-200'>Order</button>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Subscribe