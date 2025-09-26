import { useNavigate } from "react-router-dom";
import "./index.css";
import SwitchPageButton from "../../../../components/SwitchPageButton";
import ProgressBar from "../../../../componenets/ProgressBar";

const SajuTest_3 = () => {
  const navigate = useNavigate();
  const handleButton = () => {
    navigate('../5');
  }

  return (
    <div clasName="saju-test-4">
      <ProgressBar className="progressBar-3" currentStep={3} totalSteps={3} />
      <div className="desc-3-wrapper">
        <h3 className="desc-3">get to know about saju(사주)</h3>
        <img src={} alt="사주 표 이미지" className="saju-table-img" />
        <p>What can be tole by SAJU?</p>
        <br /><br />
        <ul>
          <li>Analyze a person’s inborn personality, potential, and entire life path</li>
          <li>Predict luck cycles, career paths, marriage compatibility, health, and more</li>
          <li>Select auspicious dates for weddings, moving, or starting a business</li>
        </ul>
        <SwitchPageButton className="desc-next-button" onClick={handleButton} disabled={false} />      // 이 부분 확인해봐야 함
      </div>
    </div>
}
