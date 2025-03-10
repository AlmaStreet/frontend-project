// routes.ts
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home';
import Welcome from './welcome/welcome';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/welcome" element={<Welcome />} />
    </Routes>
  );
}
