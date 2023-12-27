import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Dashboard from './Dashboard';

export default function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about/" element={<About />}>
          <Route path="contact" element={<Contact />} />
        </Route>

      </Routes>
    </Router>
  );
}
