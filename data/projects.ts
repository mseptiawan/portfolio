export interface ProjectDocument {
  title: string;
  description?: string;
  link: string;
  size?: string;
}

export interface ProjectStat {
  val: string;
  label: string;
}

export interface ProjectPiece {
  p: string;
  desc: string;
}

export interface ProjectDetail {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  role: string;
  image: string;
  impact: ProjectStat[];
  pieces: ProjectPiece[];
  roles: string;
  workflows: string[];
  screenshots: {
    image: string;
    alt: string;
    caption: string;
    fullWidth?: boolean;
  }[];
  documents: ProjectDocument[];
}

export const projectsDetail: ProjectDetail[] = [
  {
    slug: "hris-zafa-tour",
    title: "HRIS Zafa Tour",
    subtitle:
      "Sistem HRIS enterprise-grade yang mengotomatisasi siklus SDM dengan arsitektur Clean MVC. Fokus pada skalabilitas, efisiensi birokrasi, dan transparansi data karyawan.",
    year: "2026",
    role: "System Analyst",
    image: "/images/projects/hris.png",
    impact: [
      { val: "90%", label: "Reduksi Error" },
      { val: "< 1 Jam", label: "Approval Cuti" },
      { val: "Full", label: "Real-time KPI" },
      { val: "100%", label: "Data Terpusat" },
    ],
    pieces: [
      { p: "Performance", desc: "Automasi manual ke sistem terintegrasi." },
      { p: "Information", desc: "Digitalisasi data real-time." },
      { p: "Economy", desc: "Integrasi payroll untuk akurasi." },
      { p: "Control", desc: "Sentralisasi database & audit trail." },
      { p: "Efficiency", desc: "Eliminasi redundansi data." },
      { p: "Service", desc: "Employee Self-Service portal." },
    ],
    roles:
      "5 aktor (Pegawai, Wadir, Mgr Admin, Mgr Keu, Dirut) dengan akses RBAC yang terisolasi untuk keamanan data.",
    workflows: [
      "Approval Dinas: Pegawai → Mgr → Dirut → Keu",
      "Klaim: Smart-routing (<200k vs >200k)",
      "Penugasan: Real-time Task Dispatching",
    ],
    screenshots: [
      {
        image: "/images/projects/hris.png",
        alt: "Dashboard Utama",
        caption: "Dashboard Utama & Monitoring",
        fullWidth: true,
      },
      {
        image: "/images/projects/hris-detail-pengajuan.png",
        alt: "Detail Pengajuan",
        caption: "Detail Alur Pengajuan",
      },
      {
        image: "/images/projects/hris-kelola-kalender.png",
        alt: "Kelola Kalender",
        caption: "Manajemen Kalender & Agenda",
      },
    ],
    documents: [
      {
        title: "BRD Preview",
        description: "Business Requirements Document",
        link: "",
      },
      {
        title: "Preview",
        description: "Dokumen Preview",
        link: "https://drive.google.com/file/d/1hznye8I41BmSEzSGT-OynxKsVDURPWWQ/view?usp=sharing",
      },
      {
        title: "SRS",
        description: "SRS + Diagram (170+ halaman)",
        link: "",
      },
    ],
  },
];