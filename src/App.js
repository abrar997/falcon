import React from 'react'
import {HashRouter as Router } from 'react-router-dom'
import Nav from './components/Nav/NAv'
import { Route,Routes } from 'react-router'
import Home from './components/Home/Home'
// import Services from './components/Services/Services'
const App = () => {
  return (
    <Router>
      <Nav />
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        {/* <Route path="/Services" element={<Services />} /> */}
      </Routes>
    </Router>
  );
}

export default App
