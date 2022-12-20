import React from 'react'
import Footer from '../common/Footer'
import NavBar from '../common/NavBar'

function Login() {

  const formHandler = () =>{
    window.alert("Progressing")
  }

  return (
    <div className='font-jost'>
      <NavBar />
      <div className="px-[10%] mt-36 mb-24">
        <h1 className='text-center text-4xl font-semibold'>Get started by contacting one of our<br /> offices, or fill out the form below.</h1>

        <form className='w-full md:w-[500px] mx-auto   border-[#BABCBB] mt-5 space-y-5' onSubmit={e=>{e.preventDefault();formHandler();}}>        

          <div className="space-y-2">
            <label htmlFor="">Email</label>
            <div className="">
              <input required className='h-12 w-full rounded-md border outline-none border-[#BABCBB] pl-3' placeholder='Email' type="email" />
            </div>
          </div>


          <div className="space-y-2">
            <label htmlFor="">Password</label>
            <div className="">
              <input minLength={8} required className='h-12 w-full rounded-md border outline-none border-[#BABCBB] pl-3' placeholder='password' type="password" />
            </div>
          </div>
          
          <button type="submit" className='h-12 w-28 bg-red-500 rounded-md float-right text-white'>Login</button>

        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Login