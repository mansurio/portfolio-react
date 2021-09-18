import React, { useState } from "react";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Project from "./components/project/Project";
import Topbar from "./components/topbar/Topbar";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import "./App.scss";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="section">
        <Intro />
        <About />
        <Project />
        <Contact />
      </div>
    </div>
  );
}

export default App;
