import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './index.css';
import SwitchPageButton from '../../../../components/SwitchPageButton';
import DontKnowButton from '../../../../assets/dontKnowButton.png';

const SajuProfile_Input = () => {
  const navigate = useNavigate();
  const [birthDate, setBirthDate] = useState('');
  const [birthTime, setBirthTime] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [showModal, setShowModal] = useState(false); // 모달 상태 추가
  
  const handleNext = () => {
    navigate('../7');
  }

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
        <img 
          src={DontKnowButton} 
          alt="모름 버튼 이미지" 
          className="dont-know-button"
          onClick={() => setShowModal(true)} // 클릭 시 모달 열기
          style={{ cursor: 'pointer' }}
        />
      </div>
      <div className="profile-content-gender">
        <button 
          className={selectedGender === 'male' ? 'selected' : ''}
          onClick={() => setSelectedGender('male')}
        >
          male
        </button>
        <button 
          className={selectedGender === 'female' ? 'selected' : ''}
          onClick={() => setSelectedGender('female')}
        >
          female
        </button>
        <button 
          className={selectedGender === 'lgbtq+' ? 'selected' : ''}
          onClick={() => setSelectedGender('lgbtq+')}
        >
          lgbtq+
        </button>
        <button 
          className={selectedGender === 'other' ? 'selected' : ''}
          onClick={() => setSelectedGender('other')}
        >
          rather not say
        </button>
      </div>
      
      <div className="switch-page-button-container">
        <SwitchPageButton onClick={() => navigate('/category/horo/5')} disabled={false} className="previous-button">previous</SwitchPageButton>
        <SwitchPageButton onClick={handleNext} disabled={false}>next</SwitchPageButton>
      </div>

      {/* 모달 */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <span className="modal-badge">Q & A</span>
            </div>
            <div className="modal-body">
              <div className="modal-question">
                <p>why did you ask about the gender?</p>
              </div>
              <div className="modal-answer">
                <p>
                  originally, Saju (사주, 四柱) does not consider gender. 
                  gender affects the interpretation of the Four Pillars (year, month, day, time) in Korean and Chinese saju.
                </p>
                <p>
                  Thus, the results can be different based on the gender you selected.
                </p>
              </div>
              <div className="modal-note">
                <p>
                  We aware that gender is not limited to binary.
                </p>
                <p>
                  However, in today's world where there is no related theory, we've included everyone who is interested in our saju service as 'rather not say' gender.
                </p>
              </div>
            </div>
            <button className="modal-close-button" onClick={() => setShowModal(false)}>
              close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SajuProfile_Input;