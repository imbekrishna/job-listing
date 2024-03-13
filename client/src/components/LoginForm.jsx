import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
import toast from "react-hot-toast";
import { useCookies } from "react-cookie";

const LoginForm = () => {
  const [, setCookie] = useCookies(["user"]);

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const result = await axios.post("/api/auth/login", formData);
      setCookie("user", result.data.data);
      toast.success("Login successful");
      navigate("/");
    } catch (error) {
      const { response } = error;
      toast.error(response.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth--form">
      <h1 className="font--title">Already have an account?</h1>
      <p>Your personal job finder is here</p>
      <form onSubmit={handleSubmit}>
        <input
          className="form--input"
          type="email"
          name="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <input
          className="form--input"
          type="password"
          name="password"
          placeholder="Password"
          required
          value={formData.password}
          onChange={handleChange}
        />
        <button className="btn form--btn" type="submit">
          {loading ? <Spinner /> : "Sign in"}
        </button>
      </form>
      <p>
        Don&apos;t have an account?{" "}
        <Link to="/register" className="auth--link">
          Sign Up
        </Link>
      </p>
    </div>
  );
};
export default LoginForm;
