import { useNavigate } from "react-router-dom";
import "./index.css";
import SwitchPageButton from "../../../../components/SwitchPageButton";
import ProgressBar from "../../../../components/ProgressBar";
import SajuTableImg from '../../../../assets/saju-table-img.png';

const SajuTest_3 = () => {
  const navigate = useNavigate();
  const handleButton = () => {
    navigate('../4');
  }

  return (
    <div className="saju-test-3">
      <ProgressBar className="progressBar-2" currentStep={2} totalSteps={3} />
      <div className="desc-2-wrapper">
        <h3 className="desc-2">get to know about saju(사주)</h3>
        <img src={SajuTableImg} alt="사주 표 이미지" className="saju-table-img" />
        <p className="desc-content-2"> Saju is made up of <b>four pillars</b> — year, month, day, and hour of your birth. <br /><br />
          Thus, There are over 12 million possible full Saju combinations. <br /><br />
         It’s like your personal cosmic DNA
        </p>
        <div className="switch-page-button-container">
          <SwitchPageButton onClick={() => navigate('/category/horo/2')} disabled={false} className="previous-button">previous</SwitchPageButton>
          <SwitchPageButton onClick={handleButton} disabled={false}>next</SwitchPageButton>
        </div>
      </div>
    </div>
  );
}
export default SajuTest_3;