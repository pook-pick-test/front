import Header from "../../components/Header";
import logo from '../../assets/logo.svg';
import './index.css';

const ReadMore = () => {
    return (
        <div className="readmore-container">
            <Header />
            <img src={logo} alt="Logo" className="logo"/>
            <div className="our-team">
                <div className="our-focus">
                    <h2>our focus</h2>
                    <p>We are a team of Korean and Thai college students. We started this project with the goal of helping people learn more about Korean culture in a friendly and engaging way.Our mission is to bridge cultures by offering a service that introduces the pop culture of both Korea and Thailand, making it more accessible and enjoyable for everyone.</p>
                </div>
                <h2>our members</h2>
                <div className="member">
                        <strong>22학번 이서연 (Lee Seoyeon)</strong><br />
                        <ul className="member-description">
                            <li>Ewha Womans University, Computer Science and Engineering</li>
                            <li>Roles: PM, Backend Engineer</li>
                            <li>Interests: Service planning, applied AI technologies, backend system development</li>
                        </ul>
                </div>
                <div className="member">
                    <strong>21학번 김서연 (Kim Seoyeon)</strong><br />
                    <ul className="member-description">
                        <li>Sunggyunkwan University, Child Psychology and Education</li>
                        <li>Roles: Content Designer, Research Lead, Meeting Note Manager</li>
                        <li>Service planning</li>
                    </ul> 
                </div>
                <div className="member">
                    <strong>23학번 나린 (Heimvichit, Nunnalin)</strong><br />
                    <ul className="member-description">
                        <li>Thailand, BKK</li>
                        <li>Ewha Womans University, Computer Science and Engineering</li>
                        <li>Roles: Marketing, UX/UI designer, Service Planning</li>
                        <li>Interests: Machine Learning, Data Analysis </li>
                    </ul>
                </div>
                <div className="member">
                    <strong>22학번 박민서 (Park Minseo)</strong><br />
                    <ul className="member-description">
                        <li>Ewha Womans University, Computer Science and Engineering</li>
                        <li>Roles: Frontend Engineer, Deployment Manager, Web QA & Debug Manager</li>
                        <li>Interests: service planning, and user-centered service development</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ReadMore;