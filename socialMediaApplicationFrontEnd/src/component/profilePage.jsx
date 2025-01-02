
import React, { useState } from 'react';

function ProfilePage() {
  const [editMode, setEditMode] = useState(false);
  const [profileData, setProfileData] = useState({
    username: 'JohnDoe',
    bio: 'Lover of tech, music, and photography.',
    interests: 'Tech, Music, Photography',
  });

  const [formData, setFormData] = useState(profileData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    setProfileData(formData);
    setEditMode(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-500">SocialSphere</h1>
        <button className="text-gray-600 hover:text-blue-500">Logout</button>
      </nav>

      {/* Profile Section */}
      <div className="container mx-auto mt-6 max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center mb-6">
          <div className="w-20 h-20 rounded-full bg-blue-300 flex items-center justify-center text-white font-bold text-2xl">
            {profileData.username.charAt(0)}
          </div>
          <div className="ml-4">
            <h2 className="text-xl font-bold text-gray-700">{profileData.username}</h2>
            {!editMode && <p className="text-gray-600">{profileData.bio}</p>}
          </div>
        </div>

        {/* Editable Fields */}
        {editMode ? (
          <div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="bio">
                Bio
              </label>
              <textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="interests">
                Interests
              </label>
              <input
                id="interests"
                name="interests"
                value={formData.interests}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              onClick={handleSave}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              Save
            </button>
            <button
              onClick={() => setEditMode(false)}
              className="ml-4 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        ) : (
          <div>
            <p className="text-gray-700 mb-2">
              <span className="font-bold">Bio: </span>
              {profileData.bio}
            </p>
            <p className="text-gray-700">
              <span className="font-bold">Interests: </span>
              {profileData.interests}
            </p>
            <button
              onClick={() => setEditMode(true)}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              Edit Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfilePage;
