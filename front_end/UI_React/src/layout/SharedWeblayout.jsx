import React from 'react'
import Footer from '../components/Public/Footer'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Public/Navbar'

const SharedWeblayout = () => {
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

export default SharedWeblayout