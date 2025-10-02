import SearchBox from "../../components/SearchBox";
import CategoryButtons from "../../components/CategoryButtons";
import Header from "../../components/Header";
import logo from "../../assets/logo.svg";
import "./index.css";
import { useNavigate } from "react-router-dom";
import RecommendBox from "../../components/RecommendBox";
import poster1988 from "../../assets/reply1988_poster.jpg";

const Home = () => {
  const navigate = useNavigate();

  const handleReadMoreClick = () => {
    navigate("/readmore");
  };

  const recommended = [
    {
      image: poster1988,
      title: "Which Reply 1988 character suits you the most?",
      desc: "A retro vibe test that referenced by a famous Korean drama",
      likes: 16,
      path: "/tests/reply1988/Reply1988_1",
    },
  ];

  return (
    <div className="home-container">
      <Header />
      <SearchBox />

      <img src={logo} alt="Logo" className="logo" />

      <div className="about-us">
        <h2>about us</h2>
        <p>
          We are a team of Korean and Thai college students. We started this
          project with the goal of helping people learn more about Korean
          culture in a friendly and engaging way. Our mission is to bridge
          cultures by offering a service that introduces the pop culture of both
          Korea and Thailand, making it more accessible and enjoyable for
          everyone.
        </p>
        <button className="read-more-button" onClick={handleReadMoreClick}>
          read more
        </button>
      </div>

      <div className="categories">
        <div className="category-header">
          <h2>categories</h2>
          <button className="view-all">view all {">"}</button>
        </div>
        <CategoryButtons />
      </div>

      <div className="recommended">
        <h2>recommended</h2>
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