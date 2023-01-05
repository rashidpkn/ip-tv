import React, { useEffect } from 'react'
import Footer from '../common/Footer'
import NavBar from '../common/NavBar'

import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';
import Screen3 from './components/Screen3';
import Screen4 from './components/Screen4';
import Screen5 from './components/Screen5';
import 'aos/dist/aos.css'
import Aos from 'aos';
import { useSelector } from 'react-redux';

function Home() {
  Aos.init()
  const {menu} = useSelector(state=>state.util)
  useEffect(() => {
    if(menu){
        document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'visible'
    }

  }, [menu])
  
  return (
    <div className={`  font-inter w-full overflow-hidden`}>
      <NavBar />
      <div  className={`${menu && 'blur-sm'}`}>
        <Screen1 />
        <Screen2 />
        <Screen3 />
        <Screen4 />
        <Screen5 />
      </div>
      <Footer />
    </div>
  )
}

export default Home