import React from "react";
import { Toggle } from "../Toggle/Toggle";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Didau</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <li>Home</li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#portfolio">Projects</a>
            </li>
            <li>Testimonials</li>
          </ul>
        </div>
        <button className="button n-button">contact</button>
      </div>
    </div>
  );
};
