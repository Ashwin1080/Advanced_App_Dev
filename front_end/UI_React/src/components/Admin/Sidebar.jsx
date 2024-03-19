// Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import image from '../../assets/images/logo.png'
const Sidebar = () => {
  return (
    <div className="bg-gray-200 h-screen w-1/6 p-4">
        <img className='mb-[50px]' src={image}  alt="image"></img>
      <h2 className="text-4xl font-semibold mb-4">Admin Dashboard</h2>
      <ul>
        <li>
          <NavLink to="/admin/courses" activeClassName="font-bold w-[10vh] flex justify-center border border-black-300">Courses</NavLink>
        </li>
        <li>
          <NavLink to="/admin/institutes" activeClassName="font-bold w-1/6 border border-black-300">Institutes</NavLink>
        </li>
        <li>
          <NavLink to="/admin/students" activeClassName="font-bold">Students</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
