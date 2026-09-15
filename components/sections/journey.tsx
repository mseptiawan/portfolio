"use client";

import Image from "next/image";
import Container from "../layout/container";
import { Briefcase, Trophy, Medal } from "lucide-react";
import imgWinner from "@/public/images/certificate/winner-ui-ux.png";
import imgFinalist from "@/public/images/projects/marketplace-lokal.png";
import {
  SiLaravel,
  SiMysql,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiRedis,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiFigma,
} from "react-icons/si";

/* =========================================================
   DATA
   ========================================================= */
const experiences = [
  {
    date: "Jan 2026 — Jul 2026",
    title: "Web Developer Intern | System Analysis",
    company: "PT Zafa Mulia Mandiri",
    desc: "Analyzed business processes and system requirements for an HRIS platform, then contributed to the design and development of the system.",
    image:
      "https://media.licdn.com/dms/image/v2/D560BAQGDZjqOV-FbMg/company-logo_200_200/company-logo_200_200/0/1724338915770?e=2147483647&v=beta&t=R2nlOve3jdJrPeBJUi8WbkEA29SmdgE91lB5to0KRVc",
    tech: [
      "Requirements Analysis",
      "BPMN",
      "UML",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    kind: "work",
  },
  {
    date: "Mar 2025 — Aug 2025",
    title: "Web Developer",
    company: "Changhong",
    desc: "Built sales & incentive system for promoter performance tracking and automated calculation.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW6TyChgfKNGGglYQUJnkTywOOpkPSDwRVCA&s",
    tech: ["Laravel", "MySQL", "Tailwind"],
    kind: "work",
  },
  {
    date: "Aug 2025",
    title: "Juara 1 UI/UX Competition",
    company: "Rafatech UIN Raden Fatah",
    desc: "Won first place in national UI/UX competition. Also finalist in Web Development track.",
    image: imgWinner.src,
    tech: ["Figma"],
    kind: "award",
  },
  {
    date: "Aug 2025",
    title: "Finalist Web Development",
    company: "Software Development Competition",
    desc: "Selected as finalist in web development competition focused on system design.",
    image: imgFinalist.src,
    tech: ["Laravel", "Tailwind", "HTML", "CSS"],
    kind: "award",
  },
];

/* =========================================================
   ICON & COLOR MAP
   ========================================================= */
const techIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Laravel: SiLaravel,
  MySQL: SiMysql,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  MongoDB: SiMongodb,
  Redis: SiRedis,
  Tailwind: SiTailwindcss,
  HTML: SiHtml5,
  CSS: SiCss,
  Figma: SiFigma,
};

const techColors: Record<string, string> = {
  Laravel: "text-red-600",
  MySQL: "text-blue-600",
  "Node.js": "text-emerald-600",
  Express: "text-gray-700",
  MongoDB: "text-emerald-500",
  Redis: "text-red-500",
  Tailwind: "text-sky-400",
  HTML: "text-orange-500",
  CSS: "text-blue-500",
  Figma: "text-pink-500",
};

/* =========================================================
   BADGE TYPE (untuk menandai jenis kartu)
   ========================================================= */
const kindStyles = {
  work: {
    label: "Experience",
    icon: Briefcase,
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  award: {
    label: "Achievement",
    icon: Trophy,
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-100",
  },
};

/* =========================================================
   MAIN COMPONENT
   ========================================================= */
export default function Journey() {
  return (
    <section id="experience" className="py-24">
      <Container>
        {/* HEADER */}
        <div className="mx-auto mb-16 max-w-4xl text-left">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full border border-blue-100">
            Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Experience & Achievements.
          </h2>
          <p className="mt-2 text-base text-gray-500">
            Perjalanan karir, pencapaian, dan kontribusi yang membentuk saya
            sebagai System Analyst.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="mx-auto max-w-3xl relative">
          {/* garis vertikal timeline (hanya desktop) */}
          <div className="hidden sm:block absolute left-[27px] top-2 bottom-2 w-px bg-gray-200" />

          <div className="space-y-6">
            {experiences.map((item, index) => {
              const style = kindStyles[item.kind as keyof typeof kindStyles];
              const KindIcon = style.icon;

              return (
                <div
                  key={index}
                  className="relative flex gap-4 sm:gap-5"
                >
                  {/* LOGO / ICON bulat di kiri (timeline node) */}
                  <div className="relative shrink-0">
                    <div className="w-14 h-14 rounded-2xl border border-gray-200 bg-white overflow-hidden flex items-center justify-center shadow-sm">
                      <Image
                        src={item.image}
                        alt={item.company}
                        width={56}
                        height={56}
                        className="w-full h-full object-contain p-2"
                      />
                    </div>
                  </div>

                  {/* CARD */}
                  <div className="flex-1 min-w-0 bg-white border border-gray-200 rounded-2xl p-5 transition-all duration-300 hover:border-gray-300 hover:shadow-md hover:-translate-y-0.5">
                    {/* Baris atas: badge + tanggal */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${style.bg} ${style.color} ${style.border}`}
                      >
                        <KindIcon className="w-3 h-3" />
                        {style.label}
                      </span>
                      <span className="text-xs text-gray-400 whitespace-nowrap">
                        {item.date}
                      </span>
                    </div>

                    {/* Title & Company */}
                    <h3 className="font-bold text-gray-900 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-blue-600 font-medium mt-0.5">
                      {item.company}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                      {item.desc}
                    </p>

                    {/* Tech badges */}
                    <div className="flex flex-wrap gap-1.5 mt-3.5">
                      {item.tech.map((tech, idx) => {
                        const Icon = techIcons[tech];
                        const color = techColors[tech] || "text-gray-600";
                        return (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1 px-2.5 py-1 bg-gray-50 border border-gray-200 rounded-lg text-xs font-medium text-gray-700"
                          >
                            {Icon && (
                              <Icon className={`w-3.5 h-3.5 ${color}`} />
                            )}
                            {tech}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}