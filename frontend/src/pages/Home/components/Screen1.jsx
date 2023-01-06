import React from 'react'
// import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Screen1() {
  // const settings = {
  //   dots: true,  
  //   infinite: true,
  //   speed: 500,
  //   fade: true,
  //   cssEase: 'linear',
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  // };

  return (
    <div className="screen1 w-full h-[calc(100vh-3.5rem)] md:h-[calc(100vh-6rem)] overflow-hidden relative mt-14 lg:mt-0">
      <div className="block md:hidden h-full">
        <img src="/image/home/banner-mob.png" className='h-full w-full object-cover object-top' alt="" />
      </div>
      {/* <Slider {...settings} className='hidden md:block h-full'> */}
        <div className="relative h-full hidden md:block ">
          <img src="/image/home/banner.png" className='h-full object-cover object-top w-full' alt="" />
          <div className="absolute top-0 w-full h-full z-40 flex flex-col justify-start mt-20 text-center gap-5 text-white">
            <h2 className='text-3xl md:text-5xl font-medium font-inter'>Just saw the most incredible catch in cricket history!</h2>
            <h2 className='text-3xl md:text-5xl font-medium font-inter'>#Football #Sports</h2>
          </div>
        </div>
      {/* </Slider> */}

    </div>
  )
}

export default Screen1