import microphoneImg from "../../../../assets/microphone.png";
import './index.css';
import SwitchPageButton from "../../../../components/SwitchPageButton";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../../../components/ProgressBar";
import { useLanguage } from "../../../../context/LanguageContext";

const Reply1988_Start = () => {
    const navigate = useNavigate();
    const { lang } = useLanguage();

    const handleNext = () => {
        //다음 페이지로 이동
        navigate('2');
    }

    const titleByLang = {
        ko : "응답하라 1988",
        en : "Reply 1988",
        th : "Reply 1988"
    }

    const descByLang = {
        ko : "응답하라 1988은 2015-2016년에 방영되었습니다. 1988년을 배경으로 서울 쌍문동의 같은 동네에 사는 다섯 가족의 삶을 따라갑니다. 이야기는 십대 친구들인 덕선, 정환, 선우, 동룡, 택을 중심으로 그들의 성장 경험, 가족 역학, 우정, 첫사랑을 포착합니다.",
        en : "Reply 1988 is aired in 2015–2016. Set in the year 1988, it follows the lives of five families living in the same neighborhood in Ssangmun-dong, Seoul. The story centers around a group of teenage friends—Deok-sun, Jung-hwan, Sun-woo, Dong-ryong, and Taek—and captures their coming-of-age experiences, family dynamics, friendships, and first loves.",
        th : "Reply 1988 ออกอากาศในปี 2015-2016 ตั้งอยู่ในปี 1988 ติดตามชีวิตของครอบครัวห้าครอบครัวที่อาศัยอยู่ในละแวกเดียวกันในซังมุนดง โซล เรื่องราวเน้นไปที่กลุ่มเพื่อนวัยรุ่น—ด็อกซุน จองฮวาน ซันอู ดงรยอง และแท็ก—และจับภาพประสบการณ์การเติบโตของพวกเขา พลวัตของครอบครัว มิตรภาพ และความรักครั้งแรก"
    }

    return(
        <div className="reply1988-explain-1">
            <ProgressBar currentStep={1} totalSteps={3} className="progress-bar" />
            <h2 className="test-name">{titleByLang[lang]}</h2>
            <img src={microphoneImg} alt="microphone-image" className="microphone-img"/>
            <p className="test-description">{descByLang[lang] ?? "No description available."}</p>
            <SwitchPageButton className="desc-start-button" onClick={handleNext} disabled={false}>next</SwitchPageButton>
        </div>
    );
}

export default Reply1988_Start;