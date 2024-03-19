import React, { useState } from 'react';
import image from '../../assets/images/chess.jpg'
import { Link } from 'react-router-dom';

const UserDashboard = () => {
    const [courses, setCourses] = useState([
      { id: 1, name: 'Beginner Course', status: 'Applied', fullName: 'John Doe', dateOfBirth: '1990-01-01', address: '123 Main St', gender: 'Male', phone: '123-456-7890', email: 'john@example.com' },
      { id: 2, name: 'Advanced Course', status: 'Applied', fullName: 'Jane Smith', dateOfBirth: '1985-05-15', address: '456 Oak St', gender: 'Female', phone: '987-654-3210', email: 'jane@example.com' },
      { id: 3, name: 'Intermediate Course', status: 'Enrolled', fullName: 'Alex Johnson', dateOfBirth: '1988-09-20', address: '789 Elm St', gender: 'Other', phone: '456-789-0123', email: 'alex@example.com' },
    ]);
    const [editingCourse, setEditingCourse] = useState(null);
  
    const handleCloseEditForm = () => {
      setEditingCourse(null);
    };
  
    return (
      <div className="min-h-screen mt-[50px]">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-semibold mb-4">Welcome to Grandmaster gateway!</h2>
          <p className="text-lg text-gray-700 mb-6">We offer a range of chess courses to help you improve your skills. Below are the courses you've applied for or enrolled in:</p>
          
          {/* New Course Section */}
          <section className="mb-12 flex flex-col flex-wrap">
            <h2 className="text-2xl font-bold mb-4">Courses</h2>
            <p className="text-gray-600 mb-8">Explore our wide range of chess courses.</p>
            <div className="flex flex-row gap-4 flex-wrap">
              <div className="card bg-white shadow-md rounded-md">
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">Beginners</h3>
                  <p className="text-gray-600 mb-2">5 min read</p>
                  <p className="mb-4">Master the Fundamentals of Chess</p>
                  <p className="text-gray-600">Learn the basics of chess and improve your gameplay.</p>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Read more &gt;</button>
                </div>
              </div>
              <div className="card bg-white shadow-md rounded-md">
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">Intermediate</h3>
                  <p className="text-gray-600 mb-2">5 min read</p>
                  <p className="mb-4">Take Your Skills to the Next Level</p>
                  <p className="text-gray-600">Enhance your chess strategies and tactics with advanced courses.</p>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Read more &gt;</button>
                </div>
              </div>
              <div className="card bg-white shadow-md rounded-md">
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">Advanced</h3>
                  <p className="text-gray-600 mb-2">5 min read</p>
                  <p className="mb-4">Become a Chess Grandmaster</p>
                  <p className="text-gray-600">Learn advanced chess techniques and compete at the highest level.</p>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Read more &gt;</button>
                </div>
              </div>
            </div>
            <Link to='/courses'><button className="flex justify-center items-center px-4 py-2 bg-blue-500 text-white rounded-md mt-4 w-[100px]">View all</button></Link>
          </section>
            <div class="container mx-auto px-4 py-16 bg-gray-100">
            <div class="flex flex-wrap-reverse justify-center items-center gap-3">
                <img className='w-[300px] h-[200px]' src={image}  alt='image'></img>
                <div class="text-center space-y-4">
                <h1 class="text-3xl font-bold text-gray-800">Empowering chess enthusiasts</h1>
                <p class="text-xl text-gray-600">Through quality education and training programs.</p>
                </div>
            </div>
            </div>

          {/* List of Courses */}
          <h1 className='text-center font-bold text-xl mt-[50px]'>Enrolled Courses</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {courses.map(course => (
              <div key={course.id} className="bg-white p-6 rounded-lg shadow-md border border-black-1000">
                <h3 className="text-xl font-semibold mb-2">{course.name}</h3>
                <p className="text-gray-600 mb-2">Status: {course.status}</p>
                <div className="mb-2">
                  <span className="font-bold">Full Name:</span> {course.fullName}
                </div>
                <div className="mb-2">
                  <span className="font-bold">Date of Birth:</span> {course.dateOfBirth}
                </div>
                <div className="mb-2">
                  <span className="font-bold">Address:</span> {course.address}
                </div>
                <div className="mb-2">
                  <span className="font-bold">Gender:</span> {course.gender}
                </div>
                <div className="mb-2">
                  <span className="font-bold">Phone:</span> {course.phone}
                </div>
                <div className="mb-4">
                  <span className="font-bold">Email:</span> {course.email}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <a href="/mycourses" className="bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-600">View My Courses</a>
          </div>
        </div>
        
        {/* Enrollment Form for Editing */}
        {editingCourse && (
          <EnrollmentForm onClose={handleCloseEditForm} />
        )}
      </div>
    );
  };

export default UserDashboard;
