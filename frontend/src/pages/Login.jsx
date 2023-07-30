import React, { Fragment, useState, useEffect } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import MetaData from "../containers/MetaData";
import { clearErrors, login, register } from "../store/actions/user";

const Register = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const [avatar, setAvatar] = useState(null);

  const {
    error,
    isAuthenticated,
    user: userr,
  } = useSelector((state) => state.user);

  const [user, setuser] = useState({
    email: "",
    password: "",
  });

  const handleDataChange = (e) => {
    if (e.target.name === "email") {
      setuser({ ...user, email: e.target.value });
    } else {
      setuser({ ...user, password: e.target.value });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (user.email.length !== 0 && user.password.length !== 0) {
      dispatch(login(user));
    } else {
      alert.error("please complete the fields");
    }
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [error]);

  useEffect(() => {
    if (isAuthenticated) {
      navigate(`/${userr.username}`);
    }
  }, [userr]);

  return (
    <Fragment>
      <MetaData title="Travel-Planner | Home" />
      <div className="loginPage">
        <h1>Login</h1>
        <form>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleDataChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleDataChange}
          />
          <button type="submit" className="btnRegister" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default Register;
