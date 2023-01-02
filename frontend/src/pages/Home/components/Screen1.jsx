import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Screen1() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="screen1 w-full h-screen md:h-[calc(100vh-6rem)] overflow-hidden relative">
      <Slider {...settings}>
        <div className="relative hidden">
          <div className="block md:hidden">
            <img src="/image/home/mob-cricket.png" className=' object-cover w-full h-screen' alt="" />
          </div>
          <div className="hidden md:block">
            <img src="/image/home/cricket.png" className=' w-full h-screen' alt="" />
          </div>
          <div className="absolute top-0 w-full h-full z-40 flex flex-col justify-center lg:justify-start lg:mt-20 text-center gap-5 text-white">
            <h2 className='text-3xl md:text-5xl font-medium font-inter'>Just saw the most incredible catch in cricket history!</h2>
            <h2 className='text-3xl md:text-5xl font-medium font-inter'>#Cricket #Sports</h2>
          </div>
        </div>
      </Slider>

    </div>
  )
}

export default Screen1