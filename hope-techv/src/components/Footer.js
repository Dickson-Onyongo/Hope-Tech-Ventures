import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import getFullYear from "../utils";
import "../App.css";

import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer className="main-Footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            <div className="col col-md-3 col-sm-6">
              <h4 className=" mb-4 shadows-into-light-regular fw-bold">
                Hope Tech Ventures
              </h4>
              <ul className="list-styled">
                <li>
                  <a href="/" class="list-group-item list-group-item-action">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/" class="list-group-item list-group-item-action">
                    News
                  </a>
                </li>
                <li>
                  <a href="/" class="list-group-item list-group-item-action">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="col col-md-3 col-sm-6">
              <h4 className="mb-4">Our Services</h4>
              <ul className="list-styled">
                <li>
                  <a href="/" class="list-group-item list-group-item-action">
                    CCTV Installation
                  </a>
                </li>
                <li>
                  <a href="/" class="list-group-item list-group-item-action">
                    Computer Support
                  </a>
                </li>
                <li>
                  <a href="/" class="list-group-item list-group-item-action">
                    Software Development
                  </a>
                </li>
                <li>
                  <a href="/" class="list-group-item list-group-item-action">
                    Computer Hardware
                  </a>
                </li>
                <li>
                  <a href="/" class="list-group-item list-group-item-action">
                    Accessories
                  </a>
                </li>
              </ul>
            </div>
            <div className="col col-md-3 col-sm-6">
              <h4 className="mb-4">Support</h4>
              <ul className="list-styled">
                <li>
                  <a href="/" class="list-group-item list-group-item-action">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="/" class="list-group-item list-group-item-action">
                    Who We Are
                  </a>
                </li>
                <li>
                  <a href="/" class="list-group-item list-group-item-action">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
            <div className="col col-md-3 col-sm-6">
              <h4 className="mb-4">Social media</h4>
              <ul className="list-styled">
                <li>
                  <a href="/" class="list-group-item list-group-item-action">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="/" class="list-group-item list-group-item-action">
                    X
                  </a>
                </li>
                <li>
                  <a href="/" class="list-group-item list-group-item-action">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/*footer copyright*/}

          <div className="footer-bottom .me-md-3 ">
            <p className="text-xs-center font-monospace ">
              Copyright@{getFullYear()} - Hope Tech Ventures. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  .footer-middle {
    background: var(--bs-secondary);
    padding-top: 3rem;
    color: white;
  }
  .footer-bottom {
    padding-top: 3rem;
    padding-botom: 2rem;
    position: flex;
  }
  .mb-4 {
    color: var(--bs-dark);
  }
  ul li a:hover {
    color: var(--bs-blue);
  }
`;
