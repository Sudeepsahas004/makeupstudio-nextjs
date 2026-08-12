import HeroContent from './HeroContent';
import HeroCarousel from './HeroCarousel';

export default function HomeHero() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 min-h-[calc(100vh-88px)] flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 w-full">
        {/* Carousel — top on mobile, right on desktop */}
        <div className="order-1 lg:order-2 flex justify-center items-center lg:-translate-x-8">
          <HeroCarousel />
        </div>

        <div className="order-2 lg:order-1">
          <HeroContent />
        </div>
      </div>
    </section>
  );
}
