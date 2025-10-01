"use client";
import { Great_Vibes } from "next/font/google";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import SmoothReveal from "./SmoothReveal";
import CountdownTimer from "./CountdownTimer";
import HeartAnimation from "./HeartAnimation";
const amsterdam = Great_Vibes({
  weight: "400", // chọn weight có trong font
  subsets: ["latin"], // tuỳ ngôn ngữ
});
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
      className="min-h-screen mt-22 md:mt-40  bg-gradient-to-br from-white via-gray-50 to-stone-100 flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-stone-100 opacity-90 z-0"></div>

      {/* Background Image (Chìm) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 z-0"
        style={{
          backgroundImage: "url('/preimg/hero.JPG')",
          filter: "grayscale(100%) brightness(1.1) contrast(0.9)",
        }}
      ></div>
      {/* Floating Hearts với Framer Motion */}
      <HeartAnimation className="absolute top-1/4 left-1/4 w-8 h-8 opacity-60" />
      <HeartAnimation className="absolute top-2/3 right-1/4 w-6 h-6 opacity-40" />
      <HeartAnimation className="absolute bottom-1/4 left-1/3 w-4 h-4 opacity-50" />

      {/* Pattern background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23374151' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
        }}
      />

      <div className="text-center px-4 max-w-4xl mx-auto relative z-10">
        {/* Save Our Date Script */}
        <SmoothReveal delay={0.2}>
          <div className="mb-8">
            <p
              className={`${amsterdam.className} text-6xl md:text-9xl text-gray-600`}
            >
              Save
            </p>
            <p
              className={`${amsterdam.className} text-4xl md:text-6xl text-gray-600 -mt-2`}
            >
              our
            </p>
            <p
              className={`${amsterdam.className} text-6xl md:text-9xl text-gray-600 -mt-2`}
            >
              Date
            </p>
          </div>
        </SmoothReveal>

        <h1
          ref={titleRef}
          className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight tracking-[0.3em] uppercase"
        >
          Hồ ĐĂNG
          <span className="block text-lg md:text-xl text-gray-600 mt-4 mb-4 italic tracking-normal font-[var(--font-dancing-script)]">
            and
          </span>
          MY NGUYỄN
        </h1>

        <SmoothReveal delay={0.6}>
          <div className="w-32 h-px bg-gray-400 mx-auto mb-8" />
        </SmoothReveal>

        <SmoothReveal delay={0.8}>
          <div className="text-center mb-12">
            <p className="text-6xl md:text-7xl font-light text-gray-900 mb-2 tracking-wider">
              29
            </p>
            <p className="text-3xl md:text-4xl font-light text-gray-800 mb-2 tracking-wider">
              10
            </p>
            <p className="text-2xl md:text-3xl font-light text-gray-700 mb-6 tracking-wider">
              25
            </p>
            <div className="w-32 h-px bg-gray-400 mx-auto mb-6"></div>
            <p className="text-sm text-gray-600 uppercase tracking-[0.2em] mb-2">
              October 29, 2025
            </p>
            <p className="text-sm text-gray-600 italic font-[var(--font-dancing-script)]">
              Bình Định, Vietnam
            </p>
          </div>
        </SmoothReveal>

        <SmoothReveal delay={1.2}>
          <div className="max-w-md mx-auto">
            <CountdownTimer targetDate="2025-10-29T11:00:00+07:00" />
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
            className="text-gray-600 hover:text-gray-800 transition-colors cursor-pointer w-10 h-10 flex items-center justify-center"
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
