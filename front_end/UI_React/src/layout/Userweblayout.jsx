import React from 'react'
import Navbar from '../components/user/Navbar'
import Footer from '../components/Public/Footer'
import { Outlet } from 'react-router-dom'

const Weblayout = () => {
  return (
    <>
    <div className='h-screen w-screen p-0  m-0 flex flex-col  overflow-x-hidden'>
        <Navbar/>
        <div className='flex flex-col overflow-y-scroll overflow-x-hidden'>
            <Outlet/>
        </div>
        <Footer/>
    </div>
    </>
  )
}

export default Weblayout