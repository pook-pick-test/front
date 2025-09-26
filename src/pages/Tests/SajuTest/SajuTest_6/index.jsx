// 정보 입력 폼 페이지
import { useNavigate } from 'react-dom-router';
import './index.css';

const SajuProfile_Input = () => {




  return (
    <div className="saju-profile">
      <div className="profile-content-name">
        <p>name *</p>
        <input placeholder="HongGilDong"></input>
      </div>
      <div className="profile-content-birthDate">
        
      </div>
      <div className="profile-content-gender">
        <button>male</button>
        <button>female</button>
        <button>lgbtq+</button>
        <button>rather not say</button>
      </div>
    </div>
  
  );
}
