"use client";

import React from "react";
import { motion, useScroll } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-200 to-stone-300 z-50 origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
