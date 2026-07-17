import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Modules } from "@/components/Modules";
import { Workflow } from "@/components/Workflow";
import { Personas } from "@/components/Personas";
import { Download } from "@/components/Download";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Modules />
        <Workflow />
        <Personas />
        <Download />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}