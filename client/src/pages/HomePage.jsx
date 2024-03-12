import { Link } from "react-router-dom";
import headerImage from "../assets/images/main-bg-desktop.svg";

const HomePage = () => {
  return (
    <main>
      <header className="main--header">
        <img className="header--img" src={headerImage} alt="" />
        <div className="header--items">
          <p>Jobfinder</p>
          <Link to="/login" className="auth--btn login-btn">
            Login
          </Link>
          <Link to="/register" className="auth--btn signup-btn">
            Register
          </Link>
        </div>
      </header>
    </main>
  );
};
export default HomePage;
