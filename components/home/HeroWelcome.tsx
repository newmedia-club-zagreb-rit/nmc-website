import CalligraphyTitle from "@/components/CalligraphyTitle";
import Container from "@/components/Container";

export default function HeroWelcome() {
  return (
    <Container className="text-center">
      <p className="text-sm font-medium uppercase tracking-[0.35em] text-muted sm:text-base">
        welcome to
      </p>
      <CalligraphyTitle text="New Media Center" className="mt-2 sm:mt-3" />
    </Container>
  );
}
