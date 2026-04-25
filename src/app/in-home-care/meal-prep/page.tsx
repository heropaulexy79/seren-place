import ServiceDetail from "@/components/sections/ServiceDetail";

export default function MealPrepPage() {
  return (
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
  );
}
