import React, { Fragment, useState, useEffect } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import MetaData from "../containers/MetaData";
import { clearErrors, register } from "../store/actions/user";

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

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    home_town: "",
  });

  //   const onImageChange = (event) => {
  //     if (event.target.files && event.target.files[0]) {
  //       setImage(URL.createObjectURL(event.target.files[0]));
  //     }
  //   };
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setAvatar(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleDataChange = (e) => {
    if (e.target.name === "name") {
      setUser({ ...user, name: e.target.value });
    } else if (e.target.name === "username") {
      setUser({ ...user, username: e.target.value });
    } else if (e.target.name === "email") {
      setUser({ ...user, email: e.target.value });
    } else if (e.target.name === "password") {
      setUser({ ...user, password: e.target.value });
    } else {
      setUser({ ...user, home_town: e.target.value });
    }
  };

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleRegister = (e) => {
    e.preventDefault();
    if (user.name.length >= 4) {
      if (user.username.length >= 4) {
        // if (!usersArr.includes(user.username)) {
        if (user.username.toLowerCase() !== user.name.toLowerCase()) {
          if (user.email.length !== 0) {
            if (isValidEmail(user.email)) {
              if (user.password.length >= 8) {
                dispatch(register({ user, avatar }));
              } else {
                alert.error("password must have 8 charcaters");
              }
            } else {
              alert.error("Email is invalid");
            }
          } else {
            alert.error("please enter email");
          }
        } else {
          alert.error("name and username can't be same");
        }
        // } else {
        //   alert.error("Username already taken");
        // }
      } else {
        alert.error("username must have atleast 4 characters");
      }
    } else {
      alert.error("name must have atleast 4 characters");
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
      navigate(`/user/${userr.username}`);
    }
  }, [userr]);

  return (
    <Fragment>
      <MetaData title="Travel-Planner | Home" />
      <div className="registerPage">
        <h1>Register</h1>
        <form>
          <label htmlFor="name">
            Full Name<span>*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Full Name"
            value={user.name}
            onChange={handleDataChange}
          />
          <label htmlFor="username">
            Username<span>*</span>
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            value={user.username}
            onChange={handleDataChange}
          />
          <label htmlFor="email">
            Email<span>*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="abc@gmail.com"
            value={user.email}
            onChange={handleDataChange}
          />
          <label htmlFor="password">
            Password<span>*</span>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Min. 8 characters"
            value={user.password}
            onChange={handleDataChange}
          />
          <label htmlFor="home_town">Home Town</label>
          <input
            type="text"
            id="home_town"
            name="home_town"
            placeholder="xyz"
            value={user.home_town}
            onChange={handleDataChange}
          />
          <div>
            <input type="file" onChange={onImageChange} className="filetype" />
            <img alt="preview image" src={avatar} />
          </div>
          <button
            type="submit"
            className="btnRegister"
            onClick={handleRegister}
          >
            Register
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default Register;
