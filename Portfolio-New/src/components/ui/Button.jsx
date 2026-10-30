import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { cn } from "../../utils/cn";
import { playSound } from "../../utils/sound";

export const Button = React.forwardRef(
  (
    {
      className,
      variant = "default",
      size = "md",
      children,
      onClick,
      disabled,
      sound = "click",
      ...props
    },
    ref
  ) => {
    const soundEnabled = useSelector((state) => state.portfolio.soundEnabled);

    const handleClick = (e) => {
      if (disabled) return;
      if (sound) playSound(sound, soundEnabled);
      if (onClick) onClick(e);
    };

    const variants = {
      default:
        "bg-white text-slate-950 font-semibold hover:bg-slate-100 shadow-md border border-white/20 transition-all",
      glow:
        "bg-white text-slate-950 font-semibold hover:bg-slate-100 shadow-lg shadow-white/10 border border-white/30 transition-all",
      outline:
        "border border-slate-700 bg-slate-900/60 text-slate-200 hover:bg-slate-800 hover:text-white hover:border-slate-500 backdrop-blur-md",
      ghost:
        "text-slate-300 hover:text-white hover:bg-slate-800/60",
      secondary:
        "bg-slate-900 text-slate-200 hover:bg-slate-800 hover:text-white border border-slate-800 hover:border-slate-700",
      cyan:
        "bg-white text-slate-950 font-semibold hover:bg-slate-100 shadow-md",
    };

    const sizes = {
      sm: "h-8 px-3 text-xs rounded-lg gap-1.5",
      md: "h-10 px-4 text-sm rounded-xl gap-2",
      lg: "h-12 px-6 text-base rounded-xl gap-2.5",
      icon: "h-10 w-10 p-0 rounded-xl justify-center items-center",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.97 }}
        disabled={disabled}
        onClick={handleClick}
        className={cn(
          "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
export default Button;
