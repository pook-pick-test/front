import SearchBox from "../../components/SearchBox";
import CategoryButtons from "../../components/CategoryButtons";
import Header from "../../components/Header";
import logo from '../../assets/logo.svg';
import './index.css';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const handleReadMoreClick = () => {
        navigate('/readmore');
    };
    return (
        <div className="home-container">
            <Header />
            <SearchBox />
            <img src={logo} alt="Logo" className="logo"/>
            <div className="about-us">
                <h2>about us</h2>
                <p>We are a team of Korean and Thai college students. We started this project with the goal of helping people learn more about Korean culture in a friendly and engaging way.Our mission is to bridge cultures by offering a service that introduces the pop culture of both Korea and Thailand, making it more accessible and enjoyable for everyone.</p>
                <button className="read-more-button" onClick={handleReadMoreClick}>read more</button>
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
            </div>
        </div>
    );
};

export default Home;