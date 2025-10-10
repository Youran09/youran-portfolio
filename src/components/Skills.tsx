import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

interface Skill {
  name: string;
  icon: string;
  level: number;
  category:
    | "frontend"
    | "backend"
    | "tools"
    | "languages"
    | "ml"
    | "ux"
    | "research"
    | "spoken";
}

const skills: Skill[] = [
  // Programming Languages
  { name: "JavaScript/TypeScript", icon: "📜", level: 90, category: "languages" },
  { name: "Python", icon: "🐍", level: 85, category: "languages" },
  { name: "React", icon: "⚛️", level: 85, category: "languages" },
  { name: "HTML/CSS", icon: "🌐", level: 90, category: "languages" },

  // Spoken Languages
  {
    name: "Mandarin Chinese – Native fluency",
    icon: "🇨🇳",
    level: 100,
    category: "spoken",
  },
  {
    name: "English – Fluent",
    icon: "🇬🇧",
    level: 90,
    category: "spoken",
  },
  {
    name: "Danish – Fluent",
    icon: "🇩🇰",
    level: 85,
    category: "spoken",
  },

  // Web Development & Frontend
  {
    name: "Full-Stack Development",
    icon: "🌐",
    level: 85,
    category: "frontend",
  },
  {
    name: "SEO Optimization",
    icon: "🔍",
    level: 80,
    category: "frontend",
  },
  {
    name: "Web Design",
    icon: "🎨",
    level: 85,
    category: "frontend",
  },

  // AI & Machine Learning
  {
    name: "Large Language Models (LLM)",
    icon: "🤖",
    level: 80,
    category: "ml",
  },
  {
    name: "Deep Learning (CNN/Transformer)",
    icon: "🧠",
    level: 75,
    category: "ml",
  },
  { name: "Computer Vision", icon: "👁️", level: 75, category: "ml" },
  { name: "TensorFlow", icon: "🔥", level: 75, category: "ml" },
  { name: "RAG (Retrieval-Augmented Generation)", icon: "📚", level: 75, category: "ml" },

  // Tools & Technologies
  { name: "Figma", icon: "🎨", level: 80, category: "tools" },
  { name: "SQL Database", icon: "🗄️", level: 75, category: "tools" },
  { name: "Power BI", icon: "📊", level: 70, category: "tools" },
  { name: "AI/API Integration", icon: "🔌", level: 80, category: "tools" },
  { name: "Git & Version Control", icon: "📝", level: 85, category: "tools" },

  // UX & Design
  {
    name: "UI/UX Design",
    icon: "🎨",
    level: 85,
    category: "ux",
  },
  {
    name: "User Research & Prototyping",
    icon: "🔍",
    level: 75,
    category: "ux",
  },
  {
    name: "Design Thinking",
    icon: "💡",
    level: 80,
    category: "ux",
  },
  {
    name: "CSCW & Collaboration Design",
    icon: "👥",
    level: 75,
    category: "ux",
  },

  // Business & Strategy
  {
    name: "Product Development",
    icon: "🚀",
    level: 80,
    category: "backend",
  },
  {
    name: "Innovation Management",
    icon: "💡",
    level: 80,
    category: "backend",
  },
  {
    name: "Business Strategy",
    icon: "📈",
    level: 75,
    category: "backend",
  },
  {
    name: "Cross-border Collaboration",
    icon: "🌏",
    level: 85,
    category: "backend",
  },

  // Research & Analysis
  {
    name: "Data Analysis",
    icon: "📊",
    level: 80,
    category: "research",
  },
  {
    name: "Market Research",
    icon: "🔍",
    level: 75,
    category: "research",
  },
  {
    name: "Requirements Gathering",
    icon: "📋",
    level: 80,
    category: "research",
  },
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
    languages: "Programming Languages",
    spoken: "Spoken Languages",
    frontend: "Web Development",
    ml: "AI & Machine Learning",
    tools: "Tools & Technologies",
    ux: "UX & Design",
    backend: "Business & Strategy",
    research: "Research & Analysis",
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
