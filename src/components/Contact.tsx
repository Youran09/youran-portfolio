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
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h2>

        <div className="contact-grid" ref={ref}>
          <motion.div
            className="contact-info"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div className="info-item" variants={itemVariants}>
              <h3>Contact Information</h3>
              <div className="info-content">
                <p>
                  <strong>Email:</strong>
                  <a href="mailto:youran0909@hotmail.com">
                    youran0909@hotmail.com
                  </a>
                </p>
                <p>
                  <strong>Phone:</strong>
                  <a href="tel:+4512345678">+45 53 80 52 09</a>
                </p>
                <p>
                  <strong>Location:</strong>
                  <span>Copenhagen, Denmark</span>
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Connect box as a visually distinct card below Contact Information */}
          <div className="connect-box bg-[#0a192f]/60 p-6 rounded-xl border border-cyan-400/10 mt-6">
            <h3>Connect</h3>
            <div className="flex flex-col gap-4 text-lg">
              <p>
                <a
                  href="https://www.linkedin.com/in/youran-tao-jensen-9aa86ba6/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 font-bold underline"
                >
                  LinkedIn
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/Youran09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 font-bold underline"
                >
                  GitHub
                </a>
              </p>
              <p>
                <a
                  href="https://www.youtube.com/@youranjensen37"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 font-bold underline"
                >
                  YouTube
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
