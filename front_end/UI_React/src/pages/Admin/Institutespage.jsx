// InstitutesPage.jsx
import React, { useState } from 'react';

const Institutes = () => {
  // State to manage form inputs, institutes list, and institute being edited
  const [newInstitute, setNewInstitute] = useState({
    name: '',
    location: '',
  });
  const [institutes, setInstitutes] = useState([
    { id: 1, name: 'Tech Academy', location: 'New York' },
  ]);
  const [editingInstitute, setEditingInstitute] = useState(null);

  // Handler to update new institute state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewInstitute((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handler to submit the form and add new institute
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the new institute to the list
    setInstitutes([
      ...institutes,
      {
        id: institutes.length + 1,
        name: newInstitute.name,
        location: newInstitute.location,
      },
    ]);
    // Reset form fields
    setNewInstitute({
      name: '',
      location: '',
    });
  };

  // Handler to delete an institute
  const handleDelete = (id) => {
    setInstitutes(institutes.filter((inst) => inst.id !== id));
  };

  // Handler to set institute for editing
  const handleEdit = (inst) => {
    setEditingInstitute(inst);
    setNewInstitute({
      name: inst.name,
      location: inst.location,
    });
  };

  // Handler to update the edited institute
  const handleUpdate = (e) => {
    e.preventDefault();
    setInstitutes(institutes.map((inst) => {
      if (inst.id === editingInstitute.id) {
        return {
          ...inst,
          name: newInstitute.name,
          location: newInstitute.location,
        };
      }
      return inst;
    }));
    setEditingInstitute(null);
    setNewInstitute({
      name: '',
      location: '',
    });
  };

  return (
    <div>
      <h2>Institutes Page</h2>
      {/* Add functionality to manage institutes here */}
      <div className="flex justify-between mb-4">
        <h3 className="text-lg font-semibold">Institutes</h3>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Add Institute</button>
      </div>
      {/* Form to add a new institute */}
      <form onSubmit={editingInstitute ? handleUpdate : handleSubmit} className="mb-4">
        <div className="flex items-center mb-2">
          <label htmlFor="name" className="mr-2">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newInstitute.name}
            onChange={handleInputChange}
            className="border border-gray-300 px-3 py-1 rounded"
            required
          />
        </div>
        <div className="flex items-center mb-2">
          <label htmlFor="location" className="mr-2">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={newInstitute.location}
            onChange={handleInputChange}
            className="border border-gray-300 px-3 py-1 rounded"
            required
          />
        </div>
        <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">{editingInstitute ? 'Update Institute' : 'Add New Institute'}</button>
      </form>
      {/* Table to display existing institutes */}
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Institute Name</th>
            <th className="border border-gray-300 px-4 py-2">Location</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through institutes data and display each institute */}
          {institutes.map((inst) => (
            <tr key={inst.id}>
              <td className="border border-gray-300 px-4 py-2">{inst.name}</td>
              <td className="border border-gray-300 px-4 py-2">{inst.location}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button onClick={() => handleEdit(inst)} className="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-600">Edit</button>
                <button onClick={() => handleDelete(inst.id)} className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 ml-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Institutes;
