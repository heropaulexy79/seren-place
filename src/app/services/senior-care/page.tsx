import { Metadata } from "next";
import ServiceDetail from "@/components/sections/ServiceDetail";

export const metadata: Metadata = {
  title: "Professional Senior Care Services | Seren Place",
  description: "Comprehensive home nursing and personal care for seniors. We provide skilled nursing, hygiene assistance, and medical oversight to help seniors stay healthy at home.",
  openGraph: {
    title: "Professional Senior Care Services | Seren Place",
    description: "Comprehensive home nursing and personal care for seniors. Skilled nursing and daily assistance.",
    url: "https://serenplace.com/services/senior-care",
  }
};

export default function SeniorCarePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Senior Care",
    "provider": {
      "@type": "MedicalOrganization",
      "name": "Seren Place"
    },
    "description": "Comprehensive daily assistance and clinical support tailored to the unique health needs of seniors.",
    "areaServed": "US"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceDetail 
        title="Comprehensive Senior Care Services"
        description="Our core nursing and personal care services ensure that seniors can remain healthy and active at home. From skilled nursing tasks to daily hygiene assistance, we cover every aspect of clinical and personal need."
        image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop"
        audience="Seniors requiring medical oversight, post-operative support, or help with daily living activities."
        benefits={[
          "Skilled Nursing & Vitals Monitoring",
          "Personal Hygiene & Grooming",
          "Mobility & Transfer Assistance",
          "Wound Care & Medical Support",
          "Chronic Condition Management"
        ]}
      />
    </>
  );
}
