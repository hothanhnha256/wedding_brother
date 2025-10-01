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
      className="py-20 bg-orange-50 relative overflow-hidden"
    >
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
              Chuyện Tình Chúng Tôi
            </h2>
            <div className="w-24 h-1 bg-stone-300 mx-auto"></div>
          </div>
        </SmoothReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div ref={imageRef} className="relative">
            <motion.div
              className="aspect-square bg-stone-100 rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-full h-full bg-gradient-to-br from-stone-200 to-stone-300 flex items-center justify-center relative">
                <span className="text-stone-700 text-lg font-light">
                  Our Photo
                </span>
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
              <h3 className="text-2xl font-serif text-stone-800">
                Câu Chuyện Tình Yêu
              </h3>
            </SmoothReveal>

            <SmoothReveal delay={0.6}>
              <p className="text-stone-700 leading-relaxed">
                Tình duyên đã an bài cho chúng tôi gặp nhau trong một buổi chiều
                mùa thu. My đang đọc sách trong quán cà phê yêu thích, còn Đăng
                thì đang làm việc trên laptop ở bàn bên cạnh. Một câu hỏi đơn
                giản "Chỗ này có ai ngồi không?" đã mở ra cuộc trò chuyện kéo
                dài hàng giờ và khởi đầu cho câu chuyện tình yêu đẹp của chúng
                tôi.
              </p>
            </SmoothReveal>

            <SmoothReveal delay={0.8}>
              <p className="text-stone-700 leading-relaxed">
                Ba năm sau, trong một buổi chiều tà trên bãi biển nơi chúng tôi
                có buổi hẹn đầu tiên, Đăng đã quỳ gối và hỏi câu hỏi sẽ thay đổi
                cuộc đời chúng tôi mãi mãi. Chúng tôi rất hạnh phúc được chia sẻ
                ngày đặc biệt này cùng tất cả mọi người!
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
