import React from 'react'
import { useState } from 'react';

const MyCourses = () => {
    const [courses, setCourses] = useState([
        { id: 1, name: 'Beginner Course', status: 'Applied', fullName: 'John Doe', dateOfBirth: '1990-01-01', address: '123 Main St', gender: 'Male', phone: '123-456-7890', email: 'john@example.com' },
        { id: 2, name: 'Advanced Course', status: 'Applied', fullName: 'Jane Smith', dateOfBirth: '1985-05-15', address: '456 Oak St', gender: 'Female', phone: '987-654-3210', email: 'jane@example.com' },
        { id: 3, name: 'Intermediate Course', status: 'Enrolled', fullName: 'Alex Johnson', dateOfBirth: '1988-09-20', address: '789 Elm St', gender: 'Other', phone: '456-789-0123', email: 'alex@example.com' },
      ]);
      const [editingCourse, setEditingCourse] = useState(null);
    
      const handleDelete = (id) => {
        setCourses(courses.filter(course => course.id !== id));
      };
    
      const handleEdit = (id) => {
        const courseToEdit = courses.find(course => course.id === id);
        setEditingCourse(courseToEdit);
      };
    
      const handleCloseEditForm = () => {
        setEditingCourse(null);
      };
    
      return (
        <div className="bg-gray-100 min-h-screen">
          <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-semibold mb-4">Your Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map(course => (
                <div key={course.id} className="bg-white p-6 rounded-lg shadow-md">
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
                  <div className="flex justify-between">
                    <button onClick={() => handleEdit(course.id)} className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 mr-2">Edit</button>
                    <button onClick={() => handleDelete(course.id)} className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Enrollment Form for Editing */}
          {editingCourse && (
            <EnrollmentForm course={editingCourse} onClose={handleCloseEditForm} />
          )}
        </div>
      );
    };
  const EnrollmentForm = ({ onClose }) => {
      const handleSubmit = (event) => {
        event.preventDefault();
        // Add your form submission logic here
      };
    
      return (
        <div className="fixed w-screen inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white w-[500px] p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Enrollment Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="fullName">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="border border-gray-300 rounded px-4 py-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="dateOfBirth">
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  className="border border-gray-300 rounded px-4 py-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="gender">
                  Gender
                </label>
                <select id="gender" name="gender" className="border border-gray-300 rounded px-4 py-2 w-full" required>
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="address">
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  className="border border-gray-300 rounded px-4 py-2 w-full"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="border border-gray-300 rounded px-4 py-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="border border-gray-300 rounded px-4 py-2 w-full"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mr-2">Update</button>
                <button onClick={onClose} className="bg-gray-300 text-gray-800 py-2 px-4 rounded hover:bg-gray-400">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      );
    };
export default MyCourses