import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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
          <div class="col order-5"></div>
          <div class="col order-1">Third in DOM, with an order of 1</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
