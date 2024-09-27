import React from 'react';

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <form className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <input type="email" placeholder="Email" className="border border-gray-300 p-2 mb-4 w-full rounded" />
        <input type="password" placeholder="Password" className="border border-gray-300 p-2 mb-4 w-full rounded" />
        <button type="submit" className="bg-blue-500 text-white font-bold py-2 rounded w-full">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;