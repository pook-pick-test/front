// 정보 입력 폼 페이지
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './index.css';
import SwitchPageButton from '../../../../components/SwitchPageButton';
import DontKnowButton from '../../../../assets/dontKnowButton.png';

const SajuProfile_Input = () => {

  const navigate = useNavigate();
  
  const handleNext = () => {
    navigate('../7');
  }

  const [birthDate, setBirthDate] = useState('');
  const [birthTime, setBirthTime] = useState('');
  const [selectedGender, setSelectedGender] = useState('');

  return (
    <div className="saju-profile">
      <h3>please fill out your profile</h3>
      <div className="profile-content-name">
        <p>name *</p>
        <input placeholder="HongGilDong"></input>
      </div>
      <div className="profile-content-birthDate">
        <p>date of birth *</p>
        <input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)}></input>
      </div>
      <div className="profile-content-birth-wrapper">
        <div className='profile-content-birthTime'>
          <p>time of birth</p>
          <input type="time" value={birthTime} onChange={(e) => setBirthTime(e.target.value)}></input>
        </div>
        <img src={DontKnowButton} alt="모름 버튼 이미지" className="dont-know-button" />
      </div>
      <div className="profile-content-gender">
        <button className={selectedGender === 'male' ? selected : ''} onclick={() => setSelectedGender('male')}>male</button>
        <button className={selectedGender === 'female' ? selected : ''} onclick={() => setSelectedGender('female')}>female</button>
        <button className={selectedGender === 'lgbtq+' ? selected : ''} onclick={() => setSelectedGender('lgbtq+')}>lgbtq+</button>
        <button className={selectedGender === '' ? selected : ''} onclick={() => setSelectedGender('')}>rather not say</button>
      </div>
      
      <div className="switch-page-button-container">
        <SwitchPageButton onClick={() => navigate('/category/horo/5')} disabled={false} className="previous-button">previous</SwitchPageButton>
        <SwitchPageButton onClick={handleNext} disabled={false}>next</SwitchPageButton>
      </div>

    </div>
  
  );
}
export default SajuProfile_Input;
