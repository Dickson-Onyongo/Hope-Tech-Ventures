import React from "react";
import "./App.css";
import background from "./assets/background-1.png";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col } from "react-bootstrap";

export default function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <p>Hope Tech Ventures</p>
        </header>

        <main id="main-body">
          <Container>
            <Row className=" first-row justify-content-center  text-md-start">
              <h1>HOPE TECH VENTURES</h1>
              <p>Solutions at your finger tips.</p>
            </Row>

            <Row>
              <Col>
                <h2>Its all about the latest and greatest solutions </h2>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </main>

        <footer className="App-footer">
          <p>I LOVE CODING</p>
        </footer>
      </div>
    </>
  );
}
