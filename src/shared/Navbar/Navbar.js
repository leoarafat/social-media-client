import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="navbar bg-purple-900 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
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
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-purple-600 rounded-box w-52 font-semibold"
          >
            <li>
              <Link to="/home">Homepage</Link>
            </li>
            <li>
              <Link to="/media">Media</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link className="btn btn-ghost normal-case text-xl">BrowsBook</Link>
      </div>
      <div className="navbar-end">

        <div className="btn btn-outline btn-warning">
          <div className="">
            {user?.uid ? (
              <button className="font-semibold text-lg" onClick={handleLogOut}>LogOut</button>
            ) : (
              <button className="font-semibold text-lg">
                <Link to="/login">Login</Link>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
