import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import "./js/main.js";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter as Router } from "react-router-dom";
// import Sobre from "./menu/Sobre";
import reportWebVitals from "./reportWebVitals";

// import {} from "swiper/element/bundle";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/paginate";
// import "swiper/css/scrollbar;";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
