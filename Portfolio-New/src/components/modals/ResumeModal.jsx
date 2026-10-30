import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  FileText,
  Lock,
  Eye,
  ShieldAlert,
  Mail,
  MapPin,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { LinkedinIcon } from "../ui/Icons";
import Dialog from "../ui/Dialog";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import { closeModal } from "../../store/portfolioSlice";
import { playSound } from "../../utils/sound";

export const ResumeModal = () => {
  const dispatch = useDispatch();
  const { activeModal, soundEnabled } = useSelector((state) => state.portfolio);
  const [showAccessNotice, setShowAccessNotice] = useState(false);

  const isOpen = activeModal === "resume";

  // Prevent keyboard print shortcuts (Ctrl+P / Cmd+P)
  useEffect(() => {
    if (!isOpen) {
      setShowAccessNotice(false);
      return;
    }

    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === "p" || e.key === "P")) {
        e.preventDefault();
        e.stopPropagation();
        setShowAccessNotice(true);
        playSound("click", soundEnabled);
      }
    };

    const handleBeforePrint = (e) => {
      setShowAccessNotice(true);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("beforeprint", handleBeforePrint);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("beforeprint", handleBeforePrint);
    };
  }, [isOpen, soundEnabled]);

  const handleRestrictedAction = () => {
    playSound("click", soundEnabled);
    setShowAccessNotice(true);
  };

  return (
    <>
      <Dialog
        isOpen={isOpen}
        onClose={() => {
          setShowAccessNotice(false);
          dispatch(closeModal());
        }}
        title="Official Resume • Priyanka Priyadarshani Biswal"
        subtitle="B.Tech (CGPA: 8.78/10) • Frontend Developer"
        maxWidth="max-w-4xl"
      >
        {/* Top Action Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
              <Eye className="w-3.5 h-3.5" />
              <span>View-Only Active</span>
            </span>
            <span className="text-xs text-slate-500 font-mono hidden sm:inline">
              • Verified Document
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleRestrictedAction}
              className="gap-1.5 text-slate-300 hover:text-white border-slate-700 hover:border-slate-500 cursor-pointer"
            >
              <Lock className="w-3.5 h-3.5 text-amber-400" />
              <span>Download PDF</span>
            </Button>
          </div>
        </div>

        {/* Access Restriction Notice Banner */}
        {showAccessNotice && (
          <div className="mb-6 p-4 rounded-2xl bg-slate-900 border border-amber-500/40 text-xs text-slate-300 space-y-2 animate-fadeIn">
            <div className="flex items-center gap-2 text-amber-300 font-semibold text-sm">
              <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
              <span>PDF Download & Printing Restricted</span>
            </div>
            <p className="leading-relaxed text-slate-400">
              Direct offline PDF downloads and printing of this resume are disabled to protect document integrity. Verified recruiters and hiring managers may request an authorized PDF copy directly via email.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <a
                href="mailto:priyankapbiswal99@gmail.com?subject=Official%20Resume%20PDF%20Request%20-%20Priyanka%20Priyadarshani%20Biswal&body=Hi%20Priyanka,%0A%0AI%20would%20like%20to%20request%20an%20official%20PDF%20copy%20of%20your%20resume%20for%20a%20frontend%20opportunity%20at%20[Company%20Name].%0A%0ABest%20regards,%0A[Your%20Name]"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-slate-950 font-semibold text-xs hover:bg-slate-200 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Request PDF via Email</span>
              </a>
              <button
                onClick={() => setShowAccessNotice(false)}
                className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Dismiss
              </button>
            </div>
          </div>
        )}

        {/* Viewable Resume Sheet (Hidden when printing via print:hidden) */}
        <div className="space-y-6 text-slate-200 print:hidden select-none">
          {/* Header Block */}
          <div className="text-center border-b border-slate-800 pb-5">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wider text-white uppercase">
              PRIYANKA PRIYADARSHANI BISWAL
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-xs text-slate-300 mt-2 font-mono">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                priyankapbiswal99@gmail.com
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                Bhubaneswar, India
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <LinkedinIcon className="w-3.5 h-3.5 text-slate-400" />
                LinkedIn Profile
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs uppercase font-mono tracking-widest text-white font-bold border-b border-slate-800 pb-1 mb-2">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Frontend Software Developer with strong proficiency in building modern, performant, and user-centric web applications using React.js, JavaScript (ES6+), TypeScript, Tailwind CSS, and RESTful APIs. Adept at transforming complex UI/UX designs into modular, clean, and reusable component architectures. Proven track record in state management, responsive UI development, and API integration to deliver seamless digital experiences.
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs uppercase font-mono tracking-widest text-white font-bold border-b border-slate-800 pb-1 mb-3">
              EDUCATION
            </h2>
            <div className="space-y-3">
              <div className="flex flex-wrap items-baseline justify-between text-xs sm:text-sm">
                <div>
                  <span className="font-bold text-white">
                    Bachelor of Technology (B.Tech)
                  </span>{" "}
                  • Gandhi Institute of Excellent and Technocrats, Bhubaneswar
                  <div className="text-white font-semibold font-mono text-xs">
                    CGPA: 8.78 / 10
                  </div>
                </div>
                <span className="text-xs font-mono text-slate-400">2021 – 2025</span>
              </div>

              <div className="flex flex-wrap items-baseline justify-between text-xs sm:text-sm">
                <div>
                  <span className="font-bold text-white">
                    Higher Secondary School (+2 Science)
                  </span>{" "}
                  • Chandbali College, Bhadrak
                  <div className="text-white font-semibold font-mono text-xs">
                    Score: 83.33%
                  </div>
                </div>
                <span className="text-xs font-mono text-slate-400">2019 – 2021</span>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs uppercase font-mono tracking-widest text-white font-bold border-b border-slate-800 pb-1 mb-3">
              WORK EXPERIENCE
            </h2>
            <div className="space-y-5">
              {/* Cybertrack */}
              <div>
                <div className="flex flex-wrap items-baseline justify-between text-xs sm:text-sm">
                  <div>
                    <span className="font-bold text-white">Frontend Developer</span> | Cybertrack Solution Pvt Limited • Bhubaneswar, India
                  </div>
                  <span className="text-xs font-mono text-white font-semibold">
                    05/2025 – Present
                  </span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-300 mt-2 space-y-1.5 marker:text-slate-400">
                  <li>
                    Develop and maintain responsive, high-performance web applications using React.js, Tailwind CSS, and modern component systems.
                  </li>
                  <li>
                    Create modular, reusable UI components and integrate asynchronous RESTful APIs and Appwrite backend services with robust error handling.
                  </li>
                  <li>
                    Implement interactive micro-animations and smooth page transitions using Framer Motion to make user interactions feel polished.
                  </li>
                  <li>
                    Optimize bundle size, asset loading, and responsive layouts to ensure fast performance across desktop and mobile devices.
                  </li>
                </ul>
              </div>

              {/* SamMegh */}
              <div>
                <div className="flex flex-wrap items-baseline justify-between text-xs sm:text-sm">
                  <div>
                    <span className="font-bold text-white">Frontend Developer Intern</span> | SamMegh Technologies • Bangalore, India
                  </div>
                  <span className="text-xs font-mono text-white font-semibold">
                    05/2024 – 08/2024
                  </span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-300 mt-2 space-y-1.5 marker:text-slate-400">
                  <li>
                    Built clean, accessible, and mobile-responsive website layouts using HTML5, CSS3, JavaScript, and React.js adhering to modern web standards.
                  </li>
                  <li>
                    Collaborated with senior engineers to implement UI features from Figma design mockups, optimizing navigation flows.
                  </li>
                  <li>
                    Conducted cross-browser testing, debugging, and managed feature branches using Git & GitHub.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Technical Projects */}
          <div>
            <h2 className="text-xs uppercase font-mono tracking-widest text-white font-bold border-b border-slate-800 pb-1 mb-3">
              KEY TECHNICAL PROJECTS
            </h2>
            <div className="space-y-4">
              <div>
                <div className="flex flex-wrap items-baseline justify-between text-xs sm:text-sm">
                  <span className="font-bold text-white">
                    VISION – AI Image Generator Web Platform
                  </span>
                  <span className="text-xs font-mono text-slate-400">04/2025 – 06/2025</span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-300 mt-1 space-y-1 marker:text-slate-400">
                  <li>
                    Engineered an AI-powered image generation platform featuring prompt-to-image creation, generation history gallery, and instant downloads.
                  </li>
                  <li>
                    <strong className="text-slate-200">Tech Stack:</strong> React.js, Tailwind CSS, Framer Motion, Appwrite Auth & Storage, Express.js, REST APIs.
                  </li>
                  <li>
                    <strong className="text-slate-200">Impact:</strong> Implemented secure token-based user authentication, responsive UI grids, and fluid animation flows.
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex flex-wrap items-baseline justify-between text-xs sm:text-sm">
                  <span className="font-bold text-white">
                    SHAREPLATE – Surplus Food Rescue Platform
                  </span>
                  <span className="text-xs font-mono text-slate-400">10/2024 – 12/2024</span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-300 mt-1 space-y-1 marker:text-slate-400">
                  <li>
                    Engineered a community surplus food redistribution platform connecting restaurants, hotels, and caterers with verified shelters.
                  </li>
                  <li>
                    <strong className="text-slate-200">Tech Stack:</strong> React 19, Tailwind CSS, Framer Motion, Redux Toolkit, Lucide React, RESTful APIs.
                  </li>
                  <li>
                    <strong className="text-slate-200">Impact:</strong> Coordinated rescue of 1,430+ meals with zero food-safety incidents, connecting 14 verified shelters with commercial kitchens via secure 4-digit PIN-verified handover protocol.
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex flex-wrap items-baseline justify-between text-xs sm:text-sm">
                  <span className="font-bold text-white">
                    MEGABLOG – Real-Time Content Management & Blogging Platform
                  </span>
                  <span className="text-xs font-mono text-slate-400">07/2024 – 08/2024</span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-300 mt-1 space-y-1 marker:text-slate-400">
                  <li>
                    Developed a full-stack blogging platform supporting real-time article publishing, rich text editing, interactive comment threads, and user profile management.
                  </li>
                  <li>
                    <strong className="text-slate-200">Tech Stack:</strong> React.js, Tailwind CSS, Material UI, Appwrite Database, Express.js.
                  </li>
                  <li>
                    <strong className="text-slate-200">Impact:</strong> Designed scalable database queries and real-time event listeners for instant content synchronization.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical & Professional Skills */}
          <div>
            <h2 className="text-xs uppercase font-mono tracking-widest text-white font-bold border-b border-slate-800 pb-1 mb-3">
              TECHNICAL & PROFESSIONAL SKILLS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                <span className="font-bold text-white block mb-1">
                  Frontend Development:
                </span>
                <p className="text-slate-300">
                  React.js, JavaScript (ES6+), TypeScript, HTML5, CSS3, Tailwind CSS, Bootstrap, Material UI, ShadCN UI, Aceternity UI, Framer Motion.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                <span className="font-bold text-white block mb-1">
                  Backend & Tools:
                </span>
                <p className="text-slate-300">
                  Express.js, Node.js (Basics), Appwrite (Auth & DB), Python, RESTful APIs, Git, GitHub, VS Code, Postman.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                <span className="font-bold text-white block mb-1">
                  Core Competencies:
                </span>
                <p className="text-slate-300">
                  Responsive Web Design, Component-Based Architecture, UI/UX Principles, State Management, Problem Solving, Adaptability.
                </p>
              </div>
            </div>
          </div>

          {/* Certifications & Accreditations */}
          <div>
            <h2 className="text-xs uppercase font-mono tracking-widest text-white font-bold border-b border-slate-800 pb-1 mb-2">
              CERTIFICATIONS & ACCREDITATIONS
            </h2>
            <ul className="list-disc list-inside text-xs text-slate-300 space-y-1.5 marker:text-slate-400">
              <li>
                <strong className="text-white">TCS iON Career Edge – Young Professional:</strong> Tata Consultancy Services (Cert ID: 272697-32742312-1016).
              </li>
              <li>
                <strong className="text-white">Frontend Development Training Certification:</strong> SamMegh Technologies (3 Months In-Premises Frontend Engineering Program).
              </li>
              <li>
                <strong className="text-white">Build Your Own Generative AI Model Workshop:</strong> NxtWave (Workshop by AI Expert Abhinav Devaguptapu).
              </li>
              <li>
                <strong className="text-white">Full Stack Development Certification:</strong> Udemy (React.js, Express.js, State Architecture).
              </li>
              <li>
                <strong className="text-white">MEAN Stack Development Training:</strong> Industry Certified Component-Based Architecture & NoSQL.
              </li>
            </ul>
          </div>

          {/* Subtle View-Only Footer Watermark */}
          <div className="mt-8 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-500">
            <span className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-slate-500" />
              <span>Official Portfolio View-Only Mode</span>
            </span>
            <span>Direct PDF download & printing disabled</span>
          </div>
        </div>
      </Dialog>

      {/* Print Intercept Screen: Displayed ONLY when someone invokes browser print */}
      <div className="hidden print:flex fixed inset-0 bg-white text-slate-950 z-[9999999] flex-col items-center justify-center p-12 text-center">
        <div className="max-w-lg border-2 border-slate-900 p-8 rounded-2xl space-y-4">
          <div className="w-12 h-12 rounded-full border-2 border-slate-900 flex items-center justify-center mx-auto text-slate-900">
            <Lock className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-extrabold uppercase tracking-wide text-slate-950">
            Document Access Restricted
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            This resume document is protected and configured exclusively for online view-only access on the official portfolio website. Direct PDF downloading and printing are disabled.
          </p>
          <div className="pt-2 border-t border-slate-300 text-xs text-slate-800 space-y-1">
            <p>
              To request an authorized official PDF copy for employment or recruitment, please contact:
            </p>
            <p className="font-bold text-sm text-slate-950">
              Priyanka Priyadarshani Biswal
            </p>
            <p className="font-mono text-slate-700">
              Email: priyankapbiswal99@gmail.com
            </p>
          </div>
          <p className="text-[10px] text-slate-500 font-mono pt-2">
            Verification ID: SEC-RESUME-VIEWONLY • Official Protection
          </p>
        </div>
      </div>
    </>
  );
};

export default ResumeModal;