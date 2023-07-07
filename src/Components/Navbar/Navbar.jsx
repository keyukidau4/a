import React, { useContext } from "react";
import { Toggle } from "../Toggle/Toggle";
import "./Navbar.css";
import { themeContext } from "../../contact";
import { Link } from "react-scroll";

export const Navbar = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const style = darkMode
    ? {
        color: "white",
      }
    : null;
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
              <Link smooth spy to="services">
                Services
              </Link>
            </li>
            <li>
              <Link smooth spy to="experience">
                Experience
              </Link>
            </li>
            <li>
              <Link smooth spy to="portfolio">
                Projects
              </Link>
            </li>
            <li>Testimonials</li>
          </ul>
        </div>
        <button className="button n-button">contact</button>
      </div>
    </div>
  );
};
