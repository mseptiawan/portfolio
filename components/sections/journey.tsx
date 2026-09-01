"use client";

import Image from "next/image";
import Container from "../layout/container";
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

const experiences = [
  {
    date: "Feb 2026 — Present",
    title: "Web Developer",
    company: "PT Zafa Mulia Mandiri",
    desc: "Built HRIS platform with attendance, leave, payroll, and approval workflow.",
    image:
      "https://media.licdn.com/dms/image/v2/D560BAQGDZjqOV-FbMg/company-logo_200_200/company-logo_200_200/0/1724338915770?e=2147483647&v=beta&t=R2nlOve3jdJrPeBJUi8WbkEA29SmdgE91lB5to0KRVc",
    tech: ["Node.js", "Express", "MongoDB", "Redis", "Tailwind"],
  },
  {
    date: "Mar 2025 — Aug 2025",
    title: "Web Developer",
    company: "Changhong",
    desc: "Built sales & incentive system for promoter performance tracking and automated calculation.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW6TyChgfKNGGglYQUJnkTywOOpkPSDwRVCA&s",
    tech: ["Laravel", "MySQL", "Tailwind"],
  },
  {
    date: "Aug 2025",
    title: "Juara 1 UI/UX Competition",
    company: "Rafatech UIN Raden Fatah",
    desc: "Won first place in national UI/UX competition. Also finalist in Web Development track.",
    image: imgWinner.src,
    tech: ["Figma"],
  },
  {
    date: "Aug 2025",
    title: "Finalist Web Development",
    company: "Software Development Competition",
    desc: "Selected as finalist in web development competition focused on system design.",
    image: imgFinalist.src,
    tech: ["Laravel", "Tailwind", "HTML", "CSS"],
  },
];

const techIcons: Record<string, any> = {
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

export default function Journey() {
  return (
    <section id="experience" className="py-24">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Experience</h2>
          <p className="text-gray-500 mt-2">Riwayat karir & pencapaian</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {experiences.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md transition"
            >
              <Image
                src={item.image}
                alt={item.company}
                width={48}
                height={48}
                className="w-12 h-12 rounded-xl object-cover shrink-0"
              />

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-start justify-between gap-1">
                  <h3 className="font-bold text-gray-900">{item.title}</h3>
                  <span className="text-xs text-gray-400 whitespace-nowrap">
                    {item.date}
                  </span>
                </div>

                <p className="text-sm text-blue-600 font-medium">
                  {item.company}
                </p>

                <p className="text-sm text-gray-600 mt-1">{item.desc}</p>

                <div className="flex flex-wrap gap-1.5 mt-3">
                  {item.tech.map((tech, idx) => {
                    const Icon = techIcons[tech];
                    const color = techColors[tech] || "text-gray-600";
                    return (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-2.5 py-1 bg-gray-50 border border-gray-200 rounded-lg text-xs font-medium text-gray-700"
                      >
                        {Icon && <Icon className={`w-3.5 h-3.5 ${color}`} />}
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}