"use client";

import { FileText, Download, Eye, TrendingUp, Users, Zap } from "lucide-react";
import Container from "../layout/container";
import imgHris from "@/public/images/projects/hris.png";

interface ProjectDocument {
  title: string;
  description: string;
  previewLink: string;
  downloadLink: string;
}

interface Project {
  title: string;
  description: string;
  image: string;
  impact: { val: string; label: string }[];
  benefits: string[];
  outputs: string[];
  documents: ProjectDocument[];
}

const projectsData: Project[] = [
  {
    title: "HRIS Zafa Tour",
    description:
      "Analisis dan perancangan sistem informasi kepegawaian untuk mendigitalisasi proses HR dalam satu sistem terintegrasi. Proyek ini mencakup analisis proses bisnis, perancangan sistem, hingga implementasi dan pengujian.",
    image: imgHris.src,

    // DAMPAK & MANFAAT
    impact: [
      { val: "90%", label: "Reduksi Error" },
      { val: "< 1 Jam", label: "Approval Cuti" },
      { val: "100%", label: "Data Terpusat" },
      { val: "Real-time", label: "Monitoring KPI" },
    ],
    benefits: [
      "Data kepegawaian terpusat dalam satu database, tidak lagi tersebar di Excel, WhatsApp, dan dokumen fisik.",
      "Proses approval cuti, lembur, klaim, dan dinas luar menjadi lebih cepat dan terdokumentasi.",
      "Monitoring kehadiran, KPI, dan aktivitas pegawai dapat dilakukan secara real-time.",
      "Mengurangi risiko human error dalam perhitungan payroll dan potongan pinjaman.",
      "Self-service portal bagi pegawai untuk mengakses slip gaji, KPI, dan riwayat kehadiran.",
    ],

    // PROJECT OUTPUT
    outputs: [
      "9 BPMN AS-IS — Pemodelan proses bisnis saat ini.",
      "6 BPMN TO-BE — Rancangan proses bisnis setelah sistem diterapkan.",
      "41 Use Case — Interaksi aktor dengan sistem.",
      "18 Activity Diagram — Alur aktivitas sistem.",
      "ERD 40+ entitas — Struktur database terintegrasi.",
      "13 Wireframe — Rancangan antarmuka.",
      "24 Screenshot — Implementasi antarmuka.",
      "219 halaman dokumen (BRD 43 + SRS 176).",
    ],

    // DOKUMEN
    documents: [
      {
        title: "Preview Portfolio",
        description: "Ringkasan portfolio (24 halaman)",
        previewLink:
          "https://drive.google.com/file/d/1hznye8I41BmSEzSGT-OynxKsVDURPWWQ/view",
        downloadLink:
          "https://drive.google.com/uc?export=download&id=1hznye8I41BmSEzSGT-OynxKsVDURPWWQ",
      },
      {
        title: "BRD",
        description: "Business Requirements Document (43 halaman)",
        previewLink:
          "https://drive.google.com/file/d/1WqHoGlcCAxsSBxnhYQctxb9idgOhiqi0/view",
        downloadLink:
          "https://drive.google.com/uc?export=download&id=1WqHoGlcCAxsSBxnhYQctxb9idgOhiqi0",
      },
      {
        title: "SRS",
        description: "Software Requirements Specification (176 halaman)",
        previewLink:
          "https://drive.google.com/file/d/1QNnjLSTPD2e2XxnwckZd-vXoJC665c8B/view",
        downloadLink:
          "https://drive.google.com/uc?export=download&id=1QNnjLSTPD2e2XxnwckZd-vXoJC665c8B",
      },
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-24">
      <Container>
        {/* HEADER */}
        <div className="mx-auto mb-16 text-left">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-[#2563EB] uppercase bg-blue-50 rounded-full border border-blue-100">
            Projects
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111827] leading-tight">
            Featured Work.
          </h2>
          <p className="mt-2 text-base text-[#6B7280]">
            Kumpulan proyek analisis dan perancangan sistem yang pernah saya
            kerjakan.
          </p>
        </div>

        {/* LIST PROYEK */}
        <div className="flex flex-col items-center space-y-24 w-full">
          {projectsData.map((project, idx) => (
            <div
              key={idx}
              className="flex flex-col lg:flex-row items-start justify-center gap-12 lg:gap-16 w-full max-w-6xl"
            >
              {/* SISI GAMBAR */}
            {/* SISI GAMBAR - REDESIGN */}
<div className="w-full lg:w-[500px] flex-shrink-0 flex justify-center">
  <div className="relative w-full rounded-2xl border border-[#E5E7EB] bg-white shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden group">
    {/* Container gambar dengan padding */}
    <div className="w-full p-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-auto max-h-[600px] object-contain rounded-lg transition-transform duration-700 group-hover:scale-[1.02]"
        loading="lazy"
      />
    </div>

    {/* Overlay gradient di bawah (opsional) */}
    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
  </div>
</div>

              {/* DETAIL TEKS */}
              <div className="w-full lg:w-[600px] max-w-2xl flex flex-col items-start">
                {/* TITLE */}
                <h3 className="text-2xl font-black tracking-tight text-[#111827] mb-4">
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <div className="w-full rounded-2xl border border-[#E5E7EB] bg-gray-50/60 p-6 sm:p-7 shadow-sm mb-6 text-sm leading-relaxed text-[#6B7280]">
                  <p>{project.description}</p>
                </div>

                {/* IMPACT */}
                <div className="w-full mb-6">
                  <h4 className="text-sm font-bold text-[#111827] mb-3 uppercase tracking-wider flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#2563EB]" /> Business
                    Impact
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {project.impact.map((stat, i) => (
                      <div key={i}>
                        <div className="text-xl font-black text-[#2563EB]">
                          {stat.val}
                        </div>
                        <div className="text-[10px] uppercase tracking-widest text-[#6B7280]">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* BENEFITS */}
                <div className="w-full mb-6">
                  <h4 className="text-sm font-bold text-[#111827] mb-3 uppercase tracking-wider flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#2563EB]" /> Manfaat
                  </h4>
                  <ul className="space-y-2">
                    {project.benefits.map((benefit, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-[#6B7280]"
                      >
                        <span className="text-[#2563EB] mt-0.5">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* OUTPUTS */}
                <div className="w-full mb-6">
                  <h4 className="text-sm font-bold text-[#111827] mb-3 uppercase tracking-wider flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#2563EB]" /> Project Output
                  </h4>
                  <ul className="space-y-2">
                    {project.outputs.map((output, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-[#6B7280]"
                      >
                        <span className="text-[#2563EB] mt-0.5">✓</span>
                        <span>{output}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* DOWNLOAD DOCUMENTS */}
                <div className="w-full">
                  <h4 className="text-sm font-bold text-[#111827] mb-3 uppercase tracking-wider">
                    Dokumen
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {project.documents.map((doc, i) => (
                      <div
                        key={i}
                        className="rounded-xl border border-[#E5E7EB] bg-white p-4 flex flex-col gap-2"
                      >
                        {/* Icon + Title */}
                        <div className="flex items-center gap-2">
                          <FileText className="w-5 h-5 text-[#2563EB]" />
                          <span className="text-xs font-semibold text-[#111827]">
                            {doc.title}
                          </span>
                        </div>

                        {/* Description */}
                        <span className="text-[10px] text-[#6B7280]">
                          {doc.description}
                        </span>
                       

                        {/* Action Buttons */}
                        <div className="flex flex-col gap-1 mt-2">
                          {/* Lihat */}
                          <a
                            href={doc.previewLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-1 rounded-lg border border-[#2563EB] px-2 py-1.5 text-[10px] font-semibold text-[#2563EB] hover:bg-blue-50 transition"
                          >
                            <Eye className="w-3 h-3" />
                            Lihat
                          </a>

                          {/* Download */}
                          <a
                            href={doc.downloadLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-1 rounded-lg bg-[#2563EB] px-2 py-1.5 text-[10px] font-semibold text-white hover:bg-blue-700 transition"
                          >
                            <Download className="w-3 h-3" />
                            Download
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}