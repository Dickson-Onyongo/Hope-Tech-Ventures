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
              <h4>lorem3 text</h4>
              <ul className="list-unstyled">
                <li>Jesus is lord</li>
                <li>Jesus is lord</li>
                <li>Jesus is lord</li>
                <li>Jesus is lord</li>
              </ul>
            </div>
            <div className="col col-md-3 col-sm-6">
              <h4>lorem3 text</h4>
              <ul className="list-unstyled">
                <li>Jesus is lord</li>
                <li>Jesus is lord</li>
                <li>Jesus is lord</li>
                <li>Jesus is lord</li>
              </ul>
            </div>
            <div className="col col-md-3 col-sm-6">
              <h4>lorem3 text</h4>
              <ul className="list-unstyled">
                <li>Jesus is lord</li>
                <li>Jesus is lord</li>
                <li>Jesus is lord</li>
                <li>Jesus is lord</li>
              </ul>
            </div>
            <div className="col col-md-3 col-sm-6">
              <h4>lorem3 text</h4>
              <ul className="list-unstyled">
                <li>Jesus is lord</li>
                <li>Jesus is lord</li>
                <li>Jesus is lord</li>
                <li>Jesus is lord</li>
              </ul>
            </div>
          </div>
          {/*footer copyright*/}

          <div className="footer-bottom .me-md-3 ">
            <p className="text-xs-center font-monospace ">
              Copyright {getFullYear()} - Hope Tech Ventures. All rights
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
    background: var(--mainDark);
    font-family: var(--bs-font-sans-serif);
    padding-top: 3rem;
    color: white;
  }
  .footer-bottom {
    padding-top: 3rem;
    padding-botom: 2rem;
    position: flex;
  }
`;
