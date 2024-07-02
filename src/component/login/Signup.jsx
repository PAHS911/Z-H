// Signup.jsx
import React from 'react';

const Signup = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
      <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Sign up</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-gray-700">Username</label>
            <input type="text" id="username" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input type="password" id="password" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2">Sign up</button>
            <button type="button" onClick={onClose} className="text-gray-500">Close</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
