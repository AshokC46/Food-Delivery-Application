import { createSlice } from "@reduxjs/toolkit";
import restaurantData from "../../restaurants.json";

const initialState = {
  restaurants: restaurantData.restaurants,
  filter: "all",
};

const RestaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = RestaurantSlice.actions;
export default RestaurantSlice.reducer;
