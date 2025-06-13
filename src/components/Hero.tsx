import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero: React.FC = () => {
  const arrowRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const waveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (arrowRef.current) {
        const opacity = Math.max(0, 1 - scrollY / 300);
        arrowRef.current.style.opacity = opacity.toString();
      }

      if (backgroundRef.current) {
        const parallaxSpeed = 0.5;
        backgroundRef.current.style.transform = `translateY(${
          scrollY * parallaxSpeed
        }px) scale(1.1)`;
      }

      if (waveRef.current) {
        const waveOffset = scrollY * 0.2;
        waveRef.current.style.transform = `translateY(${waveOffset}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero">
      <div ref={backgroundRef} className="hero-background">
        <video autoPlay muted loop playsInline className="hero-video">
          <source src="/videos/sea-waves.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="hero-overlay"></div>

        <div ref={waveRef} className="hero-waves"></div>

        <div className="hero-caustics">
          <div className="caustics-enhanced"></div>
        </div>

        <div className="hero-particles">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${4 + Math.random() * 3}s`,
              }}
            >
              <div
                className="particle-dot"
                style={{
                  width: `${4 + Math.random() * 8}px`,
                  height: `${4 + Math.random() * 8}px`,
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-content">
        <div className="content-background">
          <div className="wave-pattern"></div>
          <div className="content-overlay"></div>
        </div>

        <motion.div
          className="content-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="welcome-badge">
            <div className="badge-content">Welcome to the depths</div>
          </div>

          <h1 className="hero-title">
            <span className="title-gradient">Youran Tao Jensen</span>
          </h1>

          <h2 className="hero-subtitle">MSc Computer Science Student</h2>

          <div className="divider">
            <div className="divider-line"></div>
            <div className="divider-dot"></div>
            <div className="divider-line"></div>
          </div>
        </motion.div>
      </div>

      <div
        ref={arrowRef}
        onClick={scrollToNextSection}
        className="scroll-arrow"
      >
        <div className="arrow-container">
          <div className="arrow-pulse"></div>
          <div className="arrow-button">
            <ChevronDown size={32} className="arrow-icon" />
          </div>
        </div>
        <span className="arrow-text">Dive Deeper</span>
      </div>

      <div className="bottom-wave"></div>
    </section>
  );
};

export default Hero;
