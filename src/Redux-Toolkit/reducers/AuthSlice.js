import { createSlice } from "@reduxjs/toolkit";

const storedUser = JSON.parse(localStorage.getItem("user")) || null;
const initialState = {
  user: storedUser,
  isAuthenticated: storedUser ? true : false,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUp: (state, action) => {
      const { userName, email, password, contact  } = action.payload;
    
      const newUser = {
        userName,
        email,
        password,
        contact,
      };
    
      localStorage.setItem("user", JSON.stringify(newUser));
      state.user = newUser;
    },
    
    login: (state, action) => {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (
        storedUser &&
        (action.payload.userIdentifier === storedUser.userName ||
          action.payload.userIdentifier === storedUser.email) &&
        action.payload.password === storedUser.password
      ) {
        state.isAuthenticated = true;
        state.user = storedUser;
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("loggedInUser", storedUser.userName);
      } else {
        alert("Invalid credentials!");
      }
    },
    logout: (state) => {
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("loggedInUser");
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { signUp, login, logout } = AuthSlice.actions;
export default AuthSlice.reducer;
