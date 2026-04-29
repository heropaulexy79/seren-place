import HeroSlider from "@/components/home/HeroSlider";
import TrustBadges from "@/components/home/TrustBadges";
import AboutOverview from "@/components/home/AboutOverview";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HowItWorks from "@/components/home/HowItWorks";
import StatsSection from "@/components/home/StatsSection";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <ScrollReveal delay={0.2}><TrustBadges /></ScrollReveal>
      <ScrollReveal><AboutOverview /></ScrollReveal>
      <ScrollReveal><ServicesOverview /></ScrollReveal>
      <ScrollReveal><WhyChooseUs /></ScrollReveal>
      <ScrollReveal><HowItWorks /></ScrollReveal>
      <ScrollReveal><StatsSection /></ScrollReveal>
      <ScrollReveal><Testimonials /></ScrollReveal>
      <ScrollReveal><CTASection /></ScrollReveal>
    </>
  );
}
