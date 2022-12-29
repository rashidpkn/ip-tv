import React from 'react'
import Footer from '../common/Footer'
import NavBar from '../common/NavBar'

import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';
import Screen3 from './components/Screen3';
import Screen4 from './components/Screen4';
import Screen5 from './components/Screen5';
import 'aos/dist/aos.css'
import Aos from 'aos';

function Home() {
  Aos.init()
  return (
    <div className='font-jost'>
      <NavBar />
      <Screen1 />
      <Screen2  />
      <Screen3  />
      <Screen4 />
      <Screen5  />
      <Footer />
    </div>
  )
}

export default Home