import React from 'react'
import { useNavigate } from 'react-router-dom'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
            <div className="hidden lg:block">
                <MargueSlider slidesToShow={4}/>
            </div>
            <div className="hidden md:block lg:hidden">
                <MargueSlider slidesToShow={3}/>
            </div>

            <div className="md:hidden">
                <MargueSlider slidesToShow={2}/>
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

const MargueSlider = ({slidesToShow}) => {
    const settings = {
        infinite: true,
        slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 1000,
        cssEase: "linear",
    };
    return (
        <Slider {...settings} className="margue w-full border-y border-white ">
            <SingleSlide title={'Channels'} count={'22000+'} />
            <SingleSlide title={'Movies'} count={'8000+'} />
            <SingleSlide title={'Sports'} count={'1000+'} />
            <SingleSlide title={'Live Channels'} count={'5000+'} />

            <SingleSlide title={'Channels'} count={'22000+'} />
            <SingleSlide title={'Movies'} count={'8000+'} />
            <SingleSlide title={'Sports'} count={'1000+'} />
            <SingleSlide title={'Live Channels'} count={'5000+'} />

            <SingleSlide title={'Channels'} count={'22000+'} />
            <SingleSlide title={'Movies'} count={'8000+'} />
            <SingleSlide title={'Sports'} count={'1000+'} />
            <SingleSlide title={'Live Channels'} count={'5000+'} />
        </Slider>
    )
}

const SingleSlide = ({title,count}) => (
    <div className="py-5">
        <div className="flex flex-col justify-center gap-5">
            <span className='text-xl md:text-2xl font-medium'>{title}</span>
            <h2 className='text-4xl md:text-7xl font-bold'>{count}</h2>
        </div>
    </div>
)