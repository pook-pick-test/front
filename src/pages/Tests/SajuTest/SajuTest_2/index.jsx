import { useNavigate, useOutletContext } from "react-router-dom";
import './index.css';
import SwitchPageButton from "../../../../components/SwitchPageButton";
import ProgressBar from "../../../../components/ProgressBar";

const SajuTest_2 = () => {
  const navigate = useNavigate();
  const handleButton = () => {
    navigate('../3');
  }

  return (
    <div className="saju-test-2">
      <ProgressBar className="progressBar-1" currentStep={1} totalSteps={3} />
      <div className="desc-1-wrapper">
        <h3 className="desc-1">get to know about saju (사주)</h3>
        <img src={} alt="사주 한자 이미지" className="saju-hanja-img" />
        <p className='desc-content-1'>Saju (사주, 四柱) is a fun and fascinating way to explore your personality and destiny using your birth date and time. <br /><br />
           It’s a traditional Korean method of fortune-telling that's based on the Four Pillars of Destiny — a system rooted in Eastern astrology.
        </p>
        <SwitchPageButton className="desc-next-button" onClick={handleButton} disabled={false}>다음</SwitchPageButton>
      </div>
    </div>
    )
}
export default SajuTest_2;
