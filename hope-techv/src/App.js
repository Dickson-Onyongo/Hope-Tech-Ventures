import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

import Home from "./components/pages/Home";
import WhoWeAre from "./components/pages/WhoWeAre";
import Cctv from "./components/pages/Cctv";
import Comp_Support from "./components/pages/Comp_Support";
import TalktoUs from "./components/pages/TalktoUs";
import Cleaning from "./components/pages/Cleaning";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <Routes>
          <Route path="/Home" Component={Home} />
        </Routes>
        <Routes>
          <Route path="/Who-We-Are" Component={WhoWeAre} />
        </Routes>
        <Routes>
          <Route path="/Cctv-Services" Component={Cctv} />
        </Routes>
        <Routes>
          <Route path="/Comp-Support" Component={Comp_Support} />
        </Routes>
        <Routes>
          <Route path="/Cleaning-Services" Component={Cleaning} />
        </Routes>
        <Routes>
          <Route path="/Talk-to-us" Component={TalktoUs} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
