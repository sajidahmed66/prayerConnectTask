import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <div className="max-w-6xl mx-auto my-4 border-b-2 border-primary">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            ToDo App
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <NavLink
                to="/"
                className={
                  pathname !== "/"
                    ? "mx-1 hover:bg-primary"
                    : "mx-1 bg-secondary"
                }
              >
                New Todos
              </NavLink>
            </li>
            <li>
              <Link
                to="/ongoing"
                className={
                  pathname !== "/ongoing"
                    ? "mx-1 hover:bg-primary"
                    : "mx-1 bg-secondary"
                }
              >
                On Going
              </Link>
            </li>
            <li>
              <Link
                to="/finished"
                className={
                  pathname !== "/finished"
                    ? "mx-1 hover:bg-primary"
                    : "mx-1 bg-secondary"
                }
              >
                Finished
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
