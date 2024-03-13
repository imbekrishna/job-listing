import { Link, Outlet } from "react-router-dom";
import headerImage from "../assets/images/main-bg-desktop.svg";
import useActiveUser from "../hooks/useActiveUser";

const HomePage = () => {
  const user = useActiveUser();

  return (
    <main>
      <header className="main--header">
        <img className="header--img" src={headerImage} alt="" />
        <div className="header--items">
          <p>Jobfinder</p>
          {user === null ? (
            <>
              <Link to="/login" className="auth--btn login-btn">
                Login
              </Link>
              <Link to="/register" className="auth--btn signup-btn">
                Register
              </Link>
            </>
          ) : (
            <>
              <button className="logout-btn" onClick={user.logout}>
                Logout
              </button>
              <div className="logged--user">
                <p>Hello! {user.name}</p>
                <img
                  className="user--avatar"
                  src="https://picsum.photos/100"
                  alt=""
                  width="60px"
                  height="60px"
                />
              </div>
            </>
          )}
        </div>
      </header>
      <Outlet />
    </main>
  );
};
export default HomePage;
