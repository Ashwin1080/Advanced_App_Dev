import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HouseDoor, Envelope, PersonCircle } from 'react-bootstrap-icons'; // Importing Bootstrap icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    {
      name: 'Home',
      path: '/',
      icon: <HouseDoor size={20} />, // Bootstrap Home Icon
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: <Envelope size={20} />, // Bootstrap Contact Icon
    },
    {
      name: 'Login',
      path: '/login',
      icon: <PersonCircle size={20} />, // Bootstrap Login Icon
    }
  ];

  return (
    <div className="relative bg-gray-400 h-[10vh] w-screen">
      <div className="absolute inset-x-0 top-0 flex justify-between items-center px-4 py-3 shadow-lg transition-all duration-300 ease-in-out">
        <div className="text-black">Quiz App</div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none focus:ring-2 focus:ring-black"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              )}
            </svg>
          </button>
        </div>
        <nav className="hidden md:flex flex-grow justify-end items-center space-x-4">
          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              activeClassName="shadow-md font-bold"
              className="text-black flex items-center hover:bg-gray-300 px-3 py-2 rounded-md transition-all duration-300 ease-in-out"
            >
              {link.icon}
              <span className="ml-2">{link.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } absolute top-[5vh] inset-x-0 bg-gray-400 px-4 py-2 md:hidden`}
      >
        {links.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            activeClassName="shadow-md font-bold"
            className="block text-black flex items-center hover:bg-gray-300 py-2 rounded-md transition-all duration-300 ease-in-out"
            onClick={toggleMenu}
          >
            {link.icon}
            <span className="ml-2">{link.name}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
