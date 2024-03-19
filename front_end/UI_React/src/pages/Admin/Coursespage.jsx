import React, { useState } from 'react';

const CoursesPage = () => {
  const initialCourseState = { id: null, name: '', description: '' };

  const [courses, setCourses] = useState([
    { id: 1, name: 'Beginner Chess', description: 'Learn the fundamentals of chess, including piece movement, basic tactics, and key chess principles.' },
    { id: 2, name: 'Intermediate Chess', description: 'Sharpen your chess skills with intermediate tactics, positional understanding, and strategic thinking.' },
    { id: 3, name: 'Advanced Chess', description: 'Take your chess game to the next level with advanced topics, endgame play, and opening repertoire.' },
  ]);
  const [editingCourse, setEditingCourse] = useState(initialCourseState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditingCourse({ ...editingCourse, [name]: value });
  };

  const handleEditCourse = (id, course) => {
    setEditingCourse(course);
  };

  const updateCourse = (id, updatedCourse) => {
    setCourses(courses.map(course => (course.id === id ? updatedCourse : course)));
    setEditingCourse(initialCourseState);
  };

  const handleAddCourse = () => {
    const newCourse = { id: courses.length + 1, ...editingCourse };
    setCourses([...courses, newCourse]);
    setEditingCourse(initialCourseState);
  };

  const handleCancelEdit = () => {
    setEditingCourse(initialCourseState);
  };

  const handleDeleteCourse = (id) => {
    setCourses(courses.filter(course => course.id !== id));
  };

  return (
    <div>
      <h2>Courses Page</h2>
      <div className="flex flex-col mb-4">
        <h3 className="text-lg font-semibold mb-2">Courses</h3>
        <div>
        <h3 className="text-lg font-semibold">Add/Edit Course</h3>
        <div className="flex flex-col sm:flex-row items-center">
          <input
            type="text"
            name="name"
            value={editingCourse.name || ''}
            onChange={handleInputChange}
            placeholder="Course Name"
            className="border border-gray-300 px-2 py-1 mb-2 sm:mr-2"
          />
          <input
            type="text"
            name="description"
            value={editingCourse.description || ''}
            onChange={handleInputChange}
            placeholder="Description"
            className="border border-gray-300 px-2 py-1 mb-2 sm:mr-2"
          />
          {editingCourse.id ? (
            <>
              <button onClick={() => updateCourse(editingCourse.id, editingCourse)} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Update</button>
              <button onClick={handleCancelEdit} className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 ml-2">Cancel</button>
            </>
          ) : (
            <button onClick={handleAddCourse} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Add Course</button>
          )}
        </div>
      </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {courses.map(course => (
            <div key={course.id} className="border border-gray-300 rounded p-4">
              <h4 className="text-lg font-semibold mb-2">{course.name}</h4>
              <p className="text-gray-600">{course.description}</p>
              <div className="flex justify-end mt-2">
                <button onClick={() => handleEditCourse(course.id, course)} className="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-600">Edit</button>
                <button onClick={() => handleDeleteCourse(course.id)} className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 ml-2">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default CoursesPage;
