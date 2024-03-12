import { Outlet } from "react-router-dom";
import authBg from "../assets/images/auth_bg.png";
const AuthPage = () => {
  return (
    <main className="auth--main">
      <div className="auth--form--div">
        <Outlet />
      </div>
      <div className="auth--img--div">
        <h2 className="font--title">Your Personal Job Finder</h2>
        <img className="auth--img" src={authBg} alt="" />
      </div>
    </main>
  );
};
export default AuthPage;
