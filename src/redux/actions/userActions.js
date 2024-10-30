import axios from "axios";

import {
  errorUser,
  loginUserRequest,
  loginUserSuccess,
} from "../reducers/userReducer";

export const loginUser = (body, dispatch) => {
  dispatch(loginUserRequest());

  axios
    .post("http://localhost:3001/api/v1/user/login", body)
    .then((res) => {
      if (body.rememberMe) {
        localStorage.setItem("token", res.data.body.token);
      } else {
        localStorage.removeItem("token");
      }
      getUser(res.data.body.token, dispatch);
    })
    .catch(() => {
      dispatch(errorUser({ message: "incorrect login or password" }));
    });
};
export const getUser = (token, dispatch) => {
  dispatch(loginUserRequest());
  console.log("Bearer " + token);
  axios
    .get("http://localhost:3001/api/v1/user/profile", {
      headers: { Authorization: "Bearer " + token },
    })
    .then((res) => {
      const payload = {
        user: res.data.body,
        token,
      };
      dispatch(loginUserSuccess(payload));
    })
    .catch(() => {
      dispatch(
        errorUser({
          message: "unable to recover user",
        })
      );
    });
};
export const updateUser = (token, body, onClose, dispatch) => {
  dispatch(loginUserRequest());

  axios
    .put("http://localhost:3001/api/v1/user/profile", body, {
      headers: { Authorization: "Bearer " + token },
    })
    .then(() => {
      getUser(token, dispatch);
      onClose();
    })
    .catch(() => {
      dispatch(errorUser({ message: "update failed" }));
    });
};
