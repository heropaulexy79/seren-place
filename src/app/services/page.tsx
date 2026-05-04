import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";
import { Brain, Heart, Shield, Users, Sparkles, Utensils, Zap } from "lucide-react";
import styles from "./ServicesPage.module.css";

const services = [
  {
    title: "Senior Care Services",
    desc: "Comprehensive daily assistance and clinical support tailored to the unique health needs of seniors.",
    href: "/services/senior-care",
    icon: <Heart size={32} />
  },
  {
    title: "Dementia Care",
    desc: "Specialized memory care that focuses on safety, familiarity, and dignity for seniors navigating dementia.",
    href: "/services/dementia-care",
    icon: <Brain size={32} />
  },
  {
    title: "Alzheimer’s Care",
    desc: "Tailored support for the progressive stages of Alzheimer's with empathetic professional oversight.",
    href: "/services/alzheimers-care",
    icon: <Shield size={32} />
  },
  {
    title: "Senior Companionship",
    desc: "Meaningful interaction and emotional support to combat loneliness and promote mental well-being.",
    href: "/in-home-care/companionship",
    icon: <Users size={32} />
  },
  {
    title: "Extra Help with Seniors",
    desc: "Assistance with light housekeeping, errands, and specialized tasks for enhanced senior independence.",
    href: "/in-home-care/extra-help",
    icon: <Sparkles size={32} />
  },
  {
    title: "Meal Preparation",
    desc: "Nutritious, chef-inspired meals designed specifically for senior dietary needs and preferences.",
    href: "/in-home-care/meal-prep",
    icon: <Utensils size={32} />
  },
  {
    title: "Respite Care",
    desc: "Providing family caregivers a needed break while ensuring absolute continuity of care.",
    href: "/in-home-care/respite-care",
    icon: <Zap size={32} />
  }
];

export default function ServicesPage() {
  return (
    <div className={styles.servicesPage}>
      <div className="container">
        <div className={styles.header}>
          <SectionHeader 
            title="Specialized Clinical & Personal Care" 
            subtitle="Our comprehensive care services are designed to provide the highest level of excellence in the comfort of home."
          />
        </div>
        
        <div className={styles.grid}>
          {services.map((service, index) => (
            <Link href={service.href} key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <div className={styles.learnMore}>
                Learn More <span>→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
