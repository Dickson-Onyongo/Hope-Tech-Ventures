import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <br />
        lorem3
        <br />
        <Footer />
      </div>
    );
  }
}

export default App;
