import React from 'react'
import Content from './components/Content'
import NavBar from './components/NavBar'

import SideBar from './components/SideBar'


function AdminDashboard() {
  return (
    <div className='flex'>
      <SideBar/>
      <div className="h-screen w-[calc(100%-18rem)]">
        <NavBar/>
        <Content/>
      </div>
    </div>
  )
}

export default AdminDashboard







