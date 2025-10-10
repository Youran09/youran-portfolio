import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProjectCoralSegmentation() {
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
            Coral Image Segmentation Using Deep Learning
          </h1>
          <div>
            <strong>Project:</strong> Master's Thesis, University of Copenhagen
          </div>
          <div>
            <strong>Date:</strong> May 2025
          </div>
          <div>
            <strong>Author:</strong> Youran Tao Jensen
          </div>
        </header>

        {/* Research Goal */}
        <section className="project-section">
          <h2>
            Research Goal
          </h2>
          <blockquote>
            How can deep learning models be applied—and improved—to
            automatically segment corals in challenging underwater imagery?
          </blockquote>
          <img
            src="/images/coral2.png"
            alt="Underwater coral example used in segmentation"
            className="project-image"
          />
        </section>

        {/* Project Overview */}
        <section className="project-section">
          <h2>
            Project Overview
          </h2>
          <p>
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
              <strong>Top Performer:</strong>{" "}
              DeepLabV3+ achieved the highest overall accuracy and boundary
              precision, making it ideal for detailed reef monitoring.
            </li>
            <li>
              <strong>Robust Runner-Up:</strong>{" "}
              HRNetV2 excelled under partial occlusion, thanks to its
              multi-resolution feature fusion.
            </li>
            <li>
              <strong>Speed Champion:</strong>{" "}
              BiSeNet's lightweight design makes it the best candidate for
              real-time or embedded applications (e.g., underwater drones).
            </li>
            <li>
              <strong>Balanced Contender:</strong>{" "}
              SegFormer offered a strong trade-off between performance and
              inference speed.
            </li>
            <li>
              <strong>Custom Success:</strong>{" "}
              HybridNetV3 showed that a well-tuned, compact network can rival
              larger architectures on marine imagery.
            </li>
          </ul>
          <img
            src="/images/coral4.png"
            alt="Coral example for key findings section"
            className="project-image"
          />
        </section>

        {/* Contributions */}
        <section className="project-section">
          <h2>
            Contributions
          </h2>
          <ul>
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
            className="project-image"
          />
        </section>

        {/* Impact & Future Directions */}
        <section className="project-section">
          <h2>
            Impact & Future Directions
          </h2>
          <ul>
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
            className="project-image"
          />
        </section>

        {/* Code & Dataset Link */}
        <section className="project-section">
          <a
            href="https://github.com/Youran09/Githooks/blob/main/Master_thesis_26052025-4.ipynb"
            target="_blank"
            rel="noopener noreferrer"
            className=""
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
