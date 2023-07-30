import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import My404Page from "../pages/My404Page";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ProfilePage from "../pages/ProfilePage";
import DestinationPage from "../pages/DestinationPage";

const RouteViews = () => {
  return (
    <main>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/user/:username" element={<ProfilePage />} />
        <Route exact path="/place/:destin" element={<DestinationPage />} />
        <Route path="*" exact={true} element={<My404Page />} />
      </Routes>
    </main>
  );
};

export default RouteViews;
