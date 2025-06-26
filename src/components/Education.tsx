import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface TimelineItem {
  title: string;
  institution: string;
  period: string;
  description?: string;
  GPA?: string;
  courses?: string;
  projects?: { name: string; slug?: string; details?: any }[];
  thesis?: string;
  thesisSlug?: string;
  image?: string;
}

const education: TimelineItem[] = [
  {
    title: "MSc in Computer Science",
    institution: "University of Copenhagen",
    period: "2023 - 2025",
    GPA: "3.5/4",
    courses:
      "Advanced Algorithms and Data Structures, Advanced Computer Systems, Machine Learning A, Advanced Topics in Human-Centered Computing",
    projects: [
      {
        name: "Designing Collaborative Technologies",
        slug: "designing-collaborative-technologies",
      },
      { name: "Critical Making", slug: "critical-making" },
    ],
    thesis: "Coral Image Segmentation Using Deep Learning",
    thesisSlug: "coral-image-segmentation",
    image: "/images/ku.png",
  },
  {
    title: "Exchange program",
    institution: "Hong Kong University of Science and Technology",
    period: "2024",
    GPA: "3.425/4",
    courses:
      "Design Methodologies, Soft Robotics, Building Information Modeling and Digital Construction, Tech Startup and Entrepreneur's Ecosystem: Growth and Innovation",
    projects: [
      {
        name: "T&M Corporate Consulting Project: Meta LLM for Digital Transformation of Viu International",
        slug: "temg-consulting",
      },
    ],
    image: "/images/hkust.png",
  },
  {
    title: "BSc in Computer Science",
    institution: "University of Copenhagen",
    period: "2020 - 2023",
    GPA: "3.19/4",
    courses:
      "Interaction Design, Linear Algebra in Computer Science, Software Development, Mathematical Analysis & Probability Theory (MASD), Modelling & Analysis of Data, Computer Systems, Implementation of Programming Languages, Algorithms and Data Structures, Development of Information Systems, Programming Language Design, Philosophy of Computer Science",
    thesis:
      "Whales Location Tracking - Analyzing Spatial Distributions using Ripley-K Function",
    thesisSlug: "whales-location-tracking",
    image: "/images/ku.png",
  },
  {
    title: "BSc in Business, Asian Language and Culture",
    institution: "Copenhagen Business School",
    period: "2018",
    GPA: "3.59/4",
    courses:
      "Chinese 1, Chinese 2, Business Research Methods, Asian Societies from a Comparative Perspective, Marketing, International Relations in Asia\t",
    projects: [
      {
        name: "1st-Year Project on Globalization and International Business",
      },
    ],
    image: "/images/cbs.png",
  },
];

const Education = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const navigate = useNavigate();

  return (
    <section id="education" ref={ref} className="experience bg-slate-900">
      <div className="container">
        <motion.div
          className="experience-content"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-cyan-400 text-center md:text-left">
            Education
          </h2>
          <div className="timeline timeline-left">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: -50 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                }
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="timeline-content">
                  {edu.image && (
                    <img
                      src={edu.image}
                      alt={edu.title}
                      className="education-image mb-3 rounded shadow"
                      style={{
                        maxHeight: "180px",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  )}
                  <div className="timeline-header">
                    <h3>{edu.title}</h3>
                    <span className="company">{edu.institution}</span>
                    <span className="period">{edu.period}</span>
                  </div>
                  {edu.GPA && (
                    <p>
                      <strong>GPA:</strong> {edu.GPA}
                    </p>
                  )}
                  {edu.courses && (
                    <p>
                      <strong>Courses:</strong> {edu.courses}
                    </p>
                  )}
                  {edu.projects && (
                    <div className="mt-3">
                      <span className="font-semibold text-cyan-300 mr-2">
                        Projects:
                      </span>
                      <span className="projects-box flex flex-wrap gap-2">
                        {edu.projects.map((project, i) =>
                          project.slug ? (
                            <span
                              key={i}
                              className="project-tag bg-cyan-900/60 text-cyan-200 px-3 py-1 rounded-full text-xs font-medium cursor-pointer hover:bg-cyan-400/80 hover:text-slate-900 transition"
                              onClick={() =>
                                navigate(`/project/${project.slug}`)
                              }
                            >
                              {project.name}
                            </span>
                          ) : (
                            <span
                              key={i}
                              className="project-tag bg-cyan-900/60 text-cyan-200 px-3 py-1 rounded-full text-xs font-medium"
                              style={{
                                cursor: "default",
                                background: "rgba(14, 116, 144, 0.6)",
                              }}
                            >
                              {project.name}
                            </span>
                          )
                        )}
                      </span>
                    </div>
                  )}
                  {edu.thesis && (
                    <div className="mt-3">
                      <div className="font-semibold text-cyan-300 mb-1">
                        {edu.title.includes("BSc")
                          ? "Bachelor's Thesis:"
                          : "Master's Thesis:"}
                      </div>
                      <span
                        className="project-tag bg-cyan-900/60 text-cyan-200 px-3 py-1 rounded-full text-xs font-medium cursor-pointer hover:bg-cyan-400/80 hover:text-slate-900 transition"
                        onClick={() => navigate(`/project/${edu.thesisSlug}`)}
                      >
                        {edu.thesis}
                      </span>
                    </div>
                  )}
                  {edu.description && !edu.GPA && <p>{edu.description}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
