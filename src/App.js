import React from "react";
import { HashRouter as Router } from "react-router-dom";
import Nav from "./components/Nav/NAv";
import { Route, Routes } from "react-router";
import Home from "./components/Home/Home";
import Footer from './components/Footer/Footer'
import WebDevelopment from "./components/AllServices/WebDevelopment/WebDevelopment";
import Design from "./components/AllServices/Design/Design";
import CyperSecurity from "./components/AllServices/CyperSecurity/CyperSecurity";
import OurWorks from "./components/OurWorks/OurWorks";
const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/WebDevelopment" element={<WebDevelopment />} />
        <Route path="/design" element={<Design />} />
        <Route path="/CyperSecurity" element={<CyperSecurity />} />
        <Route path="/OurWorks" element={<OurWorks />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
