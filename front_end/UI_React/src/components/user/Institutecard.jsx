// InstituteCard.jsx

import React, { useState } from 'react';

const InstituteCard = ({ institute, courses, onViewCourses }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewCourses, setViewCourses] = useState(false);
  
  const filteredCourses = courses.filter(course =>
    course.institute === institute.name &&
    course.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleViewCourses = () => {
    setViewCourses(true);
    onViewCourses();
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-2">{institute.name}</h2>
      <p className="text-gray-600 mb-2">Type: {institute.type}</p>
      {viewCourses ? (
        <div>
          <button onClick={() => setViewCourses(false)} className="text-blue-500 hover:underline mb-2">Back to Institutes</button>
          <div className="mb-4">
            <input
              type="text"
              className="border border-gray-300 rounded px-4 py-2 mb-4"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            {filteredCourses.map(course => (
              <div key={course.id} className="mb-4">
                <h3 className="text-lg font-semibold mb-2">{course.name}</h3>
                <p className="text-gray-600 mb-2">{course.description}</p>
                {/* Add more course details as needed */}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <button onClick={handleViewCourses} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">View Courses</button>
      )}
    </div>
  );
};

export default InstituteCard;
