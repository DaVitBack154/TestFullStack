import React from 'react';
import Admin from './page/Admin';
import Landing from './page/Landing';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}
