import { Toaster } from "react-hot-toast";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route index Component={HomePage} />
          <Route Component={AuthPage}>
            <Route path="login" Component={LoginForm} />
            <Route path="register" Component={RegisterForm} />
          </Route>
        </Routes>
      </Router>
      <Toaster />
    </>
  );
};
export default App;
