import React from "react";
import WebFont from "webfontloader";
import { BrowserRouter as Router } from "react-router-dom";
import RouteViews from "./RouteViews";

function App() {
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
