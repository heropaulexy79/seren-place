import ServiceDetail from "@/components/sections/ServiceDetail";

export default function ExtraHelpPage() {
  return (
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
  );
}
