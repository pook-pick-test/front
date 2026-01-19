import Header from "../../components/Header";
import logo from "../../assets/logo.png";
import "./index.css";
import { useLanguage } from "../../context/LanguageContext";
import { useMemo } from "react";
import mimoticon1 from "../../assets/mimoticon-seoyeon1.png";
import mimoticon2 from "../../assets/mimoticon-minseo.png";
import mimoticon3 from "../../assets/mimoticon-seoyeon2.png";
import mimoticon4 from "../../assets/mimoticon-nalin.jpeg";

const ReadMore = () => {
  const { lang } = useLanguage();

  const t = useMemo(() => {
    const dict = {
      en: {
        focusTitle: "our focus",
        focusBody:
          "We are a team of Korean and Thai college students. We started this project with the goal of helping people learn more about Korean culture in a friendly and engaging way. Our mission is to bridge cultures by offering a service that introduces the pop culture of both Korea and Thailand, making it more accessible and enjoyable for everyone.",
        membersTitle: "our members",
        roles: "Roles",
        interests: "Interests",
      },
      ko: {
        focusTitle: "우리의 목표",
        focusBody:
          "저희는 한국과 태국의 대학생들로 이루어진 팀입니다. 한국 문화를 더 친근하고 재미있게 알아갈 수 있도록 돕는 것을 목표로 이 프로젝트를 시작했습니다. 한국과 태국의 대중문화를 함께 소개하며, 누구나 쉽게 즐길 수 있도록 문화를 연결하는 서비스를 만들고 있어요.",
        membersTitle: "팀원 소개",
        roles: "역할",
        interests: "관심사",
      },
      th: {
        focusTitle: "เป้าหมายของเรา",
        focusBody:
          "พวกเราเป็นทีมของนักศึกษามหาวิทยาลัยจากเกาหลีและไทย เราเริ่มโปรเจกต์นี้เพื่อช่วยให้ทุกคนได้เรียนรู้วัฒนธรรมเกาหลีอย่างเป็นกันเองและสนุกสนาน ภารกิจของเราคือเชื่อมโยงวัฒนธรรมผ่านบริการที่แนะนำป๊อปคัลเจอร์ของทั้งเกาหลีและไทย ให้เข้าถึงง่ายและเพลิดเพลินสำหรับทุกคน",
        membersTitle: "สมาชิกของเรา",
        roles: "บทบาท",
        interests: "ความสนใจ",
      },
    };

    return dict[lang] || dict.en;
  }, [lang]);

  return (
    <div className="readmore-container">
      <Header />
      <img src={logo} alt="Logo" className="logo" />

      <div className="our-team">
        <div className="our-focus">
          <h2>{t.focusTitle}</h2>
          <p>{t.focusBody}</p>
        </div>

        <h2>{t.membersTitle}</h2>

        <div className="member">
          <img src={mimoticon3} alt="mimoticon-seoyeon" className="mimoticon-image" />
          <br /><strong>22학번 이서연 (Lee Seoyeon)</strong>
          <br />
          <ul className="member-description">
            <li>Ewha Womans University, Computer Science and Engineering</li>
            <li>{t.roles}: PM, Backend Engineer</li>
            <li>
              {t.interests}: Service planning, applied AI technologies, backend
              system development
            </li>
          </ul>
        </div>

        <div className="member">
          <img src={mimoticon1} alt="mimoticon-seoyeon" className="mimoticon-image" />
          <br /><strong>21학번 김서연 (Kim Seoyeon)</strong>
          <br />
          <ul className="member-description">
            <li>Sungkyunkwan University, Child Psychology and Education</li>
            <li>
              {t.roles}: Content Designer, Research Lead, Meeting Note Manager
            </li>
            <li>{t.interests}: Service planning</li>
          </ul>
        </div>

        <div className="member">
          <img src={mimoticon4} alt="mimoticon-nalin" className="mimoticon-image" />
          <br /><strong>23학번 나린 (Heimvichit, Nunnalin)</strong>
          <br />
          <ul className="member-description">
            <li>Thailand, BKK</li>
            <li>Ewha Womans University, Computer Science and Engineering</li>
            <li>{t.roles}: Marketing, UX/UI designer, Service Planning</li>
            <li>{t.interests}: Machine Learning, Data Analysis</li>
          </ul>
        </div>

        <div className="member">
          <img src={mimoticon2} alt="mimoticon-minseo" className="mimoticon-image" />
          <br /><strong>22학번 박민서 (Park Minseo)</strong>
          <br />
          <ul className="member-description">
            <li>Ewha Womans University, Computer Science and Engineering</li>
            <li>
              {t.roles}: Frontend Engineer, Deployment Manager, Web QA & Debug
              Manager
            </li>
            <li>{t.interests}: service planning, and user-centered service development</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ReadMore;
