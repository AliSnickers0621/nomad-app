import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function BottomNav() {
  return (
   
      <nav className="p-4 bg-gray-100 flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/account">Account</Link>
        <Link to="/map">Hiking Map</Link>
      </nav>

  );
}