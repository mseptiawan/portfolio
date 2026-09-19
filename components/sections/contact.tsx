"use client";

import Container from "../layout/container";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 bg-white border-t border-[#E5E7EB]"
    >
      {/* Dekorasi background halus */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 h-80 w-[36rem] rounded-full bg-blue-50 blur-3xl opacity-60" />
      </div>

      <Container>
        <div className="mx-auto flex max-w-2xl flex-col items-center justify-center text-center">
          {/* Badge */}
          

          {/* Headline */}
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-[#111827] sm:text-4xl leading-tight">
            Let&apos;s Solve Business Problems
            <br className="hidden sm:block" />{" "}
            <span className="text-[#2563EB]">with Better Systems.</span>
          </h2>

          {/* Deskripsi */}
          <p className="mb-8 text-sm sm:text-base leading-relaxed text-[#6B7280]">
            I&apos;m currently looking for opportunities as a{" "}
            <span className="font-semibold text-[#111827]">
              Junior System Analyst
            </span>
            ,{" "}
            <span className="font-semibold text-[#111827]">System Analyst</span>
            , or related roles. I&apos;m interested in understanding business
            needs, analyzing processes, defining system requirements, and
            designing practical solutions that create real value for users and
            organizations.
          </p>

          {/* CTA */}
          <a
            href="mailto:mseptiawan017@gmail.com"
            className="inline-flex items-center rounded-xl bg-[#2563EB] px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-700 hover:-translate-y-0.5"
          >
            Let&apos;s Talk
          </a>
        </div>
      </Container>
    </section>
  );
}