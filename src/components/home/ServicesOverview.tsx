import React from "react";
import Link from "next/link";
import { Brain, Heart, Users, Utensils, Home, Shield, Sparkles } from "lucide-react";
import styles from "./ServicesOverview.module.css";

const services = [
  {
    icon: <Brain size={32} />,
    title: "Dementia & Alzheimer's",
    desc: "Specialized memory care that focuses on safety, familiarity, and dignity.",
    href: "/services/dementia-care"
  },
  {
    icon: <Users size={32} />,
    title: "Senior Companionship",
    desc: "Meaningful interaction and emotional support to combat loneliness.",
    href: "/in-home-care/companionship"
  },
  {
    icon: <Heart size={32} />,
    title: "Senior Care Services",
    desc: "Comprehensive daily assistance tailored to specific health requirements.",
    href: "/services/senior-care"
  },
  {
    icon: <Utensils size={32} />,
    title: "Meal Preparation",
    desc: "Nutritious, chef-inspired meals designed for senior dietary needs.",
    href: "/in-home-care/meal-prep"
  },
  {
    icon: <Sparkles size={32} />,
    title: "Extra Help",
    desc: "Assistance with light housekeeping, errands, and specialized tasks.",
    href: "/in-home-care/extra-help"
  },
  {
    icon: <Shield size={32} />,
    title: "Respite Care",
    desc: "Giving family caregivers a much-needed break while ensuring continuity of care.",
    href: "/in-home-care/respite-care"
  }
];

const ServicesOverview = () => {
  return (
    <section className={`section section-alt ${styles.servicesSection}`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Premium Care Services</h2>
          <p className={styles.subtitle}>
            Comprehensive home health solutions designed with a focus on dignity, professional excellence, and family peace of mind.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <Link href={service.href} key={index} className={styles.card}>
              <div className={styles.iconWrapper}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <span className={styles.learnMore}>Explore Service →</span>
            </Link>
          ))}
        </div>

        <div className={styles.footer}>
          <p>Don’t see what you’re looking for? <strong>We offer custom care packages.</strong></p>
          <Link href="/services" className={styles.viewAll}>View All Services</Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
