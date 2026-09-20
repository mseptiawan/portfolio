"use client";

import Container from "../layout/container";
import {
  SiMysql,
  SiPostman,
  SiGit,
} from "react-icons/si";
import { Database, FileText, Workflow, PenTool } from "lucide-react";

/* =========================================================
   KATEGORI 1 — SYSTEM ANALYSIS (text badge)
   ========================================================= */
const analysisItems = [
  "Requirements Gathering",
  "Requirements Analysis",
  "Business Process Analysis",
  "BPMN",
  "UML",
  "BRD",
  "SRS",
  "FSD",
  "Use Case",
  "ERD",
  "Wireframing",
  "UAT",
];

/* =========================================================
   KATEGORI 2 — DESIGN & DOCUMENTATION (text badge)
   ========================================================= */
const designItems = ["Figma", "draw.io", "Lucidchart", "Jira"];

/* =========================================================
   KATEGORI 3 — TECHNICAL (dengan ikon)
   ========================================================= */
const techItems = [
  { name: "SQL", icon: Database, color: "text-[#2563EB]" },
  { name: "MySQL", icon: SiMysql, color: "text-[#2563EB]" },
  { name: "REST API", icon: Workflow, color: "text-purple-600" },
  { name: "Postman", icon: SiPostman, color: "text-orange-500" },
  { name: "Git", icon: SiGit, color: "text-orange-600" },
];

/* =========================================================
   REUSABLE — Text badge
   ========================================================= */
function TextBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-3.5 py-2 text-[13px] font-semibold text-[#111827] bg-white border border-[#E5E7EB] rounded-xl transition-all duration-300 hover:border-[#2563EB] hover:text-[#2563EB] hover:-translate-y-0.5 cursor-default">
      {label}
    </span>
  );
}

/* =========================================================
   REUSABLE — Icon card
   ========================================================= */
function IconCard({
  name,
  icon: Icon,
  color,
}: {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}) {
  return (
    <div className="group flex items-center gap-3.5 p-4 bg-white border border-[#E5E7EB] rounded-2xl transition-all duration-300 hover:border-[#2563EB]/40 hover:-translate-y-1 hover:shadow-sm">
      <div className="p-2.5 bg-blue-50 border border-blue-100 rounded-xl shrink-0 flex items-center justify-center">
        <Icon className={`text-2xl ${color}`} />
      </div>
      <span className="text-sm font-bold text-[#111827]">{name}</span>
    </div>
  );
}

/* =========================================================
   REUSABLE — Category wrapper
   ========================================================= */
function Category({
  icon: Icon,
  iconColor,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  iconColor: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-[#E5E7EB] bg-gray-50/40 p-6 sm:p-7">
      <div className="flex items-center gap-2.5 mb-5">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white border border-[#E5E7EB]">
          <Icon className={`w-4 h-4 ${iconColor}`} />
        </div>
        <h3 className="text-xs font-bold tracking-widest text-[#111827] uppercase">
          {title}
        </h3>
      </div>
      {children}
    </div>
  );
}

/* =========================================================
   MAIN
   ========================================================= */
export default function TechStack() {
  return (
    <section id="tech" className="py-24 relative overflow-hidden bg-white">
      <Container>
        {/* HEADER */}
        <div className="mx-auto mb-14 max-w-4xl text-left">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-[#2563EB] uppercase bg-blue-50 rounded-full border border-blue-100">
            Tools & Technologies
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111827] leading-tight">
            What I Use to Analyze, Design, and Deliver.
          </h2>
          <p className="mt-2 text-base text-[#6B7280]">
            Alat dan teknologi yang saya gunakan untuk menganalisis kebutuhan,
            merancang sistem, dan berkolaborasi dengan tim teknis.
          </p>
        </div>

        {/* GRID — 3 KATEGORI */}
        <div className="mx-auto max-w-4xl space-y-6">
          {/* SYSTEM ANALYSIS */}
          <Category
            icon={FileText}
            iconColor="text-[#2563EB]"
            title="System Analysis"
          >
            <div className="flex flex-wrap gap-2.5">
              {analysisItems.map((item) => (
                <TextBadge key={item} label={item} />
              ))}
            </div>
          </Category>

          {/* DESIGN & DOCUMENTATION */}
          <Category
            icon={PenTool}
            iconColor="text-purple-600"
            title="Design & Documentation"
          >
            <div className="flex flex-wrap gap-2.5">
              {designItems.map((item) => (
                <TextBadge key={item} label={item} />
              ))}
            </div>
          </Category>

         {/* TECHNICAL */}
<Category
  icon={Workflow}
  iconColor="text-emerald-600"
  title="Technical"
>
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
    {techItems.map((tech) => (
      <IconCard
        key={tech.name}
        name={tech.name}
        icon={tech.icon}
        color={tech.color}
      />
    ))}
  </div>
</Category>
        </div>
      </Container>
    </section>
  );
}