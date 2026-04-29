import HeroSlider from "@/components/home/HeroSlider";
import TrustBadges from "@/components/home/TrustBadges";
import AboutOverview from "@/components/home/AboutOverview";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HowItWorks from "@/components/home/HowItWorks";
import StatsSection from "@/components/home/StatsSection";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <TrustBadges />
      <AboutOverview />
      <ServicesOverview />
      <WhyChooseUs />
      <HowItWorks />
      <StatsSection />
      <Testimonials />
      <CTASection />
    </>
  );
}
