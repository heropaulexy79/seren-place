import ServiceDetail from "@/components/sections/ServiceDetail";

export default function RespiteCarePage() {
  return (
    <ServiceDetail 
      title="Respite Care Services"
      description="Caring for a loved one is demanding work. We provide short-term relief for family caregivers, ensuring their loved ones receive high-quality professional care while they take a much-needed break."
      image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
      audience="Family caregivers who need temporary assistance for personal errands, vacations, or simply to rest."
      benefits={[
        "Temporary Professional Assistance",
        "Clinical Hand-Off Protocols",
        "Short-Term Overnight Care",
        "Consistent Care Routines",
        "Relief for Overworked Caregivers"
      ]}
    />
  );
}
