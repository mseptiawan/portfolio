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
          <span className="px-3 py-1 mb-4 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-600 dark:text-purple-400 text-[10px] font-bold tracking-wider uppercase">
            Get In Touch
          </span>

          <h2 className="text-3xl font-black tracking-tight sm:text-4xl text-foreground mb-4">
            Let&apos;s Create Something Together
          </h2>

          {/* DESKRIPSI TEKS */}
          <p className="text-sm sm:text-base leading-relaxed text-muted-foreground font-normal mb-8">
            I&apos;m currently open to new opportunities. Whether you have a
            question, a project proposal, or just want to say hi, my inbox is
            always open!
          </p>

          <a
            href="mailto:mseptiawan017@gmail.com"
            className="rounded-xl border border-border bg-zinc-50/60 dark:bg-zinc-900/30 px-8 py-4 text-sm font-bold text-foreground shadow-xs backdrop-blur-md transition-all duration-200 hover:bg-purple-600 hover:text-white hover:border-purple-600 dark:hover:bg-purple-600/20 cursor-pointer"
          >
            Let&apos;s Talk
          </a>
        </div>
      </Container>
    </section>
  );
}
