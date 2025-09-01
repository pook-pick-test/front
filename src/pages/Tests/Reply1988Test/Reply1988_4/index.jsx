import './index.css';
import { useNavigate } from "react-router-dom";
import SelectButton from "../../../../components/SelectButton";
import SwitchPageButton from '../../../../components/SwitchPageButton';
import ProgressBar from "../../../../components/ProgressBar";

const Reply1988_4 = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('../result');
    }
    const handlePrevious = () => {
        navigate('../3');
    }
    const handleSelect = (optionId) => {
        console.log('Selected option ID:', optionId);
        saveAnswer('ql', optionId);
    }
    const options = [
        { id: 1, text: 'just eat it'},
        { id: 2, text: 'eat it and cry alone'},
        { id: 3, text: 'remind them you don\'t like it'},
        { id: 4, text: 'trade it with a sibiling'},
        { id: 5, text: 'push it around the plate and hope they don’t notice'},
    ]

    return (
        <div className="reply1988-explain-4">
            <ProgressBar currentStep={1} totalSteps={3} className="progress-bar" />
            <div className="question1-wrapper">
                <h3 className="question1">Q1. What if your parents give you food you hate, but say that you like it?</h3>
                <div className="options">
                    {options.map((op) => (
                        <SelectButton
                            key={op.id}
                            id={op.id}
                            text={op.text}
                            onSelect={handleSelect}
                        />
                    ))}
                </div>
            </div>

            <div className='switch-page-container'>
                <SwitchPageButton onClick={handlePrevious} disabled={false} className="previous-button">previous</SwitchPageButton>
                <SwitchPageButton onClick={handleNext} disabled={false} className="next-button">next</SwitchPageButton>
            </div>
            
        </div>
    );
}
export default Reply1988_4;