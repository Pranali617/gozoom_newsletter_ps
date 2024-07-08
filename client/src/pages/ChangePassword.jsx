import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ChangePassword() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleChangePasswordSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle password change
    toast.success('Password changed successfully', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <div className="w-full lg:w-1/2 bg-white rounded-lg shadow-md p-8 mt-16 ml-auto lg:ml-0 px-4 lg:px-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Change Password</h2>
        <form onSubmit={handleChangePasswordSubmit}>
          <div className="mb-4">
            <label htmlFor="oldPassword" className="block text-left text-gray-700 font-semibold mb-2 text-lg">
              Old Password
            </label>
            <input
              type="password"
              id="oldPassword"
              name="oldPassword"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your old password"
            />  
          </div>
          <div className="mb-4">
            <label htmlFor="newPassword" className="block text-left text-gray-700 font-semibold mb-2 text-lg">
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your new password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md text-lg hover:bg-blue-400"
          >
            Change Password
          </button>
        </form>
        <div className="mt-4 text-left">
          <Link to="/" className="text-blue-500 hover:underline text-lg">
            Back to Login
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
