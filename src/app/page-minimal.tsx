"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";

/**
 * Minimal Wedding Invitation Design
 * Inspired by modern wedding trends: clean, neutral, elegant
 * - Soft color palette: whites, beiges, dusty rose
 * - Minimal decorative elements
 * - Clean typography with generous white space
 * - Subtle animations and interactions
 */

/* ---------------------- Minimal Decorative Elements ---------------------- */
function MinimalFloral({
  className = "",
  color = "#E5E7EB",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <motion.svg
      className={className}
      viewBox="0 0 120 120"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      <g stroke={color} strokeWidth="1" fill="none">
        {/* Minimal leaf branch */}
        <path d="M30 60 Q45 45 60 60 Q75 75 90 60" strokeLinecap="round" />
        <path d="M45 55 Q50 45 55 55" strokeLinecap="round" />
        <path d="M65 65 Q70 75 75 65" strokeLinecap="round" />

        {/* Simple dots */}
        <circle cx="35" cy="65" r="1.5" fill={color} />
        <circle cx="85" cy="55" r="1.5" fill={color} />
        <circle cx="60" cy="50" r="1" fill={color} />
      </g>
    </motion.svg>
  );
}

function MinimalRing({
  className = "",
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, delay, ease: "easeOut" }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="currentColor"
          strokeWidth="0.5"
          fill="none"
          className="text-stone-200"
        />
      </svg>
    </motion.div>
  );
}

/* ---------------------- Smooth Scroll Effects ---------------------- */
function SmoothReveal({
  children,
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}) {
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: 40, opacity: 0 };
      case "down":
        return { y: -40, opacity: 0 };
      case "left":
        return { x: -40, opacity: 0 };
      case "right":
        return { x: 40, opacity: 0 };
      default:
        return { y: 40, opacity: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
}

function TypographyReveal({
  text,
  as: Tag = "h2",
  className = "",
  delay = 0,
}: {
  text: string;
  as?: any;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
    >
      <Tag className={className}>{text}</Tag>
    </motion.div>
  );
}

/* ---------------------- Interactive Elements ---------------------- */
function MinimalButton({
  href,
  children,
  className = "",
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
}) {
  const baseClasses =
    "inline-flex items-center justify-center px-8 py-3 rounded-none border transition-all duration-300 font-light tracking-wide";
  const variants = {
    primary:
      "bg-stone-900 text-white border-stone-900 hover:bg-white hover:text-stone-900",
    secondary:
      "bg-transparent text-stone-700 border-stone-300 hover:border-stone-900 hover:text-stone-900",
  };

  return (
    <motion.a
      href={href}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.a>
  );
}

/* ---------------------- Types ---------------------- */
interface ScheduleItem {
  time: string;
  title: string;
}
interface WeddingData {
  couple: { groom: string; bride: string };
  date: { display: string; iso: string };
  venue: { name: string; address: string; mapUrl: string };
  schedule: ScheduleItem[];
  rsvp: { primaryActionText: string; url: string };
  album: string[];
  gift: { note: string; bank: string };
  socials: { hashtag: string };
}

/* ---------------------- Data ---------------------- */
const data: WeddingData = {
  couple: { groom: "Hồ Hải Đăng", bride: "Nguyễn My" },
  date: { display: "10 tháng 10, 2025", iso: "2025-10-10T17:00:00+07:00" },
  venue: {
    name: "Nhà hàng Gia Phúc",
    address: "123 Nguyễn Huệ, Quận 1, TP.HCM",
    mapUrl: "https://maps.google.com/?q=123+Nguyen+Hue+Q1+HCMC",
  },
  schedule: [
    { time: "17:00", title: "Đón khách" },
    { time: "18:00", title: "Lễ cưới" },
    { time: "19:30", title: "Tiệc cưới" },
    { time: "21:30", title: "Kết thúc" },
  ],
  rsvp: {
    primaryActionText: "Xác nhận tham dự",
    url: "mailto:my.nguyen@example.com?subject=RSVP%20Wedding&body=Họ%20tên%3A%0ASố%20lượng%3A%0AGhi%20chú%3A",
  },
  album: [
    "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop",
  ],
  gift: {
    note: "Tình cảm chân thành là món quà quý báu nhất.",
    bank: "Techcombank: 1234 567 890 (Nguyễn My)",
  },
  socials: { hashtag: "#DangMy2025" },
};

