import HeroSlideshow from "./HeroSlideshow";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section className="relative -mt-16 w-full overflow-hidden pt-16">
      <HeroSlideshow />
      <HeroContent />
    </section>
  );
}
