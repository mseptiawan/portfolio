import Navbar from "@/components/layout/navbar";

import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Projects from "@/components/sections/projects";
import TechStack from "@/components/sections/tech-stack";
import Journey from "@/components/sections/journey";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <TechStack />
      <Journey />
    </main>
  );
}
