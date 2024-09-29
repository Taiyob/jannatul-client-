import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Slots from "../pages/Slots";
import Orders from "../pages/Orders";
import Booking from "../pages/Booking";
import AdminLayout from "../components/layouts/AdminLayout";
import UserLayout from "../components/layouts/UserLayout";
import AdminDashboardHome from "../pages/AdminDashboardHome";
import UserDashboardHome from "../pages/UserDashboardHome";

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
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/bookings/:id",
        element: <Booking />,
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
  {
    path: "/dashboard/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminDashboardHome />,
      },
    ],
  },
  {
    path: "/dashboard/user",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <UserDashboardHome />,
      },
    ],
  },
]);
