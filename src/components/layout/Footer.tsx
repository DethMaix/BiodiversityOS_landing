import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#083b47] border-t border-white/5 py-14 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.03)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-4 text-white font-bold text-xl tracking-tighter">
            <span className="text-xl opacity-40">BIOS</span>
            <div className="w-px h-6 bg-white/10"></div>
            <span>BiodiversityOS</span>
          </div>

          <div className="text-[10px] text-emerald-50/10 uppercase tracking-[0.4em] font-bold">
            © 2026 BiodiversityOS
          </div>
        </div>
      </div>
    </footer>
  );
}
