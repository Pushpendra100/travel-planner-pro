import React, { useEffect } from "react";
import WebFont from "webfontloader";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import RouteViews from "./RouteViews";
import { getUser } from "../store/actions/user";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  WebFont.load({
    google: {
      families: ["Abel", "Roboto", "Snowburst One"],
    },
  });

  return (
    <Router>
      <RouteViews />
    </Router>
  );
}

export default App;
