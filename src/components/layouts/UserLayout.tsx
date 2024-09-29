import React from "react";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div>
      <h1>USer Layout</h1>
      <Outlet />
    </div>
  );
};

export default UserLayout;
