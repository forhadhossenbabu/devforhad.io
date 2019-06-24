import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light sticky-top bg-white">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <h2 className=" display-8 text-center" style={{ fontWeight: "100" }}>
            dev<strong style={{ fontWeight: "500" }}>Forhad</strong>.io
          </h2>
        </Link>
        <button
          className="navbar-toggler collapsed"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-expanded="false"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="navbar-collapse collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <code>/root</code>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                <code>/about</code>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">
                <code>/services</code>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/portfolio">
                <code>/portfolio</code>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
