import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../../components/Header';

const IdolTestLayout = () => {
  const [memo, setMemo] = useState(""); //이름
  const [answers, setAnswers] = useState({});   //각 페이지별 선택 결과

  // 특정 페이지 답변 저장 함수
  const saveAnswer = (page, value) => {
    setAnswers((prev) => ({
      ...prev,
      [page]: value
    }));
  };  

  return (
    <div>
      <Header />
      <Outlet context={{memo, setMemo, saveAnswer, answers}}/> {/* 여기에 하위 라우트 컴포넌트가 렌더링 됩니다 */}
    </div>
  );
};

export default IdolTestLayout;
