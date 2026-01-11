import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../../components/Header';

const IdolTestLayout = () => {
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
      <Outlet context={{memo, setMemo, saveAnswer, answers, questions, saveQuestion}}/>
    </div>
  );
};

export default IdolTestLayout;