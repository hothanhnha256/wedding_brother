"use client";

import React from "react";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import OurStorySection from "../components/OurStorySection";
import EventsSection from "../components/EventsSection";
import GallerySection from "../components/GallerySection";
import RSVPSection from "../components/RSVPSection";
import FloatingParticles from "../components/FloatingParticles";
import ScrollProgressBar from "../components/ScrollProgressBar";

export default function Home() {
  return (
    <main className="relative">
      {/* Background Effects */}
      <ScrollProgressBar />
      <FloatingParticles />

      {/* Main Content */}
      <Navigation />
      <div id="home">
        <HeroSection />
      </div>
      <OurStorySection />
      <EventsSection />
      <GallerySection />
      <RSVPSection />
    </main>
  );
}
