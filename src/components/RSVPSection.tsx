"use client";

import React from "react";
import { motion } from "framer-motion";
import SmoothReveal from "./SmoothReveal";

export default function RSVPSection() {
  return (
    <section
      id="rsvp"
      className="py-20 bg-stone-900 text-white relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-1/4 w-32 h-32 bg-white/5 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-white/5 rounded-full"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
        <SmoothReveal delay={0.2}>
          <h2 className="text-4xl md:text-5xl font-serif mb-8">RSVP</h2>
        </SmoothReveal>

        <SmoothReveal delay={0.4}>
          <p className="text-xl text-stone-200 mb-4">
            29 October & 21 November 2025
          </p>
          <p className="text-stone-300 mb-12 max-w-lg mx-auto">
            Kính mời Quý khách tham dự các buổi lễ cưới của chúng tôi. Sự hiện
            diện của Quý khách sẽ là niềm vinh hạnh lớn cho hai gia đình.
          </p>
        </SmoothReveal>

        <SmoothReveal delay={0.6}>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl max-w-md mx-auto mb-8">
            <form className="space-y-6">
              <div>
                <motion.input
                  type="text"
                  placeholder="Your Full Name"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/60 backdrop-blur-sm"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              </div>
              <div>
                <motion.input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/60 backdrop-blur-sm"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              </div>
              <div>
                <motion.select
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white backdrop-blur-sm"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <option value="" className="bg-stone-900">
                    Will you be attending?
                  </option>
                  <option value="yes" className="bg-stone-900">
                    Yes, I&apos;ll be there! ❤️
                  </option>
                  <option value="no" className="bg-stone-900">
                    Sorry, can&apos;t make it 😢
                  </option>
                </motion.select>
              </div>
              <div>
                <motion.input
                  type="number"
                  placeholder="Number of guests"
                  min="1"
                  max="5"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/60 backdrop-blur-sm"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              </div>
              <motion.button
                type="submit"
                className="w-full bg-white text-stone-900 py-3 px-6 rounded-lg hover:bg-white transition-colors font-medium"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Send RSVP
              </motion.button>
            </form>
          </div>
        </SmoothReveal>

        <SmoothReveal delay={0.8}>
          <div className="flex justify-center space-x-6 text-sm text-stone-300">
            <motion.a
              href="mailto:anna.david@wedding.com"
              className="hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              📧 Email us
            </motion.a>
            <motion.a
              href="tel:+1234567890"
              className="hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              📞 Call us
            </motion.a>
          </div>
        </SmoothReveal>
      </div>
    </section>
  );
}
