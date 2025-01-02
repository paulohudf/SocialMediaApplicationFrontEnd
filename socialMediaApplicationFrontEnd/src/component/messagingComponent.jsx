// Messaging.js
import React, { useState } from 'react';

function Messaging() {
  const [selectedChat, setSelectedChat] = useState(null);

  const chats = [
    { id: 1, name: 'John Doe', lastMessage: 'Hey! How are you?' },
    { id: 2, name: 'Jane Smith', lastMessage: 'Are we meeting tomorrow?' },
    { id: 3, name: 'Mark Johnson', lastMessage: 'Check out this new post!' },
  ];

  const messages = selectedChat
    ? [
        { from: 'You', content: 'Hey, how’s it going?' },
        { from: 'John Doe', content: 'Doing well! How about you?' },
        { from: 'You', content: 'I’m great, thanks!' },
      ]
    : [];

  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      {selectedChat === null ? (
        <>
          <h2 className="text-lg font-bold mb-4">Messages</h2>
          <div className="space-y-4">
            {chats.map((chat) => (
              <div
                key={chat.id}
                className="flex justify-between items-center p-4 border-b hover:bg-blue-50 cursor-pointer"
                onClick={() => setSelectedChat(chat.id)}
              >
                <div>
                  <h3 className="font-bold text-gray-700">{chat.name}</h3>
                  <p className="text-gray-600 text-sm">{chat.lastMessage}</p>
                </div>
                <span className="text-gray-400 text-sm">2 mins ago</span>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className="text-lg font-bold mb-4">Chat with {chats.find((chat) => chat.id === selectedChat)?.name}</h2>
          <div className="space-y-4 mb-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg ${message.from === 'You' ? 'bg-blue-100 self-end' : 'bg-gray-100'}`}
              >
                <p className="font-semibold">{message.from}</p>
                <p className="text-gray-600 mt-1">{message.content}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center">
            <textarea
              placeholder="Type a message..."
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button className="ml-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
              Send
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Messaging;
