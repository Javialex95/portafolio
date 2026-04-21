"use client";

import { motion } from "motion/react";

interface TypingAnimationProps {
  text: string;
  delay?: number;
  className?: string;
}

const TypingAnimation = ({ text, delay = 0.1, className }: TypingAnimationProps) => {
  return (
    <span className={`inline-flex items-center ${className ?? ""}`}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * delay, duration: 0 }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
      <motion.span
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{
          delay: text.length * delay + 0.5,
          duration: 0.3,
        }}
        className="ml-0.5 inline-block w-0.5 h-[1em] bg-current"
      />
    </span>
  );
};

export default TypingAnimation;
