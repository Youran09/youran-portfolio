import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import PersonalPassion from "./components/PersonalPassion";
import Contact from "./components/Contact";
import Education from "./components/Education";
import "./styles/main.scss";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ProjectDesigningCollaborativeTechnologies from "./components/projects/ProjectDesigningCollaborativeTechnologies";
import ProjectCriticalMaking from "./components/projects/ProjectCriticalMaking";
import ProjectCoralSegmentation from "./components/projects/ProjectCoralSegmentation";
import ProjectTEMGConsulting from "./components/projects/ProjectTEMGConsulting";
import ProjectWhalesLocationTracking from "./components/projects/ProjectWhalesLocationTracking";

const ProjectDetail = () => {
  return (
    <div style={{ minHeight: "100vh", padding: "4rem", color: "#fff" }}>
      <h2>Project Detail Page</h2>
      <p>
        This is a placeholder for the project detail. You can customize this
        page.
      </p>
    </div>
  );
};

function ScrollToHash() {
  const location = useLocation();
  React.useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route
          path="/"
          element={
            <div className="app">
              <main>
                <Hero />
                <About />
                <Experience />
                <Education />
                <Skills />
                <PersonalPassion />
                <Contact />
              </main>
            </div>
          }
        />
        <Route
          path="/project/designing-collaborative-technologies"
          element={<ProjectDesigningCollaborativeTechnologies />}
        />
        <Route
          path="/project/critical-making"
          element={<ProjectCriticalMaking />}
        />
        <Route
          path="/project/coral-image-segmentation"
          element={<ProjectCoralSegmentation />}
        />
        <Route
          path="/project/temg-consulting"
          element={<ProjectTEMGConsulting />}
        />
        <Route
          path="/project/whales-location-tracking"
          element={<ProjectWhalesLocationTracking />}
        />
        <Route path="/project/:projectName" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
