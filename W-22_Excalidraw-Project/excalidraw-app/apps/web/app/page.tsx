"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [roomId, setRoomId] = useState("");
  const router = useRouter();

  return (
    <>
      <div className="page">
        <input
          type="text"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          placeholder="Enter room id"
          className="input-field"
        />
        <button
          onClick={() => router.push(`/room/${roomId}`)}
          className="join-button"
        >
          Join Room
        </button>
      </div>

      <style>{`
        .page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: radial-gradient(circle at center, #0a0a0a, #111);
          backdrop-filter: blur(14px);
          color: #ffffff;
          padding: 2rem;
        }

        .input-field {
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 1rem 1.5rem;
          margin-bottom: 1.5rem;
          border-radius: 12px;
          color: white;
          width: 300px;
          font-size: 1.1rem;
          font-weight: 500;
          backdrop-filter: blur(10px);
          outline: none;
          transition: all 0.3s ease;
          box-shadow: 0 0 8px rgba(0, 255, 255, 0.2);
        }

        .input-field::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        .input-field:focus {
          border-color: #00ffff;
          background: rgba(255, 255, 255, 0.1);
          box-shadow: 0 0 12px rgba(0, 255, 255, 0.4);
        }

        .join-button {
          background: linear-gradient(135deg, rgba(0, 188, 212, 0.3), rgba(0, 150, 200, 0.5));
          border: 1px solid #00bcd4;
          padding: 1rem 1.8rem;
          border-radius: 12px;
          color: white;
          cursor: pointer;
          font-weight: 700;
          font-size: 1.1rem;
          backdrop-filter: blur(10px);
          transition: background 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
          box-shadow: 0 0 10px rgba(0, 188, 212, 0.4);
        }

        .join-button:hover {
          background: linear-gradient(135deg, rgba(0, 188, 212, 0.5), rgba(0, 150, 200, 0.7));
          transform: scale(1.07);
          box-shadow: 0 0 16px rgba(0, 255, 255, 0.7);
        }
      `}</style>
    </>
  );
}
