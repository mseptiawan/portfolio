"use client";

import Container from "../layout/container";
import {
  SiMongodb,
  SiPostgresql,
  SiNodedotjs,
  SiExpress,
  SiTypescript,
  SiJavascript,
  SiRedis,
  SiDocker,
  SiSocketdotio,
  SiLaravel,
  SiPhp,
  SiMysql,
  SiLinux,
  SiPostman,
  SiGit,
  SiZod,
  SiTailwindcss,
} from "react-icons/si";

const techs = [
  { name: "MongoDB", icon: SiMongodb, color: "text-emerald-500" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-600" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-emerald-600" },
  { name: "Express.js", icon: SiExpress, color: "text-gray-800" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
  { name: "JavaScript", icon: SiJavascript, color: "text-amber-500" },
   { name: "Laravel", icon: SiLaravel, color: "text-red-500" },
  { name: "PHP", icon: SiPhp, color: "text-indigo-500" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
  { name: "Linux", icon: SiLinux, color: "text-amber-600" },
  { name: "REST API", icon: SiPostman, color: "text-orange-500" },
  { name: "Redis", icon: SiRedis, color: "text-red-500" },
  { name: "Docker", icon: SiDocker, color: "text-sky-500" },
  { name: "Git", icon: SiGit, color: "text-orange-600" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
];

export default function TechStack() {
  return (
    <section id="tech" className="py-24 relative overflow-hidden">
      <Container>
        {/* SECTION HEADER */}
        <div className="mx-auto mb-16 max-w-4xl text-left">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full border border-blue-100">
            Tech Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Technologies I Work With.
          </h2>
          <p className="mt-2 text-base text-gray-500">
            Bahasa pemrograman, framework, dan tools yang sering saya gunakan.
          </p>
        </div>

        {/* GRID LAYOUT */}
        <div className="mx-auto max-w-4xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {techs.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="flex items-center gap-3.5 p-4 bg-white border border-gray-200 rounded-2xl transition-all duration-300 hover:border-gray-300 hover:-translate-y-1"
              >
                <div className="p-2.5 bg-gray-50 border border-gray-100 rounded-xl shrink-0 flex items-center justify-center">
                  <Icon className={`text-2xl ${tech.color}`} />
                </div>
                <span className="text-sm font-bold text-gray-900">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
