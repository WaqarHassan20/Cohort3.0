"use client";

import { useEffect, useRef, useState } from "react";
import { useSocket } from "../hooks/useSocket";

export function ChatRoomClient({
  messages,
  id
}: {
  messages: { message: string }[];
  id: string;
}) {
  const [chats, setChats] = useState<{ message: string }[]>(messages);
  const { socket, loading } = useSocket();
  const inputRef = useRef<HTMLInputElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (socket && !loading) {
      // Join the room
      socket.send(
        JSON.stringify({
          type: "join-room",
          roomId: id,
        })
      );

      // Listen for new messages
      socket.onmessage = (event) => {
        const parsedData = JSON.parse(event.data as string);
        if (parsedData.type === "chat") {
          setChats((prevChats) => [...prevChats, { message: parsedData.message }]);
        }
      };
    }
  }, [socket, loading, id]);

  const sendMessage = () => {
    if (inputRef.current) {
      const message = inputRef.current.value;
      socket?.send(
        JSON.stringify({
          type: "chat",
          roomId: id,
          message,
        })
      );

      // Immediately add the sent message to the chats state
      setChats((prevChats) => [...prevChats, { message }]);
      inputRef.current.value = ""; // Clear input field
    }
  };

  useEffect(() => {
    // Scroll to the bottom of the chat container when messages change
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chats]); // This effect runs every time the chats change

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#181818", // Dark background
        padding: "20px",
        gap: "12px",
        fontFamily: "sans-serif",
        color: "#f1f5f9", // Light text color
      }}
    >
      <div
        ref={chatContainerRef} // Attach the ref to the container
        style={{
          flex: 1,
          width: "100%",
          maxWidth: "600px",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          padding: "10px",
          backgroundColor: "#121212", // Darker chat background
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        {chats.map((m, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: m.message.startsWith("You:") ? "flex-end" : "flex-start",
              alignItems: "center",
            }}
          >
            <div
              style={{
                backgroundColor: m.message.startsWith("You:") ? "#0095f6" : "#333", // Blue for user messages, dark gray for others
                color: m.message.startsWith("You:") ? "#fff" : "#f1f5f9", // White text for user messages
                padding: "12px 18px",
                borderRadius: "20px",
                maxWidth: "80%",
                wordBreak: "break-word",
                boxShadow: m.message.startsWith("You:") ? "0 2px 4px rgba(0, 123, 255, 0.4)" : "none",
              }}
            >
              {m.message.replace("You:", "")}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "auto",
          width: "100%",
          maxWidth: "600px",
        }}
      >
        <input
          placeholder="Type a message..."
          ref={inputRef}
          type="text"
          style={{
            flex: 1,
            padding: "12px 16px",
            borderRadius: "9999px",
            border: "1px solid #333",
            backgroundColor: "#181818", // Dark input background
            color: "#f1f5f9", // Light text color
            outline: "none",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
            fontSize: "14px",
          }}
        />
        <button
          onClick={sendMessage}
          style={{
            padding: "12px 16px",
            borderRadius: "9999px",
            border: "none",
            backgroundColor: "#0095f6",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "background-color 0.2s ease-in-out",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0078d4")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#0095f6")}
        >
          Send
        </button>
      </div>
    </div>
  );
}
