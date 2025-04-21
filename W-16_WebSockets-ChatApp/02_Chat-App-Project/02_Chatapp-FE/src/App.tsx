import { useEffect, useRef, useState } from "react";
import { IoSendSharp } from "react-icons/io5";

function App() {
  const [messages, setMessage] = useState([
    {
      text: "Hello there!",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);

  const wsRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    ws.onmessage = (event) => {
      const time = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      setMessage((prevMsg) => [...prevMsg, { text: event.data, time: time }]);
    };

    wsRef.current = ws;

    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          type: "join",
          payload: {
            roomId: "yellow",
          },
        })
      );
    };
  }, []);

  return (
    <div className="flex flex-col h-screen w-full justify-end">
      <div className="flex-1 overflow-y-auto p-4 bg-[#0B141A]">
        {messages.map((message, index) => {
          return (
            <div
              key={index}
              className="mb-2 px-3 py-1 text-[0.9rem] flex items-end gap-2 bg-[#025144] text-white rounded-md max-w-fit"
            >
              <span> {message.text}</span>
              <div className="text-[0.7rem] text-gray-300">{message.time}</div>
            </div>
          );
        })}
      </div>

      <div className="flex p-4 bg-[#202C33]">
        <input
          type="text"
          ref={inputRef}
          className="flex-1 p-2 mr-2 outline-none text-white rounded-lg bg-[#2A3942]"
        />
        <button
          onClick={() => {
            wsRef.current.send(
              JSON.stringify({
                type: "chat",
                payload: {
                  message: inputRef.current.value,
                },
              })
            );
            // Clear the input field after sending
            inputRef.current.value = "";
          }}
          className="px-3 py-2 cursor-pointer hover:bg-green-700 bg-green-800 rounded-full text-white"
        >
          <IoSendSharp />
        </button>
      </div>
    </div>
  );
}

export default App;
