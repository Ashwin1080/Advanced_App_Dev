import React from 'react';

export const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="card w-64 h-72 p-0 m-0 text-center flex flex-col items-center justify-center gap-3  border border-black-300 rounded-xl">
        <span className="card__title text-3xl font-bold text-gray-800">Login</span>
        <form className="card__form flex flex-col gap-2">
          <input className="px-2 py-1.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500" type="text" placeholder="Email" />
          <input className="px-2 py-1.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500" type="password" placeholder="Password" />
          <button className="sign-up bg-gray-800 text-white py-2 rounded-lg font-bold hover:opacity-80">Login</button>
        </form>
      </div>
    </div>
  );
};
