"use client";

import React from "react";
import { motion } from "framer-motion";
import SmoothReveal from "./SmoothReveal";

const weddingEvents = [
  {
    time: "17:00",
    title: "Đón khách",
    description: "Welcome guests & cocktail",
  },
  { time: "18:00", title: "Lễ cưới", description: "Wedding ceremony" },
  {
    time: "19:30",
    title: "Tiệc cưới",
    description: "Wedding reception & dinner",
  },
  { time: "21:30", title: "Kết thúc", description: "End of celebration" },
];

export default function EventsSection() {
  return (
    <section id="events" className="py-20 bg-stone-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40">
          <motion.svg
            viewBox="0 0 120 120"
            className="w-full h-full text-stone-300"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          >
            <circle
              cx="60"
              cy="60"
              r="50"
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
            />
            <circle
              cx="60"
              cy="60"
              r="30"
              stroke="currentColor"
              strokeWidth="0.3"
              fill="none"
            />
          </motion.svg>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <SmoothReveal delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4">
              Wedding Events
            </h2>
            <div className="w-24 h-1 bg-stone-300 mx-auto mb-6"></div>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Join us for a day filled with love, laughter, and unforgettable
              memories
            </p>
          </div>
        </SmoothReveal>

        <div className="max-w-2xl mx-auto">
          {weddingEvents.map((event, index) => (
            <SmoothReveal key={index} delay={0.4 + index * 0.1}>
              <motion.div
                className="flex items-center mb-8 last:mb-0"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="flex-shrink-0 w-20 text-right mr-8">
                  <motion.div
                    className="text-2xl font-light text-stone-800"
                    whileHover={{ scale: 1.1 }}
                  >
                    {event.time}
                  </motion.div>
                </div>

                <div className="flex-shrink-0 relative mr-8">
                  <motion.div
                    className="w-4 h-4 bg-stone-800 rounded-full"
                    whileHover={{ scale: 1.5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  />
                  {index < weddingEvents.length - 1 && (
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-px h-16 bg-stone-300"></div>
                  )}
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-serif text-stone-800 mb-1">
                    {event.title}
                  </h3>
                  <p className="text-stone-600 text-sm">{event.description}</p>
                </div>
              </motion.div>
            </SmoothReveal>
          ))}
        </div>

        <SmoothReveal delay={1.2}>
          <div className="text-center mt-16">
            <motion.div
              className="inline-block bg-white rounded-2xl p-8 shadow-lg border border-stone-200"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <h3 className="text-xl font-serif text-stone-800 mb-4">
                Location
              </h3>
              <p className="text-stone-600 mb-2">
                Grand Ballroom, The Ritz-Carlton
              </p>
              <p className="text-sm text-stone-500 mb-4">
                123 Luxury Avenue, Downtown
              </p>
              <motion.a
                href="https://maps.google.com"
                className="inline-flex items-center text-stone-800 text-sm hover:text-stone-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                View on Map
              </motion.a>
            </motion.div>
          </div>
        </SmoothReveal>
      </div>
    </section>
  );
}
