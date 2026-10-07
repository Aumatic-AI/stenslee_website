import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Problem from "@/components/Problem";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Stats from "@/components/Stats";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import Motion from "@/components/Motion";

// Sections in the Notion brief's order. Pricing is marked "soon" in the brief,
// so it isn't built yet.
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Testimonials />
        <Problem />
        <Features />
        <HowItWorks />
        <Stats />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <Motion />
    </>
  );
}
