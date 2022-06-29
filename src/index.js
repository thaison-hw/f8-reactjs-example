import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import UseState481 from "./UseState481";
import UseState481WSetStateCallback from "./UseState481WCallback";
import UseState481WInitialCallback from "./UseState481WInitialValCallback";
import UseState481UpdateInfoWCallback from "./UseState481UpdateInfo";
import UseState481AddMoreInfo from "./UseState481AddMoreInfo";
import UseState481AddMoreInfo2 from "./UseState481AddMoreInfo2";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UseState481 />
    <UseState481WSetStateCallback />
    <UseState481WInitialCallback />
    <UseState481UpdateInfoWCallback />
    <UseState481AddMoreInfo />
    <UseState481AddMoreInfo2/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
