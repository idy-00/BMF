"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function OpeningStatus() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const check = () => {
      const hour = new Date().getHours();
      setIsOpen(hour >= 16 || hour < 3);
    };
    check();
    setMounted(true);
    const interval = setInterval(check, 60000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex items-center gap-2 bg-[#161320] border border-[#6B4FA0]/30 rounded-full px-3 py-1.5"
    >
      <span
        className={`w-2 h-2 rounded-full ${
          isOpen
            ? "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"
            : "bg-[#A688D4] shadow-[0_0_8px_rgba(157,78,221,0.8)]"
        } animate-pulse`}
      />
      <span className={`text-xs font-semibold ${isOpen ? "text-emerald-400" : "text-[#A688D4]"}`}>
        {isOpen ? "Ouvert maintenant" : "Fermé — Ouvre à 16h00"}
      </span>
    </motion.div>
  );
}
