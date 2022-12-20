import React from 'react'
import Footer from '../common/Footer'
import NavBar from '../common/NavBar'

function Subscribe() {


  const formHandler = () =>{
    window.alert("Progressing")
  }

  return (
    <div className='font-jost'>
      <NavBar />
      <div className="px-[10%] mt-36 mb-24">
        <h1 className='text-center text-4xl font-semibold'>Get started by contacting one of our<br /> offices, or fill out the form below.</h1>

        <form className='w-full lg:w-[800px] mx-auto   border-[#BABCBB] mt-5 space-y-5' onSubmit={e=>{e.preventDefault();formHandler();}}>

          <div className="space-y-2">
            <label htmlFor="">Name</label>
            <div className="flex justify-between gap-5 flex-wrap">
              <input required className='h-12 w-full lg:w-96 rounded-md border outline-none border-[#BABCBB] pl-3' placeholder='First Name' type="text" />
              <input required className='h-12 w-full lg:w-96 rounded-md border outline-none border-[#BABCBB] pl-3' placeholder='Second Name' type="text" />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="">Phone</label>
            <div className="">
              <input required className='h-12 w-full rounded-md border outline-none border-[#BABCBB] pl-3' placeholder='Phone No' type="tel" />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="">Address</label>
            <div className="space-y-3">
            <input required className='h-12 w-full rounded-md border outline-none border-[#BABCBB] pl-3' placeholder='Address' type="text" />
            <select required className='h-12 w-48 rounded-md border outline-none border-[#BABCBB] p-3' name="" id="">
              <option value="">Select Emirates</option>
              <option value='Abu Dhabi'>Abu Dhabi</option>
              <option value='Dubai'>Dubai</option>
              <option value='Sharjah'>Sharjah</option>
              <option value='Ajman'>Ajman</option>
              <option value='Umm Al-Quwain'>Umm Al-Quwain</option>
              <option value='Fujairah'>Fujairah</option>
              <option value='Ras Al Khaimah'>Ras Al Khaimah</option>
            </select>
            </div>
          </div>

          


          <div className="space-y-2">
            <label htmlFor="">Package</label>
            <div className="flex gap-3">
              <div className="">
                <input className='rounded-md border outline-none border-[#BABCBB] p-3' type={'radio'} name='package' id='1' />
                <label htmlFor="1"> Three Months</label>
              </div>
              <div className="">
                <input  className='rounded-md border outline-none border-[#BABCBB] p-3' type={'radio'} name='package' id='2' />
                <label htmlFor="2"> Six Months</label>
              </div>
              <div className="">
                <input className='rounded-md border outline-none border-[#BABCBB] p-3' type={'radio'} name='package' id='3' />
                <label htmlFor="3"> Twelve Months</label>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="">Email</label>
            <div className="">
              <input required className='h-12 w-full rounded-md border outline-none border-[#BABCBB] pl-3' placeholder='Email' type="email" />
            </div>
          </div>


          <div className="space-y-2">
            <label htmlFor="">Password</label>
            <div className="flex justify-between gap-5 flex-wrap">
              <input minLength={8} required className='h-12 w-full lg:w-96 rounded-md border outline-none border-[#BABCBB] pl-3' placeholder='Password' type="password" />
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