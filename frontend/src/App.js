import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import AdminDashboard from './pages/admin'
import FAQS from './pages/FAQ'

import Home from './pages/Home'
import Login from './pages/login'
import Subscribe from './pages/subscribe'
import UserDashboard from './pages/user'
// import Test from './pages/user'




function App() {
    const {loginStatus,role} = useSelector(state=>state.auth)
  return (
    <div className='font-inter'>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/faq' element={<FAQS/>} />
            <Route path='/subscribe' element={loginStatus?<Navigate replace to={'/dashboard'} /> : <Subscribe/>}  /> 
            <Route path='/login'     element={loginStatus?<Navigate replace to={'/dashboard'} /> : <Login /> }  /> 
            <Route path='/dashboard' element={loginStatus ? (role === 'admin' ? <AdminDashboard/> : <UserDashboard/>) : <Navigate replace to={'/login'} />} />
            {/* <Route path='/test' element={<Test />} /> */}
        </Routes>

    </div>
  )
}

export default App