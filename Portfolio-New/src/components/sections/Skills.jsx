import React from "react";
import {
  Code2,
  Cpu,
  Server,
  Layers,
  Sparkles,
  GitBranch,
  Terminal,
  Palette,
  Database,
  Flame,
  Workflow
} from "lucide-react";
import Badge from "../ui/Badge";
import InfiniteMovingCards from "../aceternity/InfiniteMovingCards";

export const Skills = () => {
  const marqueeRow1 = [
    { name: "React.js", level: "Primary Library", icon: <Code2 className="w-5 h-5" /> },
    { name: "JavaScript (ES6+)", level: "Core Language", icon: <Terminal className="w-5 h-5" /> },
    { name: "TypeScript", level: "Typed JavaScript", icon: <Cpu className="w-5 h-5" /> },
    { name: "Tailwind CSS", level: "Styling & Design", icon: <Palette className="w-5 h-5" /> },
    { name: "Framer Motion", level: "Animations", icon: <Sparkles className="w-5 h-5" /> },
    { name: "Redux Toolkit", level: "State Management", icon: <Layers className="w-5 h-5" /> },
    { name: "Appwrite BaaS", level: "Auth & DB", icon: <Database className="w-5 h-5" /> },
    { name: "ShadCN UI", level: "Accessible UI", icon: <Workflow className="w-5 h-5" /> },
    { name: "Aceternity UI", level: "Interactive UI", icon: <Flame className="w-5 h-5" /> },
  ];

  const marqueeRow2 = [
    { name: "RESTful APIs", level: "API Integration", icon: <Server className="w-5 h-5" /> },
    { name: "Git & GitHub", level: "Version Control", icon: <GitBranch className="w-5 h-5" /> },
    { name: "Material UI", level: "Component Library", icon: <Layers className="w-5 h-5" /> },
    { name: "Express.js", level: "Backend Server", icon: <Server className="w-5 h-5" /> },
    { name: "HTML5 & CSS3", level: "Semantic Web", icon: <Code2 className="w-5 h-5" /> },
    { name: "Postman", level: "API Testing", icon: <Terminal className="w-5 h-5" /> },
    { name: "Python", level: "Scripting & Basics", icon: <Terminal className="w-5 h-5" /> },
    { name: "Bootstrap", level: "Responsive Grid", icon: <Palette className="w-5 h-5" /> },
    { name: "VS Code", level: "Development Tool", icon: <Workflow className="w-5 h-5" /> },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <div className="text-center mb-10">
        <Badge variant="default" icon={<Sparkles className="w-3.5 h-3.5" />}>
          Skills & Tools
        </Badge>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-3">
          What I <span className="text-theme-gradient">Work With</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mt-3">
          The programming languages, frameworks, libraries, and developer tools I use to build responsive web applications.
        </p>
      </div>

      {/* Infinite Moving Marquees */}
      <div className="space-y-4">
        <InfiniteMovingCards items={marqueeRow1} direction="left" speed="normal" />
        <InfiniteMovingCards items={marqueeRow2} direction="right" speed="normal" />
      </div>
    </section>
  );
};

export default Skills;