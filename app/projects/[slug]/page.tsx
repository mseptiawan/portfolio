import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Users, Zap, TrendingUp } from "lucide-react";
import DocumentDownload from "@/components/case-study/DocumentDownload";
import { projectsDetail } from "@/data/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;

  console.log("=== DEBUG ===");
  console.log("Slug:", slug);
  console.log("Data:", projectsDetail.map((p) => p.slug));

  const project = projectsDetail.find((p) => p.slug === slug);

  console.log("Found:", !!project);
  console.log("=== END ===");

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen text-foreground bg-transparent py-20 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* BACK */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Portfolio
        </Link>

        {/* HEADER */}
        <header className="mb-16">
          <h1 className="text-4xl font-black sm:text-5xl mb-6">
            {project.title}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {project.subtitle}
          </p>
        </header>

        {/* IMPACT */}
        <section className="mb-16 p-8 rounded-2xl">
          <h3 className="text-lg font-black mb-6 flex items-center gap-2">
            <TrendingUp className="w-5 h-5" /> Business Impact
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {project.impact.map((stat, i) => (
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

        {/* PIECES */}
        <section className="mb-16">
          <h3 className="text-xl font-black mb-6">
            Problem & Solution Strategy
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {project.pieces.map((item, i) => (
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

        {/* ROLES & WORKFLOWS */}
        <div className="grid md:grid-cols-2 gap-8">
          <section>
            <h3 className="text-xl font-black mb-6 flex items-center gap-2">
              <Users className="w-5 h-5" /> Roles & Access
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              {project.roles}
            </p>
          </section>

          <section>
            <h3 className="text-xl font-black mb-6 flex items-center gap-2">
              <Zap className="w-5 h-5" /> Core Workflows
            </h3>
            <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
              {project.workflows.map((wf, i) => (
                <li key={i}>
                  <span className="font-mono text-xs">{wf}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* SYSTEM INTERFACE */}
        <section className="mt-12 border-t border-border/40 pt-12">
          <h3 className="text-xl font-black mb-8">System Interface</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.screenshots.map((shot, i) => (
              <div
                key={i}
                className={`${
                  shot.fullWidth ? "md:col-span-2" : ""
                } rounded-2xl border border-border bg-white p-2 shadow-lg`}
              >
                <img
                  src={shot.image}
                  alt={shot.alt}
                  className="w-full h-auto rounded-lg"
                />
                <p className="text-center text-[10px] text-muted-foreground mt-2">
                  {shot.caption}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* DOWNLOAD DOCUMENTS */}
        <DocumentDownload documents={project.documents} />
      </div>
    </div>
  );
}