import { useNavigate, useOutletContext } from 'react-router-dom';
import './index.css';
import SwipePageButton from '../../../../components/SwipePageButton';

const IdolTest_2 = () => {
    const navigate = useNavigate();
    const {memo, setMemo} = useOutletContext();
    const handleButton = () => {
        navigate('../3');
    }

    return (
        <div className='idol-test-2'>
            <h3 className='question1'>what is your name?</h3>
            <p className='question1-description'>it could be your real name or your stage name ... !</p>
            <textarea className='name-input-field' value={memo} onChange={(e) => setMemo(e.target.value)} placeholder="Write your name here"></textarea>
            <SwipePageButton className="test-start-button"onClick={handleButton} disabled={false}>Start Test</SwipePageButton>
        </div>
    )
}

export default IdolTest_2;