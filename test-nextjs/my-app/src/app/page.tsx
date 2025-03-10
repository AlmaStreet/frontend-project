// src/app/page.jsx
"use client";

import React, { useState } from 'react';

// API Form Component
function ApiForm() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<{ message?: string; input?: string; timestamp?: string; error?: string } | null>(null);


  const handleClick = async () => {
    try {
      // Notice we're calling the local API route here
      const res = await fetch('/api/echo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input }),
      });
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setResponse(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      // setResponse({ error: error.message });
      if (error instanceof Error) {
        setResponse({ error: error.message });
      } else {
        setResponse({ error: 'An unknown error occurred' });
      }
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Next.js API Form</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter text"
      />
      <button onClick={handleClick}>Send</button>
      {response && (
        <div>
          <h2>Response</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

// // LightSwitch Component
// function LightSwitch() {
//   const [isOn, setIsOn] = useState(false);
//   const toggleLight = () => {
//     setIsOn(!isOn);
//   };

//   const circleStyle = {
//     width: '100px',
//     height: '100px',
//     borderRadius: '50%',
//     backgroundColor: isOn ? 'yellow' : 'transparent',
//     border: '2px solid #ccc',
//     margin: '20px auto'
//   };

//   return (
//     <div style={{ textAlign: 'center' }}>
//       <div style={circleStyle}></div>
//       <button onClick={toggleLight}>
//         {isOn ? 'Turn Off' : 'Turn On'}
//       </button>
//     </div>
//   );
// }

// Home Page that combines both components
export default function Home() {
  return (
    <div>
      <ApiForm />
      <hr style={{ margin: '3rem 0' }} />
    </div>
  );
}
