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
    <section id="about" className="relative overflow-hidden bg-slate-800 py-20">
      {/* Underwater ambiance */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-slate-900/40"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="mb-4 text-center text-3xl font-bold text-white md:text-4xl">
          First Dive
        </h2>

        <div ref={ref} className="flex flex-col items-center gap-8 md:flex-row">
          <div
            className={cn(
              "w-full md:w-1/3",
              "transform transition-all duration-1000",
              inView ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
            )}
          >
            <div className="relative overflow-hidden rounded-lg shadow-2xl border-2 border-cyan-400/30">
              <img
                src="/images/profile.png"
                alt="Youran Tao Jensen - Professional portrait"
                className="h-auto w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>
          </div>

          <div
            className={cn(
              "w-full space-y-6 md:w-2/3",
              "transform transition-all duration-1000 delay-300",
              inView ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
            )}
          >
            <div className="space-y-6 text-gray-100 text-lg leading-relaxed">
              <p>
                <span className="text-cyan-400 font-semibold">Copenhagen-based software developer</span> with a unique
                interdisciplinary background—studied International Relations in Asia at CBS before
                completing BSc and MSc in Computer Science at University of Copenhagen, with exchange
                studies at Hong Kong University of Science and Technology (HKUST). I specialize in
                bridging business strategy and technical implementation across multicultural contexts,
                operating fluently in Danish, English, and Chinese.
              </p>
              <p>
                With experience spanning <span className="text-cyan-300">entrepreneurship</span> to <span className="text-cyan-300">innovative solutions</span>,
                I've founded and scaled service startups while gaining practical experience in
                cross-border trade facilitation and customs operations. My technical portfolio includes
                developing SQL-based business intelligence systems, Power BI dashboards for C-level
                decision support, and AI-powered automation tools with UX/UI design in Figma that
                optimize organizational workflows.
              </p>
              <p>
                My research contributions span <span className="text-cyan-300">accessibility technology</span> for dyslexia education,
                <span className="text-cyan-300">computer vision</span> applications in marine conservation (coral reef segmentation),
                and <span className="text-cyan-300">spatial statistics</span> using Ripley's K-function for whale location tracking—demonstrating
                my passion for developing innovative solutions with technology.
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
      </div>
    </section>
  );
}
