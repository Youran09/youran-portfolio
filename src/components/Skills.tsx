import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

interface Skill {
  name: string;
  icon: string;
  level: number;
  category: "frontend" | "backend" | "tools" | "languages";
}

const skills: Skill[] = [
  // Frontend
  { name: "React", icon: "⚛️", level: 90, category: "frontend" },
  { name: "TypeScript", icon: "📘", level: 85, category: "frontend" },
  { name: "HTML5", icon: "🌐", level: 95, category: "frontend" },
  { name: "CSS3/SCSS", icon: "🎨", level: 90, category: "frontend" },
  { name: "Next.js", icon: "⚡", level: 80, category: "frontend" },

  // Backend
  { name: "Node.js", icon: "🟢", level: 85, category: "backend" },
  { name: "Express", icon: "🚂", level: 80, category: "backend" },
  { name: "MongoDB", icon: "🍃", level: 75, category: "backend" },
  { name: "PostgreSQL", icon: "🐘", level: 70, category: "backend" },

  // Tools
  { name: "Git", icon: "📦", level: 85, category: "tools" },
  { name: "Docker", icon: "🐳", level: 70, category: "tools" },
  { name: "AWS", icon: "☁️", level: 65, category: "tools" },

  // Languages
  { name: "JavaScript", icon: "📜", level: 90, category: "languages" },
  { name: "Python", icon: "🐍", level: 80, category: "languages" },
  { name: "Java", icon: "☕", level: 75, category: "languages" },
];

const Skills: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const categories = {
    frontend: "Frontend Development",
    backend: "Backend Development",
    tools: "Tools & Platforms",
    languages: "Programming Languages",
  };

  return (
    <section className="skills" id="skills">
      <div className="skills-content">
        <h2>Skills & Expertise</h2>
        <div className="skills-grid" ref={ref}>
          {Object.entries(categories).map(([category, title]) => (
            <motion.div
              key={category}
              className="skill-category"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <h3>{title}</h3>
              <div className="skills-list">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="skill-item"
                      variants={itemVariants}
                    >
                      <div className="skill-icon">{skill.icon}</div>
                      <div className="skill-info">
                        <h4>{skill.name}</h4>
                        <div className="skill-level">
                          <div
                            className="skill-progress"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