/* ---------------------- Layout ---------------------- */
function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">{children}</div>
  );
}

function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`py-16 lg:py-24 ${className}`}>{children}</section>
  );
}

/* ---------------------- Main Component ---------------------- */
export default function MinimalWeddingInvite() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -50]);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-light">
      {/* Minimal background elements */}
      <motion.div
        className="fixed inset-0 pointer-events-none"
        style={{ y: backgroundY }}
      >
        <MinimalRing
          className="absolute top-20 right-10 w-32 h-32 text-stone-100 opacity-40"
          delay={0.5}
        />
        <MinimalRing
          className="absolute bottom-40 left-8 w-24 h-24 text-stone-100 opacity-30"
          delay={1}
        />
        <MinimalFloral
          className="absolute top-1/3 left-1/4 w-16 h-16 opacity-20"
          color="#D6D3D1"
        />
        <MinimalFloral
          className="absolute bottom-1/4 right-1/3 w-20 h-20 opacity-15"
          color="#A8A29E"
        />
      </motion.div>

      <div className="relative z-10">
        <Hero data={data} />
        <CoupleNames data={data} />
        <DateVenue data={data} />
        <Schedule data={data} />
        <Gallery data={data} />
        <RSVP data={data} />
        <Footer data={data} />
      </div>
    </div>
  );
}

/* ---------------------- Sections ---------------------- */
function Hero({ data }: { data: WeddingData }) {
  return (
    <Section className="min-h-screen flex items-center justify-center bg-white">
      <Container>
        <div className="text-center space-y-8">
          <SmoothReveal delay={0.2}>
            <p className="text-sm text-stone-500 tracking-[0.2em] uppercase">
              Wedding Invitation
            </p>
          </SmoothReveal>

          <SmoothReveal delay={0.4}>
            <h1 className="text-4xl lg:text-6xl font-light text-stone-900 leading-tight">
              {data.couple.groom}
              <span className="block text-stone-400 text-2xl lg:text-3xl my-4">
                &
              </span>
              {data.couple.bride}
            </h1>
          </SmoothReveal>

          <SmoothReveal delay={0.6}>
            <div className="w-24 h-px bg-stone-300 mx-auto" />
          </SmoothReveal>

          <SmoothReveal delay={0.8}>
            <p className="text-lg text-stone-600">{data.date.display}</p>
          </SmoothReveal>

          <SmoothReveal delay={1}>
            <p className="text-sm text-stone-500">{data.venue.name}</p>
          </SmoothReveal>
        </div>
      </Container>
    </Section>
  );
}

function CoupleNames({ data }: { data: WeddingData }) {
  return (
    <Section className="bg-stone-100">
      <Container>
        <div className="text-center max-w-2xl mx-auto space-y-8">
          <TypographyReveal
            text="Chúng mình cùng nhau"
            as="h2"
            className="text-2xl lg:text-3xl font-light text-stone-800"
            delay={0.2}
          />

          <SmoothReveal delay={0.4}>
            <p className="text-stone-600 leading-relaxed">
              Chúng mình rất vui khi được chia sẻ khoảnh khắc đặc biệt này với
              những người thân yêu nhất. Sự hiện diện của bạn sẽ làm cho ngày
              cưới của chúng mình trở nên trọn vẹn và ý nghĩa hơn.
            </p>
          </SmoothReveal>

          <SmoothReveal delay={0.6}>
            <div className="flex justify-center">
              <MinimalFloral className="w-16 h-16" color="#A8A29E" />
            </div>
          </SmoothReveal>
        </div>
      </Container>
    </Section>
  );
}

