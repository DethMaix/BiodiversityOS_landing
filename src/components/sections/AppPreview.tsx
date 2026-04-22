import React from "react";

export default function AppPreview() {
  return (
    <div className="relative aspect-[16/10] bg-[#062a33] rounded-3xl border border-white/10 shadow-2xl overflow-hidden group">
      {/* Real Map Background from App */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
        style={{ backgroundImage: 'url("/app-screenshot.png")' }}
      />
      
      {/* Dark Overlay to match theme */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a4d5c]/80 via-transparent to-transparent opacity-60 pointer-events-none" />

      {/* Interactive Markers Overlay */}
      <div className="absolute top-[48%] left-[50%] z-10">
        <div className="relative cursor-pointer group/marker">
          <div className="w-6 h-6 bg-emerald-500 rounded-full border-2 border-white shadow-lg animate-pulse" />
          <div className="absolute inset-0 w-6 h-6 bg-emerald-500 rounded-full animate-ping opacity-40" />
          
          {/* Tooltip/Popup */}
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-48 glass-premium p-4 rounded-2xl border border-white/20 shadow-2xl opacity-0 group-hover/marker:opacity-100 transition-all duration-300 translate-y-2 group-hover/marker:translate-y-0 backdrop-blur-xl">
             <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-lg">
                  🦈
                </div>
                <div>
                  <p className="text-xs font-bold text-white leading-none">Bull Shark</p>
                  <p className="text-[10px] text-white/40 uppercase tracking-wider">Active Sighting</p>
                </div>
             </div>
             <p className="text-[11px] text-white/70 italic leading-relaxed border-t border-white/10 pt-3">
               "Significant activity detected near the coast. Behavioral pattern: Hunting."
             </p>
          </div>
        </div>
      </div>

      <div className="absolute top-[60%] left-[40%] z-10 opacity-60">
        <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg" />
      </div>

      <div className="absolute top-[20%] left-[70%] z-10 opacity-40">
        <div className="w-3 h-3 bg-emerald-400 rounded-full border border-white shadow-lg" />
      </div>

      {/* Decorative Overlay */}
      <div className="absolute inset-0 pointer-events-none border-[20px] border-black/5" />
      <div className="absolute bottom-6 right-6 flex items-center gap-2 bg-black/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/5">
        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
        <span className="text-[10px] text-white/70 font-mono tracking-widest uppercase">Live Data Feed</span>
      </div>
    </div>
  );
}
