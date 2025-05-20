import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux-Toolkit/Store";
import RestaurantList from "./Components/RestaurantList/RestaurantList";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";
import Login from "./Components/Login/Login";
import Signup from "./Components/SignUp/SignUp";
import Home from "./Components/Home";

function App() {
  return (
    <Provider store={store}>
      <Router basename="/Food-Delivery-Application">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurant" element={<RestaurantList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
