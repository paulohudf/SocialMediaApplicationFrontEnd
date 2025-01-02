
import React from 'react';

function Home() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <h2 className="text-lg font-bold mb-4">News Feed</h2>
      {/* Post Composer */}
      <div className="mb-6">
        <textarea
          placeholder="What's on your mind?"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
          Post
        </button>
      </div>

      {/* Posts */}
      <div className="space-y-6">
        <div className="border rounded-lg p-4 shadow">
          <h3 className="font-bold text-gray-700">John Doe</h3>
          <p className="text-gray-600 mt-2">This is a sample post. Loving this platform!</p>
          <div className="flex items-center space-x-4 mt-2 text-gray-500">
            <button className="hover:text-blue-500">Like</button>
            <button className="hover:text-blue-500">Comment</button>
            <button className="hover:text-blue-500">Share</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
