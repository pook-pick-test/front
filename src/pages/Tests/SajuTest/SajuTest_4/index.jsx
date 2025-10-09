import { useNavigate } from "react-router-dom";
import "./index.css";
import SwitchPageButton from "../../../../components/SwitchPageButton";
import ProgressBar from "../../../../components/ProgressBar";
import SajuTableImg from '../../../../assets/saju-table-img.png';

const SajuTest_4 = () => {
  const navigate = useNavigate();
  const handleButton = () => {
    navigate('../5');
  }

  return (
    <div className="saju-test-4">
      <ProgressBar className="progressBar-3" currentStep={3} totalSteps={3} />
      <div className="desc-3-wrapper">
        <h3 className="desc-3">get to know about saju(사주)</h3>
        <img src={SajuTableImg} alt="사주 표 이미지" className="saju-table-img" />
        <h3 className="descDetail-3">What can be tole by SAJU?</h3>
        <br />
        <ul className="desc-content-3">
          <li>Analyze a person’s inborn personality, potential, and entire life path</li>
          <li>Predict luck cycles, career paths, marriage compatibility, health, and more</li>
          <li>Select auspicious dates for weddings, moving, or starting a business</li>
        </ul>
        <div className="switch-page-button-container">
          <SwitchPageButton onClick={() => navigate('/category/horo/3')} disabled={false} className="previous-button">previous</SwitchPageButton>
          <SwitchPageButton onClick={handleButton} disabled={false}>next</SwitchPageButton>
        </div>
      </div>
    </div>
  );
}
export default SajuTest_4;