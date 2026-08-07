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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Oakstone Renovations",
    telephone: "(01) 234 5678",
    email: "info@oakstonerenovations.ie",
    url: "https://oakstonerenovations.vercel.app",
    areaServed: [
      "Dublin",
      "Kildare",
      "Wicklow",
      "Meath",
    ],
  };

  return (
    <>

    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      
      <Navigation />

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