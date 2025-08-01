import React from 'react';
import './index.css';

const Header = () => {
  return (
    <header className="header">
      <select className="language-select">
        <option>english</option>
        <option>한국어</option>
        <option>ภาษาไทย</option>
      </select>

      <h1 className="site-title">pook-pick-test</h1>

      <a href="/" className="home-icon">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
      </a>
    </header>
  );
};

export default Header;
