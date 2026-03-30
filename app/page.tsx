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

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <GreetingSection />
        <ServicesSection />
        <AreaSection />
        <WorksSection />
        <PricingSection />
        <ReviewsSection />
        <ProcessSection />
        <CompanySection />
      </main>
      <Footer />
    </>
  );
}
