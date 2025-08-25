import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function BottomNav() {
  return (
   
      <nav className="font-bold text-black rounded-md font-sans p-5 bg-gray-700 max-w-full md:max-w-3x1">
        <div className="md:flex">
        <div className="w-full md:w-1/3"><Link to="/" className="text-black">Home</Link></div>
        <div className="w-full md:w-1/3"><Link to="/Signup">Signup</Link></div>
        <div className="w-full md:w-1/3"><Link to="/map">Hiking Map</Link></div>
        </div>
      </nav>

  );
}