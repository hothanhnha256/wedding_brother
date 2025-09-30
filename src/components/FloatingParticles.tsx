"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";

export default function FloatingParticles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Tạo particles với GSAP
    const particles = Array.from({ length: 12 }, (_, i) => {
      const particle = document.createElement("div");
      particle.className =
        "absolute w-1 h-1 bg-stone-200 rounded-full opacity-30";
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      containerRef.current?.appendChild(particle);

      // GSAP animation cho mỗi particle
      gsap.to(particle, {
        y: -100,
        x: Math.random() * 50 - 25,
        duration: Math.random() * 10 + 10,
        repeat: -1,
        ease: "none",
        delay: Math.random() * 5,
      });

      return particle;
    });

    return () => {
      particles.forEach((particle) => particle.remove());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
    />
  );
}
