import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ReadMore from './pages/ReadMore';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/readmore" element={<ReadMore />} />
        </Routes>
      </Router>
  );
}

export default App;