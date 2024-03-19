import React from 'react';
import homeimage from '../assets/images/home.jpg'

const ChessAcademy = () => {
  return (
    <div className="chess-academy flex flex-col mt-[10vh] min-h-screen bg-gray-100">
      <header className="flex flex-col lg:flex-row bg-gray-800 text-white">
        <div className="flex-1 px-4 py-10 lg:px-8">
          <h1 className="text-5xl mt-50px font-bold">Unlock your chess potential with Chess Academy</h1>
          <p className="text-gray-400 text-lg mt-4">Learn from the best chess instructors and take your game to the next level.</p>
            <div className="flex items-center px-4 py-10 lg:px-8">
            <a href="#" className="text-base font-medium hover:text-gray-200 px-4 py-2 rounded-md bg-blue-600">Explore</a>
            <a href="#" className="text-base font-medium hover:text-gray-200 px-4 py-2 rounded-md ml-4 border border-white">Sign Up</a>
            </div>
        </div>
        <div>
            <img src={homeimage} alt="homeimage"className='w-[600px] h-[400px] px-[-10px]'></img>
        </div>
      </header>
      <main className="flex-grow flex flex-col px-4 py-8 lg:px-8">
        <h2 className="text-2xl font-bold mb-4">About Us</h2>
        <p className="text-gray-700 mb-8">
          Chess Academy is a premier chess instruction platform dedicated to helping players of all skill levels improve their game. We offer a variety of chess courses, taught by experienced and passionate instructors.
        </p>
        <h2 className="text-2xl font-bold mb-4">Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-bold mb-2">Beginner Chess</h3>
            <p className="text-gray-700 mb-4">Learn the fundamentals of chess, including piece movement, basic tactics, and key chess principles.</p>
            <a href="#" className="text-blue-600 hover:underline">Enroll Now</a>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-bold mb-2">Intermediate Chess</h3>
            <p className="text-gray-700 mb-4">Sharpen your chess skills with intermediate tactics, positional understanding, and strategic thinking.</p>
            <a href="#" className="text-blue-600 hover:underline">Enroll Now</a>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-bold mb-2">Advanced Chess</h3>
            <p className="text-gray-700 mb-4">Take your chess game to the next level with advanced topics, endgame play, and opening repertoire.</p>
            <a href="#" className="text-blue-600 hover:underline">Enroll Now</a>
          </div>
        </div>
      </main>
      
    </div>
  );
};

export default ChessAcademy;
