import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProjectCoralSegmentation() {
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
            Coral Image Segmentation Using Deep Learning
          </h1>
          <div className="text-cyan-100 text-sm mb-1">
            <strong>Project:</strong> Master's Thesis, University of Copenhagen
          </div>
          <div className="text-cyan-100 text-sm mb-1">
            <strong>Date:</strong> May 2025
          </div>
          <div className="text-cyan-200 text-xs">
            <strong>Author:</strong> Youran Tao Jensen
          </div>
        </header>

        {/* Research Goal */}
        <section className="mb-10" style={{ textAlign: "left" }}>
          <h2 className="text-xl font-semibold text-cyan-200 mb-3">
            Research Goal
          </h2>
          <blockquote className="border-l-4 border-cyan-400 pl-4 italic text-cyan-100 mb-4">
            How can deep learning models be applied—and improved—to
            automatically segment corals in challenging underwater imagery?
          </blockquote>
          <img
            src="/images/coral2.png"
            alt="Underwater coral example used in segmentation"
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
            Coral reefs are vital ecosystems under threat from climate change
            and human activity. Traditional monitoring relies on divers and
            manually annotating photos, which doesn't scale. This thesis builds
            a reproducible, modular pipeline for coral segmentation on a dataset
            of 38,000 annotated underwater images, combining preprocessing,
            training, evaluation, and post-processing.
          </p>
          <img
            src="/images/coral3.png"
            alt="Additional coral example for project overview"
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
              <strong className="text-cyan-300">Top Performer:</strong>{" "}
              DeepLabV3+ achieved the highest overall accuracy and boundary
              precision, making it ideal for detailed reef monitoring.
            </li>
            <li>
              <strong className="text-cyan-300">Robust Runner-Up:</strong>{" "}
              HRNetV2 excelled under partial occlusion, thanks to its
              multi-resolution feature fusion.
            </li>
            <li>
              <strong className="text-cyan-300">Speed Champion:</strong>{" "}
              BiSeNet's lightweight design makes it the best candidate for
              real-time or embedded applications (e.g., underwater drones).
            </li>
            <li>
              <strong className="text-cyan-300">Balanced Contender:</strong>{" "}
              SegFormer offered a strong trade-off between performance and
              inference speed.
            </li>
            <li>
              <strong className="text-cyan-300">Custom Success:</strong>{" "}
              HybridNetV3 showed that a well-tuned, compact network can rival
              larger architectures on marine imagery.
            </li>
          </ul>
          <img
            src="/images/coral4.png"
            alt="Coral example for key findings section"
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

        {/* Contributions */}
        <section className="mb-10" style={{ textAlign: "left" }}>
          <h2 className="text-xl font-semibold text-cyan-200 mb-3">
            Contributions
          </h2>
          <ul className="list-disc pl-6 text-slate-100 mb-4">
            <li>
              A complete, open-source pipeline (preprocessing → training →
              evaluation → post-processing).
            </li>
            <li>
              A benchmark comparison of eight diverse segmentation architectures
              on a large annotated coral dataset.
            </li>
            <li>
              Introduction of HybridNetV3, a lightweight yet competitive model
              tailored for underwater vision challenges.
            </li>
          </ul>
          <img
            src="/images/coral5.png"
            alt="Coral example for contributions section"
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

        {/* Impact & Future Directions */}
        <section className="mb-10" style={{ textAlign: "left" }}>
          <h2 className="text-xl font-semibold text-cyan-200 mb-3">
            Impact & Future Directions
          </h2>
          <ul className="list-disc pl-6 text-slate-100 mb-4">
            <li>
              <strong>Scalable Monitoring:</strong> Automating coral
              segmentation accelerates ecological assessments and long-term reef
              health tracking.
            </li>
            <li>
              <strong>Multi-Class Extension:</strong> Next steps include
              segmenting different coral species or substrate types.
            </li>
            <li>
              <strong>Temporal Analysis:</strong> Integrating video sequences to
              detect reef changes over time.
            </li>
            <li>
              <strong>Edge Deployment:</strong> Porting top models to low-power
              hardware for in-field or drone-based surveys.
            </li>
            <li>
              <strong>Semi-Supervised Learning:</strong> Leverage unlabeled data
              to further boost performance where annotations are scarce.
            </li>
          </ul>
          <img
            src="/images/coral7.png"
            alt="Coral example for future work section"
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

        {/* Code & Dataset Link */}
        <section className="mb-10" style={{ textAlign: "left" }}>
          <a
            href="https://github.com/Youran09/Githooks/blob/main/Master_thesis_26052025-4.ipynb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-semibold px-6 py-3 rounded-lg shadow transition"
            style={{
              color: "#2563eb", // blue-600
              background: "none",
              textDecoration: "none",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.textDecoration = "underline";
              e.currentTarget.style.color = "#1d4ed8"; // darker blue on hover
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.textDecoration = "none";
              e.currentTarget.style.color = "#2563eb";
            }}
          >
            🔗 Explore the full code and dataset
          </a>
        </section>
      </div>
    </main>
  );
}
