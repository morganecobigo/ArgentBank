import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    token: "",
    user: null,
    userLoading: false,
  },
  reducers: {
    loginUserRequest: (state) => {
      state.userLoading = true;
    },
    loginUserSuccess: (state, action) => {
      state.userLoading = false;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    loginUserFailed: (state) => {
      state.userLoading = false;
    },
    logoutUser: (state) => {
      state.token = "";
      state.user = null;
      localStorage.removeItem("token");
    },
  },
});

export const {
  loginUserRequest,
  loginUserSuccess,
  loginUserFailed,
  logoutUser,
} = userSlice.actions;

export default userSlice.reducer;
