import Header from "@/components/layout/header";
import HeroSection from "@/components/sections/hero-section";
import GreetingSection from "@/components/sections/greeting-section";
import ServicesSection from "@/components/sections/services-section";
import AreaSection from "@/components/sections/area-section";
import WorksSection from "@/components/sections/works-section";
import PricingSection from "@/components/sections/pricing-section";
import ReviewsSection from "@/components/sections/reviews-section";
import ProcessSection from "@/components/sections/process-section";
import CompanySection from "@/components/sections/company-section";
import Footer from "@/components/layout/footer";
import ScrollReveal from "@/components/ui/scroll-reveal";
import StaggerChildren from "@/components/ui/stagger-children";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />

        <ScrollReveal animation="fade-up">
          <GreetingSection />
        </ScrollReveal>

        <ScrollReveal animation="fade-up">
          <ServicesSection />
        </ScrollReveal>

        <ScrollReveal animation="fade-up">
          <AreaSection />
        </ScrollReveal>

        <ScrollReveal animation="fade-up">
          <WorksSection />
        </ScrollReveal>

        <ScrollReveal animation="fade-up">
          <PricingSection />
        </ScrollReveal>

        <ScrollReveal animation="fade-up">
          <ReviewsSection />
        </ScrollReveal>

        <ScrollReveal animation="fade-up">
          <ProcessSection />
        </ScrollReveal>

        <ScrollReveal animation="fade-up">
          <CompanySection />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
