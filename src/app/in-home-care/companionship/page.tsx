import { Metadata } from "next";
import ServiceDetail from "@/components/sections/ServiceDetail";

export const metadata: Metadata = {
  title: "Senior Companionship Services | Seren Place",
  description: "Friendly visits, shared hobbies, and meaningful conversation. Our companionship services support the emotional well-being of seniors at home.",
  openGraph: {
    title: "Senior Companionship Services | Seren Place",
    description: "Meaningful conversation and social engagement for seniors. Shared hobbies and emotional support.",
    url: "https://serenplace.com/in-home-care/companionship",
  }
};

export default function CompanionshipPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Senior Companionship",
    "provider": {
      "@type": "MedicalOrganization",
      "name": "Seren Place"
    },
    "description": "Social and emotional support for seniors through companionship and shared activities.",
    "areaServed": "US"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceDetail 
        title="Senior Companionship"
        description="Emotional health is as important as physical health. Our companionship services provide friendly visits, shared hobbies, and meaningful conversation to keep spirits high and minds active."
        image="/images/services/companionship.png"
        audience="Socially isolated seniors or those looking for an active partner for hobbies and daily outings."
        benefits={[
          "Meaningful Conversation & Social Play",
          "Accompaniment to Appointments",
          "Shared Hobbies & Games",
          "Emotional Well-being Checks",
          "Light Gardening & Pet Care"
        ]}
      />
    </>
  );
}
