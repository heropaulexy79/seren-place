import { Metadata } from "next";
import ServiceDetail from "@/components/sections/ServiceDetail";

export const metadata: Metadata = {
  title: "Specialized Dementia Care Services | Seren Place",
  description: "Expert, compassionate in-home dementia care. We provide a safe, nurturing environment to help your loved ones maintain cognitive function and emotional stability.",
  openGraph: {
    title: "Specialized Dementia Care Services | Seren Place",
    description: "Expert, compassionate in-home dementia care. We provide a safe, nurturing environment for seniors.",
    url: "https://serenplace.com/services/dementia-care",
  }
};

export default function DementiaCarePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Dementia Care",
    "provider": {
      "@type": "MedicalOrganization",
      "name": "Seren Place"
    },
    "description": "Specialized memory care that focuses on safety, familiarity, and dignity for seniors with dementia.",
    "areaServed": "US"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceDetail 
        title="Specialized Dementia Care"
        description="Our memory care experts provide a safe, nurturing environment for seniors navigating the complexities of dementia. We focus on maintaining cognitive function and emotional stability through evidence-based interaction techniques."
        image="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2043&auto=format&fit=crop"
        audience="Families seeking professional oversight for loved ones with memory loss who wish to stay in their own homes."
        benefits={[
          "Familiar Environment Maintenance",
          "Cognitive Engagement Activities",
          "Safe Wandering Management",
          "Meal & Medication Reminders",
          "Family Education & Support"
        ]}
      />
    </>
  );
}
