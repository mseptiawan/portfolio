import Image from "next/image";
import Container from "../layout/container";
import { FileText, ArrowRight, Mail } from "lucide-react";
import profileImg from "@/public/images/profile.jpeg"; // ganti sesuai nama file Anda

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-40 pb-28 bg-white"
    >
      {/* Dekorasi background halus (opsional) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-50 blur-3xl opacity-70" />
        <div className="absolute top-1/2 -left-32 h-80 w-80 rounded-full bg-slate-50 blur-3xl opacity-70" />
      </div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* =====================================================
              KOLOM KIRI — TEKS
             ===================================================== */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Badge kecil */}
            <span className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-[#2563EB] uppercase bg-blue-50 rounded-full border border-blue-100">
              <FileText className="w-3.5 h-3.5" />
              System Analyst
            </span>

            {/* Headline */}
            <h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#111827] leading-[1.1]">
              Turning Business Problems
              <br />
              <span className="text-[#2563EB]">into System Solutions.</span>
            </h1>

            {/* Deskripsi */}
            <p className="mb-8 max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg leading-relaxed text-[#6B7280]">
              I&apos;m an Information Systems graduate focused on{" "}
              <span className="font-semibold text-[#111827]">
                System Analysis
              </span>{" "}
              and{" "}
              <span className="font-semibold text-[#111827]">
                Business Analysis
              </span>
              . I analyze business processes, gather requirements, and translate
              business needs into practical system solutions through clear
              documentation, process modeling, and system design.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-700 hover:-translate-y-0.5"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="mailto:mseptiawan017@gmail.com"
                className="inline-flex items-center gap-2 rounded-xl border border-[#E5E7EB] bg-white px-6 py-3.5 text-sm font-semibold text-[#111827] transition-colors duration-200 hover:bg-gray-50"
              >
                <Mail className="w-4 h-4" />
                Let&apos;s Talk
              </a>
            </div>

            {/* Statistik singkat (opsional, hapus jika tidak perlu) */}
            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-8">
              {[
                { value: "2+", label: "Years Learning" },
                { value: "2+", label: "Projects Delivered" },
                { value: "1", label: "Award Won" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-extrabold text-[#111827]">
                    {s.value}
                  </p>
                  <p className="text-xs text-[#6B7280] mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* =====================================================
              KOLOM KANAN — FOTO PROFIL
             ===================================================== */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Frame dekoratif di belakang foto */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-blue-100 via-blue-50 to-transparent rotate-3" />

              {/* Foto */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-3xl overflow-hidden border border-[#E5E7EB] bg-white shadow-sm">
                <Image
                  src={profileImg}
                  alt="M Septiawan"
                  fill
                  priority
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 320px"
                  className="object-cover"
                />
              </div>

              {/* Badge kecil mengambang (opsional) */}
              <div className="absolute -bottom-3 -left-3 bg-white border border-[#E5E7EB] rounded-2xl px-4 py-2.5 shadow-sm">
                <p className="text-[11px] font-semibold text-[#2563EB] uppercase tracking-wider">
                  Available for work
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}