"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "../lib/utils";

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-blue-900/20 to-slate-900/40 py-20"
    >
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="caustics-animation absolute inset-0" />
        <div className="deep-water-pattern absolute inset-0" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Title Area */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            First Dive
          </h2>
          <p className="text-cyan-200 text-lg">Getting to know the depths</p>
        </div>

        {/* Main Content */}
        <div
          ref={ref}
          className="flex flex-col md:flex-row md:items-start gap-12"
        >
          {/* Left Column - Image */}
          <div
            className={cn(
              "mx-auto md:mx-0 md:w-1/3 flex-shrink-0",
              "transition-all duration-1000",
              inView ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
            )}
          >
            <div className="relative overflow-hidden rounded-lg shadow-2xl border-2 border-cyan-400/30 w-[50px] h-[50px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 to-transparent z-10" />
              <img
                src="/images/profile.png"
                alt="Youran Tao Jensen - Professional portrait"
                className="w-[50px] h-[50px] object-cover"
              />
            </div>
          </div>

          {/* Right Column - Text */}
          <div
            className={cn(
              "w-full md:w-2/3 flex flex-col justify-center",
              "transition-all duration-1000 delay-300",
              inView ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
            )}
          >
            <div className="space-y-4 text-gray-100">
              <p className="text-lg leading-relaxed">
                I have a dual background in{" "}
                <span className="text-cyan-300 font-semibold">business</span>{" "}
                (HHX & CBS) and{" "}
                <span className="text-cyan-300 font-semibold">
                  computer science
                </span>{" "}
                (KU Bachelor's and Master's degrees). I am fluent in Danish,
                English, and Chinese.
              </p>
              <p className="text-lg leading-relaxed">
                My professional experience spans service, trade, business
                strategy, and IT development. From entrepreneur and manager to
                executor, I am familiar with work at{" "}
                <span className="text-cyan-300 font-semibold">all levels</span>.
              </p>
              <p className="text-lg leading-relaxed">
                Recently, I completed an exchange program in{" "}
                <span className="text-cyan-300 font-semibold">Hong Kong</span>,
                where I participated in Meta's AI chatbot case competition as a
                UX/UI designer.
              </p>
            </div>

            {/* Language Badges */}
            <div className="flex flex-wrap gap-3 mt-6">
              {["Danish", "English", "Chinese"].map((lang) => (
                <span
                  key={lang}
                  className="px-3 py-1 bg-cyan-400/20 text-cyan-200 rounded-full text-sm border border-cyan-400/30"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-800 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-[url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1440 320\'%3E%3Cpath fill=\'%230ea5e9\' fill-opacity=\'0.2\' d=\'M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z\'%3E%3C/path%3E%3C/svg%3E')] bg-repeat-x bg-bottom"></div>
    </section>
  );
}
