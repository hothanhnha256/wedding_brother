"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * Minimal, single-file wedding invite you can deploy on Vercel.
 * - Tailwind CSS utility classes are used for styling; if not available, inline fallback styles keep it usable.
 * - Replace the data object to customize.
 * - For Vercel: you can scaffold a Vite or Next.js app and drop this component in `src/App.jsx` (Vite)
 *   or `app/page.tsx` (Next.js, convert to TSX) and copy tailwind setup. See deployment notes below.
 */

// TypeScript interfaces
interface ScheduleItem {
  time: string;
  title: string;
}

interface WeddingData {
  couple: {
    groom: string;
    bride: string;
  };
  date: {
    display: string;
    iso: string;
  };
  venue: {
    name: string;
    address: string;
    mapUrl: string;
  };
  banner: {
    image: string;
    overlayText: string;
  };
  schedule: ScheduleItem[];
  rsvp: {
    primaryActionText: string;
    url: string;
  };
  album: string[];
  gift: {
    note: string;
    bank: string;
  };
  socials: {
    hashtag: string;
  };
}

interface ComponentProps {
  data: WeddingData;
}

interface ContainerProps {
  children: React.ReactNode;
}

interface CardProps {
  children: React.ReactNode;
}

const data: WeddingData = {
  couple: {
    groom: "Hồ Hải Đăng",
    bride: "Nguyễn My",
  },
  date: {
    // Display text and ISO for SEO/structured data
    display: "Thứ sáu, 10.10.2025",
    iso: "2025-10-10T09:00:00+07:00",
  },
  venue: {
    name: "Trung Tâm Tiệc Cưới Hoa Sen",
    address: "123 Nguyễn Huệ, Quận 1, TP.HCM",
    mapUrl: "https://maps.google.com/?q=123+Nguyen+Hue+Q1+HCMC",
  },
  banner: {
    // Replace with your own hosted image (square-friendly works best ~ 2400×1600)
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop",
    overlayText: "Save the Date",
  },
  schedule: [
    { time: "17:00", title: "Đón khách" },
    { time: "18:00", title: "Khai tiệc" },
    { time: "19:30", title: "Nghi thức" },
    { time: "21:00", title: "Kết thúc" },
  ],
  rsvp: {
    primaryActionText: "Xác nhận tham dự",
    // Easiest: a Google Form link or mailto
    url: "mailto:nhanguyen@example.com?subject=RSVP%20Wedding&body=Họ%20tên%3A%0ASố%20lượng%3A%0AGhi%20chú%3A",
  },
  album: [
    "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1498354136128-58f790194fa7?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522673607200-175e0b2f7a9a?q=80&w=800&auto=format&fit=crop",
  ],
  gift: {
    note: "Thành ý của bạn là niềm hạnh phúc của chúng mình.",
    bank: "MoMo: 0901 234 567 (Nguyễn My)",
  },
  socials: {
    hashtag: "#DangMy1010",
  },
};

export default function WeddingInvite() {
  return (
    <div className="min-h-screen text-neutral-800 bg-gradient-to-b from-[#fffaf5] to-white">
      <Hero data={data} />
      <CoupleNames data={data} />
      <Details data={data} />
      <Timeline data={data} />
      <Gallery data={data} />
      <RSVP data={data} />
      <Footer data={data} />
    </div>
  );
}

function Container({ children }: ContainerProps) {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
  );
}

function Hero({ data }: ComponentProps) {
  return (
    <section className="relative">
      <img
        src={data.banner.image}
        alt="Banner"
        className="h-[60vh] w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/30" />
      <Container>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]"
          >
            <p className="uppercase tracking-[0.35em] text-sm mb-4">
              {data.banner.overlayText}
            </p>
            <h1 className="text-4xl sm:text-6xl font-light">
              {data.couple.groom} <span className="opacity-90">&amp;</span>{" "}
              {data.couple.bride}
            </h1>
            <p className="mt-4 text-lg sm:text-xl">{data.date.display}</p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function CoupleNames({ data }: ComponentProps) {
  return (
    <Container>
      <div className="text-center py-12">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-serif"
        >
          Trân trọng kính mời
        </motion.h2>
        <p className="mt-3 text-neutral-600">
          Đến chung vui cùng chúng mình trong ngày trọng đại.
        </p>
      </div>
    </Container>
  );
}

function Details({ data }: ComponentProps) {
  return (
    <Container>
      <div className="grid sm:grid-cols-2 gap-6 py-6">
        <Card>
          <h3 className="text-xl font-semibold mb-2">
            Thời gian &amp; Địa điểm
          </h3>
          <p>
            {data.date.display}
            <br />
            <span className="font-medium">{data.venue.name}</span>
            <br />
            {data.venue.address}
          </p>
          <a
            className="inline-block mt-4 rounded-2xl px-4 py-2 border border-neutral-300 hover:bg-neutral-50"
            href={data.venue.mapUrl}
            target="_blank"
            rel="noreferrer"
          >
            Xem bản đồ
          </a>
        </Card>
        <Card>
          <h3 className="text-xl font-semibold mb-2">Quà mừng</h3>
          <p className="mb-2">{data.gift.note}</p>
          <p className="font-medium">{data.gift.bank}</p>
          <div className="mt-4 p-3 rounded-xl bg-neutral-100 text-sm">
            Hashtag:{" "}
            <span className="font-semibold">{data.socials.hashtag}</span>
          </div>
        </Card>
      </div>
    </Container>
  );
}

function Timeline({ data }: ComponentProps) {
  return (
    <Container>
      <section className="py-6">
        <h3 className="text-center text-2xl font-serif mb-6">Lịch trình</h3>
        <ul className="grid sm:grid-cols-4 gap-4">
          {data.schedule.map((item: ScheduleItem, idx: number) => (
            <li
              key={idx}
              className="rounded-2xl border border-neutral-200 p-4 text-center"
            >
              <div className="text-lg font-semibold">{item.time}</div>
              <div className="text-neutral-600">{item.title}</div>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
}

function Gallery({ data }: ComponentProps) {
  return (
    <Container>
      <section className="py-6">
        <h3 className="text-center text-2xl font-serif mb-6">Album</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {data.album.map((src: string, i: number) => (
            <motion.img
              key={i}
              src={src}
              alt={`Album ${i + 1}`}
              className="aspect-square w-full object-cover rounded-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            />
          ))}
        </div>
      </section>
    </Container>
  );
}

function RSVP({ data }: ComponentProps) {
  return (
    <Container>
      <section className="py-10 text-center">
        <h3 className="text-2xl font-serif">
          Rất mong nhận được sự hiện diện của bạn
        </h3>
        <p className="mt-2 text-neutral-600">
          Nhấn nút bên dưới để xác nhận tham dự hoặc phản hồi giúp tụi mình
          chuẩn bị chu đáo hơn.
        </p>
        <a
          href={data.rsvp.url}
          className="inline-block mt-6 rounded-full px-6 py-3 bg-black text-white hover:bg-neutral-800"
        >
          {data.rsvp.primaryActionText}
        </a>
      </section>
    </Container>
  );
}

function Footer({ data }: ComponentProps) {
  return (
    <footer className="py-10">
      <Container>
        <div className="text-center text-sm text-neutral-500">
          <div>
            {data.couple.groom} &amp; {data.couple.bride} • {data.date.display}
          </div>
          <div className="mt-2">Hẹn gặp bạn tại {data.venue.name}!</div>
        </div>
      </Container>
    </footer>
  );
}

function Card({ children }: CardProps) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white/70 backdrop-blur-sm p-5 shadow-sm">
      {children}
    </div>
  );
}
