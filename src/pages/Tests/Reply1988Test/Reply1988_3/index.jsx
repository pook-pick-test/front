import microphoneImg from "../../../../assets/microphone.png";
import './index.css';
import SwitchPageButton from "../../../../components/SwitchPageButton";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../../../components/ProgressBar";

const Reply1988_3 = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        //다음 페이지로 이동
        navigate('../4');
    }
    return(
        <div className="reply1988-explain-3">
            <ProgressBar currentStep={3} totalSteps={3} className="progress-bar" />
            <h2 className="test-name">Reply 1988</h2>
            <img src={microphoneImg} alt="microphone-image" className="microphone-img"/>
            <p className="test-description">Where to watch?</p>
            <p className="test-description">
                <a href="https://www.tving.com/contents/P000205285" target="_blank" rel="noopener noreferrer">
                    "TVing"
                </a>
            </p>
            <div className="switch-page-button-container">
                <SwitchPageButton onClick={() => navigate('/category/drama/reply1988-test/2')} disabled={false} className="previous-button">previous</SwitchPageButton>
                <SwitchPageButton onClick={handleNext} disabled={false}>Test Start</SwitchPageButton>
            </div>
        </div>
    );
}

export default Reply1988_3;