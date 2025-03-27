import { createSlice } from '@reduxjs/toolkit';

const storedUser = JSON.parse(localStorage.getItem("user")) || null;

const LoginFormSlicee = createSlice({
  name: "login",
  initialState: {
    user: storedUser, 
    isAuthenticated: storedUser ? true : false,
  },
  reducers: {
    signUp: (state, action) => {
      localStorage.setItem("user", JSON.stringify(action.payload));
      state.user = action.payload;
    },
    login: (state, action) => {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (
        storedUser &&
        action.payload.userName === storedUser.userName &&
        action.payload.password === storedUser.password
      ) {
        state.isAuthenticated = true;
        state.user = storedUser;
      } else {
        alert("Invalid credentials!");
      }
    },
    logout: (state) => {
      localStorage.removeItem("user");
      state.isAuthenticated = false;
      state.user = null;
    }
  },
});

export const { signUp, login, logout } = LoginFormSlicee.actions;
export default LoginFormSlicee.reducer;
