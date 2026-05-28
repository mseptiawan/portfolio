"use client";

import Container from "../layout/container";
import { ExternalLink } from "lucide-react";

// Impor Gambar Sertifikat / Prestasi
import imgJuara1Uin from "@/public/images/certificate/juara-1.png";
import imgPesertaMultimedia from "@/public/images/certificate/peserta-lomba-multimedia.png";
import imgPesertaUin from "@/public/images/certificate/peserta-lomba-uin.png";
import imgUdemyNodejs from "@/public/images/certificate/udemy-nodejs.png";

interface Achievement {
  title: string;
  organizer: string;
  image: string;
  type: "Winner" | "Finalist" | "Participant" | "Certification";
  description: string;
}

const achievementsData: Achievement[] = [
  {
    title: "1st Place Winner – UI/UX Competition",
    organizer: "Rafatech UIN Raden Fatah Palembang",
    image: imgJuara1Uin.src,
    type: "Winner",
    description:
      "Berhasil meraih Juara 1 pada ajang kompetisi desain UI/UX tingkat nasional dengan fokus inovasi solusi interface digital ramah pengguna.",
  },
  {
    title: "National Web Development Competition Finalist",
    organizer: "Rafatech UIN Raden Fatah Palembang",
    image: imgPesertaUin.src,
    type: "Finalist",
    description:
      "Masuk sebagai finalis nasional dalam merancang, membangun, dan mempresentasikan arsitektur aplikasi web inovatif berbasis komoditas daerah.",
  },
  {
    title: "Multimedia Competition Participant",
    organizer: "Lembaga / Instansi Penyelenggara Kompetisi",
    image: imgPesertaMultimedia.src,
    type: "Participant",
    description:
      "Berpartisipasi aktif dalam tantangan pembuatan aset kreatif dan solusi multimedia interaktif bersaing dengan mahasiswa tingkat nasional.",
  },
  {
    title: "Node.js Developer Certification",
    organizer: "Udemy E-Learning Platform",
    image: imgUdemyNodejs.src,
    type: "Certification",
    description:
      "Sertifikasi kompetensi profesional backend engineer mencakup REST API development, keamanan arsitektur database, dan pengelolaan server Node.js.",
  },
];

export default function Achievements() {
  const getBadgeStyles = (type: string) => {
    switch (type) {
      case "Winner":
        return "bg-amber-500/10 text-amber-500 border-amber-500/20";
      case "Finalist":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case "Certification":
        return "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";
      default:
        return "bg-zinc-500/10 text-muted-foreground border-zinc-500/20";
    }
  };

  return (
    <section
      id="achievements"
      className="bg-transparent py-28 border-t border-border/40"
    >
      <Container>
        <div className="flex flex-col items-center justify-center text-center mb-24">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl text-foreground relative inline-block">
            Achievements
            <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-20 h-[4px] bg-purple-600 rounded-full" />
          </h2>
        </div>

        <div className="flex flex-col items-center space-y-24 w-full">
          {achievementsData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 w-full max-w-5xl"
            >
              {/* SISI GAMBAR SERTIFIKAT: Diperkecil jadi 400px biar manis */}
              {/* SISI GAMBAR SERTIFIKAT: Bersih tanpa background abu-abu kaku */}
              <div className="w-full lg:w-[400px] max-w-md flex-shrink-0 flex justify-center">
                <div className="relative rounded-xl border border-border/60 bg-transparent shadow-md hover:shadow-xl dark:hover:shadow-purple-500/10 transition-all duration-500 group overflow-hidden">
                  <div className="aspect-video w-full overflow-hidden rounded-xl bg-transparent">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-fit transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* SISI KONTEN TEKS: Sekarang rata kiri (items-start & text-left) biar sinkron dan rapi */}
              <div className="w-full lg:w-[450px] max-w-lg flex flex-col items-start text-left">
                {/* Badge Tingkat Kompetisi */}
                <span
                  className={`px-3 py-1 mb-3 rounded-full border text-[10px] font-bold tracking-wider uppercase ${getBadgeStyles(item.type)}`}
                >
                  {item.type}
                </span>

                {/* Judul Prestasi */}
                <h3 className="text-2xl font-black tracking-tight text-foreground mb-4">
                  {item.title}
                </h3>

                {/* Card Deskripsi Ber-border */}
                <div className="w-full rounded-2xl border border-border bg-zinc-50/60 dark:bg-zinc-900/30 p-6 sm:p-7 shadow-xs backdrop-blur-md mb-6 text-sm leading-relaxed text-muted-foreground font-normal">
                  {/* Teks di dalam paragraf juga diubah ke rata kiri */}
                  <p className="mb-4 text-left">{item.description}</p>

                  {/* Detail Penyelenggara */}
                  <div className="pt-4 border-t border-border text-left text-xs space-y-2.5">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-1">
                      <span className="font-extrabold text-foreground min-w-[90px] shrink-0">
                        Authority:
                      </span>{" "}
                      <p className="text-muted-foreground">{item.organizer}</p>
                    </div>
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
