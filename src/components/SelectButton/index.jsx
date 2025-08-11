import './index.css';

const SelectButton = ({ id, text, onSelect }) => {
    return (
        <button
            className="option-button"
            onClick={() => onSelect(id)}
        >
            <span>{text}</span>
        </button>
    );
};

export default SelectButton;