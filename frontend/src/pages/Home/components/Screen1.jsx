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
    <div className="screen1 w-full h-screen overflow-hidden relative">
      <Slider {...settings}>
        <div className="relative">
          <img src="/image/home/cricket.png" className='object-cover w-full h-screen' alt="" />
          <div className="absolute top-0 w-full h-full z-40 flex flex-col justify-center items-center text-center gap-5 text-white">
            <h2 className='text-3xl md:text-5xl font-medium'>Just saw the most incredible catch in cricket history!</h2>
            <h2 className='text-3xl md:text-5xl font-medium'>Empowering Athletes & Families to Build Wealth That Lasts</h2>
          </div>
        </div>
        {/* <div className="">
          <img src="/image/home/poster.webp" className='object-cover w-full h-screen' alt="" />
        </div> */}
      </Slider>

    </div>
  )
}

export default Screen1