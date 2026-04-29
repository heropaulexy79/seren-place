import { Metadata } from "next";
import ServiceDetail from "@/components/sections/ServiceDetail";

export const metadata: Metadata = {
  title: "Senior Meal Preparation Services | Seren Place",
  description: "Delicious and healthy home-cooked meals for seniors. Our caregivers assist with menu planning, grocery shopping, and safe meal preparation.",
  openGraph: {
    title: "Senior Meal Preparation Services | Seren Place",
    description: "Nutritionally balanced meal plans and grocery shopping assistance for seniors.",
    url: "https://serenplace.com/in-home-care/meal-prep",
  }
};

export default function MealPrepPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Senior Meal Preparation",
    "provider": {
      "@type": "MedicalOrganization",
      "name": "Seren Place"
    },
    "description": "Assistance with menu planning, grocery shopping, and preparation of healthy meals for seniors.",
    "areaServed": "US"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceDetail 
        title="Senior Meal Preparation"
        description="Nutrition is the cornerstone of health. Our caregivers help with everything from menu planning and grocery shopping to the final plating, ensuring a delicious and healthy diet."
        image="/images/services/meal_prep.png"
        audience="Seniors who have dietary restrictions or simply prefer home-cooked meals but find the kitchen a challenge."
        benefits={[
          "Nutritionally Balanced Meal Plans",
          "Assisted Grocery Shopping",
          "Safe Food Handling & Storage",
          "Hydration & Snack Monitoring",
          "Social Dining Experience"
        ]}
      />
    </>
  );
}
