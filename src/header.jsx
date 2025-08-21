 export default function Header() {
  return (
    <header className="w-full bg-#5d928a text-white p-4">
      <div className="container mx-auto flex justify-left items-left p-4">
        <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src="nomad.png"
            alt="Nomad Home"
          />
      </div>
    </header>
  );
}
/*
    <header className="w-800 bg-#5d928a text-white p-4">
      <div className="w-full container flex justify-left items-left p-4">
        <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src="nomad.png"
            alt="Nomad Home"
          />
      </div>
    </header>
    */
 