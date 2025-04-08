function App() {
  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-purple-500 to-indigo-600 flex flex-col justify-evenly items-center p-4">
      <div className="bg-gray-300 bg-opacity-20 backdrop-blur-lg rounded-xl shadow-xl w-full max-w-md p-6 border border-white border-opacity-30">
        <h1 className="text-2xl font-bold text-black mb-6 text-center">
          Chat Messages
        </h1>

        <div className="bg-slate-800 bg-opacity-10 rounded-lg p-4 mb-6 h-64 overflow-y-auto">
          {/* Messages will appear here */}
          <div className="text-black  font-bold text-opacity-70 text-center italic"></div>
          No messages yet
        </div>
      </div>

      <div className="flex space-x-2">
        <input
          type="text"
          placeholder="Your Message ...."
          className="flex-1 px-4 py-2 rounded-full bg-white bg-opacity-20 text-black placeholder-white placeholder-opacity-60 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all"
        />
        <button
          // onCliFck={sendMessage}
          className="bg-gray-300 text-white font-medium px-6 py-2 rounded-full hover:bg-opacity-90 active:bg-opacity-70 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default App;
