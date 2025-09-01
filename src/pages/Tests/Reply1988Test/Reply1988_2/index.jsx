import microphoneImg from "../../../../assets/microphone.png";
import './index.css';
import SwitchPageButton from "../../../../components/SwitchPageButton";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../../../components/ProgressBar";

const Reply1988_2 = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        //다음 페이지로 이동
        navigate('../3');
    }
    return(
        <div className="reply1988-explain-2">
            <ProgressBar currentStep={2} totalSteps={3} className="progress-bar" />
            <h2 className="test-name">Reply 1988</h2>
            <img src={microphoneImg} alt="microphone-image" className="microphone-img"/>
            <p className="test-description">Blending nostalgia with humor and heartfelt moments, the show is beloved for its realistic portrayal of youth and family life during the late 1980s in Korea. It’s the third installment in the "Reply" series, following Reply 1997 and Reply 1994, and is often praised as the most emotionally impactful of the trilogy.</p>
            <div className="switch-page-button-container">
                <SwitchPageButton onClick={() => navigate('/category/drama/reply1988-test')} disabled={false} className="previous-button">previous</SwitchPageButton>
                <SwitchPageButton onClick={handleNext} disabled={false}>next</SwitchPageButton>
            </div>
        </div>
    );
}

export default Reply1988_2;