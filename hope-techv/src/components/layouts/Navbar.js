import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg  bg-dark">
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
        <Link className="navbar-brand text-white" to={"/Home"}>
          Hope Tech Ventures
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav m-auto mb-4 mb-lg-0">
            <li className="nav-item  me-5">
              <Link
                className="nav-link active text-white "
                aria-current="page"
                to={"/Home"}
              >
                Home
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link className="nav-link text-white ml-5" to={"/Who-We-Are"}>
                Who We Are
              </Link>
            </li>

            <li class="nav-item dropdown">
              <Link
                class="nav-link dropdown  text-white "
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                display="d-block"
              >
                What We Do
              </Link>
              <ul
                class="dropdown-menu dropdown-menu-dark"
                aria-labelledby="navbarDarkDropdownMenuLink"
              >
                <li>
                  <Link class="dropdown-item" to={"/Cctv-Services"}>
                    CCTV Services
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to={"/Comp-Support"}>
                    Computer Support and Services
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to={"/Cleaning-Services"}>
                    Cleaning Services
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item mp-4">
              <Link
                className="nav-link text-white "
                to={"/Talk-to-us"}
                tabindex="-1"
              >
                Talk To Us
              </Link>
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
