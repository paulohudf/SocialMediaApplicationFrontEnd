import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-6">Welcome to SocialSphere</h1>
        <p className="text-lg text-white mb-8">
          Connect, share, and engage with your friends and the world around you.
        </p>
        <div className="space-x-4">
          <Link
            to="/login"
            className="bg-white text-blue-500 font-bold py-2 px-6 rounded shadow hover:bg-gray-100"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-blue-500 text-white font-bold py-2 px-6 rounded shadow hover:bg-blue-700"
          >
            Register
          </Link>

          <Link
            to="/dasboard" 
             className="bg-white text-blue-500 font-bold py-2 px-6 rounded shadow hover:bg-gray-100"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );s
}

export default LandingPage;
