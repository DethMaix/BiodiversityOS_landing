import React from "react";

export default function CoexistenceSection() {
  const rules = [
    {
      title: "Safe Distance",
      desc: "Maintain at least 5m from any shark sightings for mutual safety.",
    },
    {
      title: "Constant Awareness",
      desc: "Always maintain visual contact with your surroundings when in high-activity zones.",
    },
    {
      title: "Respect Environment",
      desc: "No touching or feeding of marine life is allowed under any circumstances.",
    },
    {
      title: "Calm Movement",
      desc: "Avoid rapid movements or splashing at the surface to prevent triggering predatory instincts.",
    },
  ];

  return (
    <section
      id="coexistence"
      className="relative py-32 overflow-hidden bg-[#0a4d5c]"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="reveal-on-scroll">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="text-emerald-500 font-mono text-[10px] tracking-[0.5em] uppercase mb-4">
                Protocol: Alpha
              </p>
              <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                Safety Guidelines
              </h3>
            </div>
            <p className="text-emerald-50/30 text-sm max-w-xs font-light">
              Essential behavioral standards for maintaining ecological balance
              and personal safety in marine environments.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {rules.map((rule, i) => (
              <div
                key={rule.title}
                className="group p-8 border border-white/5 bg-white/[0.01] rounded-3xl reveal-on-scroll hover:bg-white/[0.03] transition-all duration-500 relative overflow-hidden"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-white/10 rounded-tr-3xl transition-colors group-hover:border-emerald-500/30" />

                <div className="text-emerald-500/30 font-mono text-xs mb-8 group-hover:text-emerald-400 transition-colors">
                  0{i + 1}
                </div>

                <h4 className="text-white font-bold text-lg mb-4 tracking-tight">
                  {rule.title}
                </h4>
                <p className="text-emerald-50/40 text-sm font-light leading-relaxed">
                  {rule.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
