import React from "react";
import { FaDocker } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">
        <FaDocker style={{ marginRight: "8px" }} />
        Gaurav Saini Cloud Portfolio
      </h2>

      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;