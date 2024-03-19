import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-black text-white py-4 w-screen">
      <div className="w-screen">
        <div className="flex flex-wrap items-center justify-between">
          <div className="md:w-1/4">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
          </div>
          <div className="md:w-1/4 text-right">
            <a href="#" className="mr-4 hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
