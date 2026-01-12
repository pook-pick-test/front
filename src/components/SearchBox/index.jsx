import React from 'react';
import './index.css';
import { useLanguage } from '../../context/LanguageContext';
import searchbutton from '../../assets/searchbutton.svg'; 
const SearchBox = () => {
    const { lang } = useLanguage();

    const placeholderText = {
        en: 'Enter a search term',
        ko: '검색어를 입력하세요',
        th: 'ป้อนคำค้นหา',
    };

    const placeholder = placeholderText[lang] || placeholderText.en;

    return (
        <div className="search-box">
            <input type="text" placeholder={placeholder} className="search-input" />
            <button className="search-button">
                <img src={searchbutton} alt="검색" />
            </button>
        </div>
    );
};
export default SearchBox;