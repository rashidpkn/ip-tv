import React from 'react'
import { useNavigate } from 'react-router-dom'

function Screen2() {
    const navigate = useNavigate()
    return (
        <div className=' px-[5%] py-[100px]  text-white bg-center bg-cover bg-no-repeat space-y-5 h-max' style={{ backgroundImage: 'url("/image/home/screen2.webp")' }}>
            <div className="flex justify-center items-center flex-col lg:flex-row gap-y-10">
                <div data-aos="fade-right" data-aos-duration="2000" className="w-full lg:w-1/2 space-y-5">
                    <div className="flex  items-center gap-1">
                        <h2 className='text-2xl lg:text-4xl font-bold'>WHY CHOOSE </h2> <img className='w-[140px] lg:w-[172px]' src="/image/common/logo.png" alt="" />
                    </div>
                    <h2 className='text-5xl lg:text-7xl font-bold'>Watch TV <br className='block lg:hidden' /> on <br className='hidden lg:block ' /> your <br className='block lg:hidden' /> own terms</h2>
                </div>
                <ul data-aos="fade-left" data-aos-duration="2000" className="w-full lg:w-1/2 space-y-5 text-xl font-medium text-justify">
                    <li className='flex justify-start'>
                        <span className="material-symbols-outlined">
                            nest_remote
                        </span>
                        <p className='ml-3'>We include a brand new original FireStick with your subscription which makes any TV a smart TV, and you can use Netflix and Amazon Prime through your FireStick .</p>
                    </li>
                    <li className='flex justify-start'>
                        <span className="material-symbols-outlined">
                            nest_remote
                        </span>
                        <p className='ml-3'>Your FireStick controller will become your main remote. It will control your TV and the FireStick, so no need for two controllers.</p>
                    </li>
                    <li className='flex justify-start'>
                        <span className="material-symbols-outlined">
                            nest_remote
                        </span>
                        <p className='ml-3'>Because the app is pre-installed on a FireStick it travels with you. Take it to a friends house for the big game or to a hotel when you travel. It works worldwide simply plug it into the tv and start watching.</p>
                    </li>
                </ul>
            </div>

            <div className="margue h-[223px]  w-full border-y border-white hidden lg:flex">
                <div className="h-full w-1/4 flex flex-col justify-center gap-5">
                    <span className='text-2xl font-medium'>Channels</span>
                    <h2 className='text-7xl font-bold'>22000+</h2>
                </div>
                <div className="h-full w-1/4 flex flex-col justify-center gap-5">
                    <span className='text-2xl font-medium'>Movies</span>
                    <h2 className='text-7xl font-bold'>8000+</h2>
                </div>
                <div className="h-full w-1/4 flex flex-col justify-center gap-5">
                    <span className='text-2xl font-medium'>Sports</span>
                    <h2 className='text-7xl font-bold'>1000+</h2>
                </div>
                <div className="h-full w-1/4 flex flex-col justify-center gap-5">
                    <span className='text-2xl font-medium'>Live Channels</span>
                    <h2 className='text-7xl font-bold'>5000+</h2>
                </div>
            </div>

            <button data-aos="fade-right" data-aos-duration="2000" className={`w-[280px] h-[70px] border border-white float-right  flex group`} onClick={() => { navigate('/subscribe') }}>
                <div className="h-full w-4/5 flex relative">
                    <h2 className={`absolute h-full w-full flex justify-center items-center group-hover:text-black text-xl font-medium`}>SUBSCRIBE NOW</h2>
                    <div className="flex justify-center items-center h-full w-full group-hover:w-0 duration-500"></div>
                    <div className={`flex justify-center items-center h-full bg-[#FEDE00] w-0 group-hover:w-full duration-500`}></div>
                </div>
                <div className="h-full w-1/5  bg-[#FEDE00] flex justify-center items-center">
                <span className="material-symbols-outlined text-[40px] group-hover:text-black">
                    nest_remote
                </span>
                </div>
            </button>
        </div>
    )
}

export default Screen2