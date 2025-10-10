import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProjectDeloitteCaseChallenge() {
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
        >
          ← Go Back
        </button>

        {/* Header */}
        <header className="project-header">
          <h1>
            Deloitte Case Challenge – Designing a World-Class Onboarding Experience
          </h1>
          <div>
            <strong>Program:</strong> Deloitte Autumn 2025 Case, University of Copenhagen
          </div>
          <div>
            <strong>Period:</strong> October - November 2025
          </div>
        </header>

        {/* Project Summary */}
        <section className="project-section">
          <h2>
            Project Summary
          </h2>
          <p>
            Participated in an intensive CBS-Deloitte partnership program designed to develop adaptability and
            problem-solving skills through experiential learning. Among 20 competing students, collaborated with
            a cross-disciplinary team to redesign Deloitte Denmark's onboarding experience. The challenge involved
            creating a dynamic, personalized, and data-informed onboarding framework, culminating in a final
            presentation to an expert judging panel of industry leaders and executives.
          </p>

          {/* Deloitte Photo 1 */}
          <div className="project-image">
            <img
              src="/images/deloitte.png"
              alt="Deloitte Case Challenge presentation"
            />
          </div>
        </section>

        {/* Impact */}
        <section className="project-section">
          <h2>
            Impact
          </h2>
          <ul>
            <li>Improved leader engagement through a revised onboarding toolkit and accountability roadmap</li>
            <li>Enhanced inclusivity and adaptability to support diverse talent profiles</li>
            <li>Strengthened alignment with Deloitte's goal to be #1 in talent development and client impact</li>
          </ul>

          {/* Deloitte Impact Photo */}
          <div className="project-image">
            <img
              src="/images/deloitte3.png"
              alt="Deloitte onboarding framework impact"
            />
          </div>

        </section>

        {/* Key Technologies & Skills */}
        <section className="project-section">
          <h2>
            Key Technologies & Skills
          </h2>
          <div className="project-skills">
            {["MVP Development", "UX/UI Design", "Data-Driven Strategy", "Talent Development"].map((skill) => (
              <span
                key={skill}
                className="skill-tag"
              >
                {skill}
              </span>
            ))}
          </div>


          {/* Deloitte Photo 4 */}
          <div className="project-image">
            <img
              src="/images/deloitte2.png"
              alt="Deloitte final presentation and results"
            />
          </div>
        </section>
      </div>
    </main>
  );
}