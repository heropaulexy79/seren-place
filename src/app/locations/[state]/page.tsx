import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Clock, ShieldCheck, Heart, UserPlus } from "lucide-react";
import Button from "@/components/ui/Button";
import styles from "./page.module.css";

// 50 US States array to generate static params
const US_STATES = [
  "alabama", "alaska", "arizona", "arkansas", "california", "colorado", "connecticut", "delaware", "florida", "georgia",
  "hawaii", "idaho", "illinois", "indiana", "iowa", "kansas", "kentucky", "louisiana", "maine", "maryland",
  "massachusetts", "michigan", "minnesota", "mississippi", "missouri", "montana", "nebraska", "nevada", "new-hampshire", "new-jersey",
  "new-mexico", "new-york", "north-carolina", "north-dakota", "ohio", "oklahoma", "oregon", "pennsylvania", "rhode-island", "south-carolina",
  "south-dakota", "tennessee", "texas", "utah", "vermont", "virginia", "washington", "west-virginia", "wisconsin", "wyoming"
];

// Helper to format state name
const formatStateName = (slug: string) => {
  return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

type Props = {
  params: { state: string };
};

export async function generateStaticParams() {
  return US_STATES.map((state) => ({
    state,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // We need to await params in Next.js 15+ if it's treated as a Promise. It's safe to await here in App Router context.
  const { state } = await params;
  const stateName = formatStateName(state);
  
  return {
    title: `Premium Home Healthcare in ${stateName} | Seren Place`,
    description: `Looking for near me home healthcare in ${stateName}? Seren Place offers premium, compassionate, and family-centered care for seniors and those needing specialized support.`,
    keywords: [`home healthcare ${stateName}`, `senior care ${stateName}`, `dementia care ${stateName}`, `caregivers near me in ${stateName}`],
  };
}

export default async function LocationPage({ params }: Props) {
  const { state } = await params;
  const stateName = formatStateName(state);

  // Generate LocalBusiness Schema Markup for SEO "Near me"
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": `Seren Place Home Healthcare - ${stateName}`,
    "image": "https://www.serenplace.com/logo.png",
    "description": `Premium, family-centered home care services located across ${stateName}.`,
    "address": {
      "@type": "PostalAddress",
      "addressRegion": stateName,
      "addressCountry": "US"
    },
    "telephone": "+1-800-555-CARE",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    // Adding area served to catch "near me" in the region
    "areaServed": {
      "@type": "State",
      "name": stateName
    }
  };

  return (
    <>
      {/* Inject JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className={styles.locationContainer}>
        {/* Header Section */}
        <section className={styles.heroSection}>
          <div className="container">
            <h1 className={styles.title}>Premium Home Healthcare in {stateName}</h1>
            <p className={styles.subtitle}>
              Expert, compassionate caregivers available right in your community. We provide the support families in {stateName} trust.
            </p>
            <div className={styles.heroActions}>
              <Button href="tel:+1800555CARE" variant="primary">
                Call Us Now
              </Button>
              <Button href="/contact" variant="outline">
                Book Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* Info Grid */}
        <section className={`container ${styles.infoGrid}`}>
          <div className={styles.infoCard}>
            <div className={styles.iconWrapper}><MapPin size={24} /></div>
            <h3>Serving {stateName}</h3>
            <p>Our licensed caregivers are local to your area, ensuring prompt and reliable service.</p>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.iconWrapper}><Clock size={24} /></div>
            <h3>24/7 Availability</h3>
            <p>Care when you need it most. We offer round-the-clock support and overnight care.</p>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.iconWrapper}><ShieldCheck size={24} /></div>
            <h3>Licensed & Insured</h3>
            <p>All staff undergo rigorous background checks and continuous training in {stateName} regulations.</p>
          </div>
        </section>

        {/* Services Section */}
        <section className={styles.servicesSection}>
          <div className="container" style={{ textAlign: "center" }}>
            <h2 className={styles.sectionTitle}>Services We Offer in {stateName}</h2>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceItem}>
                <Heart className={styles.serviceIcon} />
                <h4>Companionship</h4>
                <Link href="/services" aria-label="Learn about Companionship">Learn More</Link>
              </div>
              <div className={styles.serviceItem}>
                <UserPlus className={styles.serviceIcon} />
                <h4>Personal Care</h4>
                <Link href="/services" aria-label="Learn about Personal Care">Learn More</Link>
              </div>
              <div className={styles.serviceItem}>
                <ShieldCheck className={styles.serviceIcon} />
                <h4>Dementia Care</h4>
                <Link href="/services/dementia-care" aria-label="Learn about Dementia Care">Learn More</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
