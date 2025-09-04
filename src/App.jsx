import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ReadMore from './pages/ReadMore';
import IdolTest_Start from './pages/Tests/IdolTest/IdolTest_1';
import IdolTestLayout from './pages/Tests/IdolTest/IdolTestLayout';
import IdolTest_2 from './pages/Tests/IdolTest/IdolTest_2';
import IdolTest_3 from './pages/Tests/IdolTest/IdolTest_3';
import IdolTest_4 from './pages/Tests/IdolTest/IdolTest_4';
import Reply1988_Start from './pages/Tests/Reply1988Test/Reply1988_1';
import Reply1988TestLayout from './pages/Tests/Reply1988Test/Reply1988TestLayout';
import Reply1988_2 from './pages/Tests/Reply1988Test/Reply1988_2';
import Reply1988_3 from './pages/Tests/Reply1988Test/Reply1988_3';
import Reply1988_4 from './pages/Tests/Reply1988Test/Reply1988_4';
import Reply1988_Result from './pages/Tests/Reply1988Test/Reply1988_result';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/readmore" element={<ReadMore />} />
          
          {/* Idol Test 중첩 라우트 */}
          <Route path="category/music" element={<IdolTestLayout />}>      {/*url 나중에 /idol-test 추가하기*/}
            <Route index element={<IdolTest_Start />} />
            <Route path="2" element={<IdolTest_2/>} />
            <Route path="3" element={<IdolTest_3/>} />
            <Route path="4" element={<IdolTest_4/>} />
          </Route>

          {/* Reply 1988 Test 중첩 라우트 */}
          <Route path="category/drama" element={<Reply1988TestLayout />}>    {/*url 나중에 /reply1988-test 추가하기*/}
            <Route index element={<Reply1988_Start />} />
            <Route path="2" element={<Reply1988_2 />} />
            <Route path="3" element={<Reply1988_3 />} />
            <Route path="4" element={<Reply1988_4 />} />
            <Route path="result" element={<Reply1988_Result />} />
          </Route>
        </Routes>
      </Router>
  );
}

export default App;