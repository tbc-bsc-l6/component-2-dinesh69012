import React, { useState } from "react";

const AddEmployeeForm = (props) => {
  const [employeeData, setEmployeeData] = useState({
    name: "Admin",
    username: "admin",
    email: "admin@gmail.com",
    password: "your_password",
    role: 1,
    password_confirmation: "your_password",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({
      ...employeeData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Call the createSeller API function with employeeData
      await createSeller(employeeData);

      // Reset the form or handle success
      console.log("Employee added successfully!");
    } catch (error) {
      // Handle API request errors
      console.error("Error adding employee:", error);
    }
  };

  // Mock function for createSeller API request
  const createSeller = async (employeeData) => {
    // Implement your API request logic here
    // For example, you can use fetch or Axios to send a POST request to your API
    const apiUrl = "your_api_url";
    
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employeeData),
    });

    if (!response.ok) {
      throw new Error("Error adding employee");
    }

    const result = await response.json();
    return result;
  };

  return (props.add)? 
    <div className="mx-auto w-full max-w-md p-8 border border-gray-300 shadow-lg rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Add New Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={employeeData.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Username:
          </label>
          <input
            type="text"
            name="username"
            value={employeeData.username}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Email:
          </label>
          <input
            type="text"
            name="email"
            value={employeeData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Password:
          </label>
          <input
            type="password"
            name="password"
            value={employeeData.password}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Role:
          </label>
          <input
            type="text"
            name="role"
            value={employeeData.role}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Password Confirmation:
          </label>
          <input
            type="password"
            name="password_confirmation"
            value={employeeData.password_confirmation}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex items-center justify-end">
        <button
        onClick={()=>props.setAdd(false)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Add Employee
          </button>
        </div>
      </form>
    </div>
    :""
  ;
};

export default AddEmployeeForm;
