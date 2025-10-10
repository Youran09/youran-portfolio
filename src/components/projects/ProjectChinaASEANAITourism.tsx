import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProjectChinaASEANAITourism() {
  const navigate = useNavigate();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="project-detail-main">
      <div className="project-detail-container">
        {/* Go Back Button */}
        <button
          onClick={() => {
            window.location.href = "/#projects";
          }}
          className="project-go-back-btn"
          onMouseOver={(e) => (e.currentTarget.style.background = "#00b97b")}
          onMouseOut={(e) => (e.currentTarget.style.background = "#fff")}
        >
          ← Go Back
        </button>

        {/* Header */}
        <header className="project-header">
          <h1>
            HUIXI AI GO – AI-Powered Cross-Border Travel & Culture Assistant
          </h1>
          <div>
            <strong>Competition:</strong> China-ASEAN AI Tourism Innovation Competition – ASEAN Special Award
          </div>
          <div>
            <strong>Role:</strong> Technical Lead – AI Architecture & Multilingual System Development
          </div>
          <div>
            <strong>Period:</strong> July - September 2025
          </div>
        </header>

        {/* Overview */}
        <section className="project-section">
          <h2>
            Overview
          </h2>
          <p>
            HUIXI AI GO is an AI-driven multilingual travel and business assistant designed to enhance the
            cross-border tourism experience between China and ASEAN countries. The platform integrates semantic
            understanding, intelligent itinerary generation, real-time translation, and localized safety alerts
            to support travelers and enterprises in multilingual, multicultural environments.
          </p>
          <p>
            Collaborated in an international interdisciplinary team with members from China, Laos, Thailand, and
            Denmark, supported by universities and RCEP organizations across ASEAN.
          </p>

          {/* ASEAN Main Photo */}
          <div style={{ margin: "2rem 0", textAlign: "center" }}>
            <img
              src="/images/ASEAN.png"
              alt="HUIXI AI GO project overview"
              className="project-image"
            />
          </div>
        </section>

        {/* Achievement */}
        <section className="project-section">
          <h2>
            🏆 Achievement
          </h2>
          <div>
            <p>
              🏆 1st Place Winner – China–ASEAN AI Tourism Innovation Competition (ASEAN Regional Final)
            </p>
            <p>
              Awarded the <strong>ASEAN Special Award</strong> for outstanding innovation in applying AI to cultural tourism and cross-border cooperation.
            </p>
          </div>

          {/* ASEAN Achievement Photo */}
          <div style={{ margin: "2rem 0", textAlign: "center" }}>
            <img
              src="/images/ASEAN1.JPG"
              alt="ASEAN Special Award achievement"
              className="project-image"
            />
          </div>
        </section>

        {/* Collaboration & Support */}
        <section className="project-section">
          <h2>
            Collaboration & Support
          </h2>
          <p>
            The project received institutional backing from:
          </p>
          <ul>
            <li><strong>Guangxi University of Science and Technology</strong> – AI joint research and training base</li>
            <li><strong>National University of Laos</strong> – "Belt and Road" AI information laboratory collaboration</li>
            <li><strong>China–ASEAN AI Innovation Center</strong> – Model testing resources and industry integration</li>
            <li><strong>RCEP Business Alliance Network</strong> – Market access and B2B cooperation channels</li>
            <li><strong>Nanning Foreign Affairs Office & Lao Telecom Technical College</strong> – Cross-border AI pilot and data integration support</li>
          </ul>

          {/* ASEAN Photo 2 */}
          <div style={{ margin: "2rem 0", textAlign: "center" }}>
            <img
              src="/images/ASEAN2.JPG"
              alt="International collaboration and partnership"
              className="project-image"
            />
          </div>
        </section>

        {/* Your Contribution */}
        <section className="project-section">
          <h2>
            Your Contribution
          </h2>
          <p>
            Led the development of the AI semantic recognition and multilingual dialogue module, integrating large
            language models and speech APIs for real-time travel assistance. Contributed to prototype deployment,
            data processing pipeline design, and multilingual testing with ASEAN partners.
          </p>

          <div className="project-skills">
            {["Artificial Intelligence (AI)", "Innovation Management", "Product Development", "Cross-border Collaboration"].map((skill) => (
              <span
                key={skill}
className="skill-tag"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* ASEAN Photo 3 */}
          <div style={{ margin: "2rem 0", textAlign: "center" }}>
            <img
              src="/images/ASEAN3.JPG"
              alt="Technical development and AI implementation"
              className="project-image"
            />
          </div>
        </section>

        {/* Impact */}
        <section className="project-section">
          <h2>
            Impact
          </h2>
          <p>
            The project advances digital tourism innovation, AI localization, and China–ASEAN smart cooperation,
            laying the groundwork for cross-border digital service applications in education, travel, and cultural exchange.
          </p>

        </section>

        {/* Live Demo Link */}
        <section style={{ textAlign: "center" }}>
          <a
            href="https://travel-ai-demo.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            🤖 View AI Demo →
          </a>
        </section>
      </div>
    </main>
  );
}