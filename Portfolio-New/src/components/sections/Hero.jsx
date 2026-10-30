import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import {
  ArrowRight,
  FileText,
  Mail,
  Check,
  Copy,
  ExternalLink,
  Code2,
  Briefcase,
  GraduationCap,
  MapPin
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";
import Spotlight from "../aceternity/Spotlight";
import Button from "../ui/Button";
import { openModal } from "../../store/portfolioSlice";
import { playSound } from "../../utils/sound";

export const Hero = () => {
  const dispatch = useDispatch();
  const soundEnabled = useSelector((state) => state.portfolio.soundEnabled);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("priyankapbiswal99@gmail.com");
    setCopiedEmail(true);
    playSound("success", soundEnabled);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const keyHighlights = [
    {
      value: "8.78 / 10",
      label: "B.Tech Honors",
      sub: "GIET Bhubaneswar",
      icon: <GraduationCap className="w-4 h-4 text-slate-300" />
    },
    {
      value: "Frontend Dev",
      label: "Cybertrack Solution",
      sub: "05/2025 – Present",
      icon: <Briefcase className="w-4 h-4 text-slate-300" />
    },
    {
      value: "Core Stack",
      label: "React • TypeScript • Python",
      sub: "Redux • Appwrite",
      icon: <Code2 className="w-4 h-4 text-slate-300" />
    },
    {
      value: "Bhubaneswar",
      label: "India (Open to Remote)",
      sub: "Full-Time Available",
      icon: <MapPin className="w-4 h-4 text-slate-300" />
    }
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] w-full flex flex-col justify-center items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-grid-pattern"
    >
      {/* Subtle Ambient Monochrome Spotlights */}
      <Spotlight
        className="-top-40 left-0 md:left-48 md:-top-20 opacity-30"
        fill="#e2e8f0"
      />
      <Spotlight
        className="top-20 left-3/4 h-[75vh] w-[45vw] opacity-20"
        fill="#64748b"
      />

      {/* Radial Vignette Mask */}
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,transparent_20%,black_100%)] bg-[#07080e]/85" />

      <div className="relative z-10 max-w-5xl mx-auto w-full text-center flex flex-col items-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 backdrop-blur-xl shadow-lg"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-medium text-slate-300">
            Available for full-time frontend roles
          </span>
        </motion.div>

        {/* Name Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-3"
        >
          Priyanka Priyadarshani{" "}
          <span className="text-theme-gradient">
            Biswal
          </span>
        </motion.h1>

        {/* Role Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-2xl font-medium text-slate-300 mb-5"
        >
          Frontend Developer building clean, responsive web applications
        </motion.p>

        {/* Authentic & Human Bio */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl text-slate-400 text-sm sm:text-base leading-relaxed mb-8 px-2"
        >
          Specialized in crafting performant, accessible, and intuitive web interfaces with clean component architecture.
        </motion.p>

        {/* Clean, High-Impact Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8"
        >
          <a href="#projects">
            <Button variant="glow" size="lg" className="gap-2 group">
              <span>View Featured Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>

          <Button
            variant="outline"
            size="lg"
            onClick={() => dispatch(openModal("resume"))}
            className="gap-2 text-slate-200 hover:text-white border-slate-700 hover:border-slate-500"
          >
            <FileText className="w-4 h-4 text-slate-300" />
            <span>View Resume</span>
          </Button>

          <a href="#contact">
            <Button
              variant="secondary"
              size="lg"
              className="gap-2 text-slate-300 hover:text-white"
            >
              <Mail className="w-4 h-4 text-slate-300" />
              <span>Get In Touch</span>
            </Button>
          </a>
        </motion.div>

        {/* Direct Contact Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-400 mb-12"
        >
          <button
            onClick={copyEmail}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 hover:border-slate-600 text-slate-300 hover:text-white transition-colors cursor-pointer"
            title="Click to copy email address"
          >
            <Mail className="w-3.5 h-3.5 text-slate-300" />
            <span>priyankapbiswal99@gmail.com</span>
            {copiedEmail ? (
              <Check className="w-3.5 h-3.5 text-emerald-400 ml-0.5" />
            ) : (
              <Copy className="w-3 h-3 text-slate-500 ml-0.5" />
            )}
          </button>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 hover:border-slate-600 text-slate-300 hover:text-white transition-colors"
          >
            <LinkedinIcon className="w-3.5 h-3.5 text-slate-300" />
            <span>LinkedIn Profile</span>
            <ExternalLink className="w-3 h-3 text-slate-500" />
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 hover:border-slate-600 text-slate-300 hover:text-white transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5 text-slate-300" />
            <span>GitHub</span>
            <ExternalLink className="w-3 h-3 text-slate-500" />
          </a>
        </motion.div>

        {/* Authentic Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl"
        >
          {keyHighlights.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl border border-slate-800/80 bg-slate-900/50 backdrop-blur-md flex flex-col items-center justify-center text-center group hover:border-slate-700 transition-all"
            >
              <div className="w-8 h-8 rounded-xl bg-slate-800/80 flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
                {item.icon}
              </div>
              <div className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-slate-200 transition-colors">
                {item.value}
              </div>
              <div className="text-xs text-slate-300 font-medium mt-0.5">
                {item.label}
              </div>
              <div className="text-[11px] text-slate-500 font-mono mt-0.5">
                {item.sub}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
