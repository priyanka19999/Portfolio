import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Heart,
  Play,
  FileCode,
  CheckCircle2,
  Zap,
  Globe,
  ExternalLink
} from "lucide-react";
import { GithubIcon } from "../ui/Icons";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import Card3D from "../aceternity/Card3D";
import {
  setProjectFilter,
  toggleLikeProject,
  openModal
} from "../../store/portfolioSlice";
import { playSound } from "../../utils/sound";

export const Projects = () => {
  const dispatch = useDispatch();
  const { projectFilter, likes, userLiked, soundEnabled } = useSelector(
    (state) => state.portfolio
  );

  const filterTabs = [
    { id: "all", label: "All Projects" },
    { id: "ai", label: "AI Tools" },
    { id: "fullstack", label: "Full-Stack Web" },
    { id: "frontend", label: "Frontend UI" },
  ];

  const projects = [
    {
      id: "vision",
      category: "ai",
      title: "VISION – AI Image Generator Web Platform",
      timeline: "04/2025 – 06/2025",
      badge: "AI Web Platform",
      subtitle: "Prompt-to-Image Generation & Creative Studio",
      description:
        "An AI-powered web platform where users can type natural language prompts to generate high-resolution images, browse generation history, and download high-resolution outputs.",
      mockupUrl: "https://vision.ai-app/studio",
      previewImage:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=900&auto=format&fit=crop&q=80",
      impact:
        "Built token-based authentication with Appwrite, responsive image grids, and fluid animation flows.",
      stack: [
        "React.js",
        "Tailwind CSS",
        "Framer Motion",
        "Appwrite Auth & Storage",
        "Express.js",
        "REST APIs"
      ],
      highlights: [
        "Interactive prompt-to-image synthesis pipeline",
        "Secure Appwrite token authentication & cloud storage",
        "Generation history gallery with instant downloads",
        "Fluid UI transitions powered by Framer Motion"
      ],
      demoModalId: "vision-demo",
      hasSimulator: true,
      simulatorLabel: "Try Live Demo"
    },
    {
      id: "shareplate",
      category: "fullstack",
      title: "SHAREPLATE – Surplus Food Rescue Platform",
      timeline: "10/2024 – 12/2024",
      badge: "Community & Logistics",
      subtitle: "Surplus Food Redistribution with 4-Digit Pickup PIN",
      description:
        "A community food rescue application connecting restaurants, hotels, and caterers with verified NGOs and shelters across Bhubaneswar to prevent food waste.",
      mockupUrl: "https://shareplate.org/feed",
      previewImage:
        "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=900&auto=format&fit=crop&q=80",
      impact:
        "Connected verified community shelters with commercial kitchens using a 4-digit handover PIN to ensure hygiene and accountability.",
      stack: [
        "React 19",
        "Tailwind CSS",
        "Framer Motion",
        "Redux Toolkit",
        "Lucide React",
        "RESTful APIs"
      ],
      highlights: [
        "Real-time surplus food listing and claim system",
        "Secure 4-digit handover PIN verification protocol",
        "Filterable live feed by locality and food category",
        "FSSAI food hygiene guidance & safe holding timers"
      ],
      demoModalId: "shareplate-demo",
      hasSimulator: true,
      simulatorLabel: "Try Live Demo"
    },
    {
      id: "megablog",
      category: "fullstack",
      title: "MEGABLOG – Real-Time Publishing & Blogging Platform",
      timeline: "07/2024 – 08/2024",
      badge: "Content Management",
      subtitle: "Rich Text Publishing & Interactive Discussions",
      description:
        "A full-stack blogging platform supporting article publishing, rich text editing, interactive comment threads, and user profile management.",
      mockupUrl: "https://megablog.dev/articles",
      previewImage:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=900&auto=format&fit=crop&q=80",
      impact:
        "Designed responsive layouts, real-time Appwrite database updates, and scalable article discovery.",
      stack: [
        "React.js",
        "Tailwind CSS",
        "Material UI",
        "Appwrite Database",
        "Express.js",
        "RESTful APIs"
      ],
      highlights: [
        "Article creation with rich text editing and cover uploads",
        "Interactive comment threads with live updates",
        "Appwrite Document Database with user access controls",
        "Fast search and category-based article browsing"
      ],
      demoModalId: "megablog-demo",
      hasSimulator: true,
      simulatorLabel: "Try Live Demo"
    },
    {
      id: "portfolio",
      category: "frontend",
      title: "Priyanka's Modern Developer Portfolio",
      timeline: "2025 – Present",
      badge: "Design & Frontend",
      subtitle: "Clean UI System & Interactive Micro-Interactions",
      description:
        "Personal developer portfolio built from scratch with React 19, Redux Toolkit, Framer Motion, and Tailwind CSS, featuring a calm, executive dark theme and interactive sandboxes.",
      mockupUrl: "https://priyankapriyadarshani.dev",
      previewImage:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&auto=format&fit=crop&q=80",
      impact:
        "High Lighthouse performance score, zero external audio asset dependencies, and 100% responsive across devices.",
      stack: [
        "React 19",
        "Redux Toolkit",
        "Tailwind CSS",
        "Framer Motion",
        "Lucide React"
      ],
      highlights: [
        "Single calm, professional architectural dark theme",
        "Lightweight synthesized Web Audio sound feedback",
        "Interactive live project simulators",
        "Printable official resume viewer modal"
      ],
      demoModalId: null,
      hasSimulator: false
    }
  ];

  const filteredProjects =
    projectFilter === "all"
      ? projects
      : projects.filter((p) => p.category === projectFilter);

  const handleFilterClick = (tabId) => {
    playSound("click", soundEnabled);
    dispatch(setProjectFilter(tabId));
  };

  const handleLike = (e, projectId) => {
    e.stopPropagation();
    playSound("success", soundEnabled);
    dispatch(toggleLikeProject(projectId));
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <div className="text-center mb-12">
        <Badge variant="default" icon={<Sparkles className="w-3.5 h-3.5" />}>
          Portfolio
        </Badge>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-3">
          Things I've <span className="text-theme-gradient">Built</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mt-3">
          A selection of real projects where I solved practical problems, from generative AI interfaces to community platforms.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {filterTabs.map((tab) => {
            const isActive = projectFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleFilterClick(tab.id)}
                className={`relative px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? "text-slate-950 font-semibold"
                    : "text-slate-400 hover:text-slate-200 bg-slate-900/60 border border-slate-800"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="projectTab"
                    className="absolute inset-0 bg-white rounded-full shadow-md"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
            >
              <Card3D className="h-full bg-slate-900/60 border-slate-800 hover:border-slate-700 p-5 sm:p-7 flex flex-col justify-between group">
                <div>
                  {/* Browser Window Mockup Frame */}
                  <div className="rounded-xl border border-slate-800 bg-slate-950/90 overflow-hidden mb-6 shadow-xl">
                    {/* Browser Chrome Header */}
                    <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800/90 bg-slate-900/60 text-[11px] font-mono text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                      </div>
                      <div className="px-3 py-0.5 rounded-md bg-slate-950 border border-slate-800 text-slate-400 text-[10px] flex items-center gap-1">
                        <Globe className="w-3 h-3 text-slate-500" />
                        <span>{project.mockupUrl}</span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400">
                        {project.timeline}
                      </span>
                    </div>

                    {/* Window Image Preview */}
                    <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                      <img
                        src={project.previewImage}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                      {/* Mockup Overlay Elements */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                        <Badge variant="default">
                          {project.badge}
                        </Badge>

                        {/* Interactive Like Counter */}
                        <button
                          onClick={(e) => handleLike(e, project.id)}
                          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold backdrop-blur-md border transition-all cursor-pointer ${
                            userLiked[project.id]
                              ? "bg-white/10 border-white/30 text-white"
                              : "bg-slate-950/80 border-slate-800 text-slate-400 hover:text-white"
                          }`}
                        >
                          <Heart
                            className={`w-3.5 h-3.5 ${
                              userLiked[project.id] ? "fill-white text-white" : ""
                            }`}
                          />
                          <span>{likes[project.id]}</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mb-3">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Impact Highlight Box */}
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs mb-4 flex items-start gap-2">
                    <Zap className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white font-semibold">Key Highlights: </strong>
                      <span className="text-slate-300">{project.impact}</span>
                    </span>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="space-y-1.5 mb-5">
                    {project.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer: Tech Stack Chips & Action */}
                <div className="pt-4 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.stack.map((tech, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-950 border border-slate-800 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5">
                    {project.hasSimulator ? (
                      <Button
                        variant="glow"
                        size="sm"
                        onClick={() => {
                          playSound("open", soundEnabled);
                          dispatch(openModal(project.demoModalId));
                        }}
                        className="flex-1 gap-1.5 font-semibold"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>{project.simulatorLabel}</span>
                      </Button>
                    ) : (
                      <Button
                        variant="glow"
                        size="sm"
                        onClick={() => {
                          playSound("open", soundEnabled);
                          dispatch(openModal("resume"));
                        }}
                        className="flex-1 gap-1.5 font-semibold"
                      >
                        <FileCode className="w-3.5 h-3.5" />
                        <span>View Resume Details</span>
                      </Button>
                    )}

                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5 text-slate-300" />
                      <span>GitHub</span>
                      <ExternalLink className="w-3 h-3 text-slate-500" />
                    </a>
                  </div>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;