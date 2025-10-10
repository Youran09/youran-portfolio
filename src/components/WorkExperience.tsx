import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import WaveDivider from "./WaveDivider";

interface TimelineItem {
  title: string;
  institution: string;
  period: string;
  description: string;
  skills?: string[];
  image?: string;
}

const experience: (TimelineItem & { year: number; position: number })[] = [
  {
    title: "Student worker in IT",
    institution: "SOS International",
    period: "2023 - 2024",
    year: "2023-2024",
    position: 0,
    description:
      "Experience in AI automation with VBA coding, helping companies automate daily tasks and optimize workflows. Developed Power BI reports to enhance data visualisation and decision making. Conducted interviews and UX/UI testing to improve customer experience and product usability.",
    skills: ["AI automation", "VBA", "Power BI", "UX/UI testing"],
    image: "/images/sos.png",
  },
  {
    title: "Student worker in Business Strategy",
    institution: "RGS Nordic",
    period: "2021 - 2023",
    year: "2021-2023",
    position: 30,
    description:
      "Experience in building application for SQL database. Developed Power BI report to help with C-level decision making. Setup bots and web pages for the company.",
    skills: ["SQL", "Power BI", "UiPath", "Web development"],
    image: "/images/rgs.png",
  },
  {
    title: "Internship in International and Border Trade",
    institution:
      "Guangxi Jingxi Full Rich Investment Co., Ltd.\n(中国广西省靖西市龙邦口岸)",
    period: "2019",
    year: "2019",
    position: 70,
    description:
      "Interned as Chairman Assistant in international and border trade at Longbang port on the China-Vietnam border. Exposed to both executive-level decision making and operational-level execution.",
    skills: ["Negotiation", "International Trade", "Border Trade"],
    image: "/images/longbang.jpg",
  },
];

const WorkExperience = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="work-experience" ref={ref} className="experience">
      <div className="container">
        <motion.div
          className="experience-content"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-12 text-cyan-400 text-center">
            Experience
          </h2>

          <div className="horizontal-timeline">
            {/* Timeline header */}
            <div className="timeline-header">
              {experience.map((exp, index) => (
                <div key={`year-${index}`} className="year-marker">
                  <span className="year-text">{exp.year}</span>
                </div>
              ))}
            </div>

            {/* Timeline line */}
            <div className="timeline-line"></div>

            {/* Experience cards */}
            <div className="timeline-cards">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  className="timeline-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="card-content">
                    {exp.image && (
                      <img
                        src={
                          exp.image.startsWith("/")
                            ? exp.image
                            : `/assets/${exp.image}`
                        }
                        alt={exp.title}
                        className="experience-image mb-3 rounded shadow"
                        style={{
                          height: "100px",
                          width: "100%",
                          objectFit: "cover",
                        }}
                      />
                    )}
                    <div className="card-header">
                      <h3>{exp.title}</h3>
                      {exp.institution && (
                        <span className="company">{exp.institution}</span>
                      )}
                      <span className="period">{exp.period}</span>
                    </div>
                    <p>{exp.description}</p>
                    {exp.skills && exp.skills.length > 0 && (
                      <div className="skills-box mt-3 flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="skill-tag bg-cyan-900/60 text-cyan-200 px-2 py-1 rounded-full text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <WaveDivider type="A" />
    </section>
  );
};

export default WorkExperience;