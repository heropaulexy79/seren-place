import React from "react";
import { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import styles from "./WhyChooseUsPage.module.css";
import { Heart, Shield, Award, Clock, Users, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Why Choose Seren Place | Premium Home Healthcare in Charlotte",
  description: "Discover why families trust Seren Place for premium, compassionate, and personalized home healthcare. Our 10+ years of experience set us apart.",
};

const pillars = [
  {
    icon: <Heart size={32} />,
    title: "Compassion-First Approach",
    description: "We treat your family like our own. Our caregivers are chosen not just for their skills, but for their genuine empathy and dedication to senior well-being."
  },
  {
    icon: <Award size={32} />,
    title: "10+ Years of Excellence",
    description: "With over a decade of experience, we have refined our care protocols to ensure the highest safety, reliability, and quality of life for our residents."
  },
  {
    icon: <Shield size={32} />,
    title: "Licensed & Insured",
    description: "Your peace of mind is our priority. We are fully licensed by the State of North Carolina and maintain rigorous insurance and safety standards."
  },
  {
    icon: <Users size={32} />,
    title: "Expert Clinical Team",
    description: "Founded and led by experienced clinical professionals, our agency brings medical-grade oversight to the comfort of your home environment."
  },
  {
    icon: <Clock size={32} />,
    title: "24/7 Dedicated Support",
    description: "Care doesn't stop at 5 PM. Our team is available around the clock to respond to emergencies and provide continuous support for families."
  },
  {
    icon: <Star size={32} />,
    title: "Tailored Care Plans",
    description: "We don't believe in one-size-fits-all. Every resident receives a customized care plan designed by a registered nurse to meet their unique needs."
  }
];

export default function WhyChooseUsPage() {
  return (
    <div className={styles.whyPage}>
      <header className={styles.hero}>
        <div className="container">
          <SectionHeader 
            title="The Seren Place Difference" 
            subtitle="Why families choose us for premium, compassionate home healthcare."
          />
        </div>
      </header>

      <section className="section">
        <div className={`container ${styles.grid}`}>
          <div className={styles.imageCol}>
            <img 
              src="/images/hero/hero_compassion.png" 
              alt="Compassionate care at Seren Place" 
              className={styles.whyImage}
            />
          </div>
          <div className={styles.content}>
            <h2>More Than Just Care — A Family Partnership</h2>
            <p>
              Choosing a care provider for a loved one is one of the most important decisions a family can make. At Seren Place, we understand the weight of that responsibility.
            </p>
            <p>
              We don't just provide caregivers; we build support systems. Our philosophy is rooted in the belief that seniors deserve to age with dignity, joy, and independence in the environment they love most.
            </p>
            <Button variant="primary" href="/contact">Book a Free Consultation</Button>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeader 
            title="Our Core Pillars" 
            subtitle="What sets our agency apart in the Charlotte community."
            centered
          />
          <div className={styles.pillarsGrid}>
            {pillars.map((pillar, index) => (
              <div key={index} className={styles.pillar}>
                <div className={styles.pillarIcon}>{pillar.icon}</div>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaBox}>
            <h2>Ready to Experience Better Care?</h2>
            <p>Schedule your free, no-obligation clinical assessment today and discover how we can help your family.</p>
            <Button variant="outlineWhite" href="/contact" size="large">Get Started Now</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
