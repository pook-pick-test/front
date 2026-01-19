import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ReadMore from './pages/ReadMore';
import IdolTest_Start from './pages/Tests/IdolTest/IdolTest_1';
import IdolTestLayout from './pages/Tests/IdolTest/IdolTestLayout';
import IdolTest_2 from './pages/Tests/IdolTest/IdolTest_2';
import IdolTest_Question from './pages/Tests/IdolTest/IdolTest_questions';
import IdolTest_Result from './pages/Tests/IdolTest/IdolTest_result';
import Reply1988_Start from './pages/Tests/Reply1988Test/Reply1988_1';
import Reply1988TestLayout from './pages/Tests/Reply1988Test/Reply1988TestLayout';
import Reply1988_2 from './pages/Tests/Reply1988Test/Reply1988_2';
import Reply1988_3 from './pages/Tests/Reply1988Test/Reply1988_3';
import Reply1988_Result from './pages/Tests/Reply1988Test/Reply1988_result';
import SajuTestLayout from './pages/Tests/SajuTest/SajuTestLayout';
import SajuTest_Start from './pages/Tests/SajuTest/SajuTest_1';
import SajuTest_2 from './pages/Tests/SajuTest/SajuTest_2';
import SajuTest_3 from './pages/Tests/SajuTest/SajuTest_3';
import SajuTest_4 from './pages/Tests/SajuTest/SajuTest_4';
import SajuTest_TestStart from './pages/Tests/SajuTest/SajuTest_5';
import SajuProfile_Input from './pages/Tests/SajuTest/SajuTest_6';
import { LanguageProvider } from './context/LanguageContext';
import Reply1988_Question from './pages/Tests/Reply1988Test/Reply1988_questions';
import TestListPage from './pages/SearchResult';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/readmore" element={<ReadMore />} />
            <Route path="/tests/search" element={<TestListPage />} />
            
            {/* Idol Test 중첩 라우트 */}
            <Route path="category/music" element={<IdolTestLayout />}>
              <Route index element={<IdolTest_Start />} />
              <Route path="2" element={<IdolTest_2/>} />
              <Route path="question/:order" element={<IdolTest_Question />} />
              <Route path="result" element={<IdolTest_Result />} />
            </Route>

            {/* Reply 1988 Test 중첩 라우트 */}
            <Route path="category/drama" element={<Reply1988TestLayout />}>
              <Route index element={<Reply1988_Start />} />
              <Route path="2" element={<Reply1988_2 />} />
              <Route path="3" element={<Reply1988_3 />} />
              <Route path="question/:order" element={<Reply1988_Question />} />
              <Route path="result" element={<Reply1988_Result />} />
            </Route>

            {/* Saju Test 중첩 라우트 */}
            <Route path="category/horo" element={<SajuTestLayout />}>
              <Route index element={<SajuTest_Start />} />
              <Route path='2' element={<SajuTest_2 />} />
              <Route path='3' element={<SajuTest_3/>} />
              <Route path='4' element={<SajuTest_4/>} />
              <Route path='5' element={<SajuTest_TestStart/>} />
              <Route path='6' element={<SajuProfile_Input />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;