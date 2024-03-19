import React, { useState } from 'react';

const StudentsPage = () => {
  // State to manage students data
  const [students, setStudents] = useState([
    {
      id: 1,
      fullName: 'John Doe',
      dateOfBirth: '1990-05-15',
      gender: 'Male',
      address: '123 Main St, New York',
      contactInfo: {
        phone: '123-456-7890',
        email: 'john@example.com',
      },
    },
    // Add more student data as needed
  ]);

  // Function to handle adding a new student
  const handleAddStudent = () => {
    // Implement logic to add a new student
    // You can open a modal or navigate to another page to add a new student
    console.log('Add Student functionality');
  };

  // Function to handle editing a student
  const handleEditStudent = (id) => {
    // Implement logic to edit a student
    console.log('Edit Student with ID:', id);
  };

  // Function to handle deleting a student
  const handleDeleteStudent = (id) => {
    // Implement logic to delete a student
    setStudents(students.filter(student => student.id !== id));
    console.log('Delete Student with ID:', id);
  };

  return (
    <div>
      <h2>Students Page</h2>
      {/* Add functionality to manage students here */}
      <div className="flex justify-between mb-4">
        <h3 className="text-lg font-semibold">Students</h3>
        <button onClick={handleAddStudent} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Add Student</button>
      </div>
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Full Name</th>
            <th className="border border-gray-300 px-4 py-2">Date of Birth</th>
            <th className="border border-gray-300 px-4 py-2">Gender</th>
            <th className="border border-gray-300 px-4 py-2">Address</th>
            <th className="border border-gray-300 px-4 py-2">Contact Information</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through students data and display each student */}
          {students.map(student => (
            <tr key={student.id}>
              <td className="border border-gray-300 px-4 py-2">{student.fullName}</td>
              <td className="border border-gray-300 px-4 py-2">{student.dateOfBirth}</td>
              <td className="border border-gray-300 px-4 py-2">{student.gender}</td>
              <td className="border border-gray-300 px-4 py-2">{student.address}</td>
              <td className="border border-gray-300 px-4 py-2">
                Phone: {student.contactInfo.phone}<br />
                Email: {student.contactInfo.email}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <button onClick={() => handleEditStudent(student.id)} className="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-600">Edit</button>
                <button onClick={() => handleDeleteStudent(student.id)} className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 ml-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsPage;
