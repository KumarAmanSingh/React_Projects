import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <Link className="navbar-brand" to="/">
        {props.title}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              {props.aboutText}
            </Link>
          </li>
        </ul>
        {/* <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          /> */}
        {/* <button
            className="btn btn-outline-primary my-2 my-sm-0"
            type="submit"
          >
            Search
          </button> */}
        <div className={`custom-control custom-switch text-${props.mode==='light'?'dark':'light'}`}>
          {/* <input
            type="checkbox"
            onClick={props.togglemode}
            className="custom-control-input"  
            id="customSwitch1"
          /> */}
           <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"></input>
          <label className="custom-control-label" htmlFor="customSwitch1">
            Enable DarkMode
          </label>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
};
