import * as React from "react";
import { render } from "react-dom";
import { App } from "./components/App";

// import { BrowserRouter as Router } from "react-router-dom";
// import Root from "./containers/Root";
// import configureStore from "./store/configureStore";

// const store = configureStore();

render(
  <App compiler="TypeScript" framework="React" />,
  document.getElementById("App")
);
