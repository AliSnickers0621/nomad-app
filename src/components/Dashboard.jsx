import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { session, signOut } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async (e) => {
    e.preventDefault();

    try {
      await signOut();
      navigate("/");
    } catch (err) {
      setError("An unexpected error occurred."); // Catch unexpected errors
    }
  };
  console.log(session);
  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Welcome, {session?.user?.email}</h2>
      <div className="w-full rounded-lg border-2 border-black-600 p-4 my-8 mx-auto max-w-xl">
            <h3 class="font-os text-lg font-bold">Comments</h3>
        
       <div class="flex mt-4">
        <div class="w-14 h-14 rounded-full bg-black-400/50 flex-shrink-0 flex items-center justify-center">
            <img class="h-12 w-12 rounded-full object-cover" src="https://randomuser.me/api/portraits/men/43.jpg"
                        alt=""></img>
        </div>

        <div class="ml-3">
            <div class="font-medium text-black-800">John Doe</div>
            <div class="text-gray-600">Posted on 2023-10-02 14:30</div>
            <div class="mt-2 text-black-800 text-left">This is a sample comment. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
            </div>
        </div>
    </div>

    <div class="flex mt-4">
        <div class="w-14 h-14 rounded-full bg-black-400/50 flex-shrink-0 flex items-center justify-center">
            <img class="h-12 w-12 rounded-full object-cover" src="https://randomuser.me/api/portraits/women/43.jpg"
                        alt=""></img>
        </div>
        <div class="ml-3">
            <div class="font-medium text-black-800">Jane Smith</div>
            <div class="text-gray-600">Posted on 2023-10-02 15:15</div>
            <div class="mt-2 text-black-800 text-left">Another sample comment. Sed quis velit auctor, bibendum dolor in,
                accumsan tellus.
            </div>
        </div>
        </div>

        <form class="mt-4">
        <div class="mb-4">
            <label for="name" class="block text-black-800 font-medium">Name</label>
            <input type="text" id="name" name="name"
                        class="border-2 border-black-600 p-2 w-full rounded" required></input>
        </div>

        <div class="mb-4">
            <label for="comment" class="block text-black-800 font-medium">Comment Park or Trail</label>
            <textarea id="comment" name="comment" class="border-2 border-black-600 p-2 w-full rounded" required></textarea>
        </div>

        <button type="submit"
                    class="bg-purple-700 text-white font-medium py-2 px-4 rounded hover:bg-black-600">Post
                    Comment
        </button>


    </form>

        </div>
   
    <div>
        
        <p
          onClick={handleSignOut}
          className="hover:cursor-pointer  border inline-block px-4 py-3 mt-4 "
        >
          Sign out
        </p>
      </div>
    </div>
  );
};

export default Dashboard;