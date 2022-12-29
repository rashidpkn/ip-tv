import React from 'react'
import { useNavigate } from 'react-router-dom'


function Screen2() {
    const navigate = useNavigate()
    return (
        <div className=' px-[10%] py-[100px]  text-white bg-center bg-cover bg-no-repeat space-y-5 h-max' style={{ backgroundImage: 'url("/image/home/screen2.webp")' }}>
            <div className="flex justify-center items-center flex-col lg:flex-row gap-y-10">
                <div data-aos="fade-right" data-aos-duration="2000" className="w-full lg:w-1/2 space-y-5">
                    <h2 className='text-3xl font-semibold'>WHY CHOOSE MEGA MAX</h2>
                    <h2 className='text-5xl font-semibold'>THE BOX SCORE DOESN’T LIE</h2>
                </div>
                <ul data-aos="fade-left" data-aos-duration="2000" className="w-full lg:w-1/2 space-y-5 text-3xl font-semibold list-disc">
                    <li><p>We include a brand new original FireStick with your subscription which makes any TV a smart TV, and you can use Netflix and Amazon Prime through your FireStick .</p></li>
                    <li><p>Your FireStick controller will become your main remote. It will control your TV and the FireStick, so no need for two controllers.</p></li>
                    <li><p>Because the app is pre-installed on a FireStick it travels with you. Take it to a friends house for the big game or to a hotel when you travel. It works worldwide simply plug it into the tv and start watching.</p></li>
                </ul>
            </div>
            <div className="margue h-[300px]  w-full border-y border-white">
                    
            </div>
            <button className={`w-[280px] h-[70px] border border-white float-right  flex group`} onClick={()=>{navigate('/subscribe')}}>
                <div className="h-full w-4/5 flex relative">
                    <h2 className={`absolute h-full w-full flex justify-center items-center group-hover:text-black text-xl font-medium`}>SUBSCRIBE NOW</h2>
                    <div className="flex justify-center items-center h-full w-full group-hover:w-0 duration-500"></div>
                    <div className={`flex justify-center items-center h-full bg-white w-0 group-hover:w-full duration-500`}></div>
                </div>
                <div className="h-full w-1/5 bg-white"></div>
            </button>
        </div>
    )
}

export default Screen2