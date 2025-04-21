import { useEffect, useRef, useState } from "react";

function App() {
  const [socket, setSocket] = useState(null);
  const inputRef = useRef(null);

  function sendMessage() {
    if (!socket) return;
    const message = inputRef.current.value;
    // @ts-ignore
    socket.send(message);
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);
    ws.onmessage = (e) => {
      alert(e.data);
    };
  }, []);

  return (
    <div className="min-h-screen w-screen flex flex-col justify-center gap-10 items-center p-4">
      <input
        type="text"
        ref={inputRef}
        placeholder="Your Message ...."
        className="bg-gray-700 rounded-md p-2 font-bold"
      />
      <button
        onClick={sendMessage}
        className="bg-gray-300 text-white font-medium px-6 py-2 rounded-full hover:bg-opacity-90 active:bg-opacity-70 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
      >
        Send
      </button>
    </div>
  );
}

export default App;
