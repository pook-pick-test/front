import React from 'react';
import './index.css';
import searchbutton from '../../assets/searchbutton.svg'; 
const SearchBox = () => {
    return (
        <div className="search-box">
            <input type="text" placeholder='검색어를 입력하세요' className="search-input" />
            <button className="search-button">
                <img src={searchbutton} alt="검색" />
            </button>
        </div>
    );
};
export default SearchBox;