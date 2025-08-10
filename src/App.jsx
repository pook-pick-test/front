import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ReadMore from './pages/ReadMore';
import IdolTest_Start from './pages/Tests/IdolTest/IdolTest_1';
import IdolTestLayout from './pages/Tests/IdolTest/IdolTestLayout';
import IdolTest_2 from './pages/Tests/IdolTest/IdolTest_2';
function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/readmore" element={<ReadMore />} />
          
          {/* Idol Test 중첩 라우트 */}
          <Route path="/music/idol-test" element={<IdolTestLayout />}>
            <Route index element={<IdolTest_Start />} />
            <Route path="2" element={<IdolTest_2/>} />
          </Route>
        </Routes>
      </Router>
  );
}

export default App;