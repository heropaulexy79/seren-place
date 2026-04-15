import ServiceDetail from "@/components/sections/ServiceDetail";

export default function CompanionshipPage() {
  return (
    <ServiceDetail 
      title="Senior Companionship"
      description="Emotional health is as important as physical health. Our companionship services provide friendly visits, shared hobbies, and meaningful conversation to keep spirits high and minds active."
      image="https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?q=80&w=2070&auto=format&fit=crop"
      audience="Socially isolated seniors or those looking for an active partner for hobbies and daily outings."
      benefits={[
        "Meaningful Conversation & Social Play",
        "Accompaniment to Appointments",
        "Shared Hobbies & Games",
        "Emotional Well-being Checks",
        "Light Gardening & Pet Care"
      ]}
    />
  );
}
