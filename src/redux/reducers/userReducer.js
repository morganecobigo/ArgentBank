import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    token: "",
    user: null,
    userLoading: false,
    error: null,
  },
  reducers: {
    loginUserRequest: (state) => {
      state.userLoading = true;
      state.error = null;
    },
    loginUserSuccess: (state, action) => {
      state.userLoading = false;
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.error = null;
    },
    loginUserFailed: (state, action) => {
      state.userLoading = false;
      state.error = action.payload;
    },
    logoutUser: (state) => {
      state.token = "";
      state.user = null;
      state.error = null;
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
