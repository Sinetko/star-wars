import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { App } from "./Components/App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
