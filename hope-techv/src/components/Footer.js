import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import getFullYear from "../utils";

function Footer() {
  return (
    <div className="main-Footer">
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
        </div>
        {/*footer copyright*/}

        <div className="footer-bottom">
          <p className="text-xs-center font-monospace">
            Copyright {getFullYear()} - Hope Tech Ventures. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
