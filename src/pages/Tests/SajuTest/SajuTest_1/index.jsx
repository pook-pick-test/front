import './index.css';
import SwitchPageButton from "../../../../components/SwitchPageButton";
import { useNavigate } from "react-router-dom";
import SajuCrystalBallImg from '../../../../assets/crystal-ball.png';

const SajuTest_Start = () => {
  const navigate = useNavigate();

  //테스트 시작 페이지로
  const handleStartTest = () => {
    console.log("사주테스트 시작");
    navigate("5");
  }

  //테스트 설명 페이지로
  const handleStartDesc = () => {
    console.log("사주테스트 설명 시작");
    navigate("2");
  }
  
  return (
    <div className="saju-test-1">
      <h2 className="test-name">Saju Test</h2>
      <img src={SajuCrystalBallImg} alt="사주 수정구슬 이미지" className="crystalball-img"/>
      <SwitchPageButton className="saju-test-start-button" onClick={handleStartTest} disabled={false}>start</SwitchPageButton>
      <SwitchPageButton className="desc-start-button" onClick={handleStartDesc} disabled={false}>read info</SwitchPageButton>
    </div>
  );
}

export default SajuTest_Start;
