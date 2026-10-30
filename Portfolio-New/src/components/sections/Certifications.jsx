import React from "react";
import {
  Award,
  CheckCircle2,
  ExternalLink,
  Cpu,
  Layers,
  Code2,
  Sparkles
} from "lucide-react";
import Badge from "../ui/Badge";
import Card3D from "../aceternity/Card3D";

export const Certifications = () => {
  const certifications = [
    {
      title: "TCS iON Career Edge – Young Professional",
      issuer: "Tata Consultancy Services (TCS iON)",
      subtitle: "Cert ID: 272697-32742312-1016 • Mehul Mehta, Delivery Head",
      icon: <Award className="w-6 h-6 text-slate-300" />,
      badge: "Industry Credential",
      fileUrl: "/certificates/TCS_iON_Career_Edge_Certificate.pdf",
      description:
        "Professional certification covering core IT foundations, problem-solving methodologies, artificial intelligence overview, and workplace communication.",
      skills: ["Problem Solving", "IT Foundations", "Overview of AI", "Workplace Communication"],
      verified: true
    },
    {
      title: "Frontend Development Training Certificate",
      issuer: "SamMegh Technologies",
      subtitle: "3 Months In-Premises • Sachin Vaidya, CEO",
      icon: <Code2 className="w-6 h-6 text-slate-300" />,
      badge: "Industry Training",
      fileUrl: "/certificates/SamMegh_Frontend_Certificate.pdf",
      description:
        "Completed 3 months of hands-on frontend engineering training focusing on responsive web architectures, React.js, and Figma-to-code workflows.",
      skills: ["React.js", "Responsive Layouts", "Component Design", "Cross-Browser QA"],
      verified: true
    },
    {
      title: "Build Your Own Generative AI Model Workshop",
      issuer: "NxtWave",
      subtitle: "Workshop by AI Expert Abhinav Devaguptapu & Rahul Attuluri, CEO",
      icon: <Cpu className="w-6 h-6 text-slate-300" />,
      badge: "Hands-on Workshop",
      fileUrl: "/certificates/NxtWave_Generative_AI_Certificate.pdf",
      description:
        "Participated in hands-on sessions on generative AI concepts, prompt engineering, and connecting AI models to modern web applications.",
      skills: ["Generative AI", "Prompt Engineering", "Model Integration", "RESTful AI Endpoints"],
      verified: true
    },
    {
      title: "Full Stack Development Certification",
      issuer: "Udemy",
      subtitle: "Modern JavaScript & Full-Stack Architecture",
      icon: <Layers className="w-6 h-6 text-slate-300" />,
      badge: "Full-Stack Course",
      fileUrl: null,
      description:
        "Coursework in modern JavaScript, React.js component architecture, Express.js backend services, and database schema fundamentals.",
      skills: ["React.js", "Express.js", "State Management", "API Design"],
      verified: true
    },
    {
      title: "MEAN Stack Development Training",
      issuer: "Industry Training Program",
      subtitle: "Web Application Architecture",
      icon: <Sparkles className="w-6 h-6 text-slate-300" />,
      badge: "Web Training",
      fileUrl: null,
      description:
        "Training in component-based architectures, RESTful API services, database connectivity, and industry web development standards.",
      skills: ["MongoDB & NoSQL", "Express.js", "Node.js", "Component Architecture"],
      verified: true
    }
  ];

  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <div className="text-center mb-16">
        <Badge variant="default" icon={<Award className="w-3.5 h-3.5" />}>
          Certifications
        </Badge>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-3">
          Certifications & <span className="text-theme-gradient">Training</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mt-3">
          Accredited coursework, certifications, and technical workshops I've completed to keep learning.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, idx) => (
          <Card3D
            key={idx}
            className="bg-slate-900/60 border-slate-800 hover:border-slate-700 p-6 sm:p-7 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {cert.icon}
                </div>
                <Badge variant="default">
                  {cert.badge}
                </Badge>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-white mb-1 group-hover:text-slate-200 transition-colors">
                {cert.title}
              </h3>
              <p className="text-xs font-semibold text-slate-300 mb-1">
                {cert.issuer}
              </p>
              <p className="text-[11px] font-mono text-slate-500 mb-3">
                {cert.subtitle}
              </p>

              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                {cert.description}
              </p>
            </div>

            <div>
              <div className="pt-3 border-t border-slate-800/80 mb-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-2">
                  Skills Covered:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((s, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-slate-950 border border-slate-800 text-slate-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-800/60">
                <div className="flex items-center gap-1.5 text-xs text-slate-300 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  <span>Verified Credential</span>
                </div>

                {cert.fileUrl && (
                  <a
                    href={cert.fileUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                )}
              </div>
            </div>
          </Card3D>
        ))}
      </div>
    </section>
  );
};

export default Certifications;