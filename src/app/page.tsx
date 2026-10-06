import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Bridge from "@/components/Bridge";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import Motion from "@/components/Motion";

// Sections follow the Notion brief, in its order: hero, problem (with its
// bridge line), features, onboarding steps, testimonials. Pricing is marked
// "don't touch" in the brief, so it isn't built.
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Bridge />
        <Features />
        <HowItWorks />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
      <Motion />
    </>
  );
}
