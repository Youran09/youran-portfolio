import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProjectCriticalMaking() {
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
            window.location.href = "/#education";
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
            Critical Making: The Knowledge Tree for Dyslexia & AI Support
          </h1>
          <div className="text-cyan-100 text-sm mb-1">
            <strong>Event:</strong> "Critical Making: Neurodiversity & Computer
            Science"
          </div>
          <div className="text-cyan-100 text-sm mb-1">
            <strong>Date:</strong> May 14, 2024
          </div>
          <div className="text-cyan-200 text-xs">
            <strong>Participants:</strong> 18 designers, technologists, and
            educators
          </div>
        </header>

        {/* Research Question */}
        <section className="mb-10" style={{ textAlign: "left" }}>
          <h2 className="text-xl font-semibold text-cyan-200 mb-3">
            Research Question
          </h2>
          <blockquote className="border-l-4 border-cyan-400 pl-4 italic text-cyan-100 mb-4">
            "What discussions can the critical design artifact foster about the
            core challenges for dyslexia and the opportunities for AI in
            supporting dyslexia?"
          </blockquote>
          <img
            src="/images/cm1.jpg"
            alt="Knowledge Tree artifact - overview"
            className="rounded shadow mb-8"
            style={{
              width: "80%",
              height: "auto",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
        </section>

        {/* Project Overview */}
        <section className="mb-10" style={{ textAlign: "left" }}>
          <h2 className="text-xl font-semibold text-cyan-200 mb-3">
            Project Overview
          </h2>
          <p className="text-slate-100 mb-4">
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
            className="rounded shadow mb-8"
            style={{
              width: "80%",
              height: "auto",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
        </section>

        {/* Key Findings */}
        <section className="mb-10" style={{ textAlign: "left" }}>
          <h2 className="text-xl font-semibold text-cyan-200 mb-3">
            Key Findings
          </h2>
          <ul className="list-disc pl-6 text-slate-100 mb-4">
            <li>
              <strong className="text-cyan-300">Shifting the Narrative:</strong>{" "}
              Attendees moved beyond framing dyslexia as "lower ability,"
              instead celebrating its unique patterns of thought—big-picture
              thinking, visual reasoning, and creative problem solving.
            </li>
            <li>
              <strong className="text-cyan-300">Beyond Spell-Check:</strong>{" "}
              Conversations surfaced a desire for AI tools that adapt layouts,
              offer multimodal reading support, and scaffold complex
              information—rather than merely correcting spelling.
            </li>
            <li>
              <strong className="text-cyan-300">Design as Dialogue:</strong>{" "}
              Physically inscribing ideas on the wooden leaves reinforced the
              notion that critical design can be a co-creative process, knitting
              together diverse perspectives.
            </li>
          </ul>
          <img
            src="/images/cm3.png"
            alt="Close-up of wooden leaves with ideas"
            className="rounded shadow mb-8"
            style={{
              width: "80%",
              height: "auto",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
        </section>

        {/* Reflection & Next Steps */}
        <section className="mb-10" style={{ textAlign: "left" }}>
          <h2 className="text-xl font-semibold text-cyan-200 mb-3">
            Reflection & Next Steps
          </h2>
          <p className="text-slate-100 mb-4">
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
            className="rounded shadow mb-8"
            style={{
              width: "80%",
              height: "auto",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
        </section>
      </div>
    </main>
  );
}
