import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Developer",
    company: "Tech Company",
    period: "2022 - Present",
    description:
      "Leading development of enterprise applications using React, TypeScript, and Node.js. Implementing CI/CD pipelines and improving code quality.",
    technologies: ["React", "TypeScript", "Node.js", "AWS"],
  },
  {
    title: "Business Analyst",
    company: "Consulting Firm",
    period: "2020 - 2022",
    description:
      "Analyzed business processes and implemented technology solutions to improve efficiency. Worked closely with stakeholders to gather requirements.",
    technologies: ["SQL", "Python", "Tableau", "Agile"],
  },
  {
    title: "Project Manager",
    company: "Startup",
    period: "2018 - 2020",
    description:
      "Managed multiple projects from inception to completion. Coordinated between technical and business teams to ensure successful delivery.",
    technologies: ["JIRA", "Scrum", "Risk Management"],
  },
];

const Experience = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="experience" ref={ref} className="experience">
      <div className="container">
        <motion.div
          className="experience-content"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Experience</h2>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={
                  isInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
                }
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>{exp.title}</h3>
                    <span className="company">{exp.company}</span>
                    <span className="period">{exp.period}</span>
                  </div>
                  <p>{exp.description}</p>
                  <div className="technologies">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
