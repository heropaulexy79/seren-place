import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import ServiceDetail from "@/components/sections/ServiceDetail";
import Link from "next/link";
import { Brain, Heart, Shield, Users } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Senior Care Services",
      desc: "Our core nursing and personal care services ensure that seniors can remain healthy and active at home.",
      href: "/services/senior-care",
      icon: <Heart size={40} className="text-secondary" />
    },
    {
      title: "Dementia Care",
      desc: "Specialized memory care that focuses on safety, familiarity, and dignity.",
      href: "/services/dementia-care",
      icon: <Brain size={40} className="text-secondary" />
    },
    {
      title: "Alzheimer’s Care",
      desc: "Tailored support for the progressive stages of Alzheimer's with empathetic professional support.",
      href: "/services/alzheimers-care",
      icon: <Shield size={40} className="text-secondary" />
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Specialized Clinical Care" 
          subtitle="Our medical and memory care services are designed to provide the highest level of clinical excellence in the comfort of home."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          {services.map((service, index) => (
            <Link href={service.href} key={index} className="group p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-transparent hover:border-secondary/20">
              <div className="mb-6 p-4 bg-warm rounded-2xl w-fit group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
              <p className="text-main leading-relaxed mb-6">{service.desc}</p>
              <span className="text-secondary font-bold flex items-center gap-2">
                Learn More <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
