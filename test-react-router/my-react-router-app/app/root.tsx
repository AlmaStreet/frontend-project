// root.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import routes from './routes'; // our routes are defined here
import './app.css';

function App() {
  let element = useRoutes(routes);
  return element;
}

// Only create the root if document exists (i.e., running in the browser)
if (typeof document !== 'undefined') {
  const root = ReactDOM.createRoot(document.getElementById('root')!);
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
