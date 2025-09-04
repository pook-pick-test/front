import './index.css';
import html2canvas from 'html2canvas';
import shareXimage from '../../../../assets/xshare.png';
import downloadImage from '../../../../assets/downloadButton.png';
import musicPlayer from '../../../../assets/music-player.png';
import lineImage from '../../../../assets/lineshare.png';
const Reply1988_Result = () => {
    {/* 라인 공유하기 */}
    // 이 방식은 webShareAPI 사용하려고 했던 방식
    // const shareWithLine = async() => {
    //     let shareData = {
    //         title: 'TEST:D',
    //         text: 'Share my result with friends!',
    //         url: 'test:D-url 입니당',
    // };
    // const resultPara = document.querySelector();

    {/* X 공유하기 */}
    const shareWithX = () => {
        var sendText = "내 결과도 알아보기"; //전달할 텍스트
        var sendUrl = "https://example.com" //전달할 URL                        //공유 URL 나중에 수정해야함
        var xURL = "https://twitter.com/intent/tweet?text="
            + encodeURIComponent(sendText)
            + "&url=" + encodeURIComponent(sendUrl);
        window.open(xURL, "_blank");
    }

    
    {/* 이미지 저장하기 */}
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
                {/* 결과 캐릭터 이름 */}
                <h1 className='result-name'>Deok-sun</h1>        
                {/* 결과 캐릭터의 사진 */}
                <img className='result-img' alt='result-img'></img>
                {/* 결과 캐릭터의 설명 */}
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
                <img src={shareXimage} alt="shareWith-X" onClick={shareWithX}/>

                <a href="https://line.me/R/msg/text/?내%20결과도%20알아보기%20👉%20https://example.com" target="_blank">
                    <img src={lineImage} alt="LINE으로 공유하기" />
                </a>

                <img src= {downloadImage} alt='이미지로 저장' onClick={handleDownloadImage} className='download-btn' />
            </div>
        </div>
    );
}

export default Reply1988_Result;
