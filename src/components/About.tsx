"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "../lib/utils";

export default function AboutMe() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="about">
      <div className="container">
        <h2>First Dive</h2>

        <div ref={ref} className="about-grid">
          {/* Photo section */}
          <div
            className={cn(
              "about-image",
              "transform transition-all duration-1000",
              inView ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
            )}
          >
            <img
              src="/images/profile.png"
              alt="Youran Tao Jensen - Professional portrait"
            />
          </div>

          {/* Text section */}
          <div
            className={cn(
              "about-text",
              "transform transition-all duration-1000 delay-300",
              inView ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
            )}
          >
            <p>
              <strong>Software developer</strong> with a unique
              interdisciplinary background—studied International Relations in Asia at CBS before
              completing BSc and MSc in Computer Science at University of Copenhagen, with exchange
              studies at Hong Kong University of Science and Technology (HKUST). I specialize in
              bridging business mindset and technical implementation across multicultural contexts,
              operating fluently in Danish, English, and Chinese.
            </p>
            <p>
              With experience spanning <strong>entrepreneurship</strong> to <strong>innovative solutions</strong>,
              I've founded and scaled service startups, while gaining practical experience in
              cross-border trade facilitation and customs operations. My technical portfolio includes
              developing SQL-based business intelligence systems, Power BI dashboards for C-level
              decision support, and AI-powered automation tools with UX/UI design in Figma that
              optimize organizational workflows.
            </p>
            <p>
              My research contributions span <strong>dyslexia</strong> strength discovery and personalized support, <strong>computer vision</strong> applications in marine conservation (coral reef segmentation), and <strong>spatial statistics</strong> using Ripley's K-function for whale location tracking—demonstrating my passion for developing innovative solutions with technology.
            </p>
            <p>
              I thrive at the intersection of creativity and technology, building practical solutions
              that address real-world challenges. My multicultural background and entrepreneurial
              mindset drive me to explore unconventional approaches and create meaningful impact
              through innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
