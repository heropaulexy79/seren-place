import ServiceDetail from "@/components/sections/ServiceDetail";

export default function AlzheimersCarePage() {
  return (
    <ServiceDetail 
      title="Alzheimer's Specialty Care"
      description="Tailored support for the progressive stages of Alzheimer's. Our caregivers are specifically trained in techniques to reduce anxiety, manage behavioral changes, and cultivate a sense of security."
      image="https://images.unsplash.com/photo-1544027993-37dbfe43552e?q=80&w=2070&auto=format&fit=crop"
      audience="Individuals in advanced stages of cognitive decline requiring intensive, empathetic professional support."
      benefits={[
        "Behavioral Management Strategies",
        "Sensory Stimulation Programs",
        "Enhanced Safety Protocols",
        "Nutritious Hydration Support",
        "24/7 Professional Availability"
      ]}
    />
  );
}