function DateVenue({ data }: { data: WeddingData }) {
  return (
    <Section className="bg-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          <SmoothReveal delay={0.2} direction="left">
            <div className="space-y-4">
              <h3 className="text-xl font-light text-stone-900">Thời gian</h3>
              <div className="w-12 h-px bg-stone-300" />
              <p className="text-stone-600">{data.date.display}</p>
              <p className="text-sm text-stone-500">Thứ Sáu, 17:00 - 21:30</p>
            </div>
          </SmoothReveal>

          <SmoothReveal delay={0.4} direction="right">
            <div className="space-y-4">
              <h3 className="text-xl font-light text-stone-900">Địa điểm</h3>
              <div className="w-12 h-px bg-stone-300" />
              <p className="text-stone-600">{data.venue.name}</p>
              <p className="text-sm text-stone-500">{data.venue.address}</p>
              <div className="pt-2">
                <a
                  href={data.venue.mapUrl}
                  className="text-stone-800 underline underline-offset-4 text-sm hover:text-stone-600 transition-colors"
                >
                  Xem bản đồ
                </a>
              </div>
            </div>
          </SmoothReveal>
        </div>
      </Container>
    </Section>
  );
}

function Schedule({ data }: { data: WeddingData }) {
  return (
    <Section className="bg-stone-100">
      <Container>
        <div className="text-center space-y-12">
          <TypographyReveal
            text="Chương trình"
            as="h2"
            className="text-2xl lg:text-3xl font-light text-stone-900"
            delay={0.2}
          />

          <div className="max-w-lg mx-auto space-y-6">
            {data.schedule.map((item, index) => (
              <SmoothReveal key={index} delay={0.4 + index * 0.1}>
                <div className="flex justify-between items-center py-3 border-b border-stone-200 last:border-b-0">
                  <span className="text-stone-500 text-sm">{item.time}</span>
                  <span className="text-stone-800">{item.title}</span>
                </div>
              </SmoothReveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function Gallery({ data }: { data: WeddingData }) {
  return (
    <Section className="bg-white">
      <Container>
        <div className="text-center space-y-12">
          <TypographyReveal
            text="Khoảnh khắc"
            as="h2"
            className="text-2xl lg:text-3xl font-light text-stone-900"
            delay={0.2}
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {data.album.map((image, index) => (
              <SmoothReveal key={index} delay={0.4 + index * 0.1}>
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </SmoothReveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function RSVP({ data }: { data: WeddingData }) {
  return (
    <Section className="bg-stone-900 text-white">
      <Container>
        <div className="text-center space-y-8">
          <TypographyReveal
            text="Xác nhận tham dự"
            as="h2"
            className="text-2xl lg:text-3xl font-light"
            delay={0.2}
          />

          <SmoothReveal delay={0.4}>
            <p className="text-stone-300 max-w-lg mx-auto">
              Vui lòng xác nhận sự hiện diện của bạn trước ngày 25/09/2025
            </p>
          </SmoothReveal>

          <SmoothReveal delay={0.6}>
            <div className="space-y-4">
              <MinimalButton
                href={data.rsvp.url}
                variant="secondary"
                className="border-white text-white hover:bg-white hover:text-stone-900"
              >
                {data.rsvp.primaryActionText}
              </MinimalButton>
            </div>
          </SmoothReveal>
        </div>
      </Container>
    </Section>
  );
}

function Footer({ data }: { data: WeddingData }) {
  return (
    <Section className="bg-white">
      <Container>
        <div className="text-center space-y-8">
          <SmoothReveal delay={0.2}>
            <p className="text-stone-600 italic">{data.gift.note}</p>
          </SmoothReveal>

          <SmoothReveal delay={0.4}>
            <div className="space-y-2 text-sm text-stone-500">
              <p>Mừng cưới:</p>
              <p>{data.gift.bank}</p>
            </div>
          </SmoothReveal>

          <SmoothReveal delay={0.6}>
            <div className="w-16 h-px bg-stone-300 mx-auto" />
          </SmoothReveal>

          <SmoothReveal delay={0.8}>
            <p className="text-stone-400 text-sm tracking-wider">
              {data.socials.hashtag}
            </p>
          </SmoothReveal>

          <SmoothReveal delay={1}>
            <div className="flex justify-center">
              <MinimalFloral className="w-12 h-12" color="#D6D3D1" />
            </div>
          </SmoothReveal>
        </div>
      </Container>
    </Section>
  );
}
