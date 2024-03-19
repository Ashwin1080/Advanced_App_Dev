import React from 'react';
import homeimage from '../assets/images/home.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  // Dummy data for achievements
  const achievements = [
    { title: "Grandmaster Certification", description: "Awarded to top-performing students.", date: "March 2023" },
    { title: "Chess Championship Winner", description: "Won the national chess championship.", date: "January 2024" }
  ];

  // Dummy data for feedback
  const feedbacks = [
    { name: "Alice", rating: 5, comment: "Excellent platform! I've improved my game significantly.", date: "March 2023" },
    { name: "Bob", rating: 4, comment: "Great instructors and interactive courses.", date: "February 2024" }
  ];

  return (
    <div className="chess-academy mt-[15px] flex flex-col min-h-screen bg-gray-100">
      <header className="flex flex-col lg:flex-row bg-gray-800 text-white">
        <div className="flex-1 px-4 py-10 lg:px-8">
          <h1 className="text-5xl mt-50px font-bold">Unlock your chess potential with Chess Academy</h1>
          <p className="text-gray-400 text-lg mt-4">Learn from the best chess instructors and take your game to the next level.</p>
            <div className="flex items-center px-4 py-10 lg:px-8">
            <Link to='/login'><button className="text-base font-medium hover:text-gray-200 px-4 py-2 rounded-md bg-blue-600">Explore</button></Link>
            <Link to='/signup'><button className="text-base font-medium hover:text-gray-200 px-4 py-2 rounded-md bg-white-600">Sign Up</button></Link>
            
            </div>
        </div>
        <div>
            <img src={homeimage} alt="homeimage" className='w-[600px] h-[400px] px-[-10px]'></img>
        </div>
      </header>
      <main className="flex-grow flex flex-col px-4 py-8 lg:px-8">
        <h2 className="text-2xl font-bold mb-4">About Us</h2>
        <p className="text-gray-700 mb-8">
          Chess Academy is a premier chess instruction platform dedicated to helping players of all skill levels improve their game. We offer a variety of chess courses, taught by experienced and passionate instructors.
        </p>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Achievements</h2>
          <ul className="list-disc pl-8">
            {achievements.map((achievement, index) => (
              <li key={index} className="mb-2">
                <h3 className="text-lg font-semibold">{achievement.title}</h3>
                <p className="text-gray-700">{achievement.description} - {achievement.date}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Feedback</h2>
          {feedbacks.map((feedback, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 mb-4">
              <div className="flex items-center mb-2">
                <span className="text-lg font-semibold">{feedback.name}</span>
                <div className="ml-auto flex">
                  {[...Array(feedback.rating)].map((_, index) => (
                    <svg key={index} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 fill-current" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 0l2.938 6.763L20 7.375l-5.281 5.463L16.969 20 10 16.375 3.031 20l1.25-7.162L0 7.375l6.062-.612L10 0z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-2">{feedback.comment}</p>
              <p className="text-gray-500 text-sm">{feedback.date}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
