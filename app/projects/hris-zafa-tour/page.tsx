"use client";

import Link from "next/link";
import { ArrowLeft, Users, CheckCircle, Zap, TrendingUp } from "lucide-react";

export default function HrisProjectDetail() {
  return (
    <div className="min-h-screen text-foreground bg-transparent py-20 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOMBOL KEMBALI */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Portfolio
        </Link>

        {/* HEADER */}
        <header className="mb-16">
          <h1 className="text-4xl font-black sm:text-5xl mb-6">
            HRIS Zafa Tour
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Sistem HRIS enterprise-grade yang mengotomatisasi siklus SDM dengan
            arsitektur
            <span className="font-bold text-foreground"> Clean MVC</span>. Fokus
            pada skalabilitas, efisiensi birokrasi, dan transparansi data
            karyawan.
          </p>
        </header>

        {/* 1. IMPACT (Bagian paling "Nendang") */}
        <section className="mb-16  p-8 rounded-2xl">
          <h3 className="text-lg font-black  mb-6 flex items-center gap-2">
            <TrendingUp className="w-5 h-5" /> Business Impact
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { val: "90%", label: "Reduksi Error" },
              { val: "< 1 Jam", label: "Approval Cuti" },
              { val: "Full", label: "Real-time KPI" },
              { val: "100%", label: "Data Terpusat" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-2xl font-black text-blue-900 dark:text-blue-400">
                  {stat.val}
                </div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. RINGKASAN PIECES (Dipangkas jadi Grid Ringkas) */}
        <section className="mb-16">
          <h3 className="text-xl font-black mb-6">
            Problem & Solution Strategy
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              {
                p: "Performance",
                desc: "Automasi manual ke sistem terintegrasi.",
              },
              { p: "Information", desc: "Digitalisasi data real-time." },
              { p: "Economy", desc: "Integrasi payroll untuk akurasi." },
              { p: "Control", desc: "Sentralisasi database & audit trail." },
              { p: "Efficiency", desc: "Eliminasi redundansi data." },
              { p: "Service", desc: "Employee Self-Service portal." },
            ].map((item, i) => (
              <div
                key={i}
                className="p-4 rounded-xl border border-border bg-zinc-50 dark:bg-zinc-900/30"
              >
                <h4 className="font-bold text-xs text-blue-900 mb-1">
                  {item.p}
                </h4>
                <p className="text-[10px] text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. WORKFLOW & ROLES (Dibuat lebih padat) */}
        <div className="grid md:grid-cols-2 gap-8">
          <section>
            <h3 className="text-xl font-black mb-6 flex items-center gap-2">
              <Users className="w-5 h-5" /> Roles & Access
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              5 aktor (Pegawai, Wadir, Mgr Admin, Mgr Keu, Dirut) dengan akses
              RBAC yang terisolasi untuk keamanan data.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-black mb-6 flex items-center gap-2">
              <Zap className="w-5 h-5" /> Core Workflows
            </h3>
            <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
              <li>
                Approval Dinas:{" "}
                <span className="font-mono text-xs">
                  Pegawai → Mgr → Dirut → Keu
                </span>
              </li>
              <li>
                Klaim:{" "}
                <span className="font-mono text-xs">
                  Smart-routing ({"<"}200k vs {">"}200k)
                </span>
              </li>
              <li>
                Penugasan:{" "}
                <span className="font-mono text-xs">
                  Real-time Task Dispatching
                </span>
              </li>
            </ul>
          </section>
        </div>

        {/* 4. VISUAL SHOWCASE */}
        <section className="mt-12 border-t border-border/40 pt-12">
          <h3 className="text-xl font-black mb-8">System Interface</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Gambar Utama (Full Width) */}
            <div className="md:col-span-2 rounded-2xl border border-border bg-white p-2 shadow-lg">
              <img
                src="/images/projects/hris.png"
                alt="Dashboard Utama"
                className="w-full h-auto rounded-lg"
              />
              <p className="text-center text-[10px] text-muted-foreground mt-2">
                Dashboard Utama & Monitoring
              </p>
            </div>

            {/* Gambar Pendukung (Grid 2 kolom) */}
            <div className="rounded-2xl border border-border bg-white p-2 shadow-lg">
              <img
                src="/images/projects/hris-detail-pengajuan.png"
                alt="Detail Pengajuan"
                className="w-full h-auto rounded-lg"
              />
              <p className="text-center text-[10px] text-muted-foreground mt-2">
                Detail Alur Pengajuan
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-white p-2 shadow-lg">
              <img
                src="/images/projects/hris-kelola-kalender.png"
                alt="Kelola Kalender"
                className="w-full h-auto rounded-lg"
              />
              <p className="text-center text-[10px] text-muted-foreground mt-2">
                Manajemen Kalender & Agenda
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
