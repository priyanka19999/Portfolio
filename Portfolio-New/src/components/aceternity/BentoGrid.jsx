import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[19rem] grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  badge,
  onClick,
  footer,
}) => {
  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      onClick={onClick}
      className={cn(
        "row-span-1 rounded-2xl group/bento hover:shadow-2xl hover:shadow-purple-500/10 transition duration-300 p-5 bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800/80 hover:border-purple-500/40 justify-between flex flex-col space-y-4 relative overflow-hidden backdrop-blur-sm",
        className
      )}
    >
      {/* Subtle ambient light gradient on top right */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover/bento:bg-purple-500/25 transition-all duration-500 pointer-events-none" />

      {header && <div className="w-full flex-1 min-h-[6rem]">{header}</div>}

      <div className="group-hover/bento:translate-x-1 transition duration-200 relative z-10">
        <div className="flex items-center justify-between mb-2">
          {icon && <div className="text-purple-400 group-hover/bento:text-cyan-400 transition-colors">{icon}</div>}
          {badge && (
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300">
              {badge}
            </span>
          )}
        </div>
        <div className="font-semibold text-slate-100 text-lg mb-1 group-hover/bento:text-purple-300 transition-colors">
          {title}
        </div>
        <div className="font-normal text-slate-400 text-sm leading-relaxed">
          {description}
        </div>
        {footer && <div className="mt-3 pt-3 border-t border-slate-800/80">{footer}</div>}
      </div>
    </motion.div>
  );
};

export default BentoGrid;
