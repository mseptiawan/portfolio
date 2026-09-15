"use client";

import Container from "../layout/container";
import { ArrowLeft, Mail } from "lucide-react";

/* =========================================================
   DATA — struktur "letter" bergaya annual report
   ========================================================= */
const letterMeta = {
  company: "Zafa Mulia Mandiri",
  project: "HRIS — System Analysis Case Study",
  date: "January 2026",
  to: "To the Hiring Manager,",
  signature: "M Septiawan",
  role: "System Analyst",
};

const sections = [
  {
    id: "01",
    title: "Executive Summary",
    body: [
      "Zafa Mulia Mandiri mengelola proses HR secara manual — absensi, pengajuan cuti, reimbursement, dan penilaian kinerja tersebar di beberapa file Excel yang berbeda. Setiap bulan, tim HR menghabiskan sekitar 20 jam hanya untuk konsolidasi data.",
      "Proyek ini bertujuan merancang sistem HRIS terintegrasi yang menyatukan seluruh proses HR ke dalam satu platform, dengan fokus pada efisiensi administrasi dan akurasi data.",
    ],
  },
  {
    id: "02",
    title: "Business Context",
    body: [
      "Zafa bergerak di bidang distribusi dengan 120+ karyawan tersebar di tiga cabang. Struktur organisasi melibatkan HR, Finance, dan manajer cabang yang masing-masing memiliki kebutuhan informasi berbeda.",
      "Proses HR saat ini berjalan namun tidak terukur — tidak ada single source of truth, sehingga laporan ke manajemen sering terlambat dan tidak konsisten.",
    ],
  },
  {
    id: "03",
    title: "What We Found",
    body: [
      "Melalui wawancara dengan 6 stakeholder (HR Manager, Finance, 2 Branch Manager, 2 Staff), ditemukan tiga masalah utama:",
      "(1) Duplikasi entri data absensi antara fingerprint dan Excel; (2) Approval cuti berjalan lewat WhatsApp sehingga tidak ada jejak audit; (3) Laporan payroll memakan waktu 3–5 hari kerja setiap bulan.",
    ],
  },
  {
    id: "04",
    title: "How the Process Works Today",
    body: [
      "As-Is process dipetakan menggunakan BPMN. Alur absensi: karyawan fingerprint → HR export CSV → HR rekap manual di Excel → kirim ke Finance untuk payroll. Setiap transfer data adalah titik rawan error.",
      "Alur cuti: karyawan chat manajer → manajer setuju via chat → HR catat di Excel. Tidak ada status resmi, tidak ada kalender cuti bersama.",
    ],
  },
  {
    id: "05",
    title: "What Should Change",
    body: [
      "To-Be process merancang satu sistem terpusat: absensi otomatis tersinkron, pengajuan cuti melalui form dengan approval workflow, dan dashboard real-time untuk manajemen.",
      "Perubahan utama bukan sekadar digitalisasi form, tetapi mengubah titik keputusan — dari HR sebagai operator menjadi HR sebagai verifikator.",
    ],
  },
  {
    id: "06",
    title: "Requirements",
    body: [
      "BRD disusun dengan 4 modul utama: Attendance, Leave Management, Reimbursement, dan Performance Review. Total 38 functional requirements dan 12 non-functional requirements (fokus pada keamanan data dan ketersediaan sistem).",
      "Setiap requirement ditelusuri ke stakeholder asalnya, sehingga setiap fitur punya alasan bisnis yang jelas — bukan sekadar permintaan.",
    ],
  },
  {
    id: "07",
    title: "System Design",
    body: [
      "Perancangan sistem mencakup Use Case Diagram (3 aktor: Employee, Manager, HR Admin), Activity Diagram untuk alur approval, Sequence Diagram untuk integrasi absensi, dan ERD dengan 9 entitas utama.",
      "User flow dirancang untuk meminimalkan klik — pengajuan cuti hanya 3 langkah dari dashboard karyawan.",
    ],
  },
  {
    id: "08",
    title: "Product Design",
    body: [
      "Wireframe dibuat di Figma untuk 12 layar utama, dari login hingga dashboard manajemen. Fokus pada konsistensi komponen dan kemudahan navigasi untuk pengguna non-teknis.",
    ],
  },
  {
    id: "09",
    title: "Validation",
    body: [
      "UAT dilakukan dengan 8 skenario pengujian yang melibatkan HR, Manager, dan Staff sebagai tester. Hasil: 7 skenario lulus, 1 skenario revisi pada alur rejection cuti.",
      "Feedback dari UAT menjadi dasar perbaikan sebelum sistem masuk tahap pengembangan.",
    ],
  },
  {
    id: "10",
    title: "Outcome",
    body: [
      "Sistem HRIS yang dirancang berhasil memangkas waktu rekapitulasi HR dari 20 jam menjadi estimasi 4 jam per bulan, serta menyediakan audit trail lengkap untuk setiap approval.",
      "Yang lebih penting: sistem ini memberikan manajemen visibilitas real-time terhadap kondisi SDM — sesuatu yang sebelumnya tidak mungkin dengan proses manual.",
    ],
  },
];

