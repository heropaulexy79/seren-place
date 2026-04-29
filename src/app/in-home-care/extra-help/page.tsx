import { Metadata } from "next";
import ServiceDetail from "@/components/sections/ServiceDetail";

export const metadata: Metadata = {
  title: "Extra Help for Seniors | In-Home Support | Seren Place",
  description: "Get the extra hands you need for light housekeeping, organization, and daily chores. We help maintain a clean and comfortable home for your loved ones.",
  openGraph: {
    title: "Extra Help for Seniors | In-Home Support | Seren Place",
    description: "Light housekeeping, organization, and daily chore assistance for seniors.",
    url: "https://serenplace.com/in-home-care/extra-help",
  }
};

export default function ExtraHelpPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Extra Help with Seniors",
    "provider": {
      "@type": "MedicalOrganization",
      "name": "Seren Place"
    },
    "description": "Assistance with light housekeeping, organization, and small daily chores for seniors.",
    "areaServed": "US"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceDetail 
        title="Extra Help with Seniors"
        description="Life is full of small tasks that can become overwhelming. Our caregivers provide the 'extra hands' needed for light housekeeping, organization, and those small daily chores that make a big difference."
        image="/images/services/extra_help.png"
        audience="Families who need help maintaining a clean, organized home environment for their elderly loved ones."
        benefits={[
          "Light Housekeeping & Laundry",
          "Home Organization & Decluttering",
          "Assistance with Technology",
          "Plant Care & Errand Running",
          "Mail & Calendar Management"
        ]}
      />
    </>
  );
}
