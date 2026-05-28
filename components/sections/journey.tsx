"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import imgWinner from "@/public/images/certificate/winner-ui-ux.png";
import Container from "../layout/container";
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
    date: "February 2025 — Present",
    title: "Web Developer",
    company: "PT Zafa Mulia Mandiri",
    description:
      "Built a modular HRIS platform featuring attendance, leave, overtime, payroll, and approval workflow management.",
    image:
      "https://media.licdn.com/dms/image/v2/D560BAQGDZjqOV-FbMg/company-logo_200_200/company-logo_200_200/0/1724338915770?e=2147483647&v=beta&t=R2nlOve3jdJrPeBJUi8WbkEA29SmdgE91lB5to0KRVc",
    stack: [
      { icon: SiExpress, color: "text-gray-400" },
      { icon: SiNodedotjs, color: "text-green-500" },
      { icon: SiMongodb, color: "text-green-600" },
      { icon: SiRedis, color: "text-red-500" },
      { icon: SiHtml5, color: "text-orange-500" },
      { icon: SiCss, color: "text-blue-500" },
      { icon: SiTailwindcss, color: "text-cyan-400" },
      { icon: null, label: "Zod", color: "text-foreground" },
    ],
  },
  {
    date: "January 2025 — February 2025",
    title: "Web Developer",
    company: "Changhong",
    description:
      "Developed a sales and incentive management system for promoter performance tracking, automated incentive calculation, product management, and Excel-based bulk sales processing.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW6TyChgfKNGGglYQUJnkTywOOpkPSDwRVCA&s",
    stack: [
      { icon: SiLaravel, color: "text-red-500" },
      { icon: SiMysql, color: "text-blue-500" },
      { icon: SiTailwindcss, color: "text-cyan-400" },
    ],
  },
  {
    date: "October 2025",
    title: "1st Place Winner – UI/UX Competition",
    company: "Rafatech 2025 (UIN Raden Fatah Palembang)",
    description:
      "Won first place in the national-level UI/UX competition, and also achieved national finalist status in the Web Development competition track.",
    image: imgWinner.src,
    stack: [{ icon: SiFigma, color: "text-pink-500" }],
  },
  {
    date: "May 2024",
    title: "Finalist – Web Development Competition",
    company: "Software Development Competition",
    description:
      "Selected as a finalist in a web development competition focused on system design and web application development.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=400",
    stack: [
      { icon: SiLaravel, color: "text-red-500" },
      { icon: SiTailwindcss, color: "text-cyan-400" },
      { icon: SiHtml5, color: "text-orange-500" },
      { icon: SiCss, color: "text-blue-500" },
    ],
  },
];

export default function Journey() {
  return (
    <section id="experience" className="py-32 ">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-4xl px-1"
        >
          <p className="mb-4 text-xs font-bold tracking-widest text-primary/80 uppercase">
            Experience
          </p>
          <h2 className="max-w-2xl text-4xl sm:text-5xl font-black tracking-tight text-foreground leading-tight">
            My professional journey.
          </h2>
        </motion.div>

        <div className="mx-auto max-w-4xl space-y-16 relative before:absolute before:inset-y-0 before:left-10 sm:before:left-[44px] before:w-[2px] before:bg-border/60">
          {journeys.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="relative flex flex-col sm:flex-row items-start gap-6 sm:gap-8 group"
            >
              <div className="flex items-center gap-4 sm:block shrink-0 relative z-10">
                <div className="p-1 bg-background rounded-2xl ring-4 ring-background shadow-sm group-hover:ring-primary/10 transition duration-300">
                  <Image
                    src={item.image}
                    alt={item.company}
                    width={80}
                    height={80}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl border border-border object-cover  transition duration-300 group-hover:grayscale-0 group-hover:scale-[1.02]"
                  />
                </div>
                <p className="sm:hidden text-sm font-semibold text-primary">
                  {item.date}
                </p>
              </div>

              <div className="min-w-0 flex-1 bg-card/40 border border-transparent hover:border-border/60 p-1 sm:p-2 rounded-2xl transition duration-300">
                <p className="hidden sm:block mb-2 text-sm font-semibold text-primary/90 tracking-wide">
                  {item.date}
                </p>

                <h3 className="text-2xl font-bold text-foreground tracking-tight group-hover:text-primary transition duration-300">
                  {item.title}
                </h3>

                <p className="mb-4 text-base font-medium text-foreground/80">
                  {item.company}
                </p>

                <p className="mb-6 text-base sm:text-lg leading-relaxed text-muted-foreground font-normal">
                  {item.description}
                </p>

                {item.stack.length > 0 && (
                  <div className="flex flex-wrap items-center gap-4 rounded-xl border border-border/40 bg-muted/40 p-3 backdrop-blur-sm">
                    {item.stack.map((tech, idx) => {
                      if (!tech.icon) {
                        return (
                          <span
                            key={idx}
                            className={`text-sm font-semibold whitespace-nowrap ${tech.color}`}
                          >
                            {tech.label}
                          </span>
                        );
                      }

                      const TechIcon = tech.icon;

                      return (
                        <TechIcon
                          key={idx}
                          className={`text-2xl shrink-0 transition duration-300 hover:scale-125 ${tech.color}`}
                        />
                      );
                    })}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
