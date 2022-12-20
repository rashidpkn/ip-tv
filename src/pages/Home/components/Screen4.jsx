import React from 'react'

function Screen4() {
    return (
        <div className='flex flex-col md:flex-row h-full w-full'>
            <div data-aos="fade-right" data-aos-duration="2000" className='w-full md:w-3/4 relative group overflow-hidden'>
                <img  src="/image/home/sports-remote.webp" className='w-full h-full object-cover group-hover:scale-110 duration-500' alt="" />
                <div className="absolute top-20 left-20 text-white space-y-5">
                    <h2 className='text-2xl font-semibold'>Parental Control</h2>
                    <p className='text-base md:text-lg lg:text-2xl pr-20'>Parental control for IPTV can help keep your kids safe while watching TV. 
                        Use tools like content filters and activity reports to block inappropriate channels, 
                        monitor screen time, and set limits on programming. 
                        Promote healthy viewing habits and protect your family with parental control.</p>
                </div>

            </div>
     
            <div data-aos="fade-left" data-aos-duration="2000" className="md:h-full w-full md:w-1/4 flex md:flex-col">
                
                <div className="w-full h-1/2 relative group overflow-hidden">
                    <img className='w-full h-full object-cover group-hover:scale-110 duration-500' src="/image/home/st.webp" alt="" />
                    <div className="absolute top-10 left-10 text-white space-y-5">
                        <h2 className='text-2xl font-semibold'>Latest Movies</h2>
                    </div>
                </div>
                
                <div className= "w-full h-1/2 relative group overflow-hidden">
                    <img className='w-full h-full object-cover group-hover:scale-110 duration-500' src="/image/home/harry.webp" alt="" />
                    <div className="absolute top-10 left-10 text-white space-y-5">
                        <h2 className='text-2xl font-semibold'>Popular</h2>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Screen4