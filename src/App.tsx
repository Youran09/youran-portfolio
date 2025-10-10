import React from "react";
import { Analytics } from "@vercel/analytics/react";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import PersonalPassion from "./components/PersonalPassion";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Projects from "./components/Projects";
import "./styles/main.scss";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ProjectDesigningCollaborativeTechnologies from "./components/projects/ProjectDesigningCollaborativeTechnologies";
import ProjectCriticalMaking from "./components/projects/ProjectCriticalMaking";
import ProjectCoralSegmentation from "./components/projects/ProjectCoralSegmentation";
import ProjectTEMGConsulting from "./components/projects/ProjectTEMGConsulting";
import ProjectWhalesLocationTracking from "./components/projects/ProjectWhalesLocationTracking";
import ProjectDadaquaInnovation from "./components/projects/ProjectDadaquaInnovation";
import ProjectDeloitteCaseChallenge from "./components/projects/ProjectDeloitteCaseChallenge";
import ProjectChinaASEANAITourism from "./components/projects/ProjectChinaASEANAITourism";
import ProjectCresento from "./components/projects/ProjectCresento";

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
                <Projects />
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
        <Route
          path="/project/dadaqua-innovation"
          element={<ProjectDadaquaInnovation />}
        />
        <Route
          path="/project/deloitte-case-challenge"
          element={<ProjectDeloitteCaseChallenge />}
        />
        <Route
          path="/project/china-asean-ai-tourism"
          element={<ProjectChinaASEANAITourism />}
        />
        <Route
          path="/project/cresento"
          element={<ProjectCresento />}
        />
        <Route path="/project/:projectName" element={<ProjectDetail />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