/* =========================================================
   SECTION RENDERER
   ========================================================= */
function LetterSection({
  id,
  title,
  body,
}: {
  id: string;
  title: string;
  body: string[];
}) {
  return (
    <section className="mb-10">
      <div className="flex items-baseline gap-3 mb-3">
        <span className="text-xs font-mono font-bold text-[#2563EB] tabular-nums">
          {id}
        </span>
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111827]">
          {title}
        </h2>
      </div>
      <div className="space-y-3 text-[15px] leading-[1.75] text-[#374151] font-serif">
        {body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   MAIN COMPONENT
   ========================================================= */
export default function CaseStudyLetter() {
  return (
    <section className="min-h-screen bg-[#FAFAF9] py-20">
      <Container>
        <article className="mx-auto max-w-3xl">
          {/* BACK LINK */}
          <a
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#6B7280] hover:text-[#2563EB] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </a>

          {/* LETTERHEAD */}
          <header className="border-b border-[#E5E7EB] pb-8 mb-10">
            <p className="text-xs font-bold tracking-widest uppercase text-[#2563EB] mb-2">
              Case Study
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111827] leading-tight mb-4">
              {letterMeta.project}
            </h1>
            <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-[#6B7280]">
              <span>
                <strong className="font-semibold text-[#111827]">
                  Company:
                </strong>{" "}
                {letterMeta.company}
              </span>
              <span>
                <strong className="font-semibold text-[#111827]">Date:</strong>{" "}
                {letterMeta.date}
              </span>
            </div>
          </header>

          {/* SALUTATION */}
          <p className="font-serif text-[15px] leading-[1.75] text-[#374151] mb-8">
            {letterMeta.to}
          </p>

          {/* BODY SECTIONS */}
          {sections.map((s) => (
            <LetterSection key={s.id} id={s.id} title={s.title} body={s.body} />
          ))}

          {/* CLOSING */}
          <div className="mt-14 pt-8 border-t border-[#E5E7EB]">
            <p className="font-serif text-[15px] leading-[1.75] text-[#374151] mb-6">
              Terima kasih telah membaca case study ini. Saya terbuka untuk
              diskusi lebih lanjut mengenai proses analisis, keputusan desain,
              maupun tantangan teknis yang dihadapi selama proyek.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
              <div>
                <p className="font-serif text-[15px] text-[#374151] mb-4">
                  Sincerely,
                </p>
                <p className="text-lg font-bold text-[#111827]">
                  {letterMeta.signature}
                </p>
                <p className="text-sm text-[#6B7280]">{letterMeta.role}</p>
              </div>

              <a
                href="mailto:mseptiawan017@gmail.com"
                className="inline-flex items-center gap-2 self-start sm:self-auto rounded-xl bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-700 hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
                Discuss This Case
              </a>
            </div>
          </div>

          {/* FOOTNOTE */}
          <p className="mt-12 text-xs text-[#9CA3AF] leading-relaxed">
            Dokumen ini disusun sebagai bagian dari portfolio System Analyst.
            Seluruh nama stakeholder dan data sensitif telah dianonimkan.
          </p>
        </article>
      </Container>
    </section>
  );
}