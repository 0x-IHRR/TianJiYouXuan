import { BrandFilmSection } from "@/components/brand-film-section";
import { HomeEntrances } from "@/components/home-entrances";
import { HomeHero } from "@/components/home-hero";
import { QuietClosing } from "@/components/quiet-closing";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <div className="page-ambient">
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <HomeHero />
        <BrandFilmSection />
        <HomeEntrances />
        <QuietClosing />
      </main>
      <SiteFooter />
    </div>
  );
}
