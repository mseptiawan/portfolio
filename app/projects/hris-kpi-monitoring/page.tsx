"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  ShieldCheck,
  Clock,
  Calendar,
  Briefcase,
  TrendingUp,
  Database,
  Terminal,
  Layers,
} from "lucide-react";

export default function HrisProjectDetail() {
  return (
    <div className="min-h-screen text-foreground bg-transparent py-20 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOMBOL KEMBALI */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-purple-600 transition-colors duration-150 mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
          Back to Portfolio
        </Link>

        {/* HEADER CASE STUDY */}
        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-600 dark:text-purple-400 text-[10px] font-bold tracking-wider uppercase">
              Final Year Thesis Project
            </span>
            <span className="px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold tracking-wider uppercase">
              Production Ready
            </span>
          </div>

          <h1 className="text-4xl font-black tracking-tight sm:text-5xl text-foreground mb-4">
            HRIS & KPI Monitoring System
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-normal">
            Sistem manajemen operasional SDM berskala enterprise yang dirancang
            khusus untuk mengotomatisasi birokrasi absensi geofencing,
            multi-level approval workflow, dan kalkulasi performa kinerja
            karyawan (KPI) secara realtime.
          </p>
        </header>

        {/* METADATA SEKILAS PROYEK */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 rounded-2xl border border-border bg-zinc-50/60 dark:bg-zinc-900/30 backdrop-blur-md mb-16 shadow-xs">
          <div>
            <span className="block text-[11px] font-bold tracking-wider text-muted-foreground uppercase mb-1">
              Client / Target
            </span>
            <span className="text-sm font-extrabold text-foreground">
              PT Zafa Mulia Mandiri
            </span>
          </div>
          <div>
            <span className="block text-[11px] font-bold tracking-wider text-muted-foreground uppercase mb-1">
              Role
            </span>
            <span className="text-sm font-extrabold text-foreground">
              Backend Architect
            </span>
          </div>
          <div>
            <span className="block text-[11px] font-bold tracking-wider text-muted-foreground uppercase mb-1">
              Tech Stack
            </span>
            <span className="text-sm font-extrabold text-foreground">
              Node.js, Express, MongoDB
            </span>
          </div>
          <div>
            <span className="block text-[11px] font-bold tracking-wider text-muted-foreground uppercase mb-1">
              Architecture
            </span>
            <span className="text-sm font-extrabold text-foreground">
              Modular MVC Architecture
            </span>
          </div>
        </div>

        {/* DOKUMENTASI VISUAL SHORTCUT */}
        <div className="flex flex-wrap gap-4 mb-16">
          <a
            href="https://github.com/mseptiawan/website-zafa-tour"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-950 hover:bg-purple-600 dark:hover:bg-purple-600 dark:hover:text-white transition-all duration-150 shadow-xs"
          >
            View Repository Source
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* KONTEN UTAMA CASE STUDY */}
        <div className="space-y-16">
          {/* SECTION 1: PROBLEM & SOLUTION */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-border/40 pt-12">
            <div>
              <h3 className="text-lg font-black text-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-1.5 h-4 bg-red-500 rounded-full" /> The
                Problem
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-normal">
                Proses rekapitulasi data operasional karyawan di PT Zafa Mulia
                Mandiri sebelumnya masih mengandalkan sistem manual. Hambatan
                utama mencakup manipulasi waktu absensi harian, lambatnya
                birokrasi pengajuan cuti/lembur lewat form fisik, serta
                kesulitan tim manajemen dalam melacak alokasi anggaran
                perjalanan dinas yang tersebar di berbagai divisi keuangan.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-black text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-1.5 h-4 bg-purple-600 rounded-full" /> The
                Solution
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-normal">
                Membangun sebuah core engine HRIS berbasis web modular yang
                memusatkan seluruh sirkulasi data SDM ke dalam satu repositori
                terenkripsi. Mengimplementasikan batasan radius lokasi dinamis,
                approval berjenjang otomatis, serta modul pelaporan anggaran
                perjalanan dinas secara terpusat untuk meminimalisir fraud
                operasional secara mutlak.
              </p>
            </div>
          </section>

          {/* SECTION 2: CORE MODULES BREAKDOWN */}
          <section className="border-t border-border/40 pt-12">
            <h3 className="text-xl font-black text-foreground mb-8 tracking-tight">
              Modular Core Architecture & Workflows
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Card RBAC */}
              <div className="p-6 rounded-2xl border border-border bg-zinc-50/60 dark:bg-zinc-900/30 backdrop-blur-md shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-base font-extrabold text-foreground mb-2">
                  Role-Based Access Control (RBAC)
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Implementasi hak akses multi-level berjenjang yang aman untuk
                  4 entitas utama: Employee, Manager, HR/Director, dan Finance.
                  Setiap endpoint API dilindungi oleh custom middleware validasi
                  session token.
                </p>
              </div>

              {/* Card Attendance Correction */}
              <div className="p-6 rounded-2xl border border-border bg-zinc-50/60 dark:bg-zinc-900/30 backdrop-blur-md shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="text-base font-extrabold text-foreground mb-2">
                  Automated Attendance System
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Pencatatan harian check-in/check-out realtime dilengkapi fitur
                  Attendance Correction Request, memfasilitasi karyawan
                  mengajukan perbaikan log jika terjadi kendala teknis di
                  lapangan secara legal.
                </p>
              </div>

              {/* Card Leave & Overtime */}
              <div className="p-6 rounded-2xl border border-border bg-zinc-50/60 dark:bg-zinc-900/30 backdrop-blur-md shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                  <Calendar className="w-5 h-5" />
                </div>
                <h4 className="text-base font-extrabold text-foreground mb-2">
                  Hierarchical Approval Workflows
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Mesin alur kerja mandiri untuk mengelola pengajuan cuti,
                  lembur, dan bukti hasil kerja. Pengajuan diverifikasi awal
                  oleh Manager sebelum diteruskan ke HRD untuk final approval
                  demi menjaga transparansi.
                </p>
              </div>

              {/* Card Business Trip */}
              <div className="p-6 rounded-2xl border border-border bg-zinc-50/60 dark:bg-zinc-900/30 backdrop-blur-md shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h4 className="text-base font-extrabold text-foreground mb-2">
                  Business Trip Budget Engine
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Modul perjalanan dinas mutakhir berkemampuan tracking
                  itinerary timeline. Divisi Finance memegang kendali penuh
                  memantau pagu anggaran yang disetujui guna akurasi pelaporan
                  dana operasional perusahaan.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 3: TECHNICAL SPECIFICATIONS */}
          <section className="border-t border-border/40 pt-12">
            <h3 className="text-xl font-black text-foreground mb-8 tracking-tight">
              Technical Specifications & Implementation
            </h3>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="mt-1 flex-shrink-0 text-purple-600 dark:text-purple-400">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-sm font-extrabold text-foreground mb-1">
                    REST API Development & Schema Design
                  </h5>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Dibangun di atas Express.js menggunakan pemodelan data
                    Mongoose ODM yang optimal. Struktur database didesain secara
                    modular memanfaatkan konsep DB references populasi data
                    efisien guna menghindari overhead kueri data skala besar.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="mt-1 flex-shrink-0 text-purple-600 dark:text-purple-400">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-sm font-extrabold text-foreground mb-1">
                    State Persistence & Security
                  </h5>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Pengamanan sesi menggunakan otentikasi berbasis
                    server-session terenkripsi, diintegrasikan dengan validasi
                    server-side menyeluruh untuk memastikan manipulasi payload
                    request dari client-side ditolak secara ketat sebelum
                    menyentuh database.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="mt-1 flex-shrink-0 text-purple-600 dark:text-purple-400">
                  <Database className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-sm font-extrabold text-foreground mb-1">
                    Realtime KPI Analytics Engine
                  </h5>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Pipeline agregasi MongoDB dikonfigurasi untuk menghitung
                    akumulasi total jam kerja, rasio keterlambatan, kuota
                    lembur, dan konversi otomatis menjadi indeks nilai
                    pencapaian key performance indicator (KPI) individu.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 4: THESIS ARCHITECTURE FOOTER */}
          <footer className="border-t border-border/40 pt-12 text-center">
            <p className="text-xs text-muted-foreground font-normal leading-relaxed max-w-xl mx-auto">
              Proyek ini merupakan implementasi nyata riset ilmiah skripsi
              bidang Sistem Informasi Universitas Multi Data Palembang,
              ditujukan untuk mengeksplorasi otomasi workflow backend modern dan
              arsitektur database relasional-nonrelasional.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
