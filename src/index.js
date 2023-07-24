import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

console.log("process.env.PUBLIC_URL: ", process.env.PUBLIC_URL);

/* const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <div>Yoooooooo</div>,
    },
  ],
  { basename: process.env.PUBLIC_URL }
); */

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<App />} />),
  { basename: process.env.PUBLIC_URL }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
