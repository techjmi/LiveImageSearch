import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Layout from "./Layout";
import General from "./General";
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Search from "./Search";
import NoPages from "./NoPages"

import "./App.css"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<div>this is home</div>} />
        <Route path="/contact" element={<Contact contact="CContact" />} />
        <Route path="/about" element={<About message="hii all" />} />
        <Route path="/menu" element={<Layout />} />
        <Route path="/general/:name?" element={<General />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<NoPages />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
