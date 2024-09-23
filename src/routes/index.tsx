import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Slots from "../pages/Slots";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/slots/:id",
        element: <Slots />,
      },
    ],
  },
  {
    path: "/registration",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
