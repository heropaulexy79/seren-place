import { Metadata } from "next";
import ServiceDetail from "@/components/sections/ServiceDetail";

export const metadata: Metadata = {
  title: "Respite Care Services | Temporary Relief for Caregivers | Seren Place",
  description: "Short-term professional care for your loved ones while you take a break. Our respite care services provide temporary relief for family caregivers.",
  openGraph: {
    title: "Respite Care Services | Temporary Relief for Caregivers | Seren Place",
    description: "Professional short-term relief for family caregivers. High-quality care for your loved ones.",
    url: "https://serenplace.com/in-home-care/respite-care",
  }
};

export default function RespiteCarePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Respite Care",
    "provider": {
      "@type": "MedicalOrganization",
      "name": "Seren Place"
    },
    "description": "Short-term relief for family caregivers, ensuring their loved ones receive professional care during their absence.",
    "areaServed": "US"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceDetail 
        title="Respite Care Services"
        description="Caring for a loved one is demanding work. We provide short-term relief for family caregivers, ensuring their loved ones receive high-quality professional care while they take a much-needed break."
        image="/images/services/respite_care.png"
        audience="Family caregivers who need temporary assistance for personal errands, vacations, or simply to rest."
        benefits={[
          "Temporary Professional Assistance",
          "Clinical Hand-Off Protocols",
          "Short-Term Overnight Care",
          "Consistent Care Routines",
          "Relief for Overworked Caregivers"
        ]}
      />
    </>
  );
}
