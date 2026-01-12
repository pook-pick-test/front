import { useLanguage } from '../../context/LanguageContext';

const LanguageSelector = () => {
    const { lang, changeLanguage } = useLanguage();
    
    return (
        <select 
            className='language-select'
            value={lang} 
            onChange={(e) => changeLanguage(e.target.value)}
        >
            <option value="ko">한국어</option>
            <option value="en">English</option>
            <option value="th">ภาษาไทย</option>
        </select>
    );
};
export default LanguageSelector;