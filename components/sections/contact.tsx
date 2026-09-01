"use client";

import Container from "../layout/container";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-transparent py-28 border-t border-border/40 relative overflow-hidden"
    >
      <Container>
        <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
          <span className="px-3 py-1 mb-4 rounded-full border border-slate-200 text-[10px] font-bold tracking-wider uppercase">
            Open for Opportunities
          </span>

          <h2 className="text-3xl font-black tracking-tight sm:text-4xl text-foreground mb-4">
            Ready to Build Your Next Web Solution
          </h2>

          <p className="text-sm sm:text-base leading-relaxed text-muted-foreground font-normal mb-8">
            I'm actively looking for my first professional role as a Web Developer.
            I bring hands-on experience in Laravel, Node.js, and fullstack development
            — with a portfolio of real projects ready to showcase. Let's talk about
            how I can contribute to your team.
          </p>

          <a
            href="mailto:mseptiawan017@gmail.com"
            className="rounded-xl border border-border bg-zinc-50/60 dark:bg-zinc-900/30 px-8 py-4 text-sm font-bold text-foreground shadow-xs backdrop-blur-md transition-all duration-200 cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            Let's Talk
          </a>
        </div>
      </Container>
    </section>
  );
}