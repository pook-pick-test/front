import './index.css';
import { useOutletContext, useNavigate, useParams } from "react-router-dom";
import SelectButton from "../../../../components/SelectButton";
import SwitchPageButton from '../../../../components/SwitchPageButton';
import ProgressBar from "../../../../components/ProgressBar";
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../../../context/LanguageContext';

const Reply1988_Question = () => {
  const { lang } = useLanguage();
  const { saveAnswer, answers, questions, saveQuestion } = useOutletContext();
  const navigate = useNavigate();

  const { order } = useParams();
  const currentOrder = Number.parseInt(order, 10) || 1;

  const [questionData, setQuestionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  const testId = "2";
  const totalQuestions = 12;

  useEffect(() => {
    setError(null);
    setLoading(true);

    // ✅ 답변은 언어와 무관하므로 유지 (order별로만)
    setSelectedOption(answers?.[currentOrder] ?? null);

    // ✅ 언어별 캐시 조회 (questions 구조가 { [lang]: { [order]: data } } 여야 함)
    const cached = questions?.[lang]?.[currentOrder];
    if (cached) {
      setQuestionData(cached);
      setLoading(false);
      return;
    }

    const controller = new AbortController();

    const fetchQuestion = async () => {
      try {
        const response = await fetch(
          `/api/tests/${testId}/questions/${currentOrder}?lang=${lang}`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error('질문을 불러오는데 실패했습니다.');
        }

        const data = await response.json();
        setQuestionData(data);

        // ✅ lang 포함 저장
        saveQuestion(currentOrder, data, lang);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err?.message || '알 수 없는 오류가 발생했습니다.');
          console.error('Error fetching question:', err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchQuestion();

    return () => controller.abort();
  }, [currentOrder, lang]);

  const handleSelect = (optionId) => {
    setSelectedOption(optionId);
    saveAnswer(currentOrder, optionId);
  };

  const handleNext = () => {
    if (selectedOption == null) {
      alert('답변을 선택해주세요!');
      return;
    }

    if (currentOrder < totalQuestions) {
      navigate(`../question/${currentOrder + 1}`);
    } else {
      navigate('../result');
    }
  };

  const handlePrevious = () => {
    if (currentOrder > 1) {
      navigate(`../question/${currentOrder - 1}`);
    } else {
      navigate('..');
    }
  };

  if (loading) {
    return (
      <div className="reply1988-explain-4">
        <div className="loading-container"><p>Loading...</p></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="reply1988-explain-4">
        <div className="error-container">
          <p className="error-message">{error}</p>
          <SwitchPageButton onClick={handlePrevious}>previous</SwitchPageButton>
        </div>
      </div>
    );
  }

  if (!questionData) {
    return (
      <div className="reply1988-explain-4">
        <div className="error-container">
          <p className="error-message">질문 데이터가 없습니다.</p>
          <SwitchPageButton onClick={handlePrevious}>previous</SwitchPageButton>
        </div>
      </div>
    );
  }

  const hasOptions = Array.isArray(questionData.options) && questionData.options.length > 0;

  return (
    <div className="reply1988-explain-4">
      <ProgressBar currentStep={currentOrder} totalSteps={totalQuestions} className="progress-bar" />

      <div className="question1-wrapper">
        <h3 className="question1">
          Q{questionData.order}. {questionData.question}
        </h3>

        <div className="options">
          {hasOptions ? (
            questionData.options.map((option) => (
              <SelectButton
                key={option.id}
                id={option.id}
                text={option.text}
                onSelect={handleSelect}
                isSelected={selectedOption === option.id}
              />
            ))
          ) : (
            <div className="text-input-container">
              <textarea
                value={selectedOption ?? ''}
                onChange={(e) => {
                  setSelectedOption(e.target.value);
                  saveAnswer(currentOrder, e.target.value);
                }}
                placeholder="답변을 입력해주세요"
                className="text-input"
              />
            </div>
          )}
        </div>
      </div>

      <div className='switch-page-container'>
        <SwitchPageButton onClick={handlePrevious} className="previous-button">
          previous
        </SwitchPageButton>

        <SwitchPageButton
          onClick={handleNext}
          disabled={selectedOption == null || selectedOption === ''}
          className="next-button"
        >
          {currentOrder === totalQuestions ? 'See Result' : 'Next'}
        </SwitchPageButton>
      </div>
    </div>
  );
};

export default Reply1988_Question;
