// app/page.tsx
import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
// import Testimonials from "@/components/sections/Testimonials";
import ProblemSolution from "@/components/sections/ProblemSolution";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Countries from "@/components/sections/Countries";
import MidCTA from "@/components/sections/MidCTA";
import ExamPrep from "@/components/sections/ExamPrep";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        {/* bg-canvas */}
        <Hero />

        {/* <Testimonials /> */}
        {/* bg-canvas */}
        <ProblemSolution />
        {/* bg-surface (alt) */}
        <Services />
        {/* bg-canvas */}
        <Process />
        {/* bg-surface (alt) */}
        <Countries />
        {/* bg-canvas */}
        <MidCTA />
        {/* bg-surface (alt) */}
        <ExamPrep />
        {/* bg-canvas */}
        <FAQ />
        {/* bg-surface */}
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}