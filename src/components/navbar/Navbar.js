import React from "react";
import logoImg from "../../assets/logo.png";

function Navbar() {
  return (
    <>
      <nav>
        <header className="header">
          <div className="logo">
            <img src={logoImg} />
          </div>
          <div className="links">
            <a href="#">Home</a>
            <a href="#about">About Me</a>
            <a href="#skill">Skills</a>
            <a href="#projects">Portfolio</a>
            <a href="#contact">Contact</a>
          </div>
        </header>
      </nav>
    </>
  );
}

export default Navbar;
