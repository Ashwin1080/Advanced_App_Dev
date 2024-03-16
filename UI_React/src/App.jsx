import React, { Suspense, lazy } from "react"
import { BrowserRouter, Routes ,Route} from "react-router-dom"

import { Login } from "./pages/Auth/Login"
import { Register } from "./pages/Auth/Register"

import Weblayout from "./layout/Weblayout"
import Contact from "./pages/Contact"
import Home from "./pages/Home"


function App() {

  return (
    <>
      <BrowserRouter>
      <Suspense fallback='loader'>
      <Routes>
        <Route element={<Weblayout/>}>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/login' element={<Login/>} ></Route>
          <Route path='/register' element={<Register/>} ></Route>
          <Route path='/contact' element={<Contact/>} ></Route>
        </Route>
      </Routes>
      </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
