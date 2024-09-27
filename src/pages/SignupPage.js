import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await axios.post('/api/users/signup', { username, email, password });
      // Redirect to login page after successful signup
      navigate('/login');
    } catch (err) {
      // Handle error response
      setError(err.response?.data?.message || 'An error occurred during signup');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-8 rounded shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <input 
          type="text" 
          placeholder="Username" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border border-gray-300 p-2 mb-4 w-full rounded"
          required
        />
        
        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 p-2 mb-4 w-full rounded"
          required
        />
        
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 p-2 mb-4 w-full rounded"
          required
        />

        <button 
          type="submit" 
          className="bg-blue-500 text-white font-bold py-2 rounded w-full hover:bg-blue-600 transition duration-200"
        >
          Sign Up
        </button>

        <p className="mt-4 text-center">
          Already have an account? 
          <a href="/login" className="text-blue-500 hover:underline"> Login</a>
        </p>
      </form>
    </div>
  );
};

export default SignupPage;