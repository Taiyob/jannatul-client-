import React from "react";
import { Link, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="drawer drawer-mobile">
      <div className="drawer-content flex flex-col">
        <label
          htmlFor="my-drawer"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open Menu
        </label>
        <Outlet />
      </div>
      <div className="drawer-side h-full">
        <ul className="menu bg-fuchsia-100 text-base-content w-80 h-screen p-4">
          {/* Sidebar content here */}
          <li className="bg-fuchsia-200 rounded mb-2">
            <Link to="/">📍Home</Link>
          </li>
          <li className="bg-fuchsia-200 rounded">
            <Link to="/dashboard/create-post">📝Create a Post</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminLayout;
