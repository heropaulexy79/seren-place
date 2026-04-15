import ServiceDetail from "@/components/sections/ServiceDetail";

export default function SeniorCarePage() {
  return (
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
  );
}
