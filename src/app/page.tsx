// app/page.tsx

import { Navigation } from "@/components/sections/Navigation";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Reviews } from "@/components/sections/Reviews";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      {/* <Navigation /> */}

      <main>
        <Hero />
        <Services />
        <Projects />
        <WhyChooseUs />
        <Reviews />
        <CTA />
      </main>

      <Footer />
    </>
  );
}