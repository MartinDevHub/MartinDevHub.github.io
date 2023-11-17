import React from "react";
import { Link } from "react-router-dom";
import "./navBar.scss";

function NavBar() {
  return (
    <div className="navbar-component">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <i className="bi bi-house-door-fill icon"></i>
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a
                  href="https://www.linkedin.com/in/martinmarcoff/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-linkedin mx-2 icon"></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://github.com/MartinDevHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-github mx-2 icon"></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://wa.link/dobjwg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-whatsapp mx-2 icon"></i>
                </a>
              </li>
              <li className="nav-item">
                <Link to={"/contact"}>
                  <i className="bi bi-envelope-fill mx-2 icon"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
