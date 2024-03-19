import React, { useState, useEffect } from 'react';
import coursesData from '../../components/user/Coursedata';

const Courses = () => {
  const [showEnrollmentForm, setShowEnrollmentForm] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [filters, setFilters] = useState({ price: '', duration: '' });
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Simulate fetching data from coursesData.json
    setCourses(coursesData);
  }, []);

  const handleEnrollClick = (course) => {
    setShowEnrollmentForm(true);
    setSelectedCourse(course);
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredCourses = () => {
    return courses.filter(course => {
      const priceMatch = filters.price === '' || course.price.toLowerCase().includes(filters.price.toLowerCase());
      const durationMatch = filters.duration === '' || course.duration.toLowerCase().includes(filters.duration.toLowerCase());
      return priceMatch && durationMatch;
    });
  };

  const EnrollmentForm = ({ onClose }) => {
    const handleSubmit = (event) => {
      event.preventDefault();
      // Add your form submission logic here
    };

    return (
      <div className="fixed w-screen inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
        <div className="bg-white w-[500px] p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Enrollment Form for {selectedCourse.name}</h2>
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
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mr-2">Submit</button>
              <button onClick={onClose} className="bg-gray-300 text-gray-800 py-2 px-4 rounded hover:bg-gray-400">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold mb-4">Courses Available</h2>
        {/* Filters */}
        <div className="flex items-center mb-4 space-x-4">
          <div>
            <label className="block text-gray-700 font-bold">Filter by Price:</label>
            <input type="text" name="price" value={filters.price} onChange={handleFilterChange} className="border border-gray-300 rounded px-4 py-2" placeholder="Enter price" />
          </div>
          <div>
            <label className="block text-gray-700 font-bold">Filter by Duration:</label>
            <input type="text" name="duration" value={filters.duration} onChange={handleFilterChange} className="border border-gray-300 rounded px-4 py-2" placeholder="Enter duration" />
          </div>
        </div>
        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses().map((course, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{course.name}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <p><strong>Duration:</strong> {course.duration}</p>
              <p><strong>Price:</strong> {course.price}</p>
              <p><strong>Institution:</strong> {course.institution}</p>
              <p><strong>Tutor:</strong> {course.tutor}</p>
              <button onClick={() => handleEnrollClick(course)} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Enroll Now</button>
            </div>
          ))}
        </div>
      </div>
      
      {/* Enrollment Form */}
      {showEnrollmentForm && <EnrollmentForm onClose={() => setShowEnrollmentForm(false)} />}
    </div>
  );
};

export default Courses;