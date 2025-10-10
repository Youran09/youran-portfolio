import React from "react";
import { useNavigate } from "react-router-dom";
// Placeholder components (replace with real ones if available)
const ProjectHeader = ({ title, period, partners }: any) => (
  <div className="mb-8">
    <h1>{title}</h1>
    <div>{period}</div>
    <div>{partners}</div>
  </div>
);
const HeroImage = ({ src, alt }: any) => (
  <img
    src={src}
    alt={alt}
    className="project-image"
    style={{ maxHeight: 400, objectFit: "cover" }}
  />
);
const ProjectSection = ({ title, content, listItems }: any) => (
  <section className="mb-12">
    <h2>{title}</h2>
    {content && <p>{content}</p>}
    {listItems && (
      <ul>
        {listItems.map((item: any, i: number) => (
          <li key={i}>
            <span>{item.title}:</span>{" "}
            {item.description}
          </li>
        ))}
      </ul>
    )}
  </section>
);
const ImageGallery = ({ images }: any) => (
  <div>
    {images.map((img: any, i: number) => (
      <div key={i}>
        <img src={img.src} alt={img.alt} className="project-image" />
        <div>{img.caption}</div>
      </div>
    ))}
  </div>
);
const ProjectNavigation = ({ previousProject, nextProject }: any) => (
  <div>
    <a href={previousProject.href}>
      {previousProject.title}
    </a>
    <a href={nextProject.href}>
      {nextProject.title}
    </a>
  </div>
);

export default function ProjectDesigningCollaborativeTechnologies() {
  const navigate = useNavigate();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const galleryImages = [
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Team discussion during hybrid collaboration session",
      caption: "Team members collaborating across locations",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Physical card props used in the experiment",
      caption: "Numbered cards used as physical anchors",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Whiteboard sketches and notes",
      caption: "Whiteboard sketches from brainstorming sessions",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Remote participants on screen during session",
      caption: "Remote participants joining via video call",
    },
  ];

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
            Hybrid Collaboration Exploratory Project
          </h1>
          <div>
            <strong>Period:</strong> February 22 – April 4, 2024
          </div>
          <div>
            <strong>Partners:</strong> University of Copenhagen (KU) &
            University of Maryland, Baltimore County (UMBC)
          </div>
        </header>

        {/* Section: What We Set Out to Do */}
        <section className="project-section">
          <h2>
            What We Set Out to Do
          </h2>
          <p>
            In this hands-on CSCW (Computer-Supported Cooperative Work) project,
            we wanted to move beyond theory and see firsthand how people
            collaborate when some are together in a room and others dial in from
            afar. Our goal was to uncover the hidden challenges of "hybrid"
            teamwork—what makes turn-taking awkward, what artifacts help or
            hinder, and how technology can bring everyone closer, even when
            they're continents apart.
          </p>
          <img
            src="/images/dct.JPG"
            alt="Hybrid collaboration session"
            className="project-image"
          />
        </section>

        {/* Section: What We Discovered */}
        <section className="project-section">
          <h2>
            What We Discovered
          </h2>
          <ul>
            <li>
              <strong className="text-cyan-300">Invisible Boundaries:</strong>{" "}
              Simple delays in audio or video can make remote voices feel
              "muted" in group dynamics.
            </li>
            <li>
              <strong className="text-cyan-300">Turn-Taking Friction:</strong>{" "}
              Without clear visual cues, people tend to interrupt or withdraw,
              especially across locations.
            </li>
            <li>
              <strong className="text-cyan-300">Artifact Power:</strong>{" "}
              Physical tokens (like numbered cards) helped anchor conversations
              and made roles more tangible for everyone.
            </li>
            <li>
              <strong className="text-cyan-300">Iterative Gains:</strong>{" "}
              Rerunning the same game with small tweaks led to noticeably
              smoother interactions—proof that even low-fi changes have big
              impacts.
            </li>
          </ul>
          <img
            src="/images/dct1.JPG"
            alt="Whiteboard sketches and notes from hybrid collaboration"
            className="project-image"
          />
        </section>

        {/* Section: Why It Matters */}
        <section className="project-section">
          <h2>
            Why It Matters
          </h2>
          <p>
            As hybrid work and learning become ever more common, understanding
            the subtle mechanics of cooperation is critical. This project showed
            that thoughtful design—even in quick, student-driven prototypes—can
            significantly boost clarity, equity, and engagement when teams are
            split between rooms and screens.
          </p>
          {/* Add an image here if desired */}
        </section>
      </div>
    </main>
  );
}
