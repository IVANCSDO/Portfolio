import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav
        id="topnav"
        class="navbar navbar-expand-lg navbar-light margin6 sticky-top bg-light"
      >
        <a class="navbar-brand" href="#">
          <img class="img-fluid logo" src="media/logoI.png" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav ml-auto text-center">
            <li class="nav-item ">
              <a class="nav-link  fs-3 elementoMenu text-center" href="#about">
                About me
              </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link  fs-3 elementoMenu text-center" href="#skills">
                Skills
              </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link  fs-3 elementoMenu text-center" href="#resume">
                Resume
              </a>
            </li>
            <li class="nav-item ">
              <a
                class="nav-link fs-3 elementoMenu text-center"
                href="#portfolio"
              >
                Portfolio
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
