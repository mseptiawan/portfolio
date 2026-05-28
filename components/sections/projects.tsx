"use client";
import Link from "next/link";
import Container from "../layout/container";
import {
  ExternalLink,
  Smartphone,
  Cpu,
  Layers,
  Database,
  Globe,
  Code2,
} from "lucide-react";
import { useState } from "react";
import imgHris from "@/public/images/projects/hris.png";
import imgChanghong from "@/public/images/projects/changhong.png";
import imgBjb from "@/public/images/projects/bjb-rental-mobil-palembang.png";
import imgBlog from "@/public/images/projects/blog.png";
import imgCoffe from "@/public/images/projects/coffe.png";
import imgDirektoriUmkm from "@/public/images/projects/direktori-umkm.png";
import imgMarketplace from "@/public/images/projects/marketplace-lokal.png";

interface Project {
  title: string;
  description: string;
  image: string;
  techStack: { name: string; icon: React.ReactNode }[];
  problem: string;
  solution: string;
  liveUrl?: string;
  codeUrl?: string;
  detailType: "page" | "modal";
}

const projectsData: Project[] = [
  {
    title: "HRIS & KPI Monitoring",
    description:
      "Sistem HRIS dan monitoring KPI karyawan terintegrasi untuk mengotomatisasi absensi geofencing dan penilaian kinerja secara realtime.",
    image: imgHris.src,
    techStack: [
      {
        name: "Flutter",
        icon: <Smartphone className="w-3.5 h-3.5 text-blue-500" />,
      },
      {
        name: "Expo",
        icon: <Smartphone className="w-3.5 h-3.5 text-zinc-400" />,
      },
      {
        name: "Laravel API",
        icon: <Code2 className="w-3.5 h-3.5 text-red-500" />,
      },
      {
        name: "MySQL",
        icon: <Database className="w-3.5 h-3.5 text-blue-600" />,
      },
    ],
    problem: "Rekap absensi PT Zafa Mulia Mandiri manual & rawan manipulasi.",
    solution:
      "Mobile absensi geofencing dengan dasbor hitung skor KPI otomatis.",
    detailType: "page",
  },
  {
    title: "Sistem Insentif Otomatis Promotor",
    description:
      "Automation engine internal skala enterprise untuk kalkulasi komisi bulanan promotor berdasarkan data performa lapangan secara presisi.",
    image: imgChanghong.src,
    techStack: [
      {
        name: "Node.js",
        icon: <Cpu className="w-3.5 h-3.5 text-emerald-500" />,
      },
      {
        name: "Express",
        icon: <Code2 className="w-3.5 h-3.5 text-zinc-400" />,
      },
      { name: "React", icon: <Layers className="w-3.5 h-3.5 text-cyan-400" /> },
      {
        name: "MongoDB",
        icon: <Database className="w-3.5 h-3.5 text-emerald-600" />,
      },
    ],
    problem:
      "Finance PT Changhong menghabiskan waktu berhari-hari rekap skema insentif di spreadsheet.",
    solution:
      "Mesin otomatis yang langsung memproses data penjualan harian jadi laporan siap bayar.",
    detailType: "page",
  },
  {
    title: "Coffee Directory Platform",
    description:
      "Platform pemetaan kedai kopi lokal untuk membantu pengguna menemukan tempat ngopi berdasarkan fasilitas spesifik.",
    image: imgCoffe.src,
    techStack: [
      {
        name: "Next.js",
        icon: <Globe className="w-3.5 h-3.5 text-foreground" />,
      },
      {
        name: "Tailwind CSS",
        icon: <Layers className="w-3.5 h-3.5 text-cyan-500" />,
      },
      {
        name: "MongoDB",
        icon: <Database className="w-3.5 h-3.5 text-emerald-600" />,
      },
    ],
    problem:
      "Sulit mencari kedai kopi independen (hidden gem) yang ramah 'work from cafe'.",
    solution:
      "Sistem filter multi-kriteria interaktif yang terintegrasi maps realtime.",
    detailType: "modal",
  },
  {
    title: "Marketplace Lokal Nusantara",
    description:
      "Platform e-commerce mobile untuk memfasilitasi perdagangan komoditas dan produk khas daerah di ajang kompetisi.",
    image: imgMarketplace.src,
    techStack: [
      {
        name: "React Native",
        icon: <Smartphone className="w-3.5 h-3.5 text-cyan-400" />,
      },
      {
        name: "Laravel API",
        icon: <Code2 className="w-3.5 h-3.5 text-red-500" />,
      },
      {
        name: "PostgreSQL",
        icon: <Database className="w-3.5 h-3.5 text-blue-400" />,
      },
    ],
    problem:
      "Akses pasar digital yang minim bagi UMKM lokal selama event kompetisi nasional.",
    solution:
      "Aplikasi mobile marketplace ringkas dengan sistem checkout yang dioptimasi.",
    detailType: "page",
  },
  {
    title: "Sistem Manajemen Rental Mobil",
    description:
      "Sistem manajemen operasional rental mobil, mencakup jadwal booking armada hingga manajemen komisi.",
    image: imgBjb.src,
    techStack: [
      { name: "Laravel", icon: <Code2 className="w-3.5 h-3.5 text-red-500" /> },
      {
        name: "Blade",
        icon: <Layers className="w-3.5 h-3.5 text-orange-500" />,
      },
      {
        name: "MySQL",
        icon: <Database className="w-3.5 h-3.5 text-blue-600" />,
      },
    ],
    problem:
      "Jadwal sewa mobil sering bentrok akibat pencatatan manual makelar properti rental.",
    solution:
      "Kalender ketersediaan armada otomatis terintegrasi sistem payment gateway.",
    detailType: "modal",
  },
  {
    title: "Direktori UMKM Daerah",
    description:
      "Platform etalase digital interaktif untuk mengindeks dan mempromosikan ribuan UMKM lokal agar lebih go-digital.",
    image: imgDirektoriUmkm.src,
    techStack: [
      {
        name: "Next.js",
        icon: <Globe className="w-3.5 h-3.5 text-foreground" />,
      },
      {
        name: "Tailwind CSS",
        icon: <Layers className="w-3.5 h-3.5 text-cyan-500" />,
      },
      {
        name: "Express.js",
        icon: <Cpu className="w-3.5 h-3.5 text-zinc-400" />,
      },
      {
        name: "MongoDB",
        icon: <Database className="w-3.5 h-3.5 text-emerald-600" />,
      },
    ],
    problem:
      "Data UMKM daerah tersebar tidak beraturan dan sulit diakses investor luar kota.",
    solution:
      "Web direktori berperforma tinggi dengan fitur indexing cerdas dan direct link ke WhatsApp.",
    detailType: "modal",
  },
  {
    title: "Personal Tech Blog",
    description:
      "Blog pribadi berbasis Markdown sebagai wadah dokumentasi riset backend, arsitektur sistem, dan otomasi AI.",
    image: imgBlog.src,
    techStack: [
      {
        name: "Next.js",
        icon: <Globe className="w-3.5 h-3.5 text-foreground" />,
      },
      {
        name: "Tailwind CSS",
        icon: <Layers className="w-3.5 h-3.5 text-cyan-500" />,
      },
      { name: "MDX", icon: <Code2 className="w-3.5 h-3.5 text-amber-500" /> },
    ],
    problem:
      "Butuh media penulisan cepat yang mendukung syntax highlighting tanpa overhead database.",
    solution:
      "Arsitektur SSG Next.js dikombinasikan dengan file MDX lokal agar SEO-friendly.",
    detailType: "modal",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-transparent py-28 border-t border-border/40"
    >
      <Container>
        <div className="flex flex-col items-center justify-center text-center mb-24">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl text-foreground relative inline-block">
            Featured Work
            <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-20 h-[4px] bg-purple-600 rounded-full" />
          </h2>
        </div>

        <div className="flex flex-col items-center space-y-24 w-full">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 w-full max-w-5xl"
            >
              {/* SISI GAMBAR SERTIFIKAT: Bersih tanpa background abu-abu kaku */}
              <div className="w-full lg:w-[400px] max-w-md flex-shrink-0 flex justify-center">
                <div className="relative rounded-xl border border-border/60 bg-transparent shadow-md hover:shadow-xl dark:hover:shadow-purple-500/10 transition-all duration-500 group overflow-hidden">
                  <div className="aspect-video w-full overflow-hidden rounded-xl bg-transparent">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* Detail Teks */}
              <div className="w-full lg:w-[500px] max-w-xl flex flex-col items-center text-center">
                <h3 className="text-2xl font-black tracking-tight text-foreground mb-4">
                  {project.title}
                </h3>

                {/* Card Deskripsi: Sekarang menggunakan bg-zinc-50/60 tembus pandang */}
                <div className="w-full rounded-2xl border border-border bg-zinc-50/60 dark:bg-zinc-900/30 p-6 sm:p-7 shadow-xs backdrop-blur-md mb-5 text-sm leading-relaxed text-muted-foreground font-normal">
                  <p className="mb-4 text-center">{project.description}</p>

                  <div className="pt-4 border-t border-border text-left text-xs space-y-2.5">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-1">
                      <span className="font-extrabold text-foreground min-w-[70px] shrink-0">
                        Problem:
                      </span>
                      <p className="text-muted-foreground">{project.problem}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-start gap-1">
                      <span className="font-extrabold text-purple-600 dark:text-purple-400 min-w-[70px] shrink-0">
                        Solution:
                      </span>
                      <p className="text-muted-foreground">
                        {project.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-muted/50 text-foreground text-xs font-semibold transition-colors hover:bg-muted"
                    >
                      {tech.icon}
                      {tech.name}
                    </span>
                  ))}
                </div>

                {/* Action Links: Ditambah Button Detail Project */}
                <div className="flex items-center justify-center gap-6 pt-3 border-t border-border/40 w-full">
                  {/* Tombol Source Code */}
                  <a
                    href={project.codeUrl || "#"}
                    className="inline-flex items-center gap-2 text-sm font-bold text-foreground hover:text-purple-600 transition-colors duration-150"
                  >
                    <svg
                      className="w-4 h-4 fill-none stroke-current"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                    Source Code
                  </a>

                  {/* Tombol Live Preview */}
                  <a
                    href={project.liveUrl || "#"}
                    className="inline-flex items-center gap-2 text-sm font-bold text-foreground hover:text-purple-600 transition-colors duration-150"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Preview
                  </a>

                  <Link
                    href={`/projects/${project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors duration-150"
                  >
                    Detail Project
                    <svg
                      className="w-4 h-4 fill-none stroke-current"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
