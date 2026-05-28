"use client"; // Tambahkeun ini karena kito bakal pake State untuk filter

import { useState } from "react";
import Container from "../layout/container";

interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  problem: string;
  solution: string;
  category: "Core Engine" | "Web Platform" | "Mobile App"; // Kito ringkas kategorinyo
  liveUrl?: string;
  codeUrl?: string;
}

const projectsData: Project[] = [
  {
    title: "HRIS & KPI Monitoring",
    category: "Mobile App",
    description:
      "Sistem HRIS dan monitoring KPI karyawan terintegrasi untuk mengotomatisasi absensi geofencing dan penilaian kinerja realtime.",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=400&q=80",
    techStack: ["Flutter", "Expo", "Laravel API", "MySQL"],
    problem: "Rekap absensi PT Zafa Mulia Mandiri manual & rawan manipulasi.",
    solution:
      "Mobile absensi geofencing dengan dasbor hitung skor KPI otomatis.",
  },
  {
    title: "Sistem Insentif Otomatis Promotor",
    category: "Core Engine",
    description:
      "Automation engine internal skala enterprise untuk kalkulasi komisi bulanan promotor berdasarkan data performa lapangan.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80",
    techStack: ["Node.js", "Express", "React", "MongoDB"],
    problem:
      "Finance PT Changhong menghabiskan waktu berhari-hari rekap skema insentif di spreadsheet.",
    solution:
      "Mesin otomatis yang langsung memproses data penjualan harian jadi laporan siap bayar.",
  },
  {
    title: "Coffee Directory Platform",
    category: "Web Platform",
    description:
      "Platform pemetaan kedai kopi lokal untuk membantu pengguna menemukan tempat ngopi berdasarkan fasilitas spesifik.",
    image:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=400&q=80",
    techStack: ["Next.js", "Tailwind CSS", "MongoDB", "Geolocation API"],
    problem:
      "Sulit mencari kedai kopi independen (hidden gem) yang ramah 'work from cafe'.",
    solution:
      "Sistem filter multi-kriteria interaktif yang terintegrasi maps realtime.",
  },
  {
    title: "Marketplace Lokal Nusantara",
    category: "Mobile App",
    description:
      "Platform e-commerce mobile untuk memfasilitasi perdagangan komoditas dan produk khas daerah di ajang kompetisi.",
    image:
      "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=400&q=80",
    techStack: ["React Native", "Laravel API", "PostgreSQL"],
    problem:
      "Akses pasar digital yang minim bagi UMKM lokal selama event kompetisi nasional.",
    solution:
      "Aplikasi mobile marketplace ringkas dengan sistem checkout yang dioptimasi.",
  },
  {
    title: "Sistem Manajemen Rental Mobil",
    category: "Web Platform",
    description:
      "Sistem manajemen operasional rental mobil, mencakup jadwal booking armada hingga manajemen komisi.",
    image:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=400&q=80",
    techStack: ["Laravel", "Blade", "MySQL", "Midtrans Payment"],
    problem:
      "Jadwal sewa mobil sering bentrok akibat pencatatan manual makelar properti rental.",
    solution:
      "Kalender ketersediaan armada otomatis terintegrasi sistem payment gateway.",
  },
  {
    title: "Direktori UMKM Daerah",
    category: "Web Platform",
    description:
      "Platform etalase digital interaktif untuk mengindeks dan mempromosikan ribuan UMKM lokal agar lebih go-digital.",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
    techStack: ["Next.js", "Tailwind CSS", "Express.js", "MongoDB"],
    problem:
      "Data UMKM daerah tersebar tidak beraturan dan sulit diakses investor luar kota.",
    solution:
      "Web direktori berperforma tinggi dengan fitur indexing cerdas dan direct link ke WhatsApp.",
  },
  {
    title: "Personal Tech Blog",
    category: "Core Engine",
    description:
      "Blog pribadi berbasis Markdown sebagai wadah dokumentasi riset backend, arsitektur sistem, dan otomasi AI.",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=400&q=80",
    techStack: ["Next.js", "Tailwind CSS", "MDX", "Vercel"],
    problem:
      "Butuh media penulisan cepat yang mendukung syntax highlighting tanpa overhead database.",
    solution:
      "Arsitektur SSG Next.js dikombinasikan dengan file MDX lokal agar SEO-friendly.",
  },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState<string>("All");

  // Filter Data berdasarkan Tab yang aktif
  const filteredProjects =
    activeTab === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeTab);

  return (
    <section
      id="projects"
      className="bg-transparent py-24 border-t border-border/40"
    >
      <Container>
        {/* Header Ringkas */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-2xl font-black tracking-tight sm:text-4xl text-foreground">
              Featured Projects
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Solusi backend engineering dan aplikasi komersial yang saya
              bangun.
            </p>
          </div>

          {/* SYSTEM TAB FILTER (Menghemat Tempat!) */}
          <div className="flex flex-wrap gap-1 p-1 bg-muted/60 border border-border/40 rounded-xl self-start md:self-auto">
            {["All", "Core Engine", "Web Platform", "Mobile App"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-background text-foreground shadow-xs border border-border/40"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* PROJECTS GRID (LEBIH SLIM DAN PIPIH) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group flex flex-col sm:flex-row h-full rounded-xl border border-border bg-muted/15 backdrop-blur-md overflow-hidden transition-all duration-200 hover:border-primary/20 hover:shadow-md"
            >
              {/* Gambar Horizontal (Di Sebelah Kiri saat di Desktop, Diatas saat di HP) */}
              <div className="relative w-full sm:w-40 md:w-36 lg:w-44 h-40 sm:h-auto flex-shrink-0 bg-muted border-b sm:border-b-0 sm:border-r border-border/40">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  loading="lazy"
                />
              </div>

              {/* Konten Card Di Sebelah Kanan */}
              <div className="flex flex-col flex-grow p-4 lg:p-5">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <h3 className="text-base font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-150">
                    {project.title}
                  </h3>
                </div>

                <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack Mini */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-1.5 py-0.5 rounded-md bg-secondary/50 text-secondary-foreground text-[10px] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Problem & Solution Mini */}
                <div className="mt-auto space-y-1.5 pt-3 border-t border-border/30 text-[11px] bg-muted/20 p-2.5 rounded-lg border border-border/30">
                  <p className="text-muted-foreground">
                    <span className="font-extrabold text-destructive text-[10px] tracking-wide uppercase mr-1">
                      Prob:
                    </span>
                    {project.problem}
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-extrabold text-emerald-500 text-[10px] tracking-wide uppercase mr-1">
                      Sol:
                    </span>
                    {project.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
