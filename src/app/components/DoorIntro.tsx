// --- DoorIntro: hiệu ứng cánh cửa mở ra ---
import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function DoorIntro({
  onFinish,
  duration = 2,
  delay = 1,
  showLogo = true,
}: {
  onFinish?: () => void;
  duration?: number;
  delay?: number;
  showLogo?: boolean;
}) {
  const prefersReduced = useReducedMotion();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Bật khóa cuộn trong lúc intro
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    // Nếu user thích giảm chuyển động -> bỏ intro
    if (prefersReduced) {
      endIntro();
    }

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function endIntro() {
    setVisible(false);
    onFinish?.();
  }

  if (!visible) return null;

  const doorCommon =
    "absolute top-0 h-screen w-1/2 will-change-transform [transform-style:preserve-3d]";
  const doorSkin =
    "absolute inset-0 bg-white text-stone-800 flex items-center justify-center border border-stone-200";
  const hingeShadow =
    "absolute inset-0 pointer-events-none shadow-2xl shadow-black/30";

  return (
    <div
      className="fixed inset-0 z-[9999] bg-stone-100"
      role="dialog"
      aria-label="Opening door intro"
      aria-modal="true"
    >
      {/* nền sau cánh cửa cho cảm giác phòng bên trong */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-100 to-stone-200" />

      {/* logo/monogram ở giữa (đứng yên, tăng cảm giác cửa mở) */}
      {showLogo && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="text-center">
            <div className="text-stone-900 text-3xl tracking-widest">
              Wedding Invitation
            </div>
            <div className="mt-2 text-stone-500">
              Hồ Hải Đăng &nbsp;•&nbsp; Nguyễn My
            </div>
          </div>
        </motion.div>
      )}

      {/* Hai cánh cửa */}
      <div className="absolute inset-0 [perspective:1200px]">
        {/* LEFT */}
        <motion.div
          className={`${doorCommon} left-0 origin-left`}
          initial={{ rotateY: 0 }}
          animate={{ rotateY: -95 }}
          transition={{ duration, delay, ease: [0.22, 1, 0.72, 2] }}
          onAnimationComplete={() => {
            // Khi cửa trái xong, chờ thêm 200ms cho đẹp rồi tắt overlay
            setTimeout(endIntro, 2000);
          }}
        >
          <div className={`${doorSkin} bg-white`}>
            {/* vân cửa tối giản */}
            <div className="absolute inset-6 border border-stone-200" />
            <div className="absolute inset-12 border border-stone-100" />
            {/* tay nắm cửa */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <div className="w-1.5 h-8 rounded-full bg-stone-400" />
            </div>
            {/* shadow tăng chiều sâu */}
            <div className={hingeShadow} />
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className={`${doorCommon} right-0 origin-right`}
          initial={{ rotateY: 0 }}
          animate={{ rotateY: 95 }}
          transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={`${doorSkin} bg-white`}>
            <div className="absolute inset-6 border border-stone-200" />
            <div className="absolute inset-12 border border-stone-100" />
            {/* tay nắm cửa bên trái cánh phải */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <div className="w-1.5 h-8 rounded-full bg-stone-400" />
            </div>
            <div className={hingeShadow} />
          </div>
        </motion.div>
      </div>

      {/* nút Skip */}
      <button
        onClick={endIntro}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs tracking-wide text-stone-600 hover:text-stone-900 transition-colors border border-stone-300 px-4 py-2 bg-white/80 backdrop-blur rounded"
      >
        Bỏ qua
      </button>
    </div>
  );
}
