import ServiceDetail from "@/components/sections/ServiceDetail";

export default function DementiaCarePage() {
  return (
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
  );
}
