//설명 끝 & 테스트 시작 페이지
import { useNavigate } from 'react-dom-router';
import './index.css';

const SajuTest_TestStart = () => {
  const navigate = useNavigate();
  const handleButtonNext = () => {
    navigate('../6');
  }
  const handleButtonPrevious = () => {
    navigate('../4);
  }
  return (
    <div className="saju-test-startnow">
      <img src={} alt="사주데이터 크리스털 볼 이미지" className="crystal-ball" />
      <h3>
        If you walk around Korea, you’ll easily spot Saju booths almost everywhere. <br /><br />
        Now, are you ready to try Saju?
      </h3>
      <button onClick={handleButtonNext}>start</button>
      <button onClick={handleButtonPrevious}>previous</button>
    </div>
  )
}
export default SajuTest_TestStart;
