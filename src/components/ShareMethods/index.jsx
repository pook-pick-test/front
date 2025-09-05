import './index.css';
import html2canvas from 'html2canvas';
import shareXimage from '../../../../assets/xshare.png';
import lineImage from '../../../../assets/lineshare.png';
import downloadImage from '../../../../assets/downloadButton.png';

const ShareMethods = () => {
  //x 공유
  const shareWithX = () => {
    var sendText = "내 결과도 알아보기";   // 언어 변경 생각해야됨
    var sendUrl = "https://example.com"
    var xURL = "https://twitter.com/intent/tweet?text="
      + encodeURIComponent(sendText)
      + "&url=" + encodeURIComponent(sendUrl);
    window.open(xURL, "_blank");
  }
  
  //이미지 다운로드
  const handleDownloadImage = async() => {
    const element = document.querySelector('.result-wrapper');  //캡처하고 싶은 영역
    if(!element) return;
    try{
      const canvas = await html2canvas(element);

      //blob으로 변환 후 다운
      canvas.toBlob((blob) => {
        if(blob) {
          const link = document.createElement('a');
          link.href = URL.createObjectURL(blob);
          link.download = 'reply1988_result.png';
          link.click();
          URL.revokeObjectURL(link.href);
        }
      });
    } catch(error) {
      console.error('이미지 저장 중 에러 발생', error);
    }
  }
  return (
    <div className="sharing-methods">
      <p className="share-desc">share with your friends</p>
      <div className="sharing-buttons">
        <img src={shareXimage} alt="shareWith-X" onClick={shareWithX} />
        <a href="https://line.me/R/msg/text/?내%20결과도%20알아보기%20
          <img src={lineImage} alt="shareWith-Line" onClick={} />
        </a>
      </div>
    </div>
  );
};
