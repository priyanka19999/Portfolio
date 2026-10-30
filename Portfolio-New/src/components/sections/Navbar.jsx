import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Volume2,
  VolumeX,
  Menu,
  X
} from "lucide-react";
import {
  toggleSound,
  setActiveSection,
  openModal
} from "../../store/portfolioSlice";
import { playSound } from "../../utils/sound";
import { cn } from "../../utils/cn";

export const Navbar = () => {
  const dispatch = useDispatch();
  const { soundEnabled, activeSection } = useSelector(
    (state) => state.portfolio
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = [
        "hero",
        "about",
        "experience",
        "projects",
        "skills",
        "certifications",
        "contact"
      ];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            dispatch(setActiveSection(section));
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dispatch]);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (id) => {
    playSound("click", soundEnabled);
    dispatch(setActiveSection(id));
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 flex justify-center p-3 sm:p-5 pointer-events-none">
        <motion.nav
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={cn(
            "pointer-events-auto flex items-center gap-2 sm:gap-4 px-3.5 sm:px-5 py-2 rounded-full transition-all duration-300",
            scrolled
              ? "glass-dock bg-slate-950/90 shadow-2xl border-slate-800"
              : "glass-dock bg-slate-950/75 border-slate-800/80"
          )}
        >
          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1 rounded-full border border-slate-800/60">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={cn(
                    "relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors cursor-pointer",
                    isActive
                      ? "text-white"
                      : "text-slate-400 hover:text-slate-200"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 nav-active-pill rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Right Action Tools */}
          <div className="flex items-center gap-2">
            {/* Resume Button */}
            <button
              onClick={() => {
                playSound("click", soundEnabled);
                dispatch(openModal("resume"));
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 hover:bg-white/10 text-slate-200 border border-white/15 hover:border-white/30 transition-all hover:scale-105 cursor-pointer shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-slate-300" />
              <span>Resume</span>
            </button>

            {/* Sound Toggle */}
            <button
              onClick={() => {
                dispatch(toggleSound());
                playSound("click", !soundEnabled);
              }}
              title={soundEnabled ? "Mute interactive audio" : "Enable sound effects"}
              className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 text-slate-300" />
              ) : (
                <VolumeX className="w-4 h-4 text-slate-500" />
              )}
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-20 z-40 rounded-2xl border border-slate-800 bg-slate-950/95 p-5 shadow-2xl backdrop-blur-2xl lg:hidden flex flex-col gap-3"
          >
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={cn(
                    "px-4 py-2.5 text-sm font-medium rounded-xl text-left transition-colors cursor-pointer",
                    activeSection === item.id
                      ? "nav-active-pill text-white"
                      : "text-slate-300 hover:bg-slate-900"
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  dispatch(openModal("resume"));
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white text-slate-950 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                View Official Resume
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
