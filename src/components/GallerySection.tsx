"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SmoothReveal from "./SmoothReveal";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
    alt: "Engagement Photo 1",
    category: "engagement",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800&auto=format&fit=crop",
    alt: "Pre-wedding Photo 1",
    category: "prewedding",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=800&auto=format&fit=crop",
    alt: "Couple Photo 1",
    category: "couple",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop",
    alt: "Engagement Photo 2",
    category: "engagement",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop",
    alt: "Pre-wedding Photo 2",
    category: "prewedding",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=800&auto=format&fit=crop",
    alt: "Couple Photo 2",
    category: "couple",
  },
];

const categories = [
  { id: "all", name: "All Photos" },
  { id: "engagement", name: "Engagement" },
  { id: "prewedding", name: "Pre-wedding" },
  { id: "couple", name: "Couple" },
];

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 right-10 w-40 h-40 opacity-3">
        <motion.svg
          viewBox="0 0 120 120"
          className="w-full h-full text-stone-200"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <path
            d="M60 20 L80 60 L60 100 L40 60 Z"
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SmoothReveal delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4">
              Our Memories
            </h2>
            <div className="w-24 h-1 bg-stone-300 mx-auto mb-6"></div>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Capturing the beautiful moments of our journey together
            </p>
          </div>
        </SmoothReveal>

        {/* Category Filter */}
        <SmoothReveal delay={0.4}>
          <div className="flex justify-center mb-12">
            <div className="flex space-x-2 bg-stone-50 p-2 rounded-2xl">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-stone-700 text-white shadow-lg"
                      : "text-stone-700 hover:text-stone-900 hover:bg-stone-100"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>
          </div>
        </SmoothReveal>

        {/* Gallery Grid */}
        <motion.div className="grid grid-cols-2 md:grid-cols-3 gap-4" layout>
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative aspect-square group cursor-pointer overflow-hidden rounded-2xl shadow-lg"
                whileHover={{ scale: 1.05, y: -5 }}
                onClick={() => setSelectedImage(image.id)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />

                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                >
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm font-medium capitalize">
                      {image.category}
                    </p>
                  </div>
                </motion.div>

                {/* Heart icon on hover */}
                <motion.div
                  className="absolute top-4 right-4 w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.2 }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        <SmoothReveal delay={0.8}>
          <div className="text-center mt-12">
            <motion.button
              className="inline-flex items-center px-8 py-3 bg-stone-700 text-white rounded-full hover:bg-stone-800 transition-colors duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">View Full Album</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </motion.button>
          </div>
        </SmoothReveal>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] m-4 aspect-square"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={
                  galleryImages.find((img) => img.id === selectedImage)?.src ||
                  ""
                }
                alt={
                  galleryImages.find((img) => img.id === selectedImage)?.alt ||
                  ""
                }
                fill
                className="object-contain rounded-2xl shadow-2xl"
                sizes="90vw"
              />

              {/* Close button */}
              <motion.button
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                onClick={() => setSelectedImage(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
