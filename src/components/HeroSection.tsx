"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import SmoothReveal from "./SmoothReveal";
import CountdownTimer from "./CountdownTimer";
import HeartAnimation from "./HeartAnimation";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP animations cho typography
    const tl = gsap.timeline();

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 80, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "power3.out" }
    ).fromTo(
      subtitleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
      "-=0.8"
    );

    // GSAP background parallax effect
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-stone-50 via-stone-100 to-stone-200 flex items-center justify-center relative overflow-hidden"
    >
      {/* Floating Hearts với Framer Motion */}
      <HeartAnimation className="absolute top-1/4 left-1/4 w-8 h-8 opacity-60" />
      <HeartAnimation className="absolute top-2/3 right-1/4 w-6 h-6 opacity-40" />
      <HeartAnimation className="absolute bottom-1/4 left-1/3 w-4 h-4 opacity-50" />

      {/* Pattern background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
        }}
      />

      <div className="text-center px-4 max-w-4xl mx-auto relative z-10">
        <SmoothReveal delay={0.2}>
          <p className="text-sm text-stone-600 tracking-[0.2em] uppercase mb-8">
            Wedding Invitation
          </p>
        </SmoothReveal>

        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-stone-800 mb-6 leading-tight"
        >
          My.Nguyen & Dang.Ho
        </h1>

        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-stone-700 mb-12 font-light tracking-wide"
        >
          are getting married
        </p>

        <SmoothReveal delay={0.6}>
          <div className="w-24 h-px bg-stone-300 mx-auto mb-8" />
        </SmoothReveal>

        <SmoothReveal delay={0.8}>
          <p className="text-lg text-stone-700 mb-2">December 15, 2024</p>
          <p className="text-sm text-stone-600 mb-12">
            Grand Ballroom, The Ritz-Carlton
          </p>
        </SmoothReveal>

        <SmoothReveal delay={1.2}>
          <div className="max-w-md mx-auto">
            <p className="text-sm text-stone-600 mb-6">
              Countdown to our special day
            </p>
            <CountdownTimer targetDate="2024-12-15T17:00:00+07:00" />
          </div>
        </SmoothReveal>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.a
            href="#story"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-stone-600 hover:text-stone-800 transition-colors cursor-pointer w-10 h-10 flex items-center justify-center"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
