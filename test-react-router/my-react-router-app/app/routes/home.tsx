// routes/home.tsx
import React, { useState } from 'react';

function ApiForm() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<{ message?: string; input?: string; timestamp?: string; error?: string } | null>(null);

  const handleClick = async () => {
    try {
      // For this example, we're using a placeholder URL.
      const res = await fetch('https://example.com/api', {
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
      // In a real project, you might want to be more specific
      setResponse({ error: 'Error fetching data' });
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>React Router API Form</h1>
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

export default function Home() {
  return (
    <div>
      <ApiForm />
    </div>
  );
}
