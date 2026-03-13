import type { Metadata } from "next";
import Navbar           from "@/components/sections/navbar";
import HeroSection      from "@/components/sections/hero";
import StatsSection     from "@/components/sections/stats";
import ProcessSection   from "@/components/sections/process";
import FilmDivider      from "@/components/ui/film-divider";
import PortfolioSection from "@/components/sections/portfolio";
import NichesSection    from "@/components/sections/niches";
import PricingSection   from "@/components/sections/pricing";
import TestimonialsSection from "@/components/sections/testimonials";
import FAQSection       from "@/components/sections/faq";
import Footer           from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Yellowman | Edição de Vídeo Cinematográfica para Negócios",
  description:
    "Recupere 15h do seu mês. Editamos seus vídeos em 72h com qualidade de cinema para você vender mais no Instagram e LinkedIn.",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ProcessSection />
      <FilmDivider />
      <PortfolioSection />
      <NichesSection />
      <FilmDivider reverse />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
