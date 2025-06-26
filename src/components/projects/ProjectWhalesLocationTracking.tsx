import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProjectWhalesLocationTracking() {
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
            Whales Location Tracking – Analyzing Spatial Distributions Using
            Ripley-K Function
          </h1>
          <div className="text-cyan-100 text-sm mb-1">
            <strong>Bachelor's Thesis</strong>
          </div>
          <div className="text-cyan-100 text-sm mb-1">
            <strong>Authors:</strong> Muhan Zhao & Youran Tao Jensen
          </div>
          <div className="text-cyan-100 text-sm mb-1">
            <strong>Supervisor:</strong> François Bernard Lauze
          </div>
          <div className="text-cyan-100 text-sm mb-1">
            <strong>University:</strong> University of Copenhagen, June 26, 2023
          </div>
        </header>

        {/* Objective */}
        <section className="mb-10" style={{ textAlign: "left" }}>
          <h2 className="text-xl font-semibold text-cyan-200 mb-3">
            Objective
          </h2>
          <p className="text-slate-100 mb-4">
            To implement and evaluate the Ripley-K function as a tool for
            characterizing the spatial arrangement—clustering or dispersion—of
            point processes in 2D, on a sphere, and on arbitrary triangular
            meshes, and to demonstrate its application on real-world data.
          </p>
          <div style={{ margin: "2rem 0", textAlign: "center" }}>
            <iframe
              width="900"
              height="506"
              src="https://www.youtube.com/embed/1ljchdMp-mU"
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

        {/* Key Contributions */}
        <section className="mb-10" style={{ textAlign: "left" }}>
          <h2 className="text-xl font-semibold text-cyan-200 mb-3">
            Key Contributions
          </h2>
          <ul className="list-disc pl-6 text-slate-100 mb-4">
            <li>
              <strong>Theoretical Foundations:</strong> Reviewed binomial and
              Poisson distributions, Poisson point processes, uniform and
              directional (von Mises–Fisher, Watson) models, and Shannon
              entropy.
            </li>
            <li>
              <strong>2D Ripley-K Implementation:</strong> Developed sampling
              algorithms for uniform and mixture point processes in the plane.
              Implemented Ripley-K with and without edge-correction; validated
              via simulations.
            </li>
            <li>
              <strong>Spherical Ripley-K:</strong> Simulated point processes on
              the unit sphere using great-circle distances. Extended the
              K-function to account for surface geometry; compared uniform vs.
              clustered distributions.
            </li>
            <li>
              <strong>Mesh-Based Ripley-K:</strong> Constructed an
              icosahedron-derived triangular sphere mesh; implemented uniform
              sampling on triangles. Computed geodesic distances on the mesh to
              evaluate Ripley-K, and confirmed consistency with great-circle
              results.
            </li>
            <li>
              <strong>Real-World Applications:</strong> Whale locations: Mapped
              sightings onto an ocean-only mesh; Ripley-K revealed significant
              clustering. Mitochondrial crista junctions: Analyzed junction
              points on 3D mitochondrial meshes; mean K-function suggested
              near-uniformity, with caveats about sample imbalance and shape
              effects.
            </li>
          </ul>
          <div style={{ margin: "2rem 0", textAlign: "center" }}>
            <iframe
              width="900"
              height="506"
              src="https://www.youtube.com/embed/gceOcf3u0Y0"
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

        {/* Results & Insights */}
        <section className="mb-10" style={{ textAlign: "left" }}>
          <h2 className="text-xl font-semibold text-cyan-200 mb-3">
            Results & Insights
          </h2>
          <ul className="list-disc pl-6 text-slate-100 mb-4">
            <li>
              <strong>2D & Spherical Domains:</strong> Ripley-K accurately
              distinguishes random, clustered, and regular patterns across
              dimensions.
            </li>
            <li>
              <strong>Mesh Analysis:</strong> Geodesic-based K-function on
              meshes aligns closely with analytic spherical results, validating
              the mesh-projection pipeline.
            </li>
            <li>
              <strong>Biological & Ecological Data:</strong> Whale sightings
              exhibit spatial clustering—likely driven by habitat or migration
              corridors. Crista junctions mostly appear uniform, though larger
              mitochondria samples dominate the mean; suggests future work on
              weighted analyses and spatio-temporal extensions.
            </li>
          </ul>
          <div style={{ textAlign: "center" }}>
            <img
              src="/images/whale.png"
              alt="Whale illustration for project results"
              className="rounded shadow mb-8"
              style={{
                width: "60%",
                maxWidth: "900px",
                height: "auto",
                borderRadius: "1rem",
                boxShadow: "0 2px 16px rgba(0,0,0,0.15)",
                display: "inline-block",
                margin: "0 auto",
              }}
            />
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-10" style={{ textAlign: "left" }}>
          <h2 className="text-xl font-semibold text-cyan-200 mb-3">
            Conclusion
          </h2>
          <p className="text-slate-100 mb-4">
            This project demonstrates a flexible, end-to-end framework for
            computing Ripley-K in diverse settings—Euclidean, spherical, and
            mesh surfaces—and showcases its utility on both ecological and
            cellular data. All code and datasets are publicly available at the
            project's GitHub repository.
          </p>
          <div style={{ marginBottom: "2rem" }}>
            <a
              href="https://github.com/Muhanzhaokmp228/Bachelor-project"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#2563eb",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "1.1rem",
                transition: "color 0.2s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.textDecoration = "underline")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.textDecoration = "none")
              }
            >
              🔗 Project's GitHub repository
            </a>
          </div>
          <div style={{ textAlign: "center" }}>
            <img
              src="/images/whale1.png"
              alt="Whale illustration for project conclusion"
              className="rounded shadow mb-8"
              style={{
                width: "60%",
                maxWidth: "900px",
                height: "auto",
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
