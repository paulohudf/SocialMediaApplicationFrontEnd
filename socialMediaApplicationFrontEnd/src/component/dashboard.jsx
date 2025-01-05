import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Home from './homePage';
import Notifications from './notificationComponent';
import Messaging from './messagingComponent';

function DashboardPage() {
  const [currentPage, setCurrentPage] = useState('home');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the token
    navigate('/login'); // Redirect to login page
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'notifications':
        return <Notifications />;
      case 'messages':
        return <Messaging />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-500">SocialSphere</h1>
        <div className="space-x-4">
          <Link
            to="/profile"
            className="bg-blue-500 text-white font-bold py-2 px-6 rounded shadow hover:bg-blue-700"
          >
            Profile
          </Link>
          <button
            onClick={handleLogout}
            className="text-gray-600 hover:text-blue-500"
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto mt-6 grid grid-cols-12 gap-6">
        {/* Sidebar */}
        <aside className="col-span-3 bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-lg font-bold mb-4">Menu</h2>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => setCurrentPage('home')}
                className="w-full text-left text-gray-700 hover:bg-blue-100 hover:text-blue-500 py-2 px-4 rounded-lg"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentPage('notifications')}
                className="w-full text-left text-gray-700 hover:bg-blue-100 hover:text-blue-500 py-2 px-4 rounded-lg"
              >
                Notifications
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentPage('messages')}
                className="w-full text-left text-gray-700 hover:bg-blue-100 hover:text-blue-500 py-2 px-4 rounded-lg"
              >
                Messages
              </button>
            </li>
          </ul>
        </aside>

        {/* Main Feed */}
        <main className="col-span-9">{renderPage()}</main>
      </div>
    </div>
  );
}

export default DashboardPage;