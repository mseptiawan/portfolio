"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import imgWinner from "@/public/images/certificate/winner-ui-ux.png";
import Container from "../layout/container";
import imgFinalist from "@/public/images/projects/marketplace-lokal.png";
import {
  SiMongodb,
  SiRedis,
  SiLaravel,
  SiFigma,
  SiMysql,
  SiNodedotjs,
  SiExpress,
  SiHtml5,
  SiCss,
  SiTailwindcss,
} from "react-icons/si";

const journeys = [
  {
    date: "Februari 2026 — Present",
    title: "Web Developer",
    company: "PT Zafa Mulia Mandiri",
    description:
      "Built a modular HRIS platform featuring attendance, leave, overtime, payroll, and approval workflow management.",
    image:
      "https://media.licdn.com/dms/image/v2/D560BAQGDZjqOV-FbMg/company-logo_200_200/company-logo_200_200/0/1724338915770?e=2147483647&v=beta&t=R2nlOve3jdJrPeBJUi8WbkEA29SmdgE91lB5to0KRVc",
    stack: [
      { icon: SiExpress, color: "text-gray-700", label: "Express.js" },
      { icon: SiNodedotjs, color: "text-emerald-600", label: "Node.js" },
      { icon: SiMongodb, color: "text-emerald-500", label: "MongoDB" },
      { icon: SiRedis, color: "text-red-500", label: "Redis" },
      { icon: SiHtml5, color: "text-orange-500", label: "HTML5" },
      { icon: SiCss, color: "text-blue-500", label: "CSS3" },
      { icon: SiTailwindcss, color: "text-sky-400", label: "Tailwind" },
      { icon: null, label: "Zod", color: "text-indigo-600" },
    ],
  },
  {
    date: "Maret 2025 — Agustus 2025",
    title: "Web Developer",
    company: "Changhong",
    description:
      "Developed a sales and incentive management system for promoter performance tracking, automated incentive calculation, product management, and Excel-based bulk sales processing.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW6TyChgfKNGGglYQUJnkTywOOpkPSDwRVCA&s",
    stack: [
      { icon: SiLaravel, color: "text-red-600", label: "Laravel" },
      { icon: SiMysql, color: "text-blue-600", label: "MySQL" },
      { icon: SiTailwindcss, color: "text-sky-400", label: "Tailwind" },
    ],
  },
  {
    date: "Agustus 2025",
    title: "1st Place Winner – UI/UX Competition",
    company: "Rafatech 2025 (UIN Raden Fatah Palembang)",
    description:
      "Won first place in the national-level UI/UX competition, and also achieved national finalist status in the Web Development competition track.",
    image: imgWinner.src,
    stack: [{ icon: SiFigma, color: "text-pink-500", label: "Figma" }],
  },
  {
    date: "Agustus 2025",
    title: "Finalist – Web Development Competition",
    company: "Software Development Competition",
    description:
      "Selected as a finalist in a web development competition focused on system design and web application development.",
    image: imgFinalist.src,
    stack: [
      { icon: SiLaravel, color: "text-red-600", label: "Laravel" },
      { icon: SiTailwindcss, color: "text-sky-400", label: "Tailwind" },
      { icon: SiHtml5, color: "text-orange-500", label: "HTML5" },
      { icon: SiCss, color: "text-blue-500", label: "CSS3" },
    ],
  },
];

export default function Journey() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <Container>
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-4xl text-left"
        >
          <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full border border-blue-100">
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 leading-tight">
            My Professional Journey.
          </h2>
          <p className="mt-2 text-base text-gray-500">
            Daftar riwayat karir, pengalaman proyek, dan pencapaian kompetisi.
          </p>
        </motion.div>

        {/* TIMELINE LIST */}
        <div className="mx-auto max-w-4xl relative">
          {/* Garis vertikal timeline */}
          <div className="absolute top-3 bottom-3 left-7 sm:left-9 w-[2px] bg-gradient-to-b from-blue-500 via-gray-200 to-transparent" />

          <div className="space-y-12">
            {journeys.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex flex-col sm:flex-row items-start gap-6 sm:gap-8 group"
              >
                {/* TIMELINE ICON / LOGO */}
                <div className="flex items-center gap-4 sm:block shrink-0 relative z-10">
                  <div className="relative p-1.5 bg-white rounded-2xl border border-gray-200 transition-transform duration-300 group-hover:scale-105 group-hover:border-blue-400">
                    <Image
                      src={item.image}
                      alt={item.company}
                      width={64}
                      height={64}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl object-cover"
                    />
                  </div>
                  {/* Badge versi mobile */}
                  <span className="sm:hidden text-xs font-semibold px-2.5 py-1 bg-gray-100 text-gray-700 rounded-full border border-gray-200">
                    {item.date}
                  </span>
                </div>

                {/* CONTENT CARD */}
                <div className="flex-1 w-full bg-white border border-gray-200 rounded-2xl p-6 transition-all duration-300 hover:border-gray-300 hover:-translate-y-1">
                  {/* Header Card */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      {item.title}
                    </h3>
                    <span className="hidden sm:inline-block text-xs font-medium px-3 py-1 bg-gray-100 text-gray-600 rounded-full border border-gray-200/80">
                      {item.date}
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-blue-600 mb-3">
                    {item.company}
                  </p>

                  <p className="text-sm sm:text-base leading-relaxed text-gray-600 mb-5">
                    {item.description}
                  </p>

                  {/* TECH STACK BADGES */}
                  {item.stack.length > 0 && (
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-xs font-medium text-gray-400 mb-2.5">
                        Technologies Used
                      </p>
                      <div className="flex flex-wrap items-center gap-2">
                        {item.stack.map((tech, idx) => {
                          if (!tech.icon) {
                            return (
                              <span
                                key={idx}
                                className="px-3 py-1 text-xs font-semibold bg-gray-50 border border-gray-200 rounded-lg text-gray-700"
                              >
                                {tech.label}
                              </span>
                            );
                          }

                          const TechIcon = tech.icon;

                          return (
                            <div
                              key={idx}
                              title={tech.label}
                              className="p-2 bg-gray-50 hover:bg-white border border-gray-200 hover:border-gray-300 rounded-lg transition-all hover:scale-110 flex items-center justify-center"
                            >
                              <TechIcon className={`text-lg ${tech.color}`} />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
