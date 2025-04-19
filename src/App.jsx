import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Images from "./components/Images";
import Footer from "./components/Footer";
import Image from "./components/Image";
import About from "./components/About";

const App = () => {

  return (
    <Router>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/image/:imageId" element={<Image />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
