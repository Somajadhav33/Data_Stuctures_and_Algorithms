import { Link } from "react-router-dom";
import "./index.css";
import img from "./user.jpg";
import img2 from "./skillshare.png";

const Header = () => {
  const onClickLogout = () => {
    // Clear user session and redirect to login
  };
  return (
    <header>
      <ul>
        <img src={img2} alt="Logo" />
        <li>
          <Link to="/" className="nav-item">
            Home
          </Link>
        </li>
        <li>
          <Link to="/my-courses" className="nav-item">
            Courses
          </Link>
        </li>
        <li>
          <Link to="/my-courses" className="nav-item">
            My Courses
          </Link>
        </li>
      </ul>

      <ul>
        <li>
          <Link to="/" className="nav-item">
            Somnath Jadhav
          </Link>
        </li>
        <img src={img} alt="Profile" />
        <li>
          <Link to="/login"><button className="logout-btn" onClick={() => onClickLogout()}>
            Logout
          </button></Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
