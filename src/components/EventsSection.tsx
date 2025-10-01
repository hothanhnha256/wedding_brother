"use client";

import React from "react";
import { motion } from "framer-motion";
import SmoothReveal from "./SmoothReveal";

const weddingEvents = [
  {
    date: "Tối 27/10/2025",
    time: "18:00",
    title: "Tổ chức ăn uống nhà",
    description: "Gia đình họp mặt & chuẩn bị",
    location: "Nhà Trai - Hoài Ân, Bình Định",
  },
  {
    date: "Chiều 28/10/2025",
    time: "17:30",
    title: "Lễ Vu Quy",
    description: "Bưng quả qua nhà gái",
    location: "Fleur De Lys Quy Nhơn - 16 Nguyễn Huệ, Quy Nhơn, Bình Định",
  },
  {
    date: "Sáng 29/10/2025",
    time: "11:00",
    title: "Lễ Tân Hôn",
    description: "Nhận quả trả - Thành hôn",
    location: "Nhà Hàng Tướng Duy - Hoài Ân, Bình Định",
  },
  {
    date: "Tối 21/11/2025",
    time: "18:00",
    title: "Tiệc Báo Hỷ",
    description: "Tiệc cưới mừng đám cưới",
    location: "Sài Gòn",
  },
];

export default function EventsSection() {
  return (
    <section id="events" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-3">
        <div className="absolute top-20 left-10 w-40 h-40">
          <motion.svg
            viewBox="0 0 120 120"
            className="w-full h-full text-gray-200"
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
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
              Lịch Trình Đám Cưới
            </h2>
            <div className="w-24 h-1 bg-gray-300 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Hành trình từ Vu Quy đến Tân Hôn của hai gia đình
            </p>
          </div>
        </SmoothReveal>

        <div className="max-w-4xl mx-auto">
          {weddingEvents.map((event, index) => (
            <SmoothReveal key={index} delay={0.4 + index * 0.1}>
              <motion.div
                className="flex flex-col md:flex-row items-start md:items-center mb-12 last:mb-0 bg-white rounded-2xl p-6 border border-gray-200 shadow-md"
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                  <div className="bg-gray-800 text-white rounded-full w-16 h-16 flex items-center justify-center">
                    <motion.div
                      className="text-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      <div className="text-xs font-medium leading-tight">
                        {event.time}
                      </div>
                    </motion.div>
                  </div>
                </div>

                <div className="flex-shrink-0 relative mr-8 hidden md:block">
                  <motion.div
                    className="w-4 h-4 bg-gray-800 rounded-full"
                    whileHover={{ scale: 1.5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  />
                  {index < weddingEvents.length - 1 && (
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-px h-20 bg-gray-300"></div>
                  )}
                </div>

                <div className="flex-1">
                  <div className="mb-2">
                    <span className="text-sm text-gray-600 font-medium bg-gray-100 px-3 py-1 rounded-full">
                      {event.date}
                    </span>
                  </div>
                  <h3 className="text-2xl font-serif text-gray-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-700 mb-2">{event.description}</p>
                  <div className="flex items-center text-sm text-gray-600">
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
                    {event.location}
                  </div>
                </div>
              </motion.div>
            </SmoothReveal>
          ))}
        </div>

        <SmoothReveal delay={1.2}>
          <div className="text-center mt-16">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <h3 className="text-xl font-serif text-gray-900 mb-4">
                  Nhà Trai
                </h3>
                <p className="text-gray-700 mb-2">Ông Hồ Văn Ngọc</p>
                <p className="text-gray-700 mb-2">Bà Hồ Thị Kim Liên</p>
                <p className="text-sm text-gray-600 mb-4">
                  238 Quang Trung, Thị Trấn Tâng Bất Hổ
                  <br />
                  Hoài Ân, Bình Định
                </p>
              </motion.div>

              <motion.div
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <h3 className="text-xl font-serif text-gray-900 mb-4">
                  Nhà Gái
                </h3>
                <p className="text-gray-700 mb-2">Ông Nguyễn Thiên Hoà</p>
                <p className="text-gray-700 mb-2">Bà Huỳnh Thị Ngọc Tuyết</p>
                <p className="text-sm text-gray-600 mb-4">
                  472 Đoạn Thạnh, Quy Nhơn
                  <br />
                  Tỉnh Bình Định
                </p>
              </motion.div>
            </div>
          </div>
        </SmoothReveal>
      </div>
    </section>
  );
}
