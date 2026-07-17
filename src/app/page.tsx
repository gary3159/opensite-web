import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Showcase } from "@/components/Showcase";
import { Download } from "@/components/Download";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Features />
        <Showcase />
        <Download />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}