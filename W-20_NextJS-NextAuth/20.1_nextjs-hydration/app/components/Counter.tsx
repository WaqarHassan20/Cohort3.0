'use client';

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p className="text-2xl text-yellow-400 font-extrabold mb-6">
        Count: {count}
      </p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-6 py-2 text-black font-bold bg-[#0ff] rounded-full shadow-[0_0_10px_#0ff] hover:shadow-[0_0_20px_#0ff] transition-all"
      >
        Increase
      </button>
    </div>
  );
}

export default Counter;
