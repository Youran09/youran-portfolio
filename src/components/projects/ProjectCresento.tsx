import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProjectCresento() {
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
            Cresento - AI-Powered Smart Shin Guards for Football Analytics
          </h1>
          <div className="text-cyan-100 text-sm mb-1">
            <strong>Project:</strong> Website Development & Digital Marketing for Sports Technology Startup
          </div>
          <div className="text-cyan-100 text-sm mb-1">
            <strong>Role:</strong> Full-Stack Developer & Digital Marketing Specialist
          </div>
          <div className="text-cyan-100 text-sm mb-1">
            <strong>Period:</strong> Jul - Sep 2025
          </div>
        </header>

        {/* Project Overview */}
        <section className="mb-10" style={{ textAlign: "left" }}>
          <h2 className="text-xl font-semibold text-cyan-200 mb-3">
            Project Overview
          </h2>
          <p className="text-slate-100 mb-4">
            I was brought into this project by my marketing professor to lead the website development
            for Cresento, an innovative sports technology startup. The scope included full-stack website development,
            SEO optimization, and digital marketing implementation to create a powerful platform for fundraising and
            investor presentations.
          </p>
          <p className="text-slate-100 mb-4">
            The project required both technical development skills and marketing expertise to effectively communicate
            Cresento's mission of democratizing elite-level sports analytics. Together with the marketing team, we implemented
            comprehensive SEO optimization, keyword research, and content creation to maximize visibility and investor engagement.
          </p>

          {/* Cresento Photo 1 */}
          <div style={{ margin: "2rem 0", textAlign: "center" }}>
            <img
              src="/images/cresento0.png"
              alt="Cresento smart shin guards technology"
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

        {/* Company Achievements */}
        <section className="mb-10" style={{ textAlign: "left" }}>
          <h2 className="text-xl font-semibold text-cyan-200 mb-3">
            Company Achievements
          </h2>
          <div className="bg-cyan-900/20 border border-cyan-400/30 rounded-lg p-4 mb-4">
            <p className="text-cyan-100 text-lg font-semibold mb-2">
              🏆 Multiple Awards & Recognition
            </p>
            <ul className="list-disc pl-6 text-slate-100">
              <li><strong className="text-cyan-300">HKUST USEL Gold Award</strong> - HKD 10,000 (May 2025)</li>
              <li><strong className="text-cyan-300">HKUST Dream Builder</strong> - HKD 20,000</li>
              <li><strong className="text-cyan-300">HKSTP Co-Ideation</strong> - HKD 100,000</li>
              <li><strong className="text-cyan-300">GBA Youth Fund</strong> - HKD 250,000</li>
              <li><strong className="text-cyan-300">AI Hardware Battle</strong> - Top 3 in Asia (July 2025)</li>
              <li><strong className="text-cyan-300">World Football Summit</strong> - Official Exhibitor</li>
            </ul>
          </div>

          {/* Cresento Photo 2 */}
          <div style={{ margin: "2rem 0", textAlign: "center" }}>
            <img
              src="/images/cresento2.png"
              alt="Cresento website development process"
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

        {/* My Contribution */}
        <section className="mb-10" style={{ textAlign: "left" }}>
          <h2 className="text-xl font-semibold text-cyan-200 mb-3">
            My Contribution
          </h2>
          <p className="text-slate-100 mb-4">
            Working alongside the marketing team, my primary responsibility was the complete website development. The project included:
          </p>
          <ul className="list-disc pl-6 text-slate-100 mb-4">
            <li>Full-stack website development and responsive design implementation</li>
            <li>User experience design focused on conversion and engagement</li>
            <li>Technical integration of company milestones and achievement showcases</li>
            <li>Performance optimization and analytics implementation</li>
            <li>Content management system setup and customization</li>
            <li>Collaborating with the marketing team on website optimization</li>
          </ul>
          <p className="text-slate-100 mb-4">
            The website serves as their primary fundraising tool and professional digital presence. While the marketing team
            handled SEO strategy and keyword research, I focused on implementing the technical foundation that would support
            their marketing efforts. The experience provided valuable insights into creating effective startup showcase platforms.
          </p>

          {/* Cresento Photo 3 */}
          <div style={{ margin: "2rem 0", textAlign: "center" }}>
            <img
              src="/images/cresento3.png"
              alt="Cresento platform features and functionality"
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
            Key Skills & Technologies
          </h2>
          <p className="text-slate-100 mb-4">
            <strong className="text-cyan-300">Technologies:</strong> Web Development, UI/UX Design, SEO Optimization, Startup Showcase
          </p>

          {/* Cresento Photo 4 */}
          <div style={{ margin: "2rem 0", textAlign: "center" }}>
            <img
              src="/images/cresento4.png"
              alt="Cresento final platform showcase"
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

        {/* Learning Outcomes */}
        <section className="mb-2" style={{ textAlign: "left" }}>
          <h2 className="text-xl font-semibold text-cyan-200 mb-3">
            Learning Outcomes
          </h2>
          <p className="text-slate-100 mb-4">
            This project provided valuable experience in:
          </p>
          <ul className="list-disc pl-6 text-slate-100 mb-4">
            <li>Developing websites for startup fundraising and investor presentations</li>
            <li>Creating professional digital presence for emerging technology companies</li>
            <li>Understanding the unique requirements of sports technology showcases</li>
            <li>Building responsive and investor-focused web platforms</li>
            <li>Working with international startup teams and stakeholders</li>
          </ul>

          {/* Visit Website Link */}
          <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
          <a
            href="https://cresento.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-xl text-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            ⚽ Visit Cresento Website →
          </a>
          </div>
        </section>
      </div>
    </main>
  );
}