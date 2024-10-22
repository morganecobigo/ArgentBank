import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Nav from "../components/nav/Nav";
import Home from "../pages/home/Home";

import Signin from "../pages/signin/Signin";
import User from "../pages/user/User";
import { getUser } from "../redux/actions/userActions";

const Navigation = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.user);
  useEffect(() => {
    const tokenFromStorage = localStorage.getItem("token");
    if (tokenFromStorage) {
      getUser(tokenFromStorage, dispatch);
    }
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/signin"
            element={token ? <Navigate replace to="/user" /> : <Signin />}
          />
          <Route
            path="/user"
            element={!token ? <Navigate replace to="/signin" /> : <User />}
          />
          <Route
            path="/profile"
            element={!token ? <Navigate replace to="/signin" /> : <User />}
          />
          <Route path="/*" element={<Navigate replace to="/" />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default Navigation;
