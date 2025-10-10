import React from "react";
import { useNavigate } from "react-router-dom";
import PhotoGallery from "../PhotoGallery";

export default function ProjectDadaquaInnovation() {
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
            Open Innovation 2025: Climate & Water - Solar-Powered Water System for Dadaab Refugee Camp
          </h1>
          <div>
            <strong>Program:</strong> Open Innovation 2025: Climate & Water (University Collaboration Project)
          </div>
          <div>
            <strong>Role:</strong> Team Member (University of Copenhagen)
          </div>
          <div>
            <strong>Period:</strong> September 2025
          </div>
        </header>

        {/* Project Summary */}
        <section className="project-section">
          <h2>
            Project Summary
          </h2>
          <p>
            Dadaqua Innovation developed a sustainable water-pumping solution for the Dadaab refugee camp in Kenya,
            addressing the reliance on diesel-powered systems and limited foreign aid. The project proposed a
            solar-powered borehole system (Agri-PV) supported by private investments and NGO partnerships, aiming
            to ensure a reliable water supply, reduce fossil fuel dependence, and promote local empowerment.
          </p>

          {/* Dadaab Photo 1 */}
          <div style={{ margin: "2rem 0", textAlign: "center" }}>
            <img
              src="/images/dadaab2.png"
              alt="Dadaab solar-powered water system"
              className="project-image"
            />
          </div>
        </section>

        {/* Impact */}
        <section className="project-section">
          <h2>
            Impact
          </h2>
          <ul>
            <li>Improved water access and food security for refugees</li>
            <li>Lower operational costs and environmental footprint for NGOs</li>
            <li>Alignment with Kenya's renewable energy transition and SDG goals</li>
          </ul>

          {/* Dadaab Photo 2 */}
          <div style={{ margin: "2rem 0", textAlign: "center" }}>
            <img
              src="/images/dadaab1.png"
              alt="Dadaab refugee camp water infrastructure"
              className="project-image"
            />
          </div>
        </section>

        {/* Key Skills */}
        <section className="project-section">
          <h2>
            Key Skills
          </h2>
          <div className="project-skills">
            {["Sustainable Design", "Renewable Energy Systems", "Problem Framing", "Human-Centered Innovation", "Cross-disciplinary Collaboration"].map((skill) => (
              <span
                key={skill}
className="skill-tag"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Dadaab Photo 3 */}
          <div style={{ margin: "2rem 0", textAlign: "center" }}>
            <img
              src="/images/dadaab.png"
              alt="Dadaab sustainable water solution implementation"
              className="project-image"
            />
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="project-section">
          <h2>
            Project Gallery
          </h2>
          <p>
            Additional photos from the Dadaab refugee camp and solar-powered water system implementation.
          </p>
          <PhotoGallery
            images={[
              "/images/dadaab_7301.JPG",
              "/images/dadaab_2991.JPG",
              "/images/dadaab_3013.JPG",
              "/images/dadaab_3068.JPG",
              "/images/dadaab_3080.JPG",
              "/images/dadaab_3149.JPG",
              "/images/dadaab_3187.JPG",
              "/images/dadaab_3189.JPG",
              "/images/dadaab_3263.JPG",
              "/images/dadaab_443 2.JPG",
              "/images/dadaab_22c3.JPG",
              "/images/dadaab0.png"
            ]}
            altPrefix="Dadaab refugee camp"
          />
        </section>

        {/* Live Demo Link */}
        <section style={{ textAlign: "center" }}>
          <a
            href="https://dadaqua-innovation.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            🌐 View Live Demo →
          </a>
        </section>
      </div>
    </main>
  );
}