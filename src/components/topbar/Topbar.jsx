import React from "react";
import "./Topbar.scss";
import { SiCodio } from "react-icons/si";

function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={" topbar " + (menuOpen && " active ")}>
      <div className=" wrapper ">
        <div className="left">
          <a href="Intro" className="logo">
            <SiCodio />
          </a>
          <div className="itemContainer"></div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className=" line1"></span>
            <span className=" line2"></span>
            <span className=" line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
