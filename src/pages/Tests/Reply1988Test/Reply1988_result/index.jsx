import './index.css';
import html2canvas from 'html2canvas';
import downloadImage from '../../../../assets/downloadButton.png'
import musicPlayer from '../../../../assets/music-player.png'
const Reply1988_Result = () => {
    const handleDownloadImage = async() => {
        const element = document.querySelector('.result-wrapper');     // 캡쳐하고 싶은 영역 선택
        if (!element) return;
        try{
            const canvas = await html2canvas(element);
            
            //blob으로 변환 후 다운로드
            canvas.toBlob((blob) => {
                if(blob){
                    const link = document.createElement('a');
                    link.href = URL.createObjectURL(blob);
                    link.download = 'reply1988_result.png';
                    link.click();
                    URL.revokeObjectURL(link.href);
                }
            });
        } catch(error) {
            console.error('이미지 저장 중 오류 발생:', error);
        }
    }

    return(
        <div className="Reply1988-Result">
            <div className="result-wrapper">
                <h3 className="result-desc">Your Reply 1988<br/>Character is</h3>
                {/* api로 부터 결과를 받아와야함 */}
                {/* //순서대로 이름, 사진, 설명 - API응답 결과로 변환 필요 */}
                <h1 className='result-name'>Deok-sun</h1>
                <img className='result-img' alt='result-img'></img>
                <p className='result-explain'>Deok-sun is a cheerful, kind-hearted, and sometimes clumsy high school girl. She's the middle child in her family and often feels overlooked, but she remains optimistic and loyal to her friends. Deok-sun is relatable and down-to-earth, navigating teenage life, love, and friendship with warmth and sincerity.</p>
                <p className='music-desc'>An OST song that suits you --&gt;</p>
                <div className='result-music'>
                    <div className='music-item'>
                        <img alt='song-img'></img>
                        <p>A little girl - OHYUK</p>
                    </div>
                    <img src={musicPlayer} alt='music-player-img' />
                </div>
            </div>
            <p className='share-desc'>share with your friends</p>
            <div className="sharing-methods">
                <button></button>
                <button></button>
                <img src= {downloadImage} alt='이미지로 저장' onClick={handleDownloadImage} className='download-btn' />
            </div>
        </div>
    );
}

export default Reply1988_Result;