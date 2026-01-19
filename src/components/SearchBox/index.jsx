import React, { useState } from 'react';
import './index.css';
import { useLanguage } from '../../context/LanguageContext';
import { useNavigate } from 'react-router-dom';
import searchbutton from '../../assets/searchbutton.svg'; 

const SearchBox = () => {
    const { lang } = useLanguage();
    const navigate = useNavigate();
    const [query, setQuery] = useState('');
    
    const placeholderText = {
        en: 'Enter a search term',
        ko: '검색어를 입력하세요',
        th: 'ป้อนคำค้นหา',
    };

    const placeholder = placeholderText[lang] || placeholderText.en;
 
    const handleSearch = () => {
        const trimmedQuery = query.trim();
        if(!trimmedQuery) return;  // 검색어를 입력해주세요 팝업 추가 필요

        navigate("/tests/search?query=" + encodeURIComponent(trimmedQuery));
    };

    return (
        <div className="search-box">
            <input type="text" 
                    placeholder={placeholder} 
                    className="search-input" 
                    value={query} 
                    onChange={(e) => setQuery(e.target.value)} 
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch() } />
            <button className="search-button" onClick={handleSearch}>
                <img src={searchbutton} alt="검색" />
            </button>
        </div>
    );
};
export default SearchBox;