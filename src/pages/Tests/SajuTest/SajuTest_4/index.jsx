import { useNavigate } from "react-router-dom";
import "./index.css";
import SwitchPageButton from "../../../../components/SwitchPageButton";
import ProgressBar from "../../../../componenets/ProgressBar";

const SajuTest_3 = () => {
  const navigate = useNavigate();
  const handleButton = () => {
    navigate('../4');
  }

  return (
    <div clasName="saju-test-3">
      <ProgressBar className="progressBar-2" currentStep={2} totalSteps={3} />
      <div className="desc-2-wrapper">
        <h3 className="desc-2">get to know about saju(사주)</h3>
        <img src={} alt="사주 표 이미지" className="saju-table-img" />
        <p className="desc-content-2"> Saju is made up of <strong>four pillars</strong> — year, month, day, and hour of your birth. <br /><br />
          Thus, There are over 12 million possible full Saju combinations. <br /><br />
          It’s like your personal cosmic DNA
        </p>
        <SwitchPageButton className="desc-next-button" onClick={handleButton} disabled={false} />      // 이 부분 확인해봐야 함
      </div>
    </div>
}
