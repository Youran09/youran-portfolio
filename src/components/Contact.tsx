import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

interface Reference {
  name: string;
  position: string;
  company: string;
  email: string;
  phone: string;
  relationship: string;
}

const references: Reference[] = [
  {
    name: "John Smith",
    position: "Senior Software Engineer",
    company: "Tech Solutions Inc.",
    email: "john.smith@techsolutions.com",
    phone: "+45 12 34 56 78",
    relationship: "Former Team Lead",
  },
  {
    name: "Sarah Johnson",
    position: "Project Manager",
    company: "Digital Innovations",
    email: "sarah.j@digitalinnovations.com",
    phone: "+45 98 76 54 32",
    relationship: "Project Collaborator",
  },
  {
    name: "Michael Chen",
    position: "CTO",
    company: "Startup Vision",
    email: "michael.chen@startupvision.com",
    phone: "+45 87 65 43 21",
    relationship: "Mentor",
  },
];

const Contact: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <motion.h2
          className="text-3xl font-bold text-center text-cyan-300 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h2>

        <div className="max-w-6xl mx-auto" ref={ref}>
          <motion.div
            className="flex flex-wrap justify-center gap-8"
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
              alignItems: "flex-start",
              gap: "2rem"
            }}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Email Card */}
            <motion.a
              href="mailto:youran0909@hotmail.com"
              className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-cyan-400/40 hover:scale-105 text-center group cursor-pointer w-40 h-32 flex flex-col items-center justify-center"
              variants={itemVariants}
            >
              <h3 className="text-cyan-200 font-medium text-sm flex items-center gap-3">
                <span>✉️</span>
                <span>Email</span>
              </h3>
            </motion.a>

            {/* Phone Card */}
            <motion.a
              href="tel:+4553805209"
              className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-cyan-400/40 hover:scale-105 text-center group cursor-pointer w-40 h-32 flex flex-col items-center justify-center"
              variants={itemVariants}
            >
              <h3 className="text-cyan-200 font-medium text-sm flex items-center gap-3">
                <span>📱</span>
                <span>Phone</span>
              </h3>
            </motion.a>

            {/* Location Card */}
            <motion.div
              className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20 shadow-lg text-center w-40 h-32 flex flex-col items-center justify-center"
              variants={itemVariants}
            >
              <h3 className="text-cyan-200 font-medium text-sm flex items-center gap-3">
                <span>📍</span>
                <span>Copenhagen</span>
              </h3>
            </motion.div>

            {/* LinkedIn Card */}
            <motion.a
              href="https://www.linkedin.com/in/youran-tao-jensen-9aa86ba6/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-blue-400/40 hover:scale-105 text-center group cursor-pointer w-40 h-32 flex flex-col items-center justify-center"
              variants={itemVariants}
            >
              <h3 className="text-cyan-200 font-medium text-sm flex items-center gap-3">
                <span>💼</span>
                <span>LinkedIn</span>
              </h3>
            </motion.a>

            {/* GitHub Card */}
            <motion.a
              href="https://github.com/Youran09"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-gray-400/40 hover:scale-105 text-center group cursor-pointer w-40 h-32 flex flex-col items-center justify-center"
              variants={itemVariants}
            >
              <h3 className="text-cyan-200 font-medium text-sm flex items-center gap-3">
                <span>💻</span>
                <span>GitHub</span>
              </h3>
            </motion.a>

            {/* YouTube Card */}
            <motion.a
              href="https://www.youtube.com/@youranjensen37"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-red-400/40 hover:scale-105 text-center group cursor-pointer w-40 h-32 flex flex-col items-center justify-center"
              variants={itemVariants}
            >
              <h3 className="text-cyan-200 font-medium text-sm flex items-center gap-3">
                <span>🎥</span>
                <span>YouTube</span>
              </h3>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
