import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg  bg-dark mb-4">
      <div className="container-fluid text-white">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand text-white" href="#">
          Hope Tech Ventures
        </a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav m-auto mb-4 mb-lg-0">
            <li className="nav-item  me-5">
              <a
                className="nav-link active text-white "
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item me-4">
              <a className="nav-link text-white ml-5" href="#">
                Who We Are
              </a>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown  text-white "
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                display="d-block"
              >
                What We Do
              </a>
              <ul
                class="dropdown-menu dropdown-menu-dark"
                aria-labelledby="navbarDarkDropdownMenuLink"
              >
                <li>
                  <a class="dropdown-item" href="#">
                    CCTV Services
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Computer Support and Services
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Cleaning Services
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item mp-4">
              <a className="nav-link text-white " href="#" tabindex="-1">
                Talk To Us
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2 ml-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
