import React, { useState } from 'react';
import { FaUserEdit,FaEye, FaEyeSlash, } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const UserDetailPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-[90%] mx-auto p-8 mt-10 rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">User Details</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* User details - flex and spacing */}
        <div className="flex justify-between border-b pb-2">
          <h3 className="text-sm  text-gray-700 ">First Name:</h3>
           <p className="text-sm text-gray-500">demo</p>
          {/* <p className="text-sm text-gray-500">{userData.firstName || 'N/A'}</p> */}
        </div>

        <div className="flex justify-between border-b pb-2">
          <h3 className="text-sm  text-gray-700 ">Last Name:</h3>
           <p className="text-sm text-gray-500">data</p>
          {/* <p className="text-sm text-gray-500">{userData.lastName || 'N/A'}</p> */}
        </div>

        <div className="flex justify-between border-b pb-2">
          <h3 className="text-sm  text-gray-700 ">Email:</h3>
            <p className="text-sm text-gray-500">demo@gmail.com</p> 
          {/* <p className="text-sm text-gray-500">{userData.email || 'N/A'}</p> */}
        </div>

        <div className="flex justify-between border-b pb-2">
          <h3 className="text-sm  text-gray-700 ">Identity Type:</h3>
           <p className="text-sm text-gray-500">CNIC</p>
          {/* <p className="text-sm text-gray-500">{userData.identityType || 'N/A'}</p> */}
        </div>

        <div className="flex justify-between border-b pb-2">
          <h3 className="text-sm  text-gray-700 ">Identity Number:</h3>
           <p className="text-sm text-gray-500">76121</p>
          {/* <p className="text-sm text-gray-500">{userData.identityNum || 'N/A'}</p> */}
        </div>

        <div className="flex justify-between border-b pb-2">
          <h3 className="text-sm  text-gray-700 ">Membership Number:</h3>
           <p className="text-sm text-gray-500">721</p>
          {/* <p className="text-sm text-gray-500">{userData.membershipNum || 'N/A'}</p> */}
        </div>

        <div className="flex justify-between border-b pb-2">
          <h3 className="text-sm  text-gray-700 ">Phone:</h3>
           <p className="text-sm text-gray-500">09876543</p>
          {/* <p className="text-sm text-gray-500">{userData.phone || 'N/A'}</p> */}
        </div>
        <div className="flex justify-between items-center border-b pb-2">
          <h3 className="text-sm  text-gray-700 ">Password:</h3>
          <div className="flex items-center space-x-3">
            <p className="text-sm text-gray-500">
                {showPassword ? "password123" || 'N/A' : '••••••••'}
              {/* {showPassword ? userData.password || 'N/A' : '••••••••'} */}
            </p>
            <button onClick={togglePasswordVisibility} className="focus:outline-none">
              {showPassword ? <FaEyeSlash className="text-gray-700" /> : <FaEye className="text-gray-700" />}
            </button>
          </div>
        </div>
      </div>

      {/* Edit button */}
      <div className="flex justify-center mt-10">
        <Link
          to="/edit-user"
          onClick={toggleEdit}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white  rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
        >
          <FaUserEdit className="text-2xl" />
          Edit 
        </Link>
      </div>
    </div>
  );
};

export default UserDetailPage;
