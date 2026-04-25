import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";
import { Utensils, Users, Sparkles, HeartHandshake } from "lucide-react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import styles from "./InHomeCarePage.module.css";

export default function InHomeCarePage() {
  const categories = [
    {
      title: "Senior Companionship",
      desc: "Meaningful interaction and emotional support to combat loneliness and promote mental health.",
      href: "/in-home-care/companionship",
      icon: <Users size={28} />,
      image: "/images/services/companionship.png"
    },
    {
      title: "Meal Preparation",
      desc: "Nutritious, chef-inspired meals designed for senior dietary needs and preferences.",
      href: "/in-home-care/meal-prep",
      icon: <Utensils size={28} />,
      image: "/images/services/meal_prep.png"
    },
    {
      title: "Extra Help",
      desc: "Assistance with light housekeeping, errands, and specialized daily tasks.",
      href: "/in-home-care/extra-help",
      icon: <Sparkles size={28} />,
      image: "/images/services/extra_help.png"
    },
    {
      title: "Respite Care",
      desc: "Giving family caregivers a break while ensuring continuity of care.",
      href: "/in-home-care/respite-care",
      icon: <HeartHandshake size={28} />,
      image: "/images/services/respite_care.png"
    }
  ];

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <Image 
          src="/images/in_home_care_hero.png" 
          alt="Compassionate In-Home Care" 
          fill 
          priority 
          quality={90}
          className={styles.heroImage} 
          style={{ objectFit: "cover" }}
        />
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.heroTitle}>Premium In-Home Care & Support</h1>
          <p className={styles.heroSubtitle}>
            Providing non-clinical assistance designed to help seniors maintain independence, joy, and quality of life in the comfort of their own homes.
          </p>
          <Button variant="solidWhite" href="/contact">Schedule Assessment</Button>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.section}>
        <div className="container">
          <SectionHeader 
            title="Daily Living & Support Services" 
            subtitle="Explore our comprehensive range of specialized in-home care solutions tailored to your loved one's unique needs."
            center
          />
          
          <div className={styles.grid}>
            {categories.map((cat, index) => (
              <Link href={cat.href} key={index} className={styles.card}>
                <div className={styles.imageBox}>
                  <Image 
                    src={cat.image} 
                    alt={cat.title} 
                    fill 
                    quality={85}
                    style={{ objectFit: "cover" }}
                  />
                  <div className={styles.iconTag}>{cat.icon}</div>
                </div>
                <div className={styles.cardBody}>
                  <h3>{cat.title}</h3>
                  <p>{cat.desc}</p>
                  <span className={styles.learnMore}>Explore Care →</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className={styles.ctaSection}>
            <h2 className={styles.ctaTitle}>Need a Custom Care Plan?</h2>
            <p className={styles.ctaText}>
              Every family is unique. Our care coordinators can help you build a personalized care package that fits your specific needs and schedule.
            </p>
            <div className="flex justify-center gap-6">
              <Button variant="primary" href="/contact">Book Free Consultation</Button>
              <Button variant="outline" href="/services">View Medical Services</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
