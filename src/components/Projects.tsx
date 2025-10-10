import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface ProjectItem {
  title: string;
  description: string;
  type: string;
  period: string;
  year: string;
  technologies?: string[];
  slug: string;
  image?: string;
  link?: string;
}

const projects: ProjectItem[] = [
  {
    title: "Deloitte Case Challenge – Designing a World-Class Onboarding Experience",
    description: "Participated in CBS-Deloitte partnership program focusing on adaptability and problem-solving skills. Developed a dynamic onboarding framework for Deloitte Denmark through collaborative competition among 20 students, culminating in final presentation to expert panel of industry leaders.",
    type: "Case Challenge",
    period: "Oct - Nov 2025",
    year: "2025",
    technologies: ["MVP Development", "UX/UI Design", "Data-Driven Strategy", "Talent Development"],
    slug: "deloitte-case-challenge",
    image: "/images/deloitte0.png"
  },
  {
    title: "Open Innovation 2025: Climate & Water - Solar-Powered Water System for Dadaab Refugee Camp",
    description: "Designed solar-powered borehole system (Agri-PV) to replace diesel pumps at Dadaab refugee camp in Kenya. Solution reduces operational costs, environmental impact, and enhances water security through private investment and NGO partnerships.",
    type: "University Collaboration Project",
    period: "Sep 2025",
    year: "2025",
    technologies: ["Sustainable Design", "Renewable Energy Systems", "Cross-disciplinary Collaboration"],
    slug: "dadaqua-innovation",
    image: "/images/dadaab2.png",
    link: "https://dadaqua-innovation.vercel.app"
  },
  {
    title: "China-ASEAN AI Tourism Innovation Competition – ASEAN Special Award",
    description: "Served as tech lead for AI-driven smart tourism project, achieving 1st place among 33 projects in the ASEAN regional final. Developed MVP with innovative AI applications in cultural tourism and received the ASEAN Special Award, enhancing cross-border collaboration skills.",
    type: "Innovation Competition",
    period: "Jul - Sep 2025",
    year: "2025",
    technologies: ["Artificial Intelligence (AI)", "Innovation Management", "Product Development", "Cross-border Collaboration"],
    slug: "china-asean-ai-tourism",
    image: "/images/ASEAN.png",
    link: "https://travel-ai-demo.netlify.app"
  },
  {
    title: "Cresento - AI-Powered Smart Shin Guards for Football Analytics",
    description: "Led full-stack website development and digital marketing for sports technology startup. Designed comprehensive platform with SEO optimization, content creation, and investor-focused presentation to showcase their innovative AI-powered smart shin guards technology.",
    type: "Web Development & Marketing",
    period: "Jul - Sep 2025",
    year: "2025",
    technologies: ["Web Development", "UI/UX Design", "SEO Optimization", "Startup Showcase"],
    slug: "cresento",
    image: "/images/cresento.png",
    link: "https://cresento.com"
  },
  {
    title: "Coral Image Segmentation Using Deep Learning",
    description: "Developing deep learning models for automated coral reef image segmentation. Implemented CNN and Transformer architectures, proposing a lightweight hybrid model for efficient underwater imagery analysis to support marine conservation.",
    type: "Master's Thesis",
    period: "Jan - Jun 2025",
    year: "2025",
    technologies: ["Python", "TensorFlow", "CNN/Transformer", "Computer Vision", "Data Annotation"],
    slug: "coral-image-segmentation",
    image: "/images/graduation.JPG"
  },
  {
    title: "T&M Corporate Consulting Project: Meta LLM for Digital Transformation of Viu International",
    description: "Partnered with Meta to reimagine how Viu engages millions of viewers across Asia. Designed and built AI-powered marketing tools that deliver personalized notifications at scale.",
    type: "Consulting Project",
    period: "Sep - Dec 2024",
    year: "2024",
    technologies: ["LLM", "RAG", "Figma", "Full-Stack Development", "Digital Transformation", "Business Strategy"],
    slug: "temg-consulting",
    image: "/images/meta1.png"
  },
  {
    title: "Critical Making: Knowledge Tree for Dyslexia with AI Support",
    description: "Developed the Knowledge Tree artifact using critical making methodologies to foster discussions about dyslexia challenges and AI opportunities. Combined laser-cut wood with ChatGPT interface, facilitating reflective conversations on technological support and neurodiversity.",
    type: "Academic Project",
    period: "Feb - Jun 2024",
    year: "2024",
    technologies: ["Design Thinking", "Laser Cutting", "ChatGPT Integration", "AI for Education"],
    slug: "critical-making",
    image: "/images/cm1.jpg"
  },
  {
    title: "Designing Collaborative Technologies",
    description: "Collaborative CSCW (Computer-Supported Cooperative Work) project with University of Copenhagen and University of Maryland, Baltimore County (UMBC). Explored hybrid collaboration challenges when teams are split between rooms and screens, uncovering turn-taking friction and how physical artifacts improve cooperation.",
    type: "Academic Project",
    period: "Feb - Apr 2024",
    year: "2024",
    technologies: ["CSCW Research", "Ethnographic Methods", "Collaboration Design", "UX/UI Design"],
    slug: "designing-collaborative-technologies",
    image: "/images/dct3.png"
  },
  {
    title: "Whales Location Tracking – Analyzing Spatial Distributions Using Ripley-K Function",
    description: "Implementing the Ripley-K function for spatial analysis across 2D, spherical, and mesh surfaces. Applied to whale sighting data, revealing significant clustering patterns in marine habitats.",
    type: "Bachelor's Thesis",
    period: "Jan - Jun 2023",
    year: "2023",
    technologies: ["Python", "Spatial Statistics", "Data Analysis", "Marine Biology"],
    slug: "whales-location-tracking",
    image: "/images/graduatebsc.png"
  },
  {
    title: "1st-Year Project on Globalization and International Business",
    description: "First-year research project exploring globalization impacts on international business practices and cross-cultural management strategies.",
    type: "Academic Project",
    period: "2018",
    year: "2018",
    technologies: ["Business Research", "International Relations", "Market Analysis"],
    slug: "globalization-international-business",
    image: "/images/cbs.png"
  }
];

const Projects = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const navigate = useNavigate();

  return (
    <section id="projects" ref={ref} className="experience">
      <div className="container">
        <motion.div
          className="experience-content"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-12 text-cyan-400 text-center">
            Projects
          </h2>

          <div className="projects-container">
            <div className="timeline-cards">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="timeline-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div
                    className={`card-content transition-transform ${project.slug !== "globalization-international-business" ? "cursor-pointer hover:scale-105" : ""}`}
                    onClick={project.slug !== "globalization-international-business" ? () => navigate(`/project/${project.slug}`) : undefined}
                  >
                    {project.image && (
                      <img
                        src={
                          project.image.startsWith("/")
                            ? project.image
                            : `/assets/${project.image}`
                        }
                        alt={project.title}
                        className="experience-image mb-3 rounded shadow"
                        style={{
                          height: "120px",
                          width: "100%",
                          objectFit: "cover",
                        }}
                      />
                    )}
                    <div className="card-header">
                      <h3>{project.title}</h3>
                      <span className="company">{project.type}</span>
                      <span className="period">{project.period}</span>
                    </div>

                    <p className="mb-3">{project.description}</p>

                    {project.technologies && project.technologies.length > 0 && (
                      <div className="technologies mt-3">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="tech-tag"
                          >
                            {tech}
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
    </section>
  );
};

export default Projects;