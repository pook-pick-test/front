import { useNavigate, useOutletContext } from "react-router-dom";
import './index.css';
import SwitchPageButton from "../../../../components/SwitchPageButton";
import SelectButton from "../../../../components/SelectButton";
import ProgressBar from '../../../../components/ProgressBar';

const IdolTest_4 = () => {
    const navigate = useNavigate();
    const { saveAnswer, answers } = useOutletContext();

    const handleSelect = (optionId) => {
        console.log('Selected option ID:', optionId);
        saveAnswer('ql', optionId);
    };

    const handleNext = () => {
        if (answers.ql) {
            // navigate('../5'); // 다음 페이지로 이동
        } else {
            alert('Please select an option before proceeding.');
        }
    }

    const options = [
        { id: 1, text: 'SNSD-"Into the New World"'},
        { id: 2, text: 'BTS-"Fire"'},
        { id: 3, text: 'BLACKPINK-"As If It’s Your Last"'},
        { id: 4, text: 'IU-"Love Poem"'},
        { id: 5, text: 'G-Dragon-"Crooked"'},
        { id: 6, text: 'ZICO-"Artist"'}
    ]

    return (
        <div className="idol-test-4">
            <ProgressBar className="progressBar-2" currentStep={2} totalSteps={3} />
            <div className="question-2-wrapper">
                <h3 className="question-2">Q2. the genre of music i would choose as a audition performance</h3>
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

export default IdolTest_4;