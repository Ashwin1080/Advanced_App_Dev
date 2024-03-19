// InstitutesPage.jsx

import React, { useState } from 'react';
import InstituteCard from '../../components/user/Institutecard';
const InstitutesPage = () => {
  // Dummy data for institutes (replace with actual data from API)
  const [institutes, setInstitutes] = useState([
    { id: 1, name: "Institute 1", type: "Type 1" },
    { id: 2, name: "Institute 2", type: "Type 2" },
    { id: 3, name: "Institute 3", type: "Type 1" },
    // Add more institutes as needed
  ]);

  // Dummy data for courses (replace with actual data from API)
  const [courses, setCourses] = useState([
    { id: 1, name: "Course 1", description: "Description 1", institute: "Institute 1" },
    { id: 2, name: "Course 2", description: "Description 2", institute: "Institute 1" },
    { id: 3, name: "Course 3", description: "Description 3", institute: "Institute 2" },
    // Add more courses as needed
  ]);

  // State for search querys
  const [searchQuery, setSearchQuery] = useState('');

  // Filter institutes based on search query
  const filteredInstitutes = institutes.filter(institute =>
    institute.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Function to handle viewing courses
  const handleViewCourses = () => {
    // Add logic here to handle viewing courses
    console.log("Viewing courses...");
  };

  return (
    <div className="container w-screen h-screen mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Institutes</h1>
      <input
        type="text"
        className="border border-gray-300 rounded px-4 py-2 mb-4"
        placeholder="Search institutes..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredInstitutes.map(institute => (
          <InstituteCard 
            key={institute.id} 
            institute={institute} 
            courses={courses} 
            onViewCourses={handleViewCourses} // Pass onViewCourses function
          />
        ))}
      </div>
    </div>
  );
};

export default InstitutesPage;
