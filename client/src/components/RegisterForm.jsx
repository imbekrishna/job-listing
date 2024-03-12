import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    mobile: "",
    name: "",
  });

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
      // TODO: set usetoken to context
      await axios.post("/api/auth/signup", formData);
      toast.success("Registration successful");
      navigate("/login");
      toast("Please login");
    } catch (error) {
      const { response } = error;
      console.error(response.data);
      toast.error(response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth--form">
      <h1 className="font--title">Create an account</h1>
      <p>Your personal job finder is here</p>
      <form onSubmit={handleSubmit}>
        <input
          className="form--input"
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          className="form--input"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          className="form--input"
          type="text"
          name="mobile"
          placeholder="Mobile"
          value={formData.mobile}
          onChange={handleChange}
        />
        <input
          className="form--input"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        {/* TODO: add terms and service checkbox */}
        <button className="btn form--btn" type="submit">
          {loading ? <Spinner /> : "Sign in"}
        </button>
      </form>
      <p>
        Already have an account?{" "}
        <Link to="/login" className="auth--link">
          Sign In
        </Link>
      </p>
    </div>
  );
};
export default RegisterForm;
