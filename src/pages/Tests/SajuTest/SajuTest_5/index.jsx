//설명 끝 & 테스트 시작 페이지
import { useNavigate } from 'react-router-dom';
import './index.css';
import SajuCrystalBallImg from '../../../../assets/crystal-ball.png';
import SwitchPageButton from '../../../../components/SwitchPageButton';

const SajuTest_TestStart = () => {
  const navigate = useNavigate();
  const handleButtonNext = () => {
    navigate('../6');
  }
  const handleButtonPrevious = () => {
    navigate('../4');
  }
  return (
    <div className="saju-test-startnow">
      <img src={SajuCrystalBallImg} alt="사주데이터 크리스털 볼 이미지" className="crystalball-img" />
      <h3>
        If you walk around Korea, you’ll easily spot Saju booths almost everywhere. <br /><br />
        Now, are you ready to try Saju?
      </h3>
          <SwitchPageButton className="start-button" onClick={handleButtonNext} disabled={false}>start</SwitchPageButton>
          <SwitchPageButton onClick={handleButtonPrevious} disabled={false}>previous</SwitchPageButton>
    </div>
  )
}
export default SajuTest_TestStart;
