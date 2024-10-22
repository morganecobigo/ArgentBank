import {
  faCircleUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/argentBankLogo.png";
import { logoutUser } from "../../redux/reducers/userReducer";

function Nav() {
  const { user, token } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <header>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            src={logo}
            alt="Argent Bank Logo"
            className="main-nav-logo-image"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        {token ? (
          <div className="main-nav-items">
            <Link className="main-nav-item" to="/profile">
              <FontAwesomeIcon icon={faCircleUser} />
              {user && user.userName}
            </Link>
            <button className="main-nav-item" onClick={onLogout}>
              <FontAwesomeIcon icon={faRightFromBracket} />
              Sign Out
            </button>
          </div>
        ) : (
          <div>
            <Link to="/signin">
              <FontAwesomeIcon icon={faCircleUser} />
              Sign In
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Nav;
