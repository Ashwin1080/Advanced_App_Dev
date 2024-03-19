import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HouseDoor, Envelope, PersonCircle, Bank, Cast, CaretDown } from 'react-bootstrap-icons'; // Importing Bootstrap icons
import logo from '../../assets/images/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    {
      name: 'Dashboard',
      path: '/userdashboard',
      icon: <HouseDoor size={20} />, // Bootstrap Home Icon
    },
    {
      name:'Courses',
      path:'/courses',
      icon:<Cast size={20} />,
    },
    {
      name:'Institutes',
      path:'/institues',
      icon:<Bank size={20}/>,
    },
    
    {
      name: 'user',
      path: '/',
      icon: <PersonCircle size={20} />,
      dropdown: [
        
        { name: 'Profile', path:'/profile'},
        { name: 'Logout', path: '/login' },
      ]
    }
  ];

  return (
    <div className="relative bg-white-400 h-[10vh] w-80vw py-[10px]">
      <div className="absolute inset-x-0 top-0 flex justify-between items-center px-4 py-3 shadow-lg transition-all duration-300 ease-in-out">
        <div className="text-3xl font-bold"><img className='w-[200px] h-[5vh]' src={logo} alt="logo"></img></div>
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
            <React.Fragment key={index}>
              {link.dropdown ? (
                <div className="relative">
                  <button onClick={toggleMenu} className="text-black flex items-center hover:bg-gray-300 px-3 py-2 rounded-md transition-all duration-300 ease-in-out">
                    {link.icon}
                    <span className="ml-2">{link.name}</span>
                    <CaretDown size={20} />
                  </button>
                  {isOpen && (
                    <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md w-40">
                      {link.dropdown.map((sublink, subIndex) => (
                        <NavLink
                          key={subIndex}
                          to={sublink.path}
                          activeClassName="font-bold"
                          className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 transition duration-300 ease-in-out"
                          onClick={() => setIsOpen(false)}
                        >
                          {sublink.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  to={link.path}
                  activeClassName="shadow-md font-bold"
                  className="text-black flex items-center hover:bg-gray-300 px-3 py-2 rounded-md transition-all duration-300 ease-in-out"
                >
                  {link.icon}
                  <span className="ml-2">{link.name}</span>
                </NavLink>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } absolute top-[5vh] inset-x-0 bg-gray-400 px-4 py-2 md:hidden`}
      >
        {links.map((link, index) => (
          <React.Fragment key={index}>
            {link.dropdown ? (
              <div className="relative">
                <button onClick={toggleMenu} className="text-black flex items-center hover:bg-gray-300 py-2 rounded-md transition-all duration-300 ease-in-out">
                  {link.icon}
                  <span className="ml-2">{link.name}</span>
                  <CaretDown size={5} />
                </button>
                {isOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md w-40">
                    {link.dropdown.map((sublink, subIndex) => (
                      <NavLink
                        key={subIndex}
                        to={sublink.path}
                        activeClassName="font-bold"
                        className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 transition duration-300 ease-in-out"
                        onClick={() => setIsOpen(false)}
                      >
                        {sublink.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                to={link.path}
                activeClassName="shadow-md font-bold"
                className="block text-black flex items-center hover:bg-gray-300 py-2 rounded-md transition-all duration-300 ease-in-out"
                onClick={toggleMenu}
              >
                {link.icon}
                <span className="ml-2"> {link.name} </span>
              </NavLink>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
