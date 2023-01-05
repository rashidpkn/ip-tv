import React from 'react'
import NavBar from '../common/NavBar'
import { useDispatch, useSelector } from 'react-redux'
import { setPackage } from '../../redux/slice/userSlice'

import { CheckCircleOutline } from '@mui/icons-material'
import Footer from '../common/Footer'
import GaugeChart from 'react-gauge-chart'

function UserDashboard() {

    const dispatch = useDispatch()
    const { packages, fname, lname } = useSelector(state => state.user)

    return (
        <div>
            <NavBar />
            <div className="flex flex-col lg:flex-row w-full h-fit px-[10%] py-[5%] lg:p-0">

                <div className="h-1/2 lg:h-auto w-full lg:w-1/2 py-10 pt-12 lg:pl-[67px]">
                    <h2 className='text-black font-medium text-2xl'>Hello {fname} {lname}</h2>
                    <h2 className='text-[#D9D9D9] font-medium text-lg'>Welcome Back !</h2>
                    <div className="mt-5 flex flex-col gap-5 w-full">
                        <h2 className='text-black font-medium text-xl underline decoration-[#D9D9D9] underline-offset-4'>Current Plan</h2>
                        <div className="self-center lg:self-start">
                            <GaugeChart
                                formatTextValue={value => `${80} days left`}
                                textColor='#000'
                                style={{ width: '400px' }}
                                nrOfLevels={3}
                                percent={(90 - 80) / 90}
                                colors={['#49FC01', '#FFFB0B', '#FC0100']}
                            />
                        </div>


                    </div>


                </div>
                <div className="h-1/2 lg:h-auto w-full lg:w-1/2 px-[10%] py-10 pt-12 lg:pl-[67px] test space-y-10 shadow-lg">
                    <h2 className='text-2xl font-medium '>Upgrade Plan</h2>
                    <div className="flex flex-col justify-center lg:justify-start gap-10">

                        <button onClick={() => { dispatch(setPackage(1)) }} className={`${Number(packages) === 1 ? 'border-[#FEDE00] border-2 text-[#FEDE00]' : 'hover:border-2'} w-full lg:w-[328px] h-24 rounded-3xl border   flex justify-between items-center p-4 gap-2`}>
                            <CheckCircleOutline />
                            <div className="flex flex-col items-start justify-center gap-2 h-full">
                                <div className=""></div>
                                <span className='text-lg font-medium'>Monthly</span>
                                <span className='text-md'>Billed monthly</span>
                            </div>
                            <div className="text-xl font-medium">145 AED/<span className='font-normal'>mo</span></div>
                        </button>

                        <button onClick={() => { dispatch(setPackage(2)) }} className={`${Number(packages) === 2 ? 'border-[#FEDE00] border-2 text-[#FEDE00]' : 'hover:border-2'} w-full lg:w-[328px] h-24 rounded-3xl border   flex justify-between items-center p-4 gap-2`}>
                            <CheckCircleOutline />
                            <div className="flex flex-col items-start justify-center gap-2 h-full">
                                <div className=""></div>
                                <span className='text-lg font-medium'>6 Month</span>
                                <span className='text-md'>Billed 6 month</span>
                            </div>
                            <div className="text-xl font-medium">700 AED/<span className='font-normal'>6 mo</span></div>
                        </button>

                        <button onClick={() => { dispatch(setPackage(3)) }} className={`${Number(packages) === 3 ? 'border-[#FEDE00] border-2 text-[#FEDE00]' : 'hover:border-2'} w-full lg:w-[328px] h-24 rounded-3xl border   flex justify-between items-center p-4 gap-2`}>
                            <CheckCircleOutline />
                            <div className="flex flex-col items-start justify-center gap-2 h-full">
                                <div className=""></div>
                                <span className='text-lg font-medium'>Yearly</span>
                                <span className='text-md'>Billed yearly</span>
                            </div>
                            <div className="text-xl font-medium">1100 AED/<span className='font-normal'>yr</span></div>
                        </button>

                        <button className='text-xl font-medium bg-[#FEDE00] rounded-2xl h-12 w-48 self-center lg:self-start'>Save & Continue</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default UserDashboard



