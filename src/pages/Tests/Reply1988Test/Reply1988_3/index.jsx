import microphoneImg from "../../../../assets/microphone.png";
import './index.css';
import SwitchPageButton from "../../../../components/SwitchPageButton";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../../../components/ProgressBar";
import { useLanguage } from "../../../../context/LanguageContext";

const Reply1988_3 = () => {
    const navigate = useNavigate();
    const { lang } = useLanguage();

    const handleNext = () => {
        //다음 페이지로 이동
        navigate('../question/1');
    }      

    const titleByLang = {
        ko : "응답하라 1988",
        en : "Reply 1988",
        th : "Reply 1988"
    }

    const descByLang = {
        ko : "어디에서 볼 수 있나요?",
        en : "Where to watch?",
        th : "สามารถดูได้ที่ไหน?"
    }

    return(
        <div className="reply1988-explain-3">
            <ProgressBar currentStep={3} totalSteps={3} className="progress-bar" />
            <h2 className="test-name">{titleByLang[lang]}</h2>
            <img src={microphoneImg} alt="microphone-image" className="microphone-img"/>
            <p className="test-description">{descByLang[lang]}</p>
            <p className="test-description">
                <a href="https://www.tving.com/contents/P000205285" target="_blank" rel="noopener noreferrer">
                    "TVing"
                </a>
            </p>
            <div className="switch-page-button-container">
                <SwitchPageButton onClick={() => navigate('/category/drama/reply1988-test/2')} disabled={false} className="previous-button">Previous</SwitchPageButton>
                <SwitchPageButton onClick={handleNext} disabled={false}>Test Start</SwitchPageButton>
            </div>
        </div>
    );
}

export default Reply1988_3;