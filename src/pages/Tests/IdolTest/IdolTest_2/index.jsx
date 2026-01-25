import { useNavigate, useOutletContext } from 'react-router-dom';
import './index.css';
import SwitchPageButton from "../../../../components/SwitchPageButton";
import ProgressBar from "../../../../components/ProgressBar";
import { useLanguage } from "../../../../context/LanguageContext";

const IdolTest_2 = () => {
    const navigate = useNavigate();
    const { lang } = useLanguage();
    const {memo, setMemo} = useOutletContext();

    const handleButton = () => {
        navigate('../question/1');
    }

    const handlePrevious = () => {
        navigate('/category/music');
    }

    const titleByLang = {
        ko: "당신의 이름은?",
        en: "What is your name?",
        th: "คุณชื่ออะไร?"
    }

    const descByLang = {
        ko: "본명 또는 활동명이 될 수 있어요 ... !",
        en: "It could be your real name or your stage name ... !",
        th: "จะเป็นชื่อจริงหรือสเตจเนมของคุณก็ได้ ... !"
    }

    const placeholderByLang = {
        ko: "이름을 입력하세요",
        en: "Write your name here",
        th: "ชื่อ"
    }

    return (
        <div className='idol-test-2'>
            <ProgressBar currentStep={2} totalSteps={3} className="progress-bar" />
            <h3 className='question1'>{titleByLang[lang] ?? "What is your name?"}</h3>
            <p className='question1-description'>{descByLang[lang] ?? "It could be your real name or your stage name ... !"}</p>
            <textarea 
                className='name-input-field' 
                value={memo} 
                onChange={(e) => setMemo(e.target.value)} 
                placeholder={placeholderByLang[lang] ?? "Write your name here"}
            />
            <div className="switch-page-button-container">
                <SwitchPageButton className="previous-button" onClick={handlePrevious}>Previous</SwitchPageButton>
                <SwitchPageButton className="test-start-button" onClick={handleButton} disabled={!memo}>Start Test</SwitchPageButton>
            </div>
        </div>
    )
}

export default IdolTest_2;