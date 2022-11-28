import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import PrimaryButton from "../Button/PrimaryButton";
import { HiOutlineUserCircle } from "react-icons/hi";
import SmallSpinner from "../Spinner/SmallSpinner";
const Navbar = () => {
  const { user, loading, logout } = useContext(AuthContext);
  const navItem = (
    <React.Fragment>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </React.Fragment>
  );

  const handleLogOut = () => {
    logout()
      .then(() => {
        toast.success("user loggedOut");
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItem}
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl">Bike valley</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{navItem}</ul>
      </div>
      <div className="navbar-end">
        {user?.uid ? (
          <>
            <Link to="/dashboard">
              <PrimaryButton>
                {loading ? (
                  <SmallSpinner></SmallSpinner>
                ) : (
                  <HiOutlineUserCircle />
                )}
              </PrimaryButton>
            </Link>
            <Link onClick={handleLogOut}>
              <PrimaryButton classes="py-2 px-3 rounded">Log Out</PrimaryButton>
            </Link>
          </>
        ) : (
          <>
            <div className="dropdown dropdown-bottom">
              <Link to="/login">
                <PrimaryButton classes="py-2 px-3 rounded">
                  Log in
                </PrimaryButton>
              </Link>
            </div>
          </>
        )}
      </div>

      <label
        htmlFor="dashboard-Drawer"
        tabIndex={1}
        className="btn btn-ghost lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
    </div>
  );
};

export default Navbar;
