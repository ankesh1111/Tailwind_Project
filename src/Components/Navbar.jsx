import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const links = [
  { path: "/", title: "Home" },
  { path: "/about", title: "About" },
  { path: "/herosection", title: "HeroSection" },
  { path: "/feature", title: "Feature" },
  { path: "/pricing", title: "Pricing" },
 
  { path: "/blog", title: "Blog" }
];

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        width: "80%",
        margin: "auto"
      }}
    >
      {links.map((link) => (
        <NavLink
          className={({ isActive }) => {
            return isActive ? styles.active : styles.default;
          }}
          key={link.path}
          to={link.path}
          end
        >
          {link.title}
        </NavLink>
      ))}
    </div>
  );
}

export default Navbar;
