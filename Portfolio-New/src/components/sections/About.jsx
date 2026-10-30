import React from "react";
import {
  GraduationCap,
  Award,
  BookOpen,
  Sparkles,
  Heart,
  CheckCircle2
} from "lucide-react";
import Card3D from "../aceternity/Card3D";
import Badge from "../ui/Badge";

export const About = () => {
  const strengths = [
    "Responsive Web Design",
    "Modern React & Component Design",
    "Tailwind CSS & Design Systems",
    "Figma-to-Code Precision",
    "REST APIs & Appwrite Backend",
    "State Management (Redux Toolkit)",
    "Framer Motion Micro-Interactions",
    "Cross-Browser QA & Performance",
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <div className="text-center mb-16">
        <Badge variant="default" icon={<Sparkles className="w-3.5 h-3.5" />}>
          About Me
        </Badge>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-3">
          A Little About <span className="text-theme-gradient">My Journey</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mt-3">
          My path into frontend development, what drives me every day, and how I approach building software.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        {/* Personal Narrative */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-8 rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl relative overflow-hidden">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5 text-slate-300" />
              Building with curiosity, care, and attention to detail
            </h3>

            <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-4">
              Hi, I'm Priyanka! I'm a frontend developer based in Bhubaneswar, India, currently building production web applications at <span className="text-white font-medium">Cybertrack Solution</span>. My passion lies in taking creative ideas and complex designs and turning them into fast, reliable, and accessible user interfaces.
            </p>

            <p className="text-slate-400 leading-relaxed text-sm sm:text-base mb-6">
              I care deeply about the details that make software pleasant to use—from smooth page transitions and responsive layouts that fit any screen size, to clean component architecture that is easy to maintain. When I'm not coding, I enjoy experimenting with modern web tools, exploring generative AI workflows, and learning new frontend techniques.
            </p>

            {/* Strengths */}
            <div>
              <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 font-semibold mb-3">
                Key Strengths & What I Do
              </h4>
              <div className="flex flex-wrap gap-2">
                {strengths.map((skill, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-800/80 text-slate-200 border border-slate-700/60 hover:border-slate-500 hover:text-white transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-slate-400" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education Highlight Cards */}
        <div className="lg:col-span-5 space-y-5">
          <div className="text-xs uppercase font-mono tracking-wider text-slate-400 font-semibold flex items-center gap-2 mb-2">
            <GraduationCap className="w-4 h-4 text-slate-300" />
            Education
          </div>

          {/* B.Tech */}
          <Card3D className="bg-slate-900/60 border border-slate-800 hover:border-slate-700">
            <div className="flex items-start justify-between gap-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6 text-slate-300" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-slate-950 text-slate-300 border border-slate-800">
                    2021 – 2025
                  </span>
                  <span className="text-sm font-extrabold text-white">
                    CGPA: 8.78 / 10
                  </span>
                </div>
                <h4 className="text-base font-bold text-white mt-1">
                  Bachelor of Technology (B.Tech)
                </h4>
                <p className="text-xs text-slate-400 font-medium">
                  Gandhi Institute of Excellent and Technocrats
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Bhubaneswar, Odisha, India
                </p>
                <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-300">
                  <Award className="w-4 h-4 text-slate-400" />
                  <span>Computer Science & Engineering</span>
                </div>
              </div>
            </div>
          </Card3D>

          {/* Higher Secondary */}
          <Card3D className="bg-slate-900/60 border border-slate-800 hover:border-slate-700">
            <div className="flex items-start justify-between gap-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                <BookOpen className="w-6 h-6 text-slate-300" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-slate-950 text-slate-300 border border-slate-800">
                    2019 – 2021
                  </span>
                  <span className="text-sm font-extrabold text-white">
                    Score: 83.33%
                  </span>
                </div>
                <h4 className="text-base font-bold text-white mt-1">
                  Higher Secondary (+2 Science)
                </h4>
                <p className="text-xs text-slate-400 font-medium">
                  Chandbali College
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Bhadrak, Odisha, India
                </p>
                <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-slate-400" />
                  <span>Core Physics, Chemistry, Mathematics & CS</span>
                </div>
              </div>
            </div>
          </Card3D>
        </div>
      </div>
    </section>
  );
};

export default About;