import TempLandingHero from "@/components/home/TempLandingHero";
import TrustBadges from "@/components/home/TrustBadges";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata = {
  title: "Coming Soon | Seren Place Homecare",
  description: "Seren Place Homecare is preparing for our official launch in Charlotte Metro & Union County. Join our client waitlist or apply to join our founding care team.",
};

export default function ComingSoonPage() {
  return (
    <>
      <TempLandingHero />
      <ScrollReveal delay={0.2}>
        <TrustBadges />
      </ScrollReveal>
    </>
  );
}
