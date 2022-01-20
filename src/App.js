import React from "react";
import { HashRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router";
import Nav from "./components/Nav/NAv";
import Home from "./components/Home/Home";
import Footer from './components/Footer/Footer'
import WebDevelopment from "./components/AllServices/WebDevelopment/WebDevelopment";
import Design from "./components/AllServices/Design/Design";
import CyperSecurity from "./components/AllServices/CyperSecurity/CyperSecurity";
import OurWorks from "./components/OurWorks/OurWorks";
import Signup from "./components/LogSign/Signup/Signup";
import Login from "./components/LogSign/Login/Login";
import Undefined from "./components/Undefined/Undefined";
const App = () => {
  
  return (
    <Router>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/WebDevelopment" element={<WebDevelopment />} />
        <Route path="/design" element={<Design />} />
        <Route path="/CyperSecurity" element={<CyperSecurity />} />
        <Route path="/OurWorks" element={<OurWorks />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="*" element={<Undefined />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;


















