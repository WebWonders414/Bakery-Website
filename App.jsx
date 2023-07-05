import React, { Component } from "react";
import Home from "./website/Pages/Home";
import Products from "./website/Pages/Products";
import Navbar from "./website/Navbar/Navbar";
import About from "./website/Pages/About";
import Footer from "./website/Pages/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Navbar />
          </div>
          <div style={{ marginTop: "100px" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Products" element={<Products />} />
              <Route path="/Aboutus" element={<About />} />
            </Routes>
          </div>
          <div>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}
