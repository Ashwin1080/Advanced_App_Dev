import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PersonCircle } from 'react-bootstrap-icons'; // Import Bootstrap Icon

const ProfilePage = () => {
  // Dummy user data
  const [userData, setUserData] = useState({
    fullName: 'John Doe',
    email: 'example@example.com',
    username: 'example_user',
    address: '123 Main Street',
    phone: '+1234567890',
    parentsName: 'Jane Doe',
    parentsPhone: '+1234567890',
  });

  const [editing, setEditing] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleEditToggle = () => {
    setEditing(!editing);
  };

  const handleSaveChanges = () => {
    // Add logic to save changes to backend or perform any other action
    setEditing(false);
  };

  return (
    <div className="bg-gray-100 h-[1000px] flex justify-center items-center">
      <div className="w-[500px] bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="px-6 py-8 text-center items-center justify-center">
          <div className="flex justify-center">
            {/* Display alternative SVG for profile picture */}
            <PersonCircle size={72} className="text-gray-400" />
          </div>
          <div className="text-center mt-4">
            <p className="text-gray-600">{userData.email}</p>
          </div>
          <div className="border-t border-gray-200 mt-6 pt-6">
            <h2 className="text-lg font-semibold mb-2">User Details</h2>
            <div className="flex flex-col space-y-2 justify-center text-center">
              <div className="flex items-center">
                <span className="font-semibold mr-2">Full Name:</span>
                {editing ? (
                  <input
                    type="text"
                    name="fullName"
                    value={userData.fullName}
                    onChange={handleInputChange}
                    className="border border-gray-300 px-2 py-1 rounded"
                  />
                ) : (
                  <span>{userData.fullName}</span>
                )}
              </div>
              <div className="flex items-center">
                <span className="font-semibold mr-2">Username:</span>
                <span>{userData.username}</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold mr-2">Email:</span>
                <span>{userData.email}</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold mr-2">Address:</span>
                {editing ? (
                  <input
                    type="text"
                    name="address"
                    value={userData.address}
                    onChange={handleInputChange}
                    className="border border-gray-300 px-2 py-1 rounded"
                  />
                ) : (
                  <span>{userData.address}</span>
                )}
              </div>
              <div className="flex items-center">
                <span className="font-semibold mr-2">Phone:</span>
                {editing ? (
                  <input
                    type="text"
                    name="phone"
                    value={userData.phone}
                    onChange={handleInputChange}
                    className="border border-gray-300 px-2 py-1 rounded"
                  />
                ) : (
                  <span>{userData.phone}</span>
                )}
              </div>
              <div className="flex items-center">
                <span className="font-semibold mr-2">Parents' Name:</span>
                {editing ? (
                  <input
                    type="text"
                    name="parentsName"
                    value={userData.parentsName}
                    onChange={handleInputChange}
                    className="border border-gray-300 px-2 py-1 rounded"
                  />
                ) : (
                  <span>{userData.parentsName}</span>
                )}
              </div>
              <div className="flex items-center">
                <span className="font-semibold mr-2">Parents' Phone:</span>
                {editing ? (
                  <input
                    type="text"
                    name="parentsPhone"
                    value={userData.parentsPhone}
                    onChange={handleInputChange}
                    className="border border-gray-300 px-2 py-1 rounded"
                  />
                ) : (
                  <span>{userData.parentsPhone}</span>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-6 py-4 flex justify-center items-center">
          {editing ? (
            <>
              <button onClick={handleSaveChanges} className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-blue-600 transition duration-300 mr-2">
                Save Changes
              </button>
              <button onClick={handleEditToggle} className="bg-gray-500 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-gray-600 transition duration-300">
                Cancel
              </button>
            </>
          ) : (
            <button onClick={handleEditToggle} className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-blue-600 transition duration-300">
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
