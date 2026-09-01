import Container from "../layout/container";

export default function About() {
  return (
    <section id="about" className="py-28  flex items-center justify-center">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-6 text-xs font-bold tracking-widest text-primary/80 uppercase">
            ABOUT ME
          </p>

        <p className="text-xl sm:text-2xl md:text-3xl font-medium leading-relaxed text-muted-foreground">
  I build web applications from concept to deployment, focusing on clean code,
  intuitive user experiences, and robust backend logic. I enjoy crafting
  solutions that are not only functional but also maintainable and scalable.
</p>
        </div>
      </Container>
    </section>
  );
}
