import TempLandingHero from "@/components/home/TempLandingHero";
import TrustBadges from "@/components/home/TrustBadges";
import AboutOverview from "@/components/home/AboutOverview";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HowItWorks from "@/components/home/HowItWorks";
import FAQSection from "@/components/home/FAQSection";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata = {
  title: "Seren Place | Premium Homecare Agency",
  description: "Seren Place Homecare is preparing for our official launch in Charlotte Metro & Union County. Join our client waitlist or apply to join our founding care team.",
};

export default function Home() {
  return (
    <>
      {/* 
        PRE-LAUNCH TEMPORARY LANDING PAGE
        When officially launched, switch to rendering <FullHome /> from '@/app/home-full/page'
      */}
      <TempLandingHero />
      <ScrollReveal delay={0.2}><TrustBadges /></ScrollReveal>
      <ScrollReveal><AboutOverview /></ScrollReveal>
      <ScrollReveal><ServicesOverview /></ScrollReveal>
      <ScrollReveal><WhyChooseUs /></ScrollReveal>
      <ScrollReveal><HowItWorks /></ScrollReveal>
      <ScrollReveal><FAQSection /></ScrollReveal>
    </>
  );
}



