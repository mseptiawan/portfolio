import Container from "../layout/container";

export default function Hero() {
  return (
    <section className=" relative overflow-hidden pt-48 pb-36 bg-transparant flex items-center justify-center">
      <Container>
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          

         <h1 className="mb-8 text-5xl font-black tracking-tight text-foreground md:text-7xl leading-tight">
  Turning Complex Problems<br />
  <span className="text-primary/80">into Web Solutions</span>
</h1>

<p className="mb-12 max-w-2xl text-lg md:text-xl leading-relaxed text-muted-foreground font-normal">
  I'm a web developer who loves solving real-world problems through code. 
  With expertise in <span className="font-semibold text-foreground">Laravel</span> and 
  <span className="font-semibold text-foreground"> Node.js</span>, I've built 
  inventory management systems, HRIS platforms, and e-commerce applications 
  from the ground up. Looking for my first professional role to make an impact.
</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-opacity duration-200 hover:opacity-90"
            >
              View Projects
            </a>

            <a
              href="mailto:mseptiawan017@gmail.com"
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
