import React from "react";
import { HashRouter as Router } from "react-router-dom";
import Nav from "./components/Nav/NAv";
import { Route, Routes } from "react-router";
import Home from "./components/Home/Home";
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        {/* <Route path="/Services" element={<Services />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
