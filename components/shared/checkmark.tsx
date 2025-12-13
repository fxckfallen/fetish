"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CheckmarkAppleGlow() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className="flex items-center justify-center">
      <motion.div
        initial={{
          scale: 0.6,
          opacity: 0,
          boxShadow: "0 0 0px rgba(16,185,129,0)",
        }}
        animate={{
          scale: [0.6, 1.08, 1],
          opacity: 1,
          boxShadow: [
            "0 0 0px rgba(16,185,129,0)",
            "0 0 24px rgba(16,185,129,0.55)",
            "0 0 14px rgba(16,185,129,0.35)",
          ],
        }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
           // Apple timing curve
        }}
        className="w-20 h-20 rounded-full bg-emerald-400 flex items-center justify-center"
      >
        <svg viewBox="0 0 52 52" className="w-10 h-10">
          <motion.path
            d="M14 27 L22 35 L38 18"
            fill="none"
            stroke="white"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              delay: 0.18,
              duration: 0.45,
              ease: [0.4, 0, 0.2, 1],
            }}
          />
        </svg>
      </motion.div>
    </div>
  );
}
