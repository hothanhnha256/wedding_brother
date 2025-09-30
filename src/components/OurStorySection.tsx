"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import SmoothReveal from "./SmoothReveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function OurStorySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !imageRef.current || !textRef.current) return;

    // GSAP ScrollTrigger animations
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: -100, scale: 0.8 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section
      id="story"
      ref={sectionRef}
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 opacity-5">
        <svg viewBox="0 0 100 100" className="w-full h-full text-stone-200">
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SmoothReveal delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4">
              Our Story
            </h2>
            <div className="w-24 h-1 bg-stone-300 mx-auto"></div>
          </div>
        </SmoothReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div ref={imageRef} className="relative">
            <motion.div
              className="aspect-square bg-stone-200 rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-full h-full bg-gradient-to-br from-stone-300 to-stone-400 flex items-center justify-center relative">
                <span className="text-stone-600 text-lg font-light">
                  Our Photo
                </span>

                {/* Decorative hearts */}
                <motion.div
                  className="absolute top-4 right-4 w-6 h-6 text-pink-300"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <div ref={textRef} className="space-y-6">
            <SmoothReveal delay={0.4}>
              <h3 className="text-2xl font-serif text-stone-800">How We Met</h3>
            </SmoothReveal>

            <SmoothReveal delay={0.6}>
              <p className="text-stone-600 leading-relaxed">
                It was a crisp autumn morning at the local coffee shop when our
                eyes first met. Anna was reading her favorite novel, while David
                was working on his laptop at the next table. A simple "excuse
                me, is this seat taken?" turned into hours of conversation and
                the beginning of our beautiful love story.
              </p>
            </SmoothReveal>

            <SmoothReveal delay={0.8}>
              <p className="text-stone-600 leading-relaxed">
                Three years later, during a sunset walk on the beach where we
                had our first date, David got down on one knee and asked the
                question that would change our lives forever. We can't wait to
                celebrate this special day with all of you!
              </p>
            </SmoothReveal>

            <SmoothReveal delay={1}>
              <div className="flex items-center space-x-4 pt-4">
                <div className="w-16 h-px bg-stone-300"></div>
                <motion.div
                  className="w-4 h-4 text-pink-300"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </motion.div>
                <div className="w-16 h-px bg-stone-300"></div>
              </div>
            </SmoothReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
