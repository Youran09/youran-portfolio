import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProjectDeloitteCaseChallenge() {
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
            Deloitte Case Challenge – Designing a World-Class Onboarding Experience
          </h1>
          <div className="text-cyan-100 text-sm mb-1">
            <strong>Program:</strong> Deloitte Autumn 2025 Case, University of Copenhagen
          </div>
          <div className="text-cyan-100 text-sm mb-1">
            <strong>Period:</strong> October - November 2025
          </div>
        </header>

        {/* Project Summary */}
        <section className="mb-10" style={{ textAlign: "left" }}>
          <h2 className="text-xl font-semibold text-cyan-200 mb-3">
            Project Summary
          </h2>
          <p className="text-slate-100 mb-4">
            Participated in an intensive CBS-Deloitte partnership program designed to develop adaptability and
            problem-solving skills through experiential learning. Among 20 competing students, collaborated with
            a cross-disciplinary team to redesign Deloitte Denmark's onboarding experience. The challenge involved
            creating a dynamic, personalized, and data-informed onboarding framework, culminating in a final
            presentation to an expert judging panel of industry leaders and executives.
          </p>

          {/* Deloitte Photo 1 */}
          <div style={{ margin: "2rem 0", textAlign: "center" }}>
            <img
              src="/images/deloitte.png"
              alt="Deloitte Case Challenge presentation"
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
            <li>Improved leader engagement through a revised onboarding toolkit and accountability roadmap</li>
            <li>Enhanced inclusivity and adaptability to support diverse talent profiles</li>
            <li>Strengthened alignment with Deloitte's goal to be #1 in talent development and client impact</li>
          </ul>

          {/* Deloitte Impact Photo */}
          <div style={{ margin: "2rem 0", textAlign: "center" }}>
            <img
              src="/images/deloitte3.png"
              alt="Deloitte onboarding framework impact"
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

        {/* Key Technologies & Skills */}
        <section className="mb-10" style={{ textAlign: "left" }}>
          <h2 className="text-xl font-semibold text-cyan-200 mb-3">
            Key Technologies & Skills
          </h2>
          <div className="flex flex-wrap gap-3 mb-4" style={{ gap: "0.75rem" }}>
            {["MVP Development", "UX/UI Design", "Data-Driven Strategy", "Talent Development"].map((skill) => (
              <span
                key={skill}
                className="bg-cyan-100 text-cyan-900 px-3 py-1 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>


          {/* Deloitte Photo 4 */}
          <div style={{ margin: "2rem 0", textAlign: "center" }}>
            <img
              src="/images/deloitte2.png"
              alt="Deloitte final presentation and results"
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
      </div>
    </main>
  );
}