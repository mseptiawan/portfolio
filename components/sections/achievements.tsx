"use client";

import Image from "next/image";
import Container from "../layout/container";
import { Trophy, Medal, CheckCircle2, Award } from "lucide-react";

import imgJuara1Uin from "@/public/images/certificate/juara-1.png";
import imgPesertaMultimedia from "@/public/images/certificate/peserta-lomba-multimedia.png";
import imgPesertaUin from "@/public/images/certificate/peserta-lomba-uin.png";
import imgUdemyNodejs from "@/public/images/certificate/udemy-nodejs.png";

const achievements = [
  {
    title: "Juara 1 UI/UX Competition",
    organizer: "Rafatech UIN Raden Fatah",
    image: imgJuara1Uin.src,
    type: "Winner",
  },
  {
    title: "Finalis Web Development",
    organizer: "Rafatech UIN Raden Fatah",
    image: imgPesertaUin.src,
    type: "Finalist",
  },
  
];

const typeStyles = {
  Winner: { icon: Trophy, color: "text-amber-600", bg: "bg-amber-50" },
  Finalist: { icon: Medal, color: "text-blue-600", bg: "bg-blue-50" },
  Participant: { icon: Award, color: "text-gray-600", bg: "bg-gray-50" },
  Certification: { icon: CheckCircle2, color: "text-emerald-600", bg: "bg-emerald-50" },
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-24">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Achievements</h2>
          <p className="text-gray-500 mt-2">Penghargaan & sertifikasi</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {achievements.map((item, index) => {
            const style = typeStyles[item.type as keyof typeof typeStyles];
            const Icon = style.icon;

            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition"
              >
                <div className="relative aspect-video bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <span
                    className={`absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${style.bg} ${style.color}`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {item.type}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{item.organizer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}