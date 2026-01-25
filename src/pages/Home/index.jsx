import SearchBox from "../../components/SearchBox";
import CategoryButtons from "../../components/CategoryButtons";
import Header from "../../components/Header";
import logo from "../../assets/logo.png";
import "./index.css";
import { useNavigate } from "react-router-dom";
import RecommendBox from "../../components/RecommendBox";
import poster1988 from "../../assets/reply1988_poster.jpg";
import { useLanguage } from "../../context/LanguageContext";
import { useMemo } from "react";

const Home = () => {
  const navigate = useNavigate();
  const { lang } = useLanguage();

  const handleReadMoreClick = () => {
    navigate("/readmore");
  };

  const t = useMemo(() => {
    const dict = {
      en: {
        aboutUsTitle: "About us",
        aboutUsBody:
          "We are a team of Korean and Thai college students. We started this project with the goal of helping people learn more about Korean culture in a friendly and engaging way. Our mission is to bridge cultures by offering a service that introduces the pop culture of both Korea and Thailand, making it more accessible and enjoyable for everyone.",
        readMore: "Read More",
        categories: "Categories",
        viewAll: "view all",
        recommended: "Recommended",
        recTitle: "Which Reply 1988 character suits you the most?",
        recDesc: "A retro vibe test that referenced by a famous Korean drama",
      },
      ko: {
        aboutUsTitle: "소개",
        aboutUsBody:
          "저희는 한국과 태국의 대학생들로 이루어진 팀입니다. 한국 문화를 더 친근하고 재미있게 알아갈 수 있도록 돕는 것을 목표로 이 프로젝트를 시작했습니다. 한국과 태국의 대중문화를 함께 소개하며, 누구나 쉽게 즐길 수 있도록 문화를 연결하는 서비스를 만들고 있어요.",
        readMore: "더 보기",
        categories: "카테고리",
        viewAll: "전체 보기",
        recommended: "추천",
        recTitle: "나랑 가장 잘 맞는 응답하라 1988 캐릭터는?",
        recDesc: "레트로 감성의 한국 드라마 기반 테스트",
      },
      th: {
        aboutUsTitle: "เกี่ยวกับเรา",
        aboutUsBody:
          "พวกเราเป็นทีมของนักศึกษามหาวิทยาลัยจากเกาหลีและไทย เราเริ่มโปรเจกต์นี้เพื่อช่วยให้ทุกคนได้เรียนรู้วัฒนธรรมเกาหลีอย่างเป็นกันเองและสนุกสนาน ภารกิจของเราคือเชื่อมโยงวัฒนธรรมผ่านบริการที่แนะนำป๊อปคัลเจอร์ของทั้งเกาหลีและไทย ให้เข้าถึงง่ายและเพลิดเพลินสำหรับทุกคน",
        readMore: "อ่านเพิ่มเติม",
        categories: "หมวดหมู่",
        viewAll: "ดูทั้งหมด",
        recommended: "แนะนำ",
        recTitle: "คุณเหมาะกับตัวละครไหนใน Reply 1988 มากที่สุด?",
        recDesc: "แบบทดสอบฟีลเรโทร อ้างอิงจากซีรีส์เกาหลีชื่อดัง",
      },
    };

    // fallback
    return dict[lang] || dict.en;
  }, [lang]);

  const recommended = useMemo(
    () => [
      {
        image: poster1988,
        title: t.recTitle,
        desc: t.recDesc,
        likes: 16,
        path: "/category/drama",
      },
    ],
    [t]
  );

  return (
    <div className="home-container">
      <Header />
      <SearchBox />

      <img src={logo} alt="Logo" className="logo" />

      <div className="about-us">
        <h2>{t.aboutUsTitle}</h2>
        <p>{t.aboutUsBody}</p>
        <button className="read-more-button" onClick={handleReadMoreClick}>
          {t.readMore}
        </button>
      </div>

      <div className="categories">
        <div className="category-header">
          <h2>{t.categories}</h2>
          <button className="view-all">
            {t.viewAll} {">"}
          </button>
        </div>
        <CategoryButtons />
      </div>

      <div className="recommended">
        <h2>{t.recommended}</h2>
        <div className="recommended-grid">
          {recommended.map((item, idx) => (
            <RecommendBox
              key={idx}
              image={item.image}
              title={item.title}
              desc={item.desc}
              likes={item.likes}
              path={item.path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
