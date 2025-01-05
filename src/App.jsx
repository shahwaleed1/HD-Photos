import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Images from "./components/Images";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<h2>About Page</h2>} />
        <Route path="/services" element={<h2>Services Page</h2>} />
        <Route path="/contact" element={<h2>Contact Page</h2>} />
      </Routes>
      <div className="my-4">
        <Images />
      </div>
      <Footer />
    </Router>
  );
};

export default App;
