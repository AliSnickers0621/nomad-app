import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import ProfileDetails from "./ProfileDetails";
import { supabase } from "../supabaseClient";

const Dashboard = () => {
  const { session, signOut } = UserAuth();
  const navigate = useNavigate();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [user_id, setUsername] = useState("");

  useEffect(() => {
    fetchComments();
    console.log(comments);

    // Realtime updates
    const channel = supabase
      .channel("comments")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "comments" },
        (payload) => {
          setComments((prev) => [payload.new, ...prev]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  async function fetchComments() {
    const { data, error } = await supabase
      .from("comments")
      .select("*")
      .order("created_at", { ascending: false });
    // console.log (`receivedata ${data}`);
    if (error) console.error(error);
    else setComments(data);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!newComment.trim() || !user_id.trim()) return;

    const { error } = await supabase.from("comments").insert([
      {
        comment: newComment,
        user_id: user_id,
      },
    ]);

    fetchComments();

    if (error) console.error(error);
    else setNewComment("");
  }


  if (!session) {
    navigate("/signin");
  }
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
      <ProfileDetails email={session?.user?.email} />
      <div className="w-full rounded-lg border-2 border-black-600 p-4 my-8 mx-auto max-w-xl">
        <h3 className="font-os text-lg font-bold">Comments</h3>

        <div className="flex mt-4">
          <div className="w-14 h-14 rounded-full bg-black-400/50 flex-shrink-0 flex items-center justify-center">
            <img className="h-12 w-12 rounded-full object-cover" src="https://randomuser.me/api/portraits/men/43.jpg"
              alt=""></img>
          </div>

          <form onSubmit={handleSubmit} className="mb-6">
            <input
              type="text"
              placeholder="Your name"
              value={user_id}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 mb-2 border rounded"
            />
            <textarea
              placeholder="Write a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="w-full p-2 border rounded"
            />
            <button
              type="submit"
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Post Comment
            </button>
          </form>
        </div>
        <div>
          {comments.map((c) => (
            <div
              key={c.id}
              className="bg-white p-3 rounded-lg shadow mb-3"
            >
              <p className="font-semibold">{c.user_id}</p>
              <p>{c.comment}</p>
              <small className="text-gray-500">
                {new Date(c.created_at).toLocaleString()}
              </small>
            </div>
          ))}
        </div>


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


/* here's the old form code for reference
<div className="ml-3">
           <div className="font-medium text-black-800">John Doe</div>
           <div className="text-gray-600">Posted on 2023-10-02 14:30</div>
           <div className="mt-2 text-black-800 text-left">This is a sample comment. Lorem ipsum dolor sit amet, consectetur
               adipiscing elit.
           </div>
       </div>
   </div>

   <div className="flex mt-4">
       <div className="w-14 h-14 rounded-full bg-black-400/50 flex-shrink-0 flex items-center justify-center">
           <img className="h-12 w-12 rounded-full object-cover" src="https://randomuser.me/api/portraits/women/43.jpg"
                       alt=""></img>
       </div>
       <div className="ml-3">
           <div className="font-medium text-black-800">Jane Smith</div>
           <div className="text-gray-600">Posted on 2023-10-02 15:15</div>
           <div className="mt-2 text-black-800 text-left">Another sample comment. Sed quis velit auctor, bibendum dolor in,
               accumsan tellus.
           </div>
       </div>
       </div>

       <form className="mt-4">
       <div className="mb-4">
           <label htmlFor="name" className="block text-black-800 font-medium">Name</label>
           <input type="text" id="name" name="name"
                       className="border-2 border-black-600 p-2 w-full rounded" required></input>
       </div>

       <div className="mb-4">
           <label htmlFor="comment" className="block text-black-800 font-medium">Comment Park or Trail</label>
           <textarea id="comment" name="comment" className="border-2 border-black-600 p-2 w-full rounded" required></textarea>
       </div>

       <button type="submit"
                   className="bg-purple-700 text-white font-medium py-2 px-4 rounded hover:bg-black-600">Post
                   Comment
       </button>


   </form> */