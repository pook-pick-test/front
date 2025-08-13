import microphoneImg from "../../../../assets/microphone.png";
import './index.css';
import SwitchPageButton from "../../../../components/SwitchPageButton";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../../../components/ProgressBar";

const Reply1988_Start = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        //다음 페이지로 이동
        console.log("응팔 설명 시작");
        navigate('2');
    }
    return(
        <div className="reply1988-explain-1">
            <ProgressBar currentStep={1} totalSteps={3} className="progress-bar" />
            <h2 className="test-name">Reply 1988</h2>
            <img src={microphoneImg} alt="microphone-image" className="microphone-img"/>
            <p className="test-description">Reply 1988 is aired in 2015–2016. Set in the year 1988, it follows the lives of five families living in the same neighborhood in Ssangmun-dong, Seoul. The story centers around a group of teenage friends—Deok-sun, Jung-hwan, Sun-woo, Dong-ryong, and Taek—and captures their coming-of-age experiences, family dynamics, friendships, and first loves.</p>
            <SwitchPageButton onClick={handleNext} disabled={false}>next</SwitchPageButton>
        </div>
    );
}

export default Reply1988_Start;