 function header() {
      return (
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

     );
    }