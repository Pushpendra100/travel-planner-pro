import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import My404Page from "../pages/My404Page";

const RouteViews = () => {
  return (
    <main>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" exact={true} element={<My404Page />} />
      </Routes>
    </main>
  );
};

export default RouteViews;
