import { FlipWords } from "@/components/FlipWords";
import Footer from "@/components/Footer";
import { Globe } from "@/components/Globe";
import { HeroLamp } from "@/components/HeroLamp";
import { Testimonials } from "@/components/Testimonials";
import { Loader } from "@/components/Loader";
import { FloatingNav } from "@/components/ui/floating-nav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main>
      <div className="bg-slate-950">
        <FloatingNav navItems={navItems} />
        <HeroLamp />
        <Testimonials />
        <FlipWords />
        <Loader />
        <Globe />
        <Footer />
      </div>
    </main>
  );
}
