import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface TimelineItem {
  title: string;
  institution: string;
  period: string;
  description: string;
  skills?: string[];
  image?: string;
}

const experience: TimelineItem[] = [
  {
    title: "Student worker in IT",
    institution: "SOS International",
    period: "2023 - 2024",
    description:
      "Experience in AI automation with VBA coding, helping companies automate daily tasks and optimize workflows. Developed Power BI reports to enhance data visualisation and decision making. Conducted interviews and UX/UI testing to improve customer experience and product usability.",
    skills: ["AI automation", "VBA", "Power BI", "UX/UI testing"],
    image: "/images/sos.png",
  },
  {
    title: "Student worker in Business Strategy",
    institution: "RGS Nordic",
    period: "2021 - 2023",
    description:
      "Experience in building application for SQL database. Developed Power BI report to help with companies decision making. Setup bots and web pages for the company.",
    skills: ["SQL", "Power BI", "Bots", "Web development"],
    image: "/images/rgs.png",
  },
  {
    title: "Internship in International and Border Trade",
    institution:
      "Guangxi Jingxi Full Rich Investment Co., Ltd. (中国广西省靖西市龙邦口岸)",
    period: "2019",
    description:
      "Interned in international and border trade at Longbang port on the China-Vietnam border, handling daily negotiations with businessman, bankers, tax office, and border control.",
    skills: ["Negotiation", "International Trade", "Border Trade"],
    image: "/images/longbang.jpg",
  },
  {
    title: "Startup Founder (Self employed)",
    institution: "",
    period: "2015 - 2019",
    description:
      "Failed as startup, but learned about problem-solving, learning everything on fast speed, and adapting to unexpected challenges on daily basis, also the importance of being a life long learner.",
    skills: ["Problem-solving", "Adaptability", "Entrepreneurship"],
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
          <h2 className="text-2xl font-bold mb-6 text-cyan-400 text-center md:text-left">
            Experience
          </h2>
          <div className="timeline timeline-right">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: 50 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
                }
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="timeline-content">
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
                        maxHeight: "180px",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  )}
                  <div className="timeline-header">
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
                          className="skill-tag bg-cyan-900/60 text-cyan-200 px-3 py-1 rounded-full text-xs font-medium"
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
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExperience;
