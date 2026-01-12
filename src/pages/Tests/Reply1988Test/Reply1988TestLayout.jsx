import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../../components/Header';

const Reply1988TestLayout = () => {
  const [memo, setMemo] = useState(""); //이름
  const [answers, setAnswers] = useState({});   //각 페이지별 선택 결과
  const [questions, setQuestions] = useState({}); //API에서 받아온 질문들 저장

  // 특정 페이지 답변 저장 함수
  const saveAnswer = (page, value) => {
    setAnswers((prev) => ({
      ...prev,
      [page]: value
    }));
  };

  // 질문 데이터 저장 함수
  const saveQuestion = (order, questionData, lang) => {
    setQuestions(prev => ({
      ...prev,
      [lang]: {
        ...(prev[lang] || {}),
        [order]: questionData,
      },
    }));
  };

  return (
    <div>
      <Header />
      <Outlet context={{memo, setMemo, saveAnswer, answers, questions, saveQuestion}}/> {/* 여기에 하위 라우트 컴포넌트가 렌더링 됩니다 */}
    </div>
  );
};

export default Reply1988TestLayout;
