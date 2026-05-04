import { Metadata } from "next";
import ServiceDetail from "@/components/sections/ServiceDetail";

export const metadata: Metadata = {
  title: "Specialized Alzheimer's Specialty Care | Seren Place",
  description: "Tailored support for the progressive stages of Alzheimer's. Our caregivers are specifically trained in techniques to reduce anxiety and manage behavioral changes.",
  openGraph: {
    title: "Specialized Alzheimer's Specialty Care | Seren Place",
    description: "Tailored support for Alzheimer's stages. Behavioral management and enhanced safety protocols.",
    url: "https://serenplace.com/services/alzheimers-care",
  }
};

export default function AlzheimersCarePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Alzheimer's Care",
    "provider": {
      "@type": "MedicalOrganization",
      "name": "Seren Place"
    },
    "description": "Expert support for individuals navigating the progressive stages of Alzheimer's disease.",
    "areaServed": "US"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceDetail 
        title="Alzheimer's Specialty Care"
        description="Tailored support for the progressive stages of Alzheimer's. Our caregivers are specifically trained in techniques to reduce anxiety, manage behavioral changes, and cultivate a sense of security."
        image="/images/services/alzheimers_specialty.png"
        audience="Individuals in advanced stages of cognitive decline requiring intensive, empathetic professional support."
        benefits={[
          "Behavioral Management Strategies",
          "Sensory Stimulation Programs",
          "Enhanced Safety Protocols",
          "Nutritious Hydration Support",
          "24/7 Professional Availability"
        ]}
      />
    </>
  );
}
