import React from 'react';
import { Link } from 'react-router-dom';

export const SignUp = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="card w-80 h-auto p-6 text-center flex flex-col items-center justify-center gap-6 border border-black rounded-xl">
        <span className="card__title text-4xl font-bold text-gray-800 mb-5">Sign Up</span>
        <form className="card__form flex flex-col gap-4">
          <div className="flex flex-col ml-3">
            <label htmlFor="name" className="text-gray-700 text-left mb-2">Name</label>
            <input id="name" className="input-field w-[275px] h-[30px] rounded-lg border border-black-300 mb-4" type="text" placeholder="Name" />
          </div>
          <div className="flex flex-col ml-3">
            <label htmlFor="email" className="text-gray-700 text-left mb-2">Email</label>
            <input id="email" className="input-field w-[275px] h-[30px] rounded-lg border border-black-300 mb-4" type="text" placeholder="Email" />
          </div>
          <div className="flex flex-col ml-3">
            <label htmlFor="password" className="text-gray-700 text-left mb-2">Password</label>
            <input id="password" className="input-field w-[275px] h-[30px] rounded-lg border border-black-300 mb-4" type="password" placeholder="Password" />
          </div>
          <Link to='/login'><button className="btn-login">Sign Up</button></Link>
        </form>
        <div className="text-gray-600">Already have an account? <Link to='/login' className="text-blue-500 font-semibold">Login</Link></div>
      </div>
    </div>
  );
};
