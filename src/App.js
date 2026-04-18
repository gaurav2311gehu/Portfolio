import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Experience />
      <Education />
      <Certifications />
    </div>
  );
}

export default App;