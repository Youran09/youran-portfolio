import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProjectChinaASEANAITourism() {
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
            HUIXI AI GO – AI-Powered Cross-Border Travel & Culture Assistant
          </h1>
          <div className="text-cyan-100 text-sm mb-1">
            <strong>Competition:</strong> China-ASEAN AI Tourism Innovation Competition – ASEAN Special Award
          </div>
          <div className="text-cyan-100 text-sm mb-1">
            <strong>Role:</strong> Technical Lead – AI Architecture & Multilingual System Development
          </div>
          <div className="text-cyan-100 text-sm mb-1">
            <strong>Period:</strong> July - September 2025
          </div>
        </header>

        {/* Overview */}
        <section className="mb-10" style={{ textAlign: "left" }}>
          <h2 className="text-xl font-semibold text-cyan-200 mb-3">
            Overview
          </h2>
          <p className="text-slate-100 mb-4">
            HUIXI AI GO is an AI-driven multilingual travel and business assistant designed to enhance the
            cross-border tourism experience between China and ASEAN countries. The platform integrates semantic
            understanding, intelligent itinerary generation, real-time translation, and localized safety alerts
            to support travelers and enterprises in multilingual, multicultural environments.
          </p>
          <p className="text-slate-100 mb-4">
            Collaborated in an international interdisciplinary team with members from China, Laos, Thailand, and
            Denmark, supported by universities and RCEP organizations across ASEAN.
          </p>

          {/* ASEAN Main Photo */}
          <div style={{ margin: "2rem 0", textAlign: "center" }}>
            <img
              src="/images/ASEAN.png"
              alt="HUIXI AI GO project overview"
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

        {/* Achievement */}
        <section className="mb-10" style={{ textAlign: "left" }}>
          <h2 className="text-xl font-semibold text-cyan-200 mb-3">
            🏆 Achievement
          </h2>
          <div className="bg-cyan-900/20 border border-cyan-400/30 rounded-lg p-4 mb-4">
            <p className="text-cyan-100 text-lg font-semibold mb-2">
              🏆 1st Place Winner – China–ASEAN AI Tourism Innovation Competition (ASEAN Regional Final)
            </p>
            <p className="text-slate-100">
              Awarded the <strong className="text-cyan-300">ASEAN Special Award</strong> for outstanding innovation in applying AI to cultural tourism and cross-border cooperation.
            </p>
          </div>

          {/* ASEAN Achievement Photo */}
          <div style={{ margin: "2rem 0", textAlign: "center" }}>
            <img
              src="/images/ASEAN1.JPG"
              alt="ASEAN Special Award achievement"
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

        {/* Collaboration & Support */}
        <section className="mb-10" style={{ textAlign: "left" }}>
          <h2 className="text-xl font-semibold text-cyan-200 mb-3">
            Collaboration & Support
          </h2>
          <p className="text-slate-100 mb-4">
            The project received institutional backing from:
          </p>
          <ul className="list-disc pl-6 text-slate-100 mb-4">
            <li><strong className="text-cyan-300">Guangxi University of Science and Technology</strong> – AI joint research and training base</li>
            <li><strong className="text-cyan-300">National University of Laos</strong> – "Belt and Road" AI information laboratory collaboration</li>
            <li><strong className="text-cyan-300">China–ASEAN AI Innovation Center</strong> – Model testing resources and industry integration</li>
            <li><strong className="text-cyan-300">RCEP Business Alliance Network</strong> – Market access and B2B cooperation channels</li>
            <li><strong className="text-cyan-300">Nanning Foreign Affairs Office & Lao Telecom Technical College</strong> – Cross-border AI pilot and data integration support</li>
          </ul>

          {/* ASEAN Photo 2 */}
          <div style={{ margin: "2rem 0", textAlign: "center" }}>
            <img
              src="/images/ASEAN2.JPG"
              alt="International collaboration and partnership"
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

        {/* Your Contribution */}
        <section className="mb-10" style={{ textAlign: "left" }}>
          <h2 className="text-xl font-semibold text-cyan-200 mb-3">
            Your Contribution
          </h2>
          <p className="text-slate-100 mb-4">
            Led the development of the AI semantic recognition and multilingual dialogue module, integrating large
            language models and speech APIs for real-time travel assistance. Contributed to prototype deployment,
            data processing pipeline design, and multilingual testing with ASEAN partners.
          </p>

          <div className="flex flex-wrap gap-3 mb-4">
            {["Artificial Intelligence (AI)", "Innovation Management", "Product Development", "Cross-border Collaboration"].map((skill) => (
              <span
                key={skill}
                className="bg-cyan-100 text-cyan-900 px-3 py-1 rounded-full text-sm font-medium"
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
          <p className="text-slate-100 mb-4">
            The project advances digital tourism innovation, AI localization, and China–ASEAN smart cooperation,
            laying the groundwork for cross-border digital service applications in education, travel, and cultural exchange.
          </p>

        </section>

        {/* Live Demo Link */}
        <section className="mb-10" style={{ textAlign: "center" }}>
          <a
            href="https://travel-ai-demo.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-xl text-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            🤖 View AI Demo →
          </a>
        </section>
      </div>
    </main>
  );
}