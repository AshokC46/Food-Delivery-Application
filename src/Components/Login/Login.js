import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../Redux-Toolkit/reducers/AuthSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    userIdentifier: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(credentials));
    navigate("/");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div
        className="card p-4 shadow-sm"
        style={{ width: "350px", borderRadius: "10px" }}
      >
        <h2 className="text-center mb-3">Log In</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Enter username or email"
            name="userIdentifier"
            value={credentials.userIdentifier}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            className="form-control mb-3"
            placeholder="Enter password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <button className="btn btn-primary w-100" type="submit">
            Log In
          </button>
        </form>
        <div className="text-center mt-3">
          <p>
            Don't have an account?{" "}
            <span
              className="text-decoration-none text-primary"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
