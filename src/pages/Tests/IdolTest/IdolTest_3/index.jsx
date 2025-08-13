import { useNavigate, useOutletContext } from "react-router-dom";
import './index.css';
import SwitchPageButton from "../../../../components/SwitchPageButton";
import SelectButton from "../../../../components/SelectButton";
import ProgressBar from '../../../../components/ProgressBar';

const IdolTest_3 = () => {
    const navigate = useNavigate();
    const { saveAnswer, answers } = useOutletContext();

    const handleSelect = (optionId) => {
        console.log('Selected option ID:', optionId);
        saveAnswer('ql', optionId);
    };

    const handleNext = () => {
        if (answers.ql) {
            navigate('../4'); // 다음 페이지로 이동
        } else {
            alert('Please select an option before proceeding.');
        }
    }

    const options = [
        { id: 1, text: '일찍 일어나 부지런히 헤어 메이크업을 받는다'},
        { id: 2, text: '여유롭게 가장 마지막에 메이크업을 받는다'}
    ]

    return (
        <div className="idol-test-3">
            <ProgressBar className="progressBar-1" currentStep={1} totalSteps={3} />
            <div className="question-1-wrapper">
                <h3 className="question-1">Q1. 오늘은 스케줄이 있는 날! 아침에 준비하는 나의 모습은?</h3>
                <div className="option">
                    {options.map((opt) => (
                        <SelectButton 
                            key={opt.id} 
                            id={opt.id} 
                            text={opt.text} 
                            onSelect={handleSelect} 
                        />
                    ))}
                </div>
                <div className="switch-page-button-wrapper">
                    <SwitchPageButton className="switch-page-button">previous</SwitchPageButton>
                    <SwitchPageButton className="switch-page-button" onClick={handleNext}>next</SwitchPageButton>
                </div>
            </div>
        </div>
    );
};

export default IdolTest_3;