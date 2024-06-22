import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./Pages/Profile";
import Progresso from "./Pages/Progresso";
import MainPage from "./Pages/Mainpage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/progresso",
    element: <Progresso />,
  }
]);

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
