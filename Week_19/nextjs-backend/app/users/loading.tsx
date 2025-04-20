export default function Loading() {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black">
        <div className="bg-gradient-to-r from-gray-700 to-gray-900 p-8 rounded-xl backdrop-blur-lg bg-opacity-40 border-2 border-purple-600 shadow-2xl animate-pulse">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-teal-400 drop-shadow-[0_0_25px_rgba(255,0,255,0.8)]">
            Loading...
          </h1>
        </div>
      </div>
    );
  }
  