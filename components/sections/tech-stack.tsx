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
  SiGit,
  SiZod,
  SiTailwindcss,
} from "react-icons/si";

const techs = [
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-500" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
  { name: "Express.js", icon: SiExpress, color: "text-foreground" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "Redis", icon: SiRedis, color: "text-red-500" },
  { name: "Docker", icon: SiDocker, color: "text-sky-500" },
  { name: "Socket.IO", icon: SiSocketdotio, color: "text-foreground" },
  { name: "Git", icon: SiGit, color: "text-orange-500" },
  { name: "Zod", icon: SiZod, color: "text-indigo-500" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
];

export default function TechStack() {
  return (
    <section id="tech" className="py-28  flex items-center justify-center">
      <Container>
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-bold tracking-widest text-primary/80 uppercase">
            TECH STACK
          </p>
          <h2 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl">
            Technologies I work with.
          </h2>
        </div>

        <div className="mx-auto max-w-4xl grid grid-cols-2 gap-3 justify-items-center justify-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
          {techs.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="group flex aspect-[4/3] w-full max-w-[170px] flex-col items-center justify-center rounded-xl border border-border bg-muted/20 px-4 transition-all duration-200 ease-linear hover:border-foreground hover:bg-muted/40"
              >
                <Icon
                  className={`mb-2.5 text-3xl transition-transform duration-200 ease-linear group-hover:scale-105 ${tech.color}`}
                />
                <p className="text-xs font-semibold text-muted-foreground tracking-wide transition-colors duration-200 ease-linear group-hover:text-foreground">
                  {tech.name}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
