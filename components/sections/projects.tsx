"use client";
import Link from "next/link";
import Container from "../layout/container";
import imgInventaris from "@/public/images/projects/inventaris.png";
import imgHris from "@/public/images/projects/hris.png";
import imgChanghong from "@/public/images/projects/changhong.png";

interface Project {
  title: string;
  description: string;
  image: string;
  slug: string;
}

const projectsData: Project[] = [
  {
    title: "HRIS Zafa Tour",
    slug: "hris-zafa-tour",
    description:
      "Analisis dan perancangan sistem informasi kepegawaian untuk mendigitalisasi proses HR dalam satu sistem terintegrasi.",
    image: imgHris.src,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-24">
      <Container>
        {/* HEADER */}
        <div className="mx-auto mb-16 max-w-4xl text-left">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-[#2563EB] uppercase bg-blue-50 rounded-full border border-blue-100">
            Projects
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111827] leading-tight">
            Featured Work.
          </h2>
          <p className="mt-2 text-base text-[#6B7280]">
            Kumpulan proyek analisis dan perancangan sistem yang pernah saya
            kerjakan.
          </p>
        </div>

        {/* LIST PROYEK */}
        <div className="flex flex-col items-center space-y-24 w-full">
          {projectsData.map((project) => (
            <div
              key={project.slug}
              className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 w-full max-w-5xl"
            >
              {/* SISI GAMBAR */}
              <div className="w-full lg:w-[400px] max-w-md flex-shrink-0 flex justify-center">
                <div className="relative rounded-xl border border-[#E5E7EB] bg-transparent shadow-md hover:shadow-xl transition-all duration-500 group overflow-hidden">
                  <div className="aspect-video w-full overflow-hidden rounded-xl bg-transparent">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-fit transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* DETAIL TEKS */}
              <div className="w-full lg:w-[500px] max-w-xl flex flex-col items-center text-center">
                <h3 className="text-2xl font-black tracking-tight text-[#111827] mb-4">
                  {project.title}
                </h3>

                {/* Card Deskripsi */}
                <div className="w-full rounded-2xl border border-[#E5E7EB] bg-gray-50/60 p-6 sm:p-7 shadow-xs mb-5 text-sm leading-relaxed text-[#6B7280] font-normal">
                  <p className="text-center">{project.description}</p>
                </div>

                {/* Action Link */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-700 hover:-translate-y-0.5"
                >
                  View Case Study
                  <svg
                    className="w-4 h-4 fill-none stroke-current"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}