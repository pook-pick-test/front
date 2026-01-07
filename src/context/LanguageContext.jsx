// context/LanguageContext.jsx
import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState(
        localStorage.getItem('language') || 'ko'
    );
    
    const changeLanguage = (newLang) => {
        setLang(newLang);
        localStorage.setItem('language', newLang);
    };
    
    return (
        <LanguageContext.Provider value={{ lang, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);