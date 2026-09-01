"use client";
import Link from "next/link";
import Container from "../layout/container";
import {
  ExternalLink,
  Smartphone,
  Cpu,
  Layers,
  Database,
  Map,
  ShieldCheck,
  Terminal,
  Zap,
  Globe,
  Atom,
  RefreshCw,
  Code2,
} from "lucide-react";
import { useState } from "react";
import imgInventaris from "@/public/images/projects/inventaris.png";
import imgHris from "@/public/images/projects/hris.png";
import imgChanghong from "@/public/images/projects/changhong.png";
import imgBjb from "@/public/images/projects/bjb-rental-mobil-palembang.png";
import imgBlog from "@/public/images/projects/blog.png";
import imgCoffe from "@/public/images/projects/coffe.png";
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
    title: "HRIS Zafa Tour",
    description:
      "Sistem HRIS enterprise-grade yang mengotomatisasi seluruh siklus operasional SDM, mulai dari absensi berbasis geofencing, pengajuan cuti dan lembur dengan multi-level approval workflow, hingga manajemen perjalanan dinas dan kalkulasi performa KPI karyawan secara realtime dalam satu platform terintegrasi.",
    image: imgHris.src,
    techStack: [
      {
        name: "Node.js",
        icon: <Terminal className="w-3.5 h-3.5 text-green-600" />,
      },
      {
        name: "Express",
        icon: <Code2 className="w-3.5 h-3.5 text-zinc-600" />,
      },
      {
        name: "EJS",
        icon: <Layers className="w-3.5 h-3.5 text-yellow-600" />,
      },
      {
        name: "Tailwind CSS",
        icon: <div className="w-3.5 h-3.5 bg-sky-400 rounded-sm" />, // Ikon custom/simpel untuk Tailwind
      },
      {
        name: "Redis",
        icon: <Database className="w-3.5 h-3.5 text-red-500" />,
      },
      {
        name: "Zod",
        icon: <ShieldCheck className="w-3.5 h-3.5 text-indigo-500" />,
      },
    ],
    problem:
      "Rekap absensi PT Zafa Mulia Mandiri manual, birokrasi persetujuan cuti/lembur yang lambat, serta kesulitan pelacakan anggaran perjalanan dinas.",
    solution:
      "Platform HRIS berbasis web dengan sistem approval berjenjang (Manager-HR-Director), modul manajemen perjalanan dinas terintegrasi, dan dasbor kalkulasi KPI otomatis.",
    detailType: "page",
    codeUrl: "https://github.com/mseptiawan/website-zafa-tour",
  },
  {
  title: "Sistem Manajemen Inventaris - Toko Sariputih",
  description:
    "Sistem manajemen inventaris berbasis web enterprise-grade yang mengelola seluruh siklus operasional gudang, mulai dari master data (produk, kategori, supplier, customer), mutasi stok masuk/keluar, stock opname dengan penyesuaian otomatis, hingga sistem kasir (POS) terintegrasi dan laporan realtime dengan RBAC multi-role.",
  image: imgInventaris.src, // <-- nanti tambahkan import gambarnya
  techStack: [
    {
      name: "Laravel",
      icon: <Code2 className="w-3.5 h-3.5 text-red-500" />,
    },
    {
      name: "PHP 8.2",
      icon: <Terminal className="w-3.5 h-3.5 text-indigo-600" />,
    },
    {
      name: "MySQL",
      icon: <Database className="w-3.5 h-3.5 text-blue-600" />,
    },
    {
      name: "Tailwind CSS",
      icon: <Layers className="w-3.5 h-3.5 text-cyan-500" />,
    },
    {
      name: "Alpine.js",
      icon: <Atom className="w-3.5 h-3.5 text-green-500" />,
    },
    {
      name: "RBAC",
      icon: <ShieldCheck className="w-3.5 h-3.5 text-purple-500" />,
    },
  ],
  problem:
    "PT Sariputih masih menggunakan Excel untuk manajemen stok, stock opname manual rawan selisih, dan tidak ada sistem kasir terintegrasi yang bisa memantau penjualan harian secara realtime.",
  solution:
    "Platform inventaris berbasis Laravel dengan 6 role berbeda (Super Admin, Admin, Staff Gudang, Kasir, Manager, Viewer), fitur stock opname otomatis dengan audit trail, dan sistem POS (Point of Sale) terintegrasi dengan laporan laba/rugi realtime.",
  detailType: "page",
  codeUrl: "https://github.com/mseptiawan/inventaris",
  liveUrl: "#", 
},
  {
    title: "Sistem Insentif Otomatis Promotor",
    description:
      "Automation engine internal skala enterprise untuk kalkulasi komisi bulanan promotor berdasarkan data performa lapangan secara presisi.",
    image: imgChanghong.src,
    techStack: [
      {
        name: "Laravel",
        icon: <Code2 className="w-3.5 h-3.5 text-red-500" />, // Ikon merah khas Laravel
      },
      {
        name: "MySQL",
        icon: <Database className="w-3.5 h-3.5 text-blue-600" />, // Ikon biru khas MySQL
      },
      {
        name: "HTML",
        icon: <Layers className="w-3.5 h-3.5 text-orange-500" />, // Ikon orange khas HTML
      },
    ],
    problem:
      "Finance PT Changhong menghabiskan waktu berhari-hari rekap skema insentif di spreadsheet.",
    solution:
      "Mesin otomatis yang langsung memproses data penjualan harian jadi laporan siap bayar.",
    detailType: "page",
    codeUrl: "https://github.com/mseptiawan/insentif-changhong",
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
    ],
    problem:
      "Sulit mencari kedai kopi independen (hidden gem) yang ramah 'work from cafe'.",
    solution:
      "Sistem filter multi-kriteria interaktif yang terintegrasi maps realtime.",
    detailType: "modal",
    codeUrl: "https://github.com/mseptiawan/coffe",
  },
  {
    title: "Marketplace Lokal Nusantara",
    description:
      "Platform e-commerce mobile untuk memfasilitasi perdagangan komoditas dan produk khas daerah di ajang kompetisi.",
    image: imgMarketplace.src,
    techStack: [
      {
        name: "Laravel",
        icon: <Code2 className="w-3.5 h-3.5 text-red-500" />,
      },
      {
        name: "MySQL",
        icon: <Database className="w-3.5 h-3.5 text-blue-600" />,
      },
      {
        name: "Pusher",
        icon: <Zap className="w-3.5 h-3.5 text-amber-500" />, // Ikon petir khas Pusher
      },
    ],
    problem:
      "Akses pasar digital yang minim bagi UMKM lokal selama event kompetisi nasional.",
    solution:
      "Aplikasi mobile marketplace ringkas dengan sistem checkout yang dioptimasi.",
    detailType: "page",
    codeUrl: "https://github.com/mseptiawan/marketplace",
  },
  {
    title: "Sistem Manajemen Rental Mobil",
    description:
      "Sistem manajemen operasional rental mobil, mencakup jadwal booking armada hingga manajemen komisi.",
    image: imgBjb.src,
    techStack: [
      {
        name: "React.js",
        icon: <Code2 className="w-3.5 h-3.5 text-cyan-400" />,
      },
    ],
    problem:
      "Jadwal sewa mobil sering bentrok akibat pencatatan manual makelar properti rental.",
    solution:
      "Kalender ketersediaan armada otomatis terintegrasi sistem payment gateway.",
    detailType: "modal",
    codeUrl: "https://github.com/mseptiawan/bjb-rentcar-palembang",
  },

  {
    title: "Personal Tech Blog",
    description:
      "Blog pribadi berbasis Markdown sebagai wadah dokumentasi riset backend, arsitektur sistem, dan otomasi AI.",
    image: imgBlog.src,
    techStack: [
      {
        name: "React",
        icon: <Atom className="w-3.5 h-3.5 text-sky-400" />,
      },
      {
        name: "Inertia.js",
        icon: <RefreshCw className="w-3.5 h-3.5 " />,
      },
      {
        name: "Tailwind CSS",
        icon: <Layers className="w-3.5 h-3.5 text-cyan-500" />,
      },
      {
        name: "MDX",
        icon: <Code2 className="w-3.5 h-3.5 text-amber-500" />,
      },
    ],
    problem:
      "Butuh media penulisan cepat yang mendukung syntax highlighting tanpa overhead database.",
    solution:
      "Arsitektur SSG Next.js dikombinasikan dengan file MDX lokal agar SEO-friendly.",
    detailType: "modal",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  return (
    <section id="projects" className="bg-transparent py-28 ">
      <Container>
        <div className="flex flex-col items-center justify-center text-center mb-24">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl text-foreground relative inline-block">
            Featured Work
            <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-20 h-[4px]  rounded-full" />
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
                <div className="relative rounded-xl border border-border/60 bg-transparent shadow-md hover:shadow-xl  transition-all duration-500 group overflow-hidden">
                  <div className="aspect-video w-full overflow-hidden rounded-xl bg-transparent">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-fit transition-transform duration-700 "
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
                      <span className="font-extrabold min-w-[70px] shrink-0">
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
                    className="inline-flex items-center gap-2 text-sm font-bold text-foreground transition-colors duration-150"
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

                  <a
                    href={project.liveUrl || "#"}
                    className="inline-flex items-center gap-2 text-sm font-bold text-foreground  transition-colors duration-150"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Preview
                  </a>

                  {project.title === "HRIS Zafa Tour" && (
                    <Link
                      href={`/projects/${project.title
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, "-")}`}
                      className="inline-flex items-center gap-1.5 text-sm font-bold  transition-colors duration-150"
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
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-white dark:bg-zinc-900 border border-border rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 relative shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            {/* Tombol Close */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              ✕
            </button>

            {/* Header */}
            <div className="mb-8 pr-8">
              <h3 className="text-3xl font-black mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-muted-foreground">
                {selectedProject.description}
              </p>
            </div>

            {/* Main Grid: Visual di kiri, Data di kanan */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Kolom Kiri: Visual/Images */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  <img
                    src="/images/hris.png"
                    className="rounded-lg border border-border col-span-2"
                    alt="Dashboard"
                  />
                  <img
                    src="/images/hris-detail-pengajuan.png"
                    className="rounded-lg border border-border"
                    alt="Detail"
                  />
                  <img
                    src="/images/hris-kelola-kalender.png"
                    className="rounded-lg border border-border"
                    alt="Kalender"
                  />
                </div>
              </div>

              {/* Kolom Kanan: Data */}
              <div className="space-y-6">
                {/* Key Impact */}
                <div className="bg-zinc-50 dark:bg-zinc-800/50 p-4 rounded-xl border border-border">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">
                    Key Business Impact
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="font-black text-lg">90%</div>
                      <div className="text-[10px] text-muted-foreground">
                        REDUKSI ERROR
                      </div>
                    </div>
                    <div>
                      <div className="font-black text-lg">
                        kurang dari 1 Jam
                      </div>
                      <div className="text-[10px] text-muted-foreground">
                        APPROVAL
                      </div>
                    </div>
                  </div>
                </div>

                {/* PIECES Ringkas */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-3">
                    Problem (PIECES)
                  </h4>
                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground">
                      •{" "}
                      <span className="font-bold text-foreground">
                        Performance:
                      </span>{" "}
                      Proses manual lambat.
                    </p>
                    <p className="text-xs text-muted-foreground">
                      •{" "}
                      <span className="font-bold text-foreground">
                        Control:
                      </span>{" "}
                      Data tersebar (WhatsApp/Kertas).
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-4">
                  <a
                    href="#"
                    className="flex-1 text-center py-2.5 bg-black dark:bg-white text-white dark:text-black text-xs font-bold rounded-lg cursor-pointer"
                  >
                    View on GitHub
                  </a>
                  <a
                    href="#"
                    className="flex-1 text-center py-2.5 bg-zinc-100 dark:bg-zinc-800 text-xs font-bold rounded-lg cursor-pointer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
