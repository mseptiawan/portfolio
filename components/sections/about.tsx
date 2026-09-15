import Container from "../layout/container";

export default function About() {
  return (
    <section id="about" className="py-24 flex items-center justify-center">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          {/* Label */}
          <p className="mb-4 text-xs font-bold tracking-widest text-[#2563EB] uppercase">
            About Me
          </p>

          {/* Judul singkat (opsional, boleh dihapus) */}
          <h2 className="mb-6 text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111827] leading-tight">
            Bridging Business Needs & System Solutions.
          </h2>

          {/* Narasi — ukuran diturunkan agar nyaman dibaca */}
          <div className="space-y-4 text-[15px] sm:text-base leading-relaxed text-[#6B7280]">
            <p>
              I am an Information Systems graduate with a strong interest in{" "}
              <span className="font-semibold text-[#111827]">
                System Analysis
              </span>{" "}
              and{" "}
              <span className="font-semibold text-[#111827]">
                Business Analysis
              </span>
              . I focus on understanding business needs, analyzing existing
              processes, and translating requirements into practical system
              solutions.
            </p>

            <p>
              Through academic and project-based experience, I have worked on
              requirements gathering, business process analysis, functional
              requirements, system modeling, database design, wireframing, and
              User Acceptance Testing (UAT).
            </p>

            <p>
              With a background in web development, I also understand the
              technical side of system implementation, allowing me to bridge
              business requirements with development teams and practical
              technology solutions.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}