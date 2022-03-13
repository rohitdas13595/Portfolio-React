import React from "react";

import ME from "../../assets/me.png";

import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

import "./Header.css";

function Header(props) {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h2>Rohit K Das</h2>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        
        <a href="#contacts" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}
export default Header;
