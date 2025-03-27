import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../Redux-Toolkit/reducers/AuthSlice";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (userData.userName && userData.email && userData.password) {
      dispatch(signUp(userData));
      alert("Signup successful! You can now log in.");
      navigate("/login");
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-sm" style={{ width: "350px", borderRadius: "10px" }}>
        <h2 className="text-center mb-3">Sign Up</h2>
        <form onSubmit={handleSignup}>
          <input type="text" className="form-control mb-2" placeholder="Enter username" name="userName" value={userData.userName} onChange={handleChange} required />
          <input type="email" className="form-control mb-2" placeholder="Enter email" name="email" value={userData.email} onChange={handleChange} required />
          <input type="password" className="form-control mb-3" placeholder="Enter password" name="password" value={userData.password} onChange={handleChange} required />
          <div className="form-check mb-3">
            <input type="checkbox" className="form-check-input" id="rememberMe" name="rememberMe" checked={userData.rememberMe} onChange={handleChange} />
            <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
          </div>
          <button className="btn btn-success w-100" type="submit">Sign Up</button>
        </form>
        <div className="text-center mt-3">
          <p>Already have an account? <span className="text-decoration-none text-primary" style={{ cursor: "pointer" }} onClick={() => navigate("/login")}>Log In</span></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
