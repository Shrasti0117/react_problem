import React, { useState } from "react";

const Hobbiesform = () => {
    const [hobbies, setHobbies] = useState([""]);

    // Handle change in input
    const handleChange = (index, value) => {
      const updatedHobbies = [...hobbies];
      updatedHobbies[index] = value;
      setHobbies(updatedHobbies);
    };
  
    // Add new hobby field
    const handleAdd = () => {
      setHobbies([...hobbies, ""]);
    };
  
    // Remove hobby field
    const handleRemove = (index) => {
      if (index === 0) return; // Don't remove first field
      const updatedHobbies = hobbies.filter((_, i) => i !== index);
      setHobbies(updatedHobbies);
    };
  
    // Submit form
    const handleSubmit = (e) => {
      e.preventDefault();
      alert("Submitted hobbies:", hobbies);
    };
  
    return (
      <div className="max-w-md mx-auto mt-10 p-6 border rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Hobbies Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {hobbies.map((hobby, index) => (
            <div key={index} className="flex items-center space-x-2">
              <input
                type="text"
                value={hobby}
                onChange={(e) => handleChange(index, e.target.value)}
                className="flex-1 p-2 border rounded"
                placeholder={`Hobby ${index + 1}`}
                required
              />
              {index > 0 && (
                <button
                  type="button"
                  onClick={() => handleRemove(index)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <div className="flex space-x-2">
            <button
              type="button"
              onClick={handleAdd}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add Hobby
            </button>
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  };

export default Hobbiesform
