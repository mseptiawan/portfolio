import Container from "../layout/container";

export default function Hero() {
  return (
    <section className="gradient relative overflow-hidden pt-48 pb-36 bg-transparant flex items-center justify-center min-h-[85vh]">
      <Container>
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-4 py-1.5 text-sm font-semibold text-primary backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for Freelance & Full-time Roles
          </div>

          <h1 className="mb-8 text-5xl font-black tracking-tight text-foreground md:text-7xl leading-tight">
            Hi, I&apos;m M. Septiawan.
          </h1>

          <p className="mb-12 max-w-2xl text-lg md:text-xl leading-relaxed text-muted-foreground font-normal">
            Backend developer focused on the Node.js ecosystem, scalable
            architecture, REST API development, realtime systems, and database
            engineering. Open to collaboration and new opportunities.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-opacity duration-200 hover:opacity-90"
            >
              View Projects
            </a>

            <a
              href="mailto:septiawan@example.com"
              className="rounded-xl border border-border bg-muted/30 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-colors duration-200 hover:bg-muted/60"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
