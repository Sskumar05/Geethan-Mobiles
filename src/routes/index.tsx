import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import AOS from "aos";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Products } from "@/components/site/Products";
import { TrustBadges } from "@/components/site/TrustBadges";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Repairs } from "@/components/site/Repairs";
import { Buyback } from "@/components/site/Buyback";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Geethan Mobiles — Mobile Repairs, Pre-Owned & Buyback in Thiruvarur" },
      { name: "description", content: "Premium mobile repairs, certified pre-owned phones, accessories and instant buyback in Thiruvarur, Tamil Nadu. 90-day warranty, same-day service." },
    ],
  }),
});

function Index() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 60, easing: "ease-out-cubic" });
  }, []);

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Products />
      <TrustBadges />
      <WhyChooseUs />
      <Repairs />
      <Buyback />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppFab />
    </main>
  );
}
