import React from "react";
import { Link, useLocation } from "react-router";
import logos from "../../assets/logo.png";
import { IoLogoGithub } from "react-icons/io5";

const Navbar = () => {
    const location = useLocation();
  const path = location.pathname;

  const links = (
    <>
      <li>
        <Link
          to="/"
          className={`m-2 ${
            path === "/" ? "underline underline-offset-4 font-semibold" : ""
          }`}
        >
          Home
        </Link>
      </li>

      <li>
        <Link
          to="/Apps"
          className={`m-2 ${
            path === "/Apps" ? "underline underline-offset-4 font-semibold" : ""
          }`}
        >
          Apps
        </Link>
      </li>

      <li>
        <Link
          to="/Installation"
          className={`m-2 ${
            path === "/Installation"
              ? "underline underline-offset-4 font-semibold"
              : ""
          }`}
        >
          Installation
        </Link>
      </li>
    </>
  );
  return (
    <div className="max-w-[1250px] m-auto">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl flex items-center gap-2">
            <img className="h-10" src={logos} alt="" />
            <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              HERO.IO
            </span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <button onClick={() => window.open("https://github.com/AmirHamza20", "_blank")} className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] "> {<IoLogoGithub />} Contribute</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
