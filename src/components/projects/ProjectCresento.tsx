import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProjectCresento() {
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
            Cresento - AI-Powered Smart Shin Guards for Football Analytics
          </h1>
          <div>
            <strong>Project:</strong> Website Development & Digital Marketing for Sports Technology Startup
          </div>
          <div>
            <strong>Role:</strong> Full-Stack Developer & Digital Marketing Specialist
          </div>
          <div>
            <strong>Period:</strong> Jul - Sep 2025
          </div>
        </header>

        {/* Project Overview */}
        <section className="project-section">
          <h2>
            Project Overview
          </h2>
          <p>
            I was brought into this project by my marketing professor to lead the website development
            for Cresento, an innovative sports technology startup. The scope included full-stack website development,
            SEO optimization, and digital marketing implementation to create a powerful platform for fundraising and
            investor presentations.
          </p>
          <p>
            The project required both technical development skills and marketing expertise to effectively communicate
            Cresento's mission of democratizing elite-level sports analytics. Together with the marketing team, we implemented
            comprehensive SEO optimization, keyword research, and content creation to maximize visibility and investor engagement.
          </p>

          {/* Cresento Photo 1 */}
          <div style={{ margin: "2rem 0", textAlign: "center" }}>
            <img
              src="/images/cresento0.png"
              alt="Cresento smart shin guards technology"
              className="project-image"
            />
          </div>
        </section>

        {/* Company Achievements */}
        <section className="project-section">
          <h2>
            Company Achievements
          </h2>
          <div>
            <p>
              🏆 Multiple Awards & Recognition
            </p>
            <ul>
              <li><strong>HKUST USEL Gold Award</strong> - HKD 10,000 (May 2025)</li>
              <li><strong>HKUST Dream Builder</strong> - HKD 20,000</li>
              <li><strong>HKSTP Co-Ideation</strong> - HKD 100,000</li>
              <li><strong>GBA Youth Fund</strong> - HKD 250,000</li>
              <li><strong>AI Hardware Battle</strong> - Top 3 in Asia (July 2025)</li>
              <li><strong>World Football Summit</strong> - Official Exhibitor</li>
            </ul>
          </div>

          {/* Cresento Photo 2 */}
          <div style={{ margin: "2rem 0", textAlign: "center" }}>
            <img
              src="/images/cresento2.png"
              alt="Cresento website development process"
              className="project-image"
            />
          </div>
        </section>

        {/* My Contribution */}
        <section className="project-section">
          <h2>
            My Contribution
          </h2>
          <p>
            Working alongside the marketing team, my primary responsibility was the complete website development. The project included:
          </p>
          <ul>
            <li>Full-stack website development and responsive design implementation</li>
            <li>User experience design focused on conversion and engagement</li>
            <li>Technical integration of company milestones and achievement showcases</li>
            <li>Performance optimization and analytics implementation</li>
            <li>Content management system setup and customization</li>
            <li>Collaborating with the marketing team on website optimization</li>
          </ul>
          <p>
            The website serves as their primary fundraising tool and professional digital presence. While the marketing team
            handled SEO strategy and keyword research, I focused on implementing the technical foundation that would support
            their marketing efforts. The experience provided valuable insights into creating effective startup showcase platforms.
          </p>

          {/* Cresento Photo 3 */}
          <div style={{ margin: "2rem 0", textAlign: "center" }}>
            <img
              src="/images/cresento3.png"
              alt="Cresento platform features and functionality"
              className="project-image"
            />
          </div>
        </section>

        {/* Key Skills */}
        <section className="project-section">
          <h2>
            Key Skills & Technologies
          </h2>
          <p>
            <strong>Technologies:</strong> Web Development, UI/UX Design, SEO Optimization, Startup Showcase
          </p>

          {/* Cresento Photo 4 */}
          <div style={{ margin: "2rem 0", textAlign: "center" }}>
            <img
              src="/images/cresento4.png"
              alt="Cresento final platform showcase"
              className="project-image"
            />
          </div>
        </section>

        {/* Learning Outcomes */}
        <section className="project-section">
          <h2>
            Learning Outcomes
          </h2>
          <p>
            This project provided valuable experience in:
          </p>
          <ul>
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
            className=""
          >
            ⚽ Visit Cresento Website →
          </a>
          </div>
        </section>
      </div>
    </main>
  );
}