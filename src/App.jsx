import { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Home";
import Account from "./components/Account";
import HikingMap from './HikingMap';

export default function App() {
  const [count, setCount] = useState(0)

   return (
    <>

    </>

    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/account" element={<Account />} />
    //     <Route path="/map" element={<HikingMap />} />
    //   </Routes>
    // </Router>
  );
}

export default: App
