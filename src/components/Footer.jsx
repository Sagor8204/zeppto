import React from "react";
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <div id="footer" className="bg-[#191919] pt-[80px]">
      <div className="containers">
        <div>
          <img className="w-[100px]" src={logo} alt="logo" />
        </div>
        <div className="flex items-center justify-between text-white pt-[40px] pb-[60px] border-b border-b-gray-600 footer_content">
          <div className="flex items-center footer_first_content">
            <div className="mr-40">
              <span>Email</span>
              <p>info@zeppto.co</p>
            </div>
            <div>
              <span>Office</span>
              <p>32 rue de Paradis, 75010, Paris, France</p>
            </div>
          </div>
          <div>
            <button className="button">Start now</button>
          </div>
        </div>

        <div className="flex items-center justify-between text-white py-[40px] footer__bottom">
          <p className="text-gray-400 text-[15px]">
            &copy; 2022 Zeppto. All rights reserved
          </p>
          <div className="footer_nav_wrap">
            <ul className="footer_nav">
              <li>
                <a href="https://www.google.com">Book 10 min meeting</a>
              </li>
              <li>
                <a href="https://www.google.com">Homepage</a>
              </li>
              <li>
                <a href="https://www.google.com">Pricing</a>
              </li>
              <li>
                <a href="https://www.google.com">About</a>
              </li>
              <li>
                <a href="https://www.google.com">Privacy Policy</a>
              </li>
              <li>
                <a href="https://www.google.com">Terms of use</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
