import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-32 overflow-hidden bg-[#0a4d5c]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl reveal-on-scroll">
          <h2 className="text-4xl md:text-7xl font-bold text-white mb-12 tracking-tight leading-[1.05]">
            Community driven <br />
            <span className="text-emerald-400 font-serif italic italic text-5xl md:text-8xl">
              marine intelligence.
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-emerald-50/60 leading-relaxed font-light mb-24 max-w-2xl">
            BiodiversityOS is a collaborative platform for tracking shark
            activity. We provide the tools to visualize sightings, analyze
            behavior patterns, and share data to promote ocean safety and
            coexistence.
          </p>

          <div className="grid md:grid-cols-3 gap-12 border-t border-white/10 pt-16">
            <div>
              <h4 className="text-white font-bold text-lg mb-4 uppercase tracking-widest text-sm">
                Real-time Analysis
              </h4>
              <p className="text-emerald-50/40 text-sm leading-relaxed">
                Transforming raw sighting data into actionable spatial
                intelligence through community-led verification.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-4 uppercase tracking-widest text-sm">
                Scientific Integrity
              </h4>
              <p className="text-emerald-50/40 text-sm leading-relaxed">
                Adhering to rigorous data collection standards to ensure every
                report contributes to marine biology research.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-4 uppercase tracking-widest text-sm">
                Shared Responsibility
              </h4>
              <p className="text-emerald-50/40 text-sm leading-relaxed">
                Fostering a collaborative ecosystem where water users and
                researchers work together for ocean safety.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
