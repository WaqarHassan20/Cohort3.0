"use client"

import React from 'react';
import TextInput from "@repo/ui/TextInput"
import { useRouter } from 'next/navigation';
function DarkModeInput() {
  
  const router = useRouter();

  return (
    <div style={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      gap: '10px',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '50px',
      backgroundColor: '#1f2937',
      padding: '20px',
      borderRadius: '12px'
    }}>
      <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
      <TextInput placeholder='Enter room name' />

      <button
        onClick={()=>{router.push("/chat/123")}}
        style={{
          padding: '10px 20px',
          backgroundColor: '#2563eb',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
        >
        Join room
      </button>
    </div>
    </div>
  );
}

export default DarkModeInput;
