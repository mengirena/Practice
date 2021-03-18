import React from "react";

const NavBar = ({ totalCounts }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a href="#" className="navbar-brand">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">{totalCounts}</span>
      </a>
    </nav>
  );
};

export default NavBar;
