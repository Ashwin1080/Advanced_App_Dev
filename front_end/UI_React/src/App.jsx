import React, { Suspense, lazy } from "react"
import { BrowserRouter, Routes ,Route} from "react-router-dom"

import { Login } from "./pages/Auth/Login"
import { Register } from "./pages/Auth/Register"

import Weblayout from "./layout/Userweblayout"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import ProfilePage from "./pages/User/Profile"
import { SignUp } from "./pages/Auth/Signup"
import Courses from "./pages/User/Courses"
import InstitutesPage from "./pages/User/Institutes"
import UserDashboard from "./pages/User/UserDashboard"
import Adminweblayout from "./layout/Adminweblayout"
import CoursesPage from "./pages/Admin/Coursespage"
import StudentsPage from "./pages/Admin/Studentspage"
import Institutes from "./pages/Admin/Institutespage"
import SharedWeblayout from "./layout/SharedWeblayout"
import MyCourses from "./pages/User/MyCourses"
import Loader from "./components/Public/Loader"


function App() {

  return (
    <>
      <BrowserRouter>
      <Suspense fallback={<Loader/>}>
      <Routes>
        <Route element={<SharedWeblayout/>}>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/login' element={<Login/>} ></Route>
          <Route path='/register' element={<Register/>} ></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/contact' element={<Contact/>} ></Route>
          
        </Route>
        <Route element={<Weblayout/>}>
          <Route path='/contact' element={<Contact/>} ></Route>
          <Route path='/profile' element={<ProfilePage/>} ></Route>
          <Route path='/courses' element={<Courses/>}></Route>
          <Route path='/mycourses' element={<MyCourses/>}></Route>
          <Route path='/institues' element={<InstitutesPage/>}></Route>
          <Route path='/userdashboard' element={<UserDashboard/>}></Route>
        </Route>
        <Route element={<Adminweblayout/>}>
            <Route path="/admin/courses" element={<CoursesPage/>}></Route>
            <Route path="/admin/institutes" element={<Institutes/>}></Route>
            <Route path="/admin/students" element={<StudentsPage/>}></Route>
        </Route>
      </Routes>
      </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
