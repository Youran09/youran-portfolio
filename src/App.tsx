import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import PersonalPassion from "./components/PersonalPassion";
import Contact from "./components/Contact";
import "./styles/main.scss";

function App() {
  return (
    <div className="app">
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <PersonalPassion />
        <Contact />
      </main>
    </div>
  );
}

export default App;
