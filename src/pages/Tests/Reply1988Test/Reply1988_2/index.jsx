import microphoneImg from "../../../../assets/microphone.png";
import './index.css';
import SwitchPageButton from "../../../../components/SwitchPageButton";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../../../components/ProgressBar";
import { useLanguage } from "../../../../context/LanguageContext";

const Reply1988_2 = () => {
    const navigate = useNavigate();
    const { lang } = useLanguage();

    const handleNext = () => {
        //다음 페이지로 이동
        navigate('../3');
    }

    const titleByLang = {
        ko : "응답하라 1988",
        en : "Reply 1988",
        th : "Reply 1988"
    }

    const descByLang = {
        ko : "향수와 유머, 진심 어린 순간들이 어우러진 이 드라마는 1980년대 후반 한국의 청춘과 가족 생활을 현실적으로 묘사하여 많은 사랑을 받았습니다. '응답' 시리즈의 세 번째 작품으로, '응답 1997'과 '응답 1994'에 이어 가장 감동적인 삼부작으로 평가받고 있습니다.",
        en : "Blending nostalgia with humor and heartfelt moments, the show is beloved for its realistic portrayal of youth and family life during the late 1980s in Korea. It’s the third installment in the \"Reply\" series, following Reply 1997 and Reply 1994, and is often praised as the most emotionally impactful of the trilogy.",
        th : "ผสมผสานความคิดถึงกับอารมณ์ขันและช่วงเวลาที่เต็มไปด้วยความรู้สึก ซีรีส์นี้ได้รับความรักอย่างมากจากการนำเสนอชีวิตวัยรุ่นและครอบครัวในช่วงปลายทศวรรษ 1980 ในเกาหลีอย่างสมจริง เป็นภาคที่สามในซีรีส์ \"Reply\" ต่อจาก Reply 1997 และ Reply 1994 และมักได้รับคำชมว่าเป็นภาคที่มีผลกระทบทางอารมณ์มากที่สุดในไตรภาคนี้."
    }

    return(
        <div className="reply1988-explain-2">
            <ProgressBar currentStep={2} totalSteps={3} className="progress-bar" />
            <h2 className="test-name">{titleByLang[lang] ?? "Reply 1988"}</h2>
            <img src={microphoneImg} alt="microphone-image" className="microphone-img"/>
            <p className="test-description">{descByLang[lang] ?? "No description available."}</p>
            <div className="switch-page-button-container">
                <SwitchPageButton onClick={() => navigate('/category/drama/reply1988-test')} disabled={false} className="previous-button">Previous</SwitchPageButton>
                <SwitchPageButton onClick={handleNext} disabled={false}>Next</SwitchPageButton>
            </div>
        </div>
    );
}

export default Reply1988_2;