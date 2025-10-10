import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import WaveDivider from "./WaveDivider";

interface TimelineItem {
  title: string;
  institution: string;
  period: string;
  description: string;
  GPA?: string;
  image?: string;
  year: number;
  position: number;
}

// Simple chronological order - let CSS grid handle the layout
const education: TimelineItem[] = [
  {
    title: "MSc in Computer Science",
    institution: "University of Copenhagen",
    period: "2023 - 2025",
    year: "2023-2025",
    position: 0,
    GPA: "3.5/4",
    description: "General profile covering algorithms, systems, and human-centered computing. My coursework included topics such as Machine Learning, Advanced Programming, and Computer Vision. I also completed a thesis on Coral Image Segmentation Using Deep Learning, where I developed CNN models for marine image analysis.",
    image: "/images/ku.png",
  },
  {
    title: "Exchange program",
    institution: "Hong Kong University of Science and Technology",
    period: "2024",
    year: "2024",
    position: 1,
    GPA: "3.425/4",
    description: "Learning design methodologies and entrepreneurship. I explored innovative technologies including soft robotics and digital construction, while also studying the startup ecosystem in Asia. This experience culminated in a corporate consulting project for Meta and Viu International on digital transformation.",
    image: "/images/hkust.png",
  },
  {
    title: "BSc in Computer Science",
    institution: "University of Copenhagen",
    period: "2020 - 2023",
    year: "2020-2023",
    position: 2,
    GPA: "3.19/4",
    description: "Built a solid foundation in programming, algorithms, and system design. My studies covered diverse areas from interaction design to mathematical analysis, culminating in a bachelor's thesis on whale location tracking using Ripley's K-function.",
    image: "/images/ku.png",
  },
  {
    title: "BSc in Business, Asian Language and Culture",
    institution: "Copenhagen Business School",
    period: "2018",
    year: "2018",
    position: 3,
    GPA: "3.59/4",
    description: "Developed cross-cultural business understanding, bridging Denmark and China. This interdisciplinary program combined business fundamentals with deep cultural insights into Asian markets and international relations, providing a unique foundation for my later technical studies.",
    image: "/images/cbs.png",
  },
];

const Education = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const navigate = useNavigate();

  return (
    <section id="education" ref={ref} className="experience">
      <div className="container">
        <motion.div
          className="experience-content"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-12 text-cyan-400 text-center">
            Education
          </h2>

          <div className="horizontal-timeline">
            {/* Timeline header - same as Experience */}
            <div className="timeline-header">
              {education.map((edu, index) => (
                <div key={`year-${index}`} className="year-marker">
                  <span className="year-text">{edu.year}</span>
                </div>
              ))}
            </div>

            {/* Timeline line - same as Experience */}
            <div className="timeline-line"></div>

            {/* Education cards - same structure as Experience */}
            <div className="timeline-cards">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="timeline-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="mobile-year-marker">
                    <span className="year-text">{edu.year}</span>
                  </div>
                  <div className="card-content">
                    {edu.image && (
                      <img
                        src={
                          edu.image.startsWith("/")
                            ? edu.image
                            : `/assets/${edu.image}`
                        }
                        alt={edu.title}
                        className="experience-image mb-3 rounded shadow"
                        style={{
                          height: "100px",
                          width: "100%",
                          objectFit: "cover",
                        }}
                      />
                    )}
                    <div className="card-header">
                      <h3>{edu.title}</h3>
                      <span className="company">{edu.institution}</span>
                      <span className="period">{edu.period}</span>
                    </div>

                    <p className="mb-3 text-sm text-light-blue-gray leading-relaxed">
                      {edu.description}
                    </p>

                    {edu.GPA && (
                      <p className="mb-2">
                        <strong>GPA:</strong> {edu.GPA}
                      </p>
                    )}


                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <WaveDivider type="B" />
    </section>
  );
};

export default Education;