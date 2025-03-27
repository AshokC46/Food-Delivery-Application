import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../Redux-Toolkit/reducers/RestaurantSlice";
import { addToCart } from "../../Redux-Toolkit/reducers/CartSlice";
import { logout } from "../../Redux-Toolkit/reducers/AuthSlice";
import { useNavigate } from "react-router-dom";

function RestaurantList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { filter, restaurants } = useSelector((state) => state.restaurant);
  const cart = useSelector((state) => state.cart.cart);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {}, [user]);

  const filteredRestaurants = restaurants.filter((restaurant) =>
    filter === "all" ? true : restaurant.category === filter
  );

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-end mb-3 gap-2">
        {user ? (
          <>
            <span className="text-primary fw-bold" style={{paddingTop:"7px"}}>{user.userName}</span>
            <button className="btn btn-danger" onClick={() => dispatch(logout())}>Logout</button>
          </>
        ) : (
          <>
            <button className="btn btn-secondary" onClick={() => navigate("/login")}>Login</button>
            <button className="btn btn-success" onClick={() => navigate("/signup")}>Sign Up</button>
          </>
        )}
        <button className="btn btn-warning" onClick={() => navigate("/cart")}>
          Go to Cart {cart.length > 0 && `(${cart.length})`}
        </button>
      </div>

      <h2 className="text-center mb-4">Food Fusion</h2>

      <div className="d-flex justify-content-start mb-4">
        <select className="form-select w-auto" value={filter} onChange={(e) => dispatch(setFilter(e.target.value))}>
          <option value="all">Show All</option>
          <option value="Veg">Vegetarian</option>
          <option value="Non-Veg">Non-Vegetarian</option>
          <option value="Desserts">Desserts</option>
        </select>
      </div>

      <div className="row">
        {filteredRestaurants.map((restaurant) => (
          <div key={restaurant.id} className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img src={restaurant.image} className="card-img-top" alt={restaurant.name} style={{ width: "414px", height: "275px" }} />
              <div className="card-body text-center">
                <h5 className="card-title">{restaurant.name}</h5>
                <p className="card-text"><strong>Category:</strong> {restaurant.category}</p>
                <p className="card-text"><strong>Cuisine:</strong> {restaurant.cuisine}</p>
                <button className="btn btn-primary" onClick={() => dispatch(addToCart(restaurant))}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RestaurantList;
