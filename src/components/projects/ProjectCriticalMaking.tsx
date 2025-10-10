import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProjectCriticalMaking() {
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
            window.location.href = "/#education";
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
            Critical Making: The Knowledge Tree for Dyslexia & AI Support
          </h1>
          <div>
            <strong>Event:</strong> "Critical Making: Neurodiversity & Computer
            Science"
          </div>
          <div>
            <strong>Date:</strong> May 14, 2024
          </div>
          <div>
            <strong>Participants:</strong> 18 designers, technologists, and
            educators
          </div>
        </header>

        {/* Research Question */}
        <section className="project-section">
          <h2>
            Research Question
          </h2>
          <blockquote>
            "What discussions can the critical design artifact foster about the
            core challenges for dyslexia and the opportunities for AI in
            supporting dyslexia?"
          </blockquote>
          <img
            src="/images/cm1.jpg"
            alt="Knowledge Tree artifact - overview"
            className="project-image"
          />
        </section>

        {/* Project Overview */}
        <section className="project-section">
          <h2>
            Project Overview
          </h2>
          <p>
            To spark deeper conversations around dyslexia, we built the
            Knowledge Tree—a laser-cut wooden sculpture whose branches double as
            an interactive ChatGPT interface. Rather than simply presenting
            facts, this hybrid artifact invited participants to ask questions,
            challenge assumptions, and collectively map their insights onto its
            wooden leaves.
          </p>
          <img
            src="/images/cm2.jpg"
            alt="Participants interacting with the Knowledge Tree"
            className="project-image"
          />
        </section>

        {/* Key Findings */}
        <section className="project-section">
          <h2>
            Key Findings
          </h2>
          <ul>
            <li>
              <strong>Shifting the Narrative:</strong>{" "}
              Attendees moved beyond framing dyslexia as "lower ability,"
              instead celebrating its unique patterns of thought—big-picture
              thinking, visual reasoning, and creative problem solving.
            </li>
            <li>
              <strong>Beyond Spell-Check:</strong>{" "}
              Conversations surfaced a desire for AI tools that adapt layouts,
              offer multimodal reading support, and scaffold complex
              information—rather than merely correcting spelling.
            </li>
            <li>
              <strong>Design as Dialogue:</strong>{" "}
              Physically inscribing ideas on the wooden leaves reinforced the
              notion that critical design can be a co-creative process, knitting
              together diverse perspectives.
            </li>
          </ul>
          <img
            src="/images/cm3.png"
            alt="Close-up of wooden leaves with ideas"
            className="project-image"
          />
        </section>

        {/* Reflection & Next Steps */}
        <section className="project-section">
          <h2>
            Reflection & Next Steps
          </h2>
          <p>
            While the Knowledge Tree successfully provoked rich conversations,
            we discovered that bridging the gap—helping non-dyslexic
            participants fully empathize with dyslexic experiences—remains
            challenging.
            <br />
            <br />
            Future work will shift towards launching an AI-driven venture
            dedicated to dyslexia support—building and scaling software
            solutions like adaptive reading platforms, voice-first writing
            companions, and collaborative tools—and working closely with schools
            and organizations to deploy and refine these products in real
            educational and professional settings.
          </p>
          <img
            src="/images/cm4.jpg"
            alt="Group discussion around the Knowledge Tree"
            className="project-image"
          />
        </section>
      </div>
    </main>
  );
}
