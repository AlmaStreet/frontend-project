// import logo from './logo.svg';
// import './App.css';
import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState(null);

  const handleClick = async () => {
    try {
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
      setResponse({ error: error.message });
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>React App without Frameworks</h1>
      <h1>React Front Page</h1>
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

export default App;



// import React, { useState } from 'react';

// function LightSwitch() {
//   // Create a state variable "isOn" with an initial value of false (light is off)
//   const [isOn, setIsOn] = useState(false);

//   // Toggle function to switch the state between true and false
//   const toggleLight = () => {
//     setIsOn(!isOn);
//   };

//   // Style for the circle; changes backgroundColor based on "isOn"
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

// export default LightSwitch;
