import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <div class="container-fluid text-white">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand text-white" href="#">
          Hope Tech Ventures
        </a>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link active text-white"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">
                Our Products
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#" tabindex="-1">
                Support
              </a>
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
