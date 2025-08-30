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
            <div className="space-y-4 text-gray-100 text-lg">
              <p>
                My name is Youran, based in Copenhagen, with a BSc in
                International Relations in Asia from CBS, and both a Bsc and an
                MSc in Computer Science from KU, I bridge business and
                engineering through a multicultural lens. I thrive in
                international, multilingual environments—fluent in Danish,
                English, and Chinese.
              </p>
              <p>
                My career has taken me from founding and managing service
                startups to hands-on execution in trade, customs, and
                cross-border operations. I've built SQL-based support software
                and Power BI reports that inform executive decision-making, and
                I've UX/UI-designed chatbots and AI-driven automation tools to
                streamline workflows and elevate user experiences. I have
                conducted research into dyslexia education support, coral image
                segmentation, and whale-location tracking.
              </p>
              <p>
                I think holistically and make forward-looking decisions based on
                global trends and technological developments. As an INFP, I
                bring creativity, strong perceptive insight, and analytical
                rigor—flourishing in roles that value innovation over rigid
                routines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
