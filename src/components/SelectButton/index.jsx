import './index.css';

const SelectButton = ({ id, text, onSelect, isSelected }) => {
    return (
        <button
            className={`option-button ${isSelected ? 'selected' : ''}`}
            onClick={() => onSelect(id)}
        >
            <span>{text}</span>
        </button>
    );
};

export default SelectButton;