import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const PersonalPassion: React.FC = () => {
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
    <section className="personal-passion" id="passion">
      <div className="parallax-bg" />
      <div className="passion-content">
        <motion.div
          className="quote-container"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.blockquote variants={itemVariants}>
            "The sea, once it casts its spell, holds one in its net of wonder
            forever."
          </motion.blockquote>
          <motion.cite variants={itemVariants}>- Jacques Cousteau</motion.cite>
        </motion.div>

        <motion.div
          className="gallery"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="gallery-item" variants={itemVariants}>
            <img
              src="/images/diving-1.jpg"
              alt="Scuba diving in the Great Barrier Reef"
            />
            <div className="caption">
              <h3>Great Barrier Reef</h3>
              <p>Exploring the world's largest coral reef system</p>
            </div>
          </motion.div>

          <motion.div className="gallery-item" variants={itemVariants}>
            <img src="/images/diving-2.jpg" alt="Night diving in Thailand" />
            <div className="caption">
              <h3>Night Diving</h3>
              <p>Discovering the nocturnal marine life in Thailand</p>
            </div>
          </motion.div>

          <motion.div className="gallery-item" variants={itemVariants}>
            <img src="/images/diving-3.jpg" alt="Deep sea exploration" />
            <div className="caption">
              <h3>Deep Sea</h3>
              <p>Venturing into the mysterious depths</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="passion-text"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 variants={itemVariants}>
            My Passion for the Ocean
          </motion.h2>
          <motion.p variants={itemVariants}>
            As a certified scuba diver, I've had the privilege of exploring some
            of the world's most beautiful underwater landscapes. The ocean has
            taught me valuable lessons about patience, respect for nature, and
            the importance of conservation. These experiences have deeply
            influenced my approach to technology and problem-solving.
          </motion.p>
          <motion.p variants={itemVariants}>
            Just as the ocean's depths hold countless mysteries waiting to be
            discovered, I believe in diving deep into complex problems,
            exploring every angle, and finding innovative solutions that make a
            positive impact.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default PersonalPassion;
