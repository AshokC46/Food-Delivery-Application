import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/AuthSlice";
import restaurantReducer from "./reducers/RestaurantSlice";
import cartReducer from "./reducers/CartSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    restaurant: restaurantReducer,
    cart: cartReducer,
  },
});

export default store;
