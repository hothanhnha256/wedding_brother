"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { DoorIntro } from "./components/DoorIntro";
/**
 * Minimal Wedding Invitation Design
 * Inspired by modern wedding trends: clean, neutral, elegant
 * - Soft color palette: whites, beiges, dusty rose
 * - Minimal decorative elements
 * - Clean typography with generous white space
 * - Subtle animations and interactions
 * - Floating particles and heart animations
 * - Background music with controls
 */

/* ---------------------- Advanced Animations ---------------------- */
function FloatingParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        initialX:
          Math.random() *
          (typeof window !== "undefined" ? window.innerWidth : 1200),
        duration: Math.random() * 20 + 15,
        delay: Math.random() * 10,
      })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-stone-200 rounded-full opacity-30"
          initial={{
            x: particle.initialX,
            y: typeof window !== "undefined" ? window.innerHeight + 50 : 800,
          }}
          animate={{
            y: -50,
            x: particle.initialX + (Math.random() - 0.5) * 100,
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
}

function HeartAnimation({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`${className} text-pink-200`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: [0, 1.2, 1],
        opacity: [0, 1, 0.7],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatDelay: 3,
        ease: "easeInOut",
      }}
    >
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    </motion.div>
  );
}

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-200 to-stone-300 z-50 origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

/* ---------------------- Hidden Background Music ---------------------- */
function HiddenBackgroundMusic() {
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(
    null
  );
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  useEffect(() => {
    // Tạo audio element ẩn
    const audio = new Audio("/taylor-swift-love-story.mp3");
    audio.loop = true;
    audio.volume = 0.2; // Volume nhẹ để không làm phiền
    audio.preload = "auto";

    // Event listeners
    audio.addEventListener("canplaythrough", () => {
      console.log("Background music ready");
    });

    audio.addEventListener("error", (e) => {
      console.log("Background music error:", e);
    });

    setAudioElement(audio);

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  // Auto-play sau khi user có interaction đầu tiên
  useEffect(() => {
    const handleFirstInteraction = async () => {
      if (!hasUserInteracted && audioElement) {
        setHasUserInteracted(true);
        try {
          await audioElement.play();
          console.log("Background music started");
        } catch (error) {
          console.log("Autoplay blocked:", error);
        }
      }
    };

    const events = ["click", "touchstart", "scroll", "keydown"];
    events.forEach((event) => {
      document.addEventListener(event, handleFirstInteraction, { once: true });
    });

    return () => {
      events.forEach((event) => {
        document.removeEventListener(event, handleFirstInteraction);
      });
    };
  }, [audioElement, hasUserInteracted]);

  // Component này không render gì cả - chỉ chạy nhạc nền
  return null;
}

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
  as?: React.ElementType;
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-light relative overflow-x-hidden">
      <DoorIntro
        onFinish={() => {
          /* bạn có thể bật nhạc/analytics ở đây */
        }}
      />
      {/* Advanced Background Effects */}
      <ScrollProgressBar />
      <FloatingParticles />
      <HiddenBackgroundMusic />

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
        <MinimalFloral className="absolute bottom-32 left-8 w-24 h-24 opacity-20" />
        <MinimalFloral
          className="absolute top-1/3 left-1/4 w-16 h-16 opacity-20"
          color="#D6D3D1"
        />
        <MinimalFloral
          className="absolute bottom-1/4 right-1/3 w-20 h-20 opacity-15"
          color="#A8A29E"
        />
        <HeartAnimation className="absolute top-1/3 left-1/4 w-8 h-8" />
        <HeartAnimation className="absolute top-2/3 right-1/3 w-6 h-6" />
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

/* ---------------------- Interactive Effects ---------------------- */
function InteractiveHeart({ className = "" }: { className?: string }) {
  const [clicked, setClicked] = useState(false);
  const [hearts, setHearts] = useState<
    Array<{ id: number; x: number; y: number }>
  >([]);

  const handleClick = useCallback((event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const newHeart = {
      id: Date.now(),
      x: x - 12, // Adjust for heart size
      y: y - 12,
    };

    setHearts((prev) => [...prev, newHeart]);
    setClicked(true);

    setTimeout(() => setClicked(false), 300);
    setTimeout(() => {
      setHearts((prev) => prev.filter((heart) => heart.id !== newHeart.id));
    }, 2000);
  }, []);

  return (
    <div
      className={`relative cursor-pointer ${className}`}
      onClick={handleClick}
    >
      <motion.div
        animate={clicked ? { scale: [1, 1.2, 1] } : {}}
        transition={{ duration: 0.3 }}
      >
        <HeartAnimation />
      </motion.div>

      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute w-6 h-6 text-pink-400 pointer-events-none"
          style={{ left: heart.x, top: heart.y }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{
            scale: [0, 1, 0],
            y: [0, -50],
            opacity: [1, 1, 0],
          }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

function ClickableImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
        transition={{ duration: 0.3 }}
      />

      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            className="w-8 h-8 text-stone-700"
            fill="currentColor"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
      </motion.div>
    </motion.div>
  );
}

function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="grid grid-cols-4 gap-4 text-center">
      {Object.entries(timeLeft).map(([unit, value], index) => (
        <motion.div
          key={unit}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            className="text-2xl lg:text-3xl font-light text-stone-900"
            key={value} // Re-animate when value changes
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {value.toString().padStart(2, "0")}
          </motion.div>
          <div className="text-xs text-stone-500 uppercase tracking-wide mt-1">
            {unit}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
function Hero({ data }: { data: WeddingData }) {
  return (
    <Section className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      {/* Interactive background hearts */}
      <InteractiveHeart className="absolute top-1/4 left-1/4 w-12 h-12 opacity-60" />
      <InteractiveHeart className="absolute top-2/3 right-1/4 w-8 h-8 opacity-40" />

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
            <p className="text-sm text-stone-500 mb-8">{data.venue.name}</p>
          </SmoothReveal>

          <SmoothReveal delay={1.2}>
            <div className="max-w-md mx-auto">
              <p className="text-sm text-stone-500 mb-4">
                Countdown to our special day
              </p>
              <CountdownTimer targetDate={data.date.iso} />
            </div>
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
                <ClickableImage
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="aspect-square rounded-lg shadow-lg"
                />
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
