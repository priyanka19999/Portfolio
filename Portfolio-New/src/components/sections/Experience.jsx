import React from "react";
import {
  Briefcase,
  MapPin,
  CheckCircle2,
  TrendingUp
} from "lucide-react";
import Badge from "../ui/Badge";
import Card3D from "../aceternity/Card3D";

export const Experience = () => {
  const experiences = [
    {
      role: "Frontend Developer",
      company: "Cybertrack Solution Pvt Limited",
      location: "Bhubaneswar, India",
      period: "05/2025 – Present",
      type: "Full-Time",
      isCurrent: true,
      description:
        "Building modern, responsive web applications, developing modular component libraries, and integrating backend services with smooth interactive animations.",
      highlights: [
        "Develop and maintain responsive web applications using React.js, Tailwind CSS, and modern component libraries.",
        "Create modular, reusable UI components and connect RESTful APIs and Appwrite backend services with solid error handling.",
        "Implement smooth page transitions and interactive micro-animations with Framer Motion to make user interactions feel polished.",
        "Optimize bundle size, asset loading, and responsive layouts for fast performance across mobile and desktop devices.",
      ],
      stack: [
        "React.js",
        "JavaScript",
        "Tailwind CSS",
        "Framer Motion",
        "Appwrite",
        "REST APIs",
        "Git",
      ],
      metrics: "Fast Page Loads • 100% Responsive Across Devices",
    },
    {
      role: "Frontend Developer Intern",
      company: "SamMegh Technologies",
      location: "Bangalore, India",
      period: "05/2024 – 08/2024",
      type: "Internship",
      isCurrent: false,
      description:
        "Transformed Figma UI mockups into responsive web layouts, helped build modular components, and performed cross-browser testing.",
      highlights: [
        "Built responsive, accessible website layouts using HTML5, CSS3, JavaScript, and React adhering to modern design standards.",
        "Worked closely with design mockups in Figma to ensure pixel-perfect layout and typography implementation.",
        "Conducted testing and debugging across popular browsers, managing code versioning through Git and GitHub.",
      ],
      stack: [
        "React.js",
        "JavaScript (ES6+)",
        "HTML5 / CSS3",
        "Figma-to-Code",
        "Git & GitHub",
        "Cross-Browser QA",
      ],
      metrics: "15+ Responsive Layouts Delivered • Active Team Collaboration",
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <div className="text-center mb-16">
        <Badge variant="default" icon={<Briefcase className="w-3.5 h-3.5" />}>
          Experience
        </Badge>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-3">
          Where I've <span className="text-theme-gradient">Worked</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mt-3">
          Hands-on experience developing production frontends, writing clean reusable code, and collaborating with cross-functional teams.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative border-l border-slate-800 ml-4 md:ml-32 pl-6 md:pl-10 space-y-12">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative group">
            {/* Pulsing Timeline Marker */}
            <div
              className={`absolute -left-[35px] md:-left-[51px] top-1.5 w-6 h-6 rounded-full border-4 border-[#07080e] flex items-center justify-center transition-transform group-hover:scale-125 ${
                exp.isCurrent
                  ? "bg-white shadow-lg shadow-white/20"
                  : "bg-slate-700 shadow-md"
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${exp.isCurrent ? "bg-slate-950 animate-pulse" : "bg-slate-400"}`} />
            </div>

            {/* Date Tag Floating on Left on large screens */}
            <div className="hidden md:block absolute -left-48 top-1 text-right w-36">
              <span className="text-xs font-mono font-semibold text-slate-300 block">
                {exp.period}
              </span>
              <span className="text-[11px] text-slate-500 font-medium">
                {exp.type}
              </span>
            </div>

            {/* Experience Card */}
            <Card3D className="bg-slate-900/60 border-slate-800 hover:border-slate-700 p-6 sm:p-8">
              {/* Top Row */}
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-xl sm:text-2xl font-bold text-white transition-colors">
                      {exp.role}
                    </h3>
                    {exp.isCurrent && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-white/10 text-white border border-white/20">
                        Current Role
                      </span>
                    )}
                  </div>
                  <div className="text-sm font-semibold text-slate-200 mt-1 flex items-center gap-2">
                    <span>{exp.company}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-400 font-normal flex items-center gap-1 text-xs">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="md:hidden">
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Brief narrative */}
              <p className="text-slate-300 text-sm leading-relaxed mb-5">
                {exp.description}
              </p>

              {/* Bullet Points */}
              <div className="space-y-2.5 mb-6">
                {exp.highlights.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400">
                    <CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>

              {/* Metric Callout */}
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 mb-5 flex items-center gap-2 text-xs font-medium text-slate-200">
                <TrendingUp className="w-4 h-4 text-slate-300 shrink-0" />
                <span>{exp.metrics}</span>
              </div>

              {/* Tech Stack Chips */}
              <div className="pt-4 border-t border-slate-800/80">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold block mb-2">
                  Technologies used:
                </span>
                <div className="flex flex-wrap gap-2">
                  {exp.stack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-950 border border-slate-800 text-slate-300 group-hover:border-slate-700 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card3D>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;