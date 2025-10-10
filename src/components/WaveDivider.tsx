import React from "react";

interface WaveDividerProps {
  type?: "A" | "B" | "C";
  className?: string;
}

const WaveDivider: React.FC<WaveDividerProps> = ({ type = "A", className = "" }) => {
  // Type A: Experience → Education - Gentle rolling waves
  const wavePathA = "M0,80L48,70C96,60,192,40,288,50C384,60,480,90,576,80C672,70,768,40,864,50C960,60,1056,90,1152,80C1248,70,1344,40,1392,50L1440,60L1440,320L0,320Z";

  // Type B: Education → Projects - More dynamic waves
  const wavePathB = "M0,100L48,85C96,70,192,40,288,55C384,70,480,110,576,95C672,80,768,40,864,60C960,80,1056,120,1152,100C1248,80,1344,40,1392,60L1440,80L1440,320L0,320Z";

  // Type C: Projects bottom - Subtle surface waves
  const wavePathC = "M0,120L48,110C96,100,192,80,288,90C384,100,480,130,576,120C672,110,768,80,864,95C960,110,1056,140,1152,125C1248,110,1344,80,1392,90L1440,100L1440,320L0,320Z";

  const paths = {
    A: wavePathA,
    B: wavePathB,
    C: wavePathC
  };

  const animationClasses = {
    A: "wave-divider-a",
    B: "wave-divider-b",
    C: "wave-divider-c"
  };

  return (
    <div className={`wave-divider ${animationClasses[type]} ${className}`}>
      <svg
        className="wave-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={`waveGradient${type}`} x1="0%" y1="0%" x2="0%" y2="100%">
            {type === "A" && (
              <>
                <stop offset="0%" stopColor="rgba(21, 94, 117, 0.9)" />
                <stop offset="50%" stopColor="rgba(21, 94, 117, 0.7)" />
                <stop offset="100%" stopColor="rgba(21, 94, 117, 0.5)" />
              </>
            )}
            {type === "B" && (
              <>
                <stop offset="0%" stopColor="rgba(21, 94, 117, 0.8)" />
                <stop offset="50%" stopColor="rgba(21, 94, 117, 0.6)" />
                <stop offset="100%" stopColor="rgba(21, 94, 117, 0.4)" />
              </>
            )}
            {type === "C" && (
              <>
                <stop offset="0%" stopColor="rgba(21, 94, 117, 0.6)" />
                <stop offset="50%" stopColor="rgba(21, 94, 117, 0.4)" />
                <stop offset="100%" stopColor="rgba(21, 94, 117, 0.2)" />
              </>
            )}
          </linearGradient>
        </defs>
        <path
          d={paths[type]}
          fill={`url(#waveGradient${type})`}
          className="wave-path"
        />
      </svg>

      {/* Additional animated wave layers */}
      <svg
        className="wave-svg wave-layer-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          d={paths[type]}
          fill="rgba(21, 94, 117, 0.3)"
          className="wave-path-secondary"
        />
      </svg>

      <svg
        className="wave-svg wave-layer-3"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          d={paths[type]}
          fill="rgba(21, 94, 117, 0.25)"
          className="wave-path-tertiary"
        />
      </svg>

      {/* Additional layers for depth */}
      <svg
        className="wave-svg wave-layer-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          d={paths[type]}
          fill="rgba(21, 94, 117, 0.15)"
          className="wave-path-quaternary"
        />
      </svg>

      <svg
        className="wave-svg wave-layer-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          d={paths[type]}
          fill="rgba(21, 94, 117, 0.08)"
          className="wave-path-quinary"
        />
      </svg>

      <svg
        className="wave-svg wave-layer-6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          d={paths[type]}
          fill="rgba(21, 94, 117, 0.04)"
          className="wave-path-senary"
        />
      </svg>
    </div>
  );
};

export default WaveDivider;