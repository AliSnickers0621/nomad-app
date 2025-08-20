import React from "react";

export default function Account() {
  const user = {
    name: "Alena McMahan",
    email: "alena@example.com",
    profilePic: "alena.jpg",
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      {/* Profile Card */}
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-sm text-center">
        <img
          src={user.profilePic}
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500"
        />
        <h2 className="text-xl font-semibold">{user.name}</h2>
        <p className="text-gray-600">{user.email}</p>

        {/* buttons */}
        <div className="mt-6 flex justify-around">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-600">
            Edit Profile
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-xl shadow hover:bg-red-600">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}