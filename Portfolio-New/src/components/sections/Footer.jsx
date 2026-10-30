import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  ArrowUp,
  MapPin,
  Clock
} from "lucide-react";
import { playSound } from "../../utils/sound";

export const Footer = () => {
  const soundEnabled = useSelector((state) => state.portfolio.soundEnabled);
  const [bhubaneswarTime, setBhubaneswarTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // IST is UTC+5:30
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setBhubaneswarTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    playSound("click", soundEnabled);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-slate-800/80 bg-slate-950 pt-16 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-800">
        {/* Brand & Subtitle */}
        <div className="text-center md:text-left space-y-2">
          <div className="flex items-center justify-center md:justify-start gap-2.5">
            <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-xs text-white">
              PB
            </div>
            <span className="font-extrabold text-lg text-white tracking-tight">
              Priyanka Priyadarshani Biswal
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md">
            Frontend Software Developer specializing in high-performance React architectures, responsive design systems, and engaging micro-interactions.
          </p>
        </div>

        {/* Local Time & Location */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-slate-400" />
            <span>Bhubaneswar, India</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>{bhubaneswarTime || "Loading IST..."} IST</span>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          title="Back to Top"
          className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-600 hover:bg-slate-800 transition-all hover:scale-105 cursor-pointer shadow-lg"
        >
          <ArrowUp className="w-5 h-5 text-slate-300" />
        </button>
      </div>

      {/* Bottom Copyright & Tech Stack Credits */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div>
          © {new Date().getFullYear()} Priyanka Priyadarshani Biswal. All rights reserved.
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] font-mono text-slate-500">
          <span>React.js</span>
          <span>•</span>
          <span>Redux Toolkit</span>
          <span>•</span>
          <span>Framer Motion</span>
          <span>•</span>
          <span>Tailwind CSS</span>
          <span>•</span>
          <span>Aceternity UI</span>
          <span>•</span>
          <span>ShadCN UI</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
