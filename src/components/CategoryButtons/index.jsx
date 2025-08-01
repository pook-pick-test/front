import React from "react";
import './index.css';

const categories = [ 'music', 'movie', 'game' ];

const CategoryButtons = () => {
    return (
        <div className="category-buttons">
            {categories.map((category, index) => (
            <button key={index} className="category-btn">{category}</button>
        ))}
        </div>
    );
};

export default CategoryButtons;
