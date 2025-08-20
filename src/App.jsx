import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./Home";
import Account from "./components/Account";
import HikingMap from './HikingMap';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className="bg-#5d928a-800 text-black">
      <div className="container mx-auto flex justify-right items-right p-4">
        <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src="nomad.png"
            alt="Nomad Home"
          />
        <nav>
          <ul className="text-md font-semibold tracking-wide text-black-500 uppercase">
            <li><a href="#profile" className="hover:text-black-300">Profile</a></li>
          </ul>
        </nav>
      </div>
    </header>

    {<HikingMap />}
    {<HikingMap />}
  <script src="leaflet.js"></script>

  
    <div className="bottom-nav">
      <a href="#home">Download Offline Maps</a>
      <a href="#profile">Profile</a>
      <a href="#account">Account</a>

    </div> 
    </>
  )
}

export default App
