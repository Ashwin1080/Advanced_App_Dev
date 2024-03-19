import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Public/Footer'
import Sidebar from '../components/Admin/Sidebar'

const Adminweblayout = () => {
  return (
    <div>
    <div className="flex">
        <Sidebar/>
        <div className="flex-1 p-4">
          <Outlet/>
        </div>
    </div>
        <Footer/>
    </div>
  )
}

export default Adminweblayout