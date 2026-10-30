import React, { useEffect } from "react";
import { motion, useAnimate, stagger } from "framer-motion";
import { cn } from "../../utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
  highlightWords = [],
  filter = true,
  duration = 0.5,
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
        y: 0,
      },
      {
        duration: duration ? duration : 0.6,
        delay: stagger(0.12),
      }
    );
  }, [animate, duration, filter, words]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => {
          const isHighlight = highlightWords.some((hw) =>
            word.toLowerCase().includes(hw.toLowerCase())
          );
          return (
            <motion.span
              key={word + idx}
              className={cn(
                "inline-block opacity-0 translate-y-2 mr-2",
                isHighlight
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 font-extrabold"
                  : "text-slate-100"
              )}
              style={{
                filter: filter ? "blur(8px)" : "none",
              }}
            >
              {word}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="leading-snug tracking-wide">{renderWords()}</div>
    </div>
  );
};

export default TextGenerateEffect;
