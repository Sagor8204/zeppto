import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { MenuAlt1Icon, XIcon } from "@heroicons/react/outline";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const showNavMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div id="header" className="sticky top-0 z-50 bg-white">
      <div className="containers flex items-center justify-between py-2">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <button onClick={showNavMenu}>
          {showMenu ? (
            <XIcon className="w-6 hidden menu" />
          ) : (
            <MenuAlt1Icon className="w-6 hidden menu" />
          )}
        </button>
        <div className="nav_wrap">
          <ul className={`${showMenu ? "nav__menu active_nav" : "nav__menu"}`}>
            <li>
              <a href="https://www.google.com">Homepage</a>
            </li>
            <li>
              <a href="https://www.google.com">Documentation</a>
            </li>
            <li>
              <a href="https://www.google.com">Pricing</a>
            </li>
            <li>
              <a href="https://www.google.com">About us</a>
            </li>
            <li className="button">
              <a href="https://www.google.com">Start now</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
