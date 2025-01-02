// Notifications.js
import React from 'react';

function Notifications() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <h2 className="text-lg font-bold mb-4">Notifications</h2>
      <ul className="space-y-4">
        <li className="border-b py-2">
          <p className="text-gray-700">John liked your post</p>
        </li>
        <li className="border-b py-2">
          <p className="text-gray-700">Jane commented on your photo</p>
        </li>
        <li className="border-b py-2">
          <p className="text-gray-700">Mark started following you</p>
        </li>
      </ul>
    </div>
  );
}

export default Notifications;
