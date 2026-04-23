import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";
import { Utensils, Users, Sparkles, HeartHandshake } from "lucide-react";

export default function InHomeCarePage() {
  const categories = [
    {
      title: "Senior Companionship",
      desc: "Meaningful interaction and emotional support to combat loneliness and promote mental health.",
      href: "/in-home-care/companionship",
      icon: <Users size={40} className="text-secondary" />
    },
    {
      title: "Meal Preparation",
      desc: "Nutritious, chef-inspired meals designed for senior dietary needs and preferences.",
      href: "/in-home-care/meal-prep",
      icon: <Utensils size={40} className="text-secondary" />
    },
    {
      title: "Extra Help",
      desc: "Assistance with light housekeeping, errands, and specialized daily tasks.",
      href: "/in-home-care/extra-help",
      icon: <Sparkles size={40} className="text-secondary" />
    },
    {
      title: "Respite Care",
      desc: "Giving family caregivers a break while ensuring continuity of care.",
      href: "/in-home-care/respite-care",
      icon: <HeartHandshake size={40} className="text-secondary" />
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-warm/30">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Daily Living & Support" 
          subtitle="Non-clinical assistance designed to help seniors maintain independence, joy, and quality of life at home."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {categories.map((cat, index) => (
            <Link href={cat.href} key={index} className="group p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all border border-transparent hover:border-secondary/20">
              <div className="mb-6 p-4 bg-warm rounded-2xl w-fit group-hover:bg-secondary/10 transition-colors">
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{cat.title}</h3>
              <p className="text-main/80 text-sm leading-relaxed mb-6">{cat.desc}</p>
              <span className="text-secondary text-sm font-bold flex items-center gap-2">
                Explore Care <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
