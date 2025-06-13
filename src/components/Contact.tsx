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
                  <a href="mailto:youran.tao.jensen@example.com">
                    youran.tao.jensen@example.com
                  </a>
                </p>
                <p>
                  <strong>Phone:</strong>
                  <a href="tel:+4512345678">+45 12 34 56 78</a>
                </p>
                <p>
                  <strong>Location:</strong>
                  <span>Copenhagen, Denmark</span>
                </p>
              </div>
            </motion.div>

            <motion.div className="info-item" variants={itemVariants}>
              <h3>Connect</h3>
              <div className="social-links">
                <a
                  href="https://linkedin.com/in/youran-tao-jensen"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/youran-tao-jensen"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://twitter.com/youran-tao-jensen"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="references"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3>References</h3>
            <div className="references-grid">
              {references.map((reference, index) => (
                <motion.div
                  key={index}
                  className="reference-card"
                  variants={itemVariants}
                >
                  <h4>{reference.name}</h4>
                  <p className="position">{reference.position}</p>
                  <p className="company">{reference.company}</p>
                  <p className="relationship">{reference.relationship}</p>
                  <div className="contact-details">
                    <a href={`mailto:${reference.email}`}>{reference.email}</a>
                    <a href={`tel:${reference.phone}`}>{reference.phone}</a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
