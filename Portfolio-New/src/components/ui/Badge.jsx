import React from "react";
import { cn } from "../../utils/cn";

export const Badge = ({
  className,
  variant = "default",
  children,
  icon,
  ...props
}) => {
  const variants = {
    default:
      "bg-white/5 text-slate-300 border-white/10 hover:border-white/20",
    cyan: "bg-white/5 text-slate-300 border-white/10 hover:border-white/20",
    emerald:
      "bg-white/5 text-slate-300 border-white/10 hover:border-white/20",
    amber:
      "bg-white/5 text-slate-300 border-white/10 hover:border-white/20",
    outline:
      "border-slate-800 bg-slate-950/60 text-slate-400 hover:border-slate-700",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border backdrop-blur-sm transition-colors",
        variants[variant],
        className
      )}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
};

export default Badge;
