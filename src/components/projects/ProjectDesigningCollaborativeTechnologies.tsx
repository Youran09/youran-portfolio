import React from "react";
import { useNavigate } from "react-router-dom";
// Placeholder components (replace with real ones if available)
const ProjectHeader = ({ title, period, partners }: any) => (
  <div className="mb-8">
    <h1 className="text-3xl font-bold text-cyan-300 mb-2">{title}</h1>
    <div className="text-cyan-100 text-sm mb-1">{period}</div>
    <div className="text-cyan-200 text-xs">{partners}</div>
  </div>
);
const HeroImage = ({ src, alt }: any) => (
  <img
    src={src}
    alt={alt}
    className="w-full rounded-lg shadow mb-8"
    style={{ maxHeight: 400, objectFit: "cover" }}
  />
);
const ProjectSection = ({ title, content, listItems }: any) => (
  <section className="mb-12">
    <h2 className="text-xl font-semibold text-cyan-200 mb-3">{title}</h2>
    {content && <p className="text-slate-100 mb-2">{content}</p>}
    {listItems && (
      <ul className="list-disc pl-6 space-y-2">
        {listItems.map((item: any, i: number) => (
          <li key={i}>
            <span className="font-semibold text-cyan-300">{item.title}:</span>{" "}
            {item.description}
          </li>
        ))}
      </ul>
    )}
  </section>
);
const ImageGallery = ({ images }: any) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
    {images.map((img: any, i: number) => (
      <div key={i} className="bg-slate-800 rounded-lg overflow-hidden shadow">
        <img src={img.src} alt={img.alt} className="w-full h-64 object-cover" />
        <div className="p-3 text-xs text-cyan-100">{img.caption}</div>
      </div>
    ))}
  </div>
);
const ProjectNavigation = ({ previousProject, nextProject }: any) => (
  <div className="flex justify-between mt-12">
    <a href={previousProject.href} className="text-cyan-400 hover:underline">
      {previousProject.title}
    </a>
    <a href={nextProject.href} className="text-cyan-400 hover:underline">
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
            Hybrid Collaboration Exploratory Project
          </h1>
          <div className="text-cyan-100 text-sm mb-1">
            <strong>Period:</strong> February 22 – April 4, 2024
          </div>
          <div className="text-cyan-200 text-xs">
            <strong>Partners:</strong> University of Copenhagen (KU) &
            University of Maryland, Baltimore County (UMBC)
          </div>
        </header>

        {/* Section: What We Set Out to Do */}
        <section className="mb-10" style={{ textAlign: "left" }}>
          <h2 className="text-xl font-semibold text-cyan-200 mb-3">
            What We Set Out to Do
          </h2>
          <p className="text-slate-100 mb-4">
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
            className="rounded shadow mb-6"
            style={{ width: "100%", maxHeight: 480, height: "auto" }}
          />
        </section>

        {/* Section: What We Discovered */}
        <section className="mb-10" style={{ textAlign: "left" }}>
          <h2 className="text-xl font-semibold text-cyan-200 mb-3">
            What We Discovered
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-slate-100">
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
            className="rounded shadow mb-6"
            style={{ width: "100%", maxHeight: 480, height: "auto" }}
          />
        </section>

        {/* Section: Why It Matters */}
        <section className="mb-10" style={{ textAlign: "left" }}>
          <h2 className="text-xl font-semibold text-cyan-200 mb-3">
            Why It Matters
          </h2>
          <p className="text-slate-100 mb-4">
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
