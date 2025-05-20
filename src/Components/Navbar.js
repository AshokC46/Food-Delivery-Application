import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Redux-Toolkit/reducers/AuthSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart.cart);
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          FoodFusion
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center gap-2">
            {user && (
              <li className="nav-item text-white fw-bold">{user.userName}</li>
            )}

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            {!user && (
              <li className="nav-item">
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
              </li>
            )}

            <li className="nav-item">
              <button
                className="btn btn-success btn-sm"
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </button>
            </li>

            {user && (
              <li className="nav-item">
                <button
                  className="btn btn-danger btn-sm"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            )}

            <li className="nav-item">
              <button
                className="btn btn-warning btn-sm"
                onClick={() => navigate("/cart")}
              >
                Cart {cart.length > 0 && `(${cart.length})`}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
