import microphoneImg from "../../../../assets/microphone.png";
import './index.css';
import SwitchPageButton from "../../../../components/SwitchPageButton";
import { useNavigate } from "react-router-dom";

const IdolTest_Start = () => {
    const navigate = useNavigate();

    const handleStart = () => {
        //다음 페이지로 이동
        console.log("아이돌 포지션 테스트 시작!");
        navigate('2');
    }
    return(
        <div className="idol-test-1">
            <h2 className="test-name">Idol Position Test</h2>
            <img src={microphoneImg} alt="microphone-image" className="microphone-img"/>
            <p className="test-description">In an idol group, each member typically has a fixed role or "position" — such as leader, main vocalist, rapper, dancer, or visual. These roles are assigned based on individual strengths and help create a balanced group dynamic, both on and off stage.</p>
            <SwitchPageButton onClick={handleStart} disabled={false}>Start</SwitchPageButton>
        </div>
    );
}

export default IdolTest_Start;