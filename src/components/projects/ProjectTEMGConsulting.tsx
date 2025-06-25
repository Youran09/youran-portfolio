import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProjectTEMGConsulting() {
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
            T&M Corporate Consulting Project: Meta LLM for Digital
            Transformation of Viu International
          </h1>
          <div className="text-cyan-100 text-sm mb-1">
            <strong>Course:</strong> TEMG4950N: Meta LLM for Digital
            Transformation of Viu International
          </div>
          <div className="text-cyan-100 text-sm mb-1">
            <strong>Sponsors:</strong> Meta (Facebook) & Viu International
          </div>
        </header>

        {/* Project Overview */}
        <section className="mb-10" style={{ textAlign: "left" }}>
          <h2 className="text-xl font-semibold text-cyan-200 mb-3">
            Project Overview
          </h2>
          <p className="text-slate-100 mb-4">
            Sponsored by Meta (Facebook) and Viu International, this project
            focused on enhancing Viu's digital marketing strategies across 25
            markets. Students developed a digital transformation plan and
            solution prototype using Meta Llama 3 and other tools to
            revolutionize push notification campaigns.
          </p>
          <div style={{ margin: "2rem 0", textAlign: "center" }}>
            <iframe
              width="900"
              height="506"
              src="https://www.youtube.com/embed/oqcE7wNv3CA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{
                width: "100%",
                maxWidth: "900px",
                height: "506px",
                borderRadius: "1rem",
                boxShadow: "0 2px 16px rgba(0,0,0,0.15)",
              }}
            ></iframe>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-10" style={{ textAlign: "left" }}>
          <h2 className="text-xl font-semibold text-cyan-200 mb-3">
            Key Features
          </h2>
          <ul className="list-disc pl-6 text-slate-100 mb-4">
            <li>
              <strong className="text-cyan-300">Information Summarizer:</strong>{" "}
              a one-click deep dive into series synopses and the latest buzz,
              powered by AI-driven web-scraping, whitelisting/blacklisting, and
              Llama 3 reranking.
            </li>
            <li>
              <strong className="text-cyan-300">Notification Generator:</strong>{" "}
              infinite push-message ideation tailored to diverse audiences,
              complete with multi-model translation (Llama, Google Translate,
              Marian MT) and real-time refining via "like" feedback.
            </li>
            <li>
              <strong className="text-cyan-300">Thumbnail Selector:</strong>{" "}
              keyword-based video analysis that delivers the perfect still in
              under two minutes, saving marketers from endless scrubbing through
              episodes.
            </li>
          </ul>
          <div style={{ margin: "2rem 0", textAlign: "center" }}>
            <iframe
              width="900"
              height="506"
              src="https://www.youtube.com/embed/dbz2IfPrIVc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{
                width: "100%",
                maxWidth: "900px",
                height: "506px",
                borderRadius: "1rem",
                boxShadow: "0 2px 16px rgba(0,0,0,0.15)",
              }}
            ></iframe>
          </div>
        </section>

        {/* Reflection */}
        <section className="mb-10" style={{ textAlign: "left" }}>
          <h2 className="text-xl font-semibold text-cyan-200 mb-3">
            Reflection
          </h2>
          <p className="text-slate-100 mb-4">
            As my Hong Kong exchange draws to a close and I prepare to return to
            the University of Copenhagen, I'm filled with gratitude. Learning
            Figma on the fly, assembling a full-stack AI solution, and standing
            on that Meta office at sunset—all of it has been an unforgettable
            milestone in my engineering journey. This is Watson AI, and I'm
            proud of how far we've come. 💛💛💛
          </p>
          <div style={{ textAlign: "center" }}>
            <img
              src="/images/meta.png"
              alt="Meta (Facebook) logo at project site"
              className="rounded shadow mb-8"
              style={{
                width: "100%",
                maxWidth: "900px",
                height: "506px",
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
