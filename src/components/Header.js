import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold text-blue-500">Task Manager</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-gray-600 hover:text-blue-500">Home</Link>
            </li>
            <li>
              <Link to="/login" className="text-gray-600 hover:text-blue-500">Login</Link>
            </li>
            <li>
              <Link to="/signup" className="text-gray-600 hover:text-blue-500">Sign Up</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;