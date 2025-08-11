import React from "react";
import { useNavigate } from "react-router-dom";
import './index.css';

const categories = [ 'music', 'drama', 'horo' ];

const CategoryButtons = () => {
    const navigate = useNavigate();

    const handleClick = (category) => {
        navigate(`/category/${category}`);
    }

    return (
        <div className="category-buttons">
            {categories.map((category, index) => (
            <button key={index} className="category-btn" onClick={() => handleClick(category)}>{category}</button>
        ))}
        </div>
    );
};

export default CategoryButtons;
