"use client";

import Image from "next/image";
import Container from "../layout/container";
import { Award, Trophy, Medal, CheckCircle2 } from "lucide-react";

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
    title: "National Web Development Finalist",
    organizer: "Rafatech UIN Raden Fatah Palembang",
    image: imgPesertaUin.src,
    type: "Finalist",
    description:
      "Masuk sebagai finalis nasional dalam merancang, membangun, dan mempresentasikan arsitektur aplikasi web inovatif berbasis komoditas daerah.",
  },
  {
    title: "Multimedia Competition Participant",
    organizer: "Lembaga / Instansi Penyelenggara",
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
  const getBadgeStyle = (type: string) => {
    switch (type) {
      case "Winner":
        return {
          badge: "bg-amber-50 text-amber-700 border-amber-200",
          icon: Trophy,
        };
      case "Finalist":
        return {
          badge: "bg-blue-50 text-blue-700 border-blue-200",
          icon: Medal,
        };
      case "Certification":
        return {
          badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
          icon: CheckCircle2,
        };
      default:
        return {
          badge: "bg-gray-100 text-gray-700 border-gray-200",
          icon: Award,
        };
    }
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <Container>
        {/* SECTION HEADER */}
        <div className="mx-auto mb-16 max-w-4xl text-left">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full border border-blue-100">
            Achievements
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Honors & Certifications.
          </h2>
          <p className="mt-2 text-base text-gray-500">
            Penghargaan, sertifikasi, dan keikutsertaan kompetisi yang pernah
            diraih.
          </p>
        </div>

        {/* GRID LAYOUT (2 KOLOM) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievementsData.map((item, index) => {
            const { badge: badgeStyle, icon: BadgeIcon } = getBadgeStyle(
              item.type,
            );

            return (
              <div
                key={index}
                className="flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-gray-300 hover:-translate-y-1"
              >
                {/* PREVIEW SERTIFIKAT */}
                <div className="relative aspect-[16/10] w-full bg-gray-50 border-b border-gray-100 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* BADGE CATEGORY */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold ${badgeStyle}`}
                    >
                      <BadgeIcon className="w-3.5 h-3.5" />
                      {item.type}
                    </span>
                  </div>
                </div>

                {/* CONTENT CARD */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  {/* ORGANIZER / AUTHORITY */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                    <span className="font-medium text-gray-400">Issued by</span>
                    <span className="font-semibold text-gray-700">
                      {item.organizer}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
