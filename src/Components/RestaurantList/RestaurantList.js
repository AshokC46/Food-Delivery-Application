import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../Redux-Toolkit/reducers/RestaurantSlice";
import { addToCart } from "../../Redux-Toolkit/reducers/CartSlice";
import Navbar from "../Navbar";
import Footer from "../Footer";

function RestaurantList() {
  const dispatch = useDispatch();

  const { filter, restaurants } = useSelector((state) => state.restaurant);

  const filteredRestaurants = restaurants.filter((restaurant) =>
    filter === "all" ? true : restaurant.category === filter
  );

  return (
    <>
    <Navbar/>
    <div className="container mt-4">
      

    
      <div className="d-flex justify-content-start mb-4">
        <select
          className="form-select w-auto"
          value={filter}
          onChange={(e) => dispatch(setFilter(e.target.value))}
        >
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
              <img
                src={restaurant.image}
                className="card-img-top"
                alt={restaurant.name}
                style={{ width: "100%", height: "275px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{restaurant.name}</h5>
                <p className="card-text">
                  <strong>Category:</strong> {restaurant.category}
                </p>
                <p className="card-text">
                  <strong>Cuisine:</strong> {restaurant.cuisine}
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => dispatch(addToCart(restaurant))}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default RestaurantList;
