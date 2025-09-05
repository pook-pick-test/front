import './index.css';
import sharingMethods from '../../../../components/ShareMethods';

const idolTest_result = () => {
    return(
       <div className='ideolTest_result'>
            <div className='result-wrapper'>
                <h3 className='result-desc'>'사용자이름'님의<br />아이돌 포지션은</h3>
                <h1 className='result-name'>메인보컬</h1>
            </div>
            <sharingMethods />
       </div> 
    )
}