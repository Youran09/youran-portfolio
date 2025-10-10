import React from "react";
import { useNavigate } from "react-router-dom";
import PhotoGallery from "../PhotoGallery";

export default function ProjectDadaquaInnovation() {
  const navigate = useNavigate();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="min-h-screen bg-slate-900 flex flex-col items-center py-12 px-0">
      <div
        className="w-full bg-slate-800/80 rounded-xl shadow-lg relative z-10"
        style={{ marginLeft: "5cm", marginRight: "5cm" }}
      >
        {/* Go Back Button */}
        <button
          onClick={() => {
            window.location.href = "/#projects";
          }}
          className="absolute left-0 top-0 mt-4 ml-4 z-20"
          style={{
            background: "#fff",
            color: "#06d6a0",
            fontWeight: 600,
            fontSize: "1.25rem",
            padding: "1rem 2.5rem",
            borderRadius: "1.5rem",
            border: "none",
            boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
            cursor: "pointer",
            transition: "background 0.2s, color 0.2s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.background = "#00b97b")}
          onMouseOut={(e) => (e.currentTarget.style.background = "#fff")}
        >
          ← Go Back
        </button>

        {/* Header */}
        <header className="mb-8" style={{ textAlign: "left" }}>
          <h1 className="text-3xl md:text-4xl font-bold text-cyan-300 mb-4 leading-tight">
            Open Innovation 2025: Climate & Water - Solar-Powered Water System for Dadaab Refugee Camp
          </h1>
          <div className="text-cyan-100 text-sm mb-1">
            <strong>Program:</strong> Open Innovation 2025: Climate & Water (University Collaboration Project)
          </div>
          <div className="text-cyan-100 text-sm mb-1">
            <strong>Role:</strong> Team Member (University of Copenhagen)
          </div>
          <div className="text-cyan-100 text-sm mb-1">
            <strong>Period:</strong> September 2025
          </div>
        </header>

        {/* Project Summary */}
        <section className="mb-10" style={{ textAlign: "left" }}>
          <h2 className="text-xl font-semibold text-cyan-200 mb-3">
            Project Summary
          </h2>
          <p className="text-slate-100 mb-4">
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
              className="rounded shadow mb-4"
              style={{
                width: "100%",
                maxWidth: "900px",
                height: "auto",
                objectFit: "cover",
                borderRadius: "1rem",
                boxShadow: "0 2px 16px rgba(0,0,0,0.15)",
                display: "inline-block",
                margin: "0 auto",
              }}
            />
          </div>
        </section>

        {/* Impact */}
        <section className="mb-10" style={{ textAlign: "left" }}>
          <h2 className="text-xl font-semibold text-cyan-200 mb-3">
            Impact
          </h2>
          <ul className="list-disc pl-6 text-slate-100 mb-4">
            <li>Improved water access and food security for refugees</li>
            <li>Lower operational costs and environmental footprint for NGOs</li>
            <li>Alignment with Kenya's renewable energy transition and SDG goals</li>
          </ul>

          {/* Dadaab Photo 2 */}
          <div style={{ margin: "2rem 0", textAlign: "center" }}>
            <img
              src="/images/dadaab1.png"
              alt="Dadaab refugee camp water infrastructure"
              className="rounded shadow mb-4"
              style={{
                width: "100%",
                maxWidth: "900px",
                height: "auto",
                objectFit: "cover",
                borderRadius: "1rem",
                boxShadow: "0 2px 16px rgba(0,0,0,0.15)",
                display: "inline-block",
                margin: "0 auto",
              }}
            />
          </div>
        </section>

        {/* Key Skills */}
        <section className="mb-10" style={{ textAlign: "left" }}>
          <h2 className="text-xl font-semibold text-cyan-200 mb-3">
            Key Skills
          </h2>
          <div className="flex flex-wrap gap-3 mb-4">
            {["Sustainable Design", "Renewable Energy Systems", "Problem Framing", "Human-Centered Innovation", "Cross-disciplinary Collaboration"].map((skill) => (
              <span
                key={skill}
                className="bg-cyan-100 text-cyan-900 px-3 py-1 rounded-full text-sm font-medium"
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
              className="rounded shadow mb-4"
              style={{
                width: "100%",
                maxWidth: "900px",
                height: "auto",
                objectFit: "cover",
                borderRadius: "1rem",
                boxShadow: "0 2px 16px rgba(0,0,0,0.15)",
                display: "inline-block",
                margin: "0 auto",
              }}
            />
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="mb-10" style={{ textAlign: "left" }}>
          <h2 className="text-xl font-semibold text-cyan-200 mb-3">
            Project Gallery
          </h2>
          <p className="text-slate-100 mb-4">
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
        <section className="mb-10" style={{ textAlign: "center" }}>
          <a
            href="https://dadaqua-innovation.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-xl text-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            🌐 View Live Demo →
          </a>
        </section>
      </div>
    </main>
  );
}