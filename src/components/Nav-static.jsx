import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const NavStatic = () => {
  return (
    <nav class="navbar bg navbar-expand-sm fixed-top shadow p-3 mb-5 rounded-bottom-5">
      <div class="container">
        <div className="nav-cont">
          {/* <img
            src={require("../img/rayyan.jpg")}
            class="logo rounded-circle shadow-4-strong"
            alt="rayyan"
          /> */}
          <div className="navbar-brand">
            <Link to={"/"} class="navbar-name">
              Mohd Rayyan
            </Link>
            <p className="navbar-dsgn">creative copywriter</p>
          </div>
        </div>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar1"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar1">
          <ul class="navbar-nav">
            <li class="nav-item ">
              <Link to={"/Work"} class="nav-link">
                Resume
              </Link>
            </li>
            <li class="nav-item">
              <Link to={"/"} class="nav-link">
                Work
              </Link>
            </li>
            <li class="nav-item">
              <Link to={"/About"} class="nav-link">
                About Me
              </Link>
            </li>
            {/* <li class="nav-item">
              <Link to={"/Contact"} class="nav-link">
                Contact
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

/* <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      {/* <div className="">
        <div className="navbar-header">
          <a href="#page-top" className="navbar-brand page-scroll">
            Mohd Rayyan
          </a>
        </div>
      </div> 
      <div className="" id="">
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a href="#work" className="page-scroll">
              Work
            </a>
          </li>
          <li>
            <a href="#about" className="page-scroll">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="page-scroll">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav> */

export default NavStatic;
