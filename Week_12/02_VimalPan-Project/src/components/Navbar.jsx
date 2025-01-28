function Navbar() {
  return (
    <>
      <nav className="sticky top-0 max-w-7xl mx-auto p-4 flex items-center justify-between">
        <h1 className="text-2xl font-extrabold tracking-tighter text-orange-700 hover:text-orange-800 transition-all duration-300">
          Vimal
        </h1>
        <div className="flex gap-6 items-center">
          <h1 className="text-xl font-medium tracking-tighter text-black hover:text-orange-900 transition-all duration-300">
            Products
          </h1>
          <button className="bg-orange-600 rounded-lg px-4 py-3 font-bold text-white hover:bg-orange-700 transition-all duration-300">
            Login
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

// border-2 border-red-600
