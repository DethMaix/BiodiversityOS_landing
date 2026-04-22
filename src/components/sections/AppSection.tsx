import React from "react";

export default function AppSection() {
  return (
    <section id="app" className="relative py-32 overflow-hidden bg-[#0a4d5c]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Decorative Sidebar (Technical feel) */}
          <div className="lg:col-span-4 relative hidden lg:flex flex-col justify-between p-12 border border-white/5 bg-white/[0.02] rounded-3xl overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.1)_0%,transparent_50%)]" />
              <div className="absolute top-0 left-8 w-px h-full bg-white/10" />
              <div className="absolute top-8 left-0 w-full h-px bg-white/10" />
            </div>

            <div className="relative z-10">
              <p className="text-emerald-500 font-mono text-[10px] tracking-[0.5em] uppercase mb-8">
                System Architecture
              </p>
              <h3 className="text-4xl font-bold text-white leading-tight">
                Data <br />
                Processing <br />
                <span className="text-emerald-400">Layer</span>
              </h3>
            </div>

            <div className="relative z-10 mt-20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-[10px] text-white/40 font-mono tracking-widest uppercase">
                  Node: Active
                </span>
              </div>
              <div className="space-y-1">
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-emerald-500/20 rounded-full" />
                </div>
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full w-1/2 bg-emerald-500/10 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Bento Grid Features */}
          <div className="lg:col-span-8 grid md:grid-cols-2 gap-8">
            <div className="md:col-span-2 p-10 border border-white/10 bg-white/[0.03] rounded-3xl hover:bg-white/[0.05] transition-colors group">
              <div className="text-emerald-500 font-mono text-xs mb-6">
                01 — TEMPORAL DATA
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">
                Historical Activity Tracking
              </h4>
              <p className="text-emerald-50/40 text-sm font-light leading-relaxed max-w-xl">
                Filter sightings by specific dates to track seasonal migration
                and historical activity patterns. The system enables temporal
                layering to visualize how shark presence correlates with
                environmental shifts.
              </p>
            </div>

            <div className="p-10 border border-white/10 bg-white/[0.03] rounded-3xl hover:bg-white/[0.05] transition-colors">
              <div className="text-emerald-500 font-mono text-xs mb-6">
                02 — SPECIES
              </div>
              <h4 className="text-xl font-bold text-white mb-4">
                Identification Zones
              </h4>
              <p className="text-emerald-50/40 text-sm font-light leading-relaxed">
                Quickly isolate specific species on the map to identify density
                zones and habitats within the monitoring region.
              </p>
            </div>

            <div className="p-10 border border-white/10 bg-white/[0.03] rounded-3xl hover:bg-white/[0.05] transition-colors">
              <div className="text-emerald-500 font-mono text-xs mb-6">
                03 — BEHAVIOR
              </div>
              <h4 className="text-xl font-bold text-white mb-4">
                Behavioral Analytics
              </h4>
              <p className="text-emerald-50/40 text-sm font-light leading-relaxed">
                Analyze sighting reports based on shark behavior, providing
                deeper insights into local activity and interaction patterns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
