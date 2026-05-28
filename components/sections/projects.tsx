"use client";

import Container from "../layout/container";
import imgHris from "@/public/images/projects/hris.png";
import imgChanghong from "@/public/images/projects/changhong.png";
import imgBjb from "@/public/images/projects/bjb-rental-mobil-palembang.png";
import imgBlog from "@/public/images/projects/blog.png";
import imgCoffe from "@/public/images/projects/coffe.png";
import imgDirektoriUmkm from "@/public/images/projects/direktori-umkm.png";
import imgMarketplace from "@/public/images/projects/marketplace-lokal.png";

// Hapus 'GitHub' atau 'Github' dari sini agar Turbopack aman
import {
  Globe,
  Smartphone,
  Cpu,
  Database,
  Layers,
  Code2,
  ExternalLink,
} from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  techStack: { name: string; icon: React.ReactNode }[];
  problem: string;
  solution: string;
  liveUrl?: string;
  codeUrl?: string;
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
  },
];
export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-transparent py-28 border-t border-border/40"
    >
      <Container>
        {/* HEADER SECTION: Dipastikan Pas di Tengah Halaman */}
        <div className="flex flex-col items-center justify-center text-center mb-24">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl text-foreground relative inline-block">
            Featured Work
            {/* Garis ungu pas di as tengah bawah judul */}
            <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-20 h-[4px] bg-purple-600 rounded-full" />
          </h2>
        </div>

        {/* STACK LIST PROYEK: Seluruh Baris Berpusat Menuju Tengah */}
        <div className="flex flex-col items-center space-y-24 w-full">
          {projectsData.map((project, index) => (
            <div
              key={index}
              // justify-center memastikan kombinasi gambar & teks seimbang di tengah
              className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 w-full max-w-5xl"
            >
              {/* SISI GAMBAR: Lebar Landscape & Center-Aligned */}
              <div className="w-full lg:w-[500px] max-w-xl flex-shrink-0 flex justify-center">
                <div className="relative rounded-2xl bg-muted/20 p-2 shadow-xs w-full group overflow-hidden">
                  <div className="aspect-video w-full overflow-hidden rounded-xl bg-muted border border-border/40">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-fit transition-transform duration-700 group-hover:scale-102"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* SISI KONTEN TEKS: Bersih dari double div & Rata Tengah secara Struktur */}
              <div className="w-full lg:w-[500px] max-w-xl flex flex-col items-center text-center">
                {/* Judul Proyek */}
                <h3 className="text-2xl font-black tracking-tight text-foreground mb-4">
                  {project.title}
                </h3>

                {/* Card Deskripsi dengan Border dan Lebar Sinkron */}
                <div className="w-full rounded-2xl border border-border bg-white dark:bg-zinc-900/40 p-6 sm:p-7 shadow-xs backdrop-blur-md mb-5 text-sm leading-relaxed text-muted-foreground font-normal">
                  {/* Paragraf deskripsi dibuat terpusat */}
                  <p className="mb-4 text-center">{project.description}</p>

                  {/* Problem & Solution Mini - Teks di dalam box tetap rata kiri agar mudah dibaca */}
                  <div className="pt-4 border-t border-border text-left text-xs space-y-2.5">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-1">
                      <span className="font-extrabold text-foreground min-w-[70px] shrink-0">
                        Problem:
                      </span>{" "}
                      <p className="text-muted-foreground">{project.problem}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-start gap-1">
                      <span className="font-extrabold text-purple-600 dark:text-purple-400 min-w-[70px] shrink-0">
                        Solution:
                      </span>{" "}
                      <p className="text-muted-foreground">
                        {project.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tech Stack Centered */}
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

                {/* Action Links Centered */}
                <div className="flex items-center justify-center gap-6 pt-3 border-t border-border/40 w-full">
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

                  <a
                    href={project.liveUrl || "#"}
                    className="inline-flex items-center gap-2 text-sm font-bold text-foreground hover:text-purple-600 transition-colors duration-150"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Preview
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
