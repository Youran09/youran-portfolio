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
    | "linear-algebra"
    | "analysis"
    | "probability"
    | "functional"
    | "testing"
    | "ml"
    | "programming"
    | "algorithms"
    | "datastructures"
    | "architecture"
    | "quality"
    | "data"
    | "systems"
    | "ux"
    | "hardware"
    | "communication"
    | "research"
    | "spoken"
    | "algods";
}

const skills: Skill[] = [
  // Programming Languages
  { name: "JavaScript", icon: "📜", level: 90, category: "languages" },
  { name: "Python", icon: "🐍", level: 80, category: "languages" },
  { name: "Java", icon: "☕", level: 75, category: "languages" },

  // Spoken Languages
  {
    name: "Mandarin Chinese – Native fluency",
    icon: "🇨🇳",
    level: 100,
    category: "spoken",
  },
  {
    name: "English – Upper-intermediate (B2)",
    icon: "🇬🇧",
    level: 80,
    category: "spoken",
  },
  {
    name: "Danish – Upper-intermediate (B2)",
    icon: "🇩🇰",
    level: 80,
    category: "spoken",
  },

  // Programming & Architecture
  {
    name: "Algorithmic Problem Solving",
    icon: "🧠",
    level: 85,
    category: "programming",
  },
  {
    name: "Object-Oriented Design & UML",
    icon: "📐",
    level: 80,
    category: "architecture",
  },
  {
    name: "Modular Code & Namespace Design",
    icon: "📦",
    level: 80,
    category: "architecture",
  },

  // Quality & Testing
  {
    name: "Unit Testing & Debugging",
    icon: "✔️",
    level: 80,
    category: "quality",
  },
  {
    name: "Code Reviews & Documentation",
    icon: "📝",
    level: 80,
    category: "quality",
  },

  // Data & Analytics
  {
    name: "Linear Regression & Least-Squares",
    icon: "📈",
    level: 80,
    category: "data",
  },
  {
    name: "Data Visualization & Plotting",
    icon: "📉",
    level: 80,
    category: "data",
  },

  // Machine Learning
  {
    name: "Supervised Learning (KNN & Regression)",
    icon: "🤖",
    level: 80,
    category: "ml",
  },
  {
    name: "Neural Networks & Deep Learning",
    icon: "🧠",
    level: 70,
    category: "ml",
  },
  { name: "Computer Vision", icon: "👁️", level: 70, category: "ml" },

  // Algorithms & Data Structures
  {
    name: "Asymptotic Complexity Analysis",
    icon: "⏱️",
    level: 80,
    category: "algods",
  },
  {
    name: "Graph Algorithms (BFS, DFS, MST)",
    icon: "🕸️",
    level: 80,
    category: "algods",
  },
  {
    name: "Efficient Data Structures (Heaps, Trees)",
    icon: "🌳",
    level: 75,
    category: "algods",
  },

  // Systems
  {
    name: "Performance Profiling & Optimization",
    icon: "⚡",
    level: 80,
    category: "systems",
  },
  {
    name: "Concurrency & Thread Safety",
    icon: "🔄",
    level: 80,
    category: "systems",
  },
  {
    name: "Memory Management & Virtual Memory",
    icon: "💾",
    level: 80,
    category: "systems",
  },

  // Tools & DevOps
  { name: "SQL Database", icon: "🗄️", level: 80, category: "tools" },
  { name: "Power BI", icon: "📊", level: 75, category: "tools" },
  { name: "Figma", icon: "🎨", level: 75, category: "tools" },
  { name: "AI/API Integration", icon: "🤖", level: 75, category: "tools" },

  // UX & Interaction
  {
    name: "Usability Evaluation & Testing",
    icon: "🧪",
    level: 80,
    category: "ux",
  },
  {
    name: "User Research & Prototyping",
    icon: "🔍",
    level: 75,
    category: "ux",
  },

  // Communication
  {
    name: "Technical Communication & Academic Writing",
    icon: "✍️",
    level: 80,
    category: "communication",
  },

  // Research
  {
    name: "Scientific Literature Analysis",
    icon: "🔍",
    level: 75,
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
    tools: "Tools & DevOps",
    languages: "Programming Languages",
    spoken: "Spoken Languages",
    algods: "Algorithms & Data Structures",
    architecture: "Software Architecture",
    quality: "Code Quality & Testing",
    ml: "Machine Learning",
    data: "Data Science & Analytics",
    systems: "Systems & DevOps",
    ux: "UX & Interaction",
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
