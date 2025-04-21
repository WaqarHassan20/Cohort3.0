// Import necessary React hooks
import { useEffect, useRef, useState } from "react";

function App() {
  // State to hold the WebSocket instance
  const [socket, setSocket] = useState(null);

  // Ref to access the input field's value directly
  const inputRef = useRef(null);

  // Function to send a message to the server
  function sendMessage() {
    if (!socket) {
      return; // If no socket connection, do nothing
    }

    const message = inputRef.current.value; // Get value from input field
    // @ts-ignore to suppress TypeScript error
    socket.send(message); // Send message to server
  }

  // useEffect runs once when the component mounts
  useEffect(() => {
    // Create a new WebSocket connection
    const ws = new WebSocket("ws://localhost:8080");

    // Save the WebSocket instance in state
    setSocket(ws);

    // When a message is received from the server, show it in an alert
    ws.onmessage = (e) => {
      alert(e.data);
    };
  }, []);

  // JSX UI of the app
  return (
    <div className="min-h-screen w-screen flex flex-col justify-center gap-10 items-center p-4">
      {/* Input field to enter message */}
      <input
        type="text"
        ref={inputRef}
        placeholder="Your Message ...."
        className="bg-gray-700 rounded-md p-2 font-bold"
      />

      {/* Button to send message to server */}
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

// This React component is a simple WebSocket client that connects to a WebSocket server running on ws://localhost:8080. It uses React hooks like useState, useEffect, and useRef to manage the WebSocket connection, lifecycle, and input field. When the component mounts, it opens a WebSocket connection and stores the socket in state. Any message received from the server is displayed in an alert popup. The user can type a message into the input field and click the "Send" button, which sends that message to the server via the WebSocket connection. The UI is styled using Tailwind CSS for a clean and responsive design.
