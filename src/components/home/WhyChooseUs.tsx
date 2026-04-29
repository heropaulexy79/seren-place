import React from "react";
import styles from "./WhyChooseUs.module.css";
import { Star, Heart, UserCheck, Home, Users } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Highest Quality Care",
      description: "Delivering exceptional, professional, and reliable care that exceeds industry standards, ensuring the utmost safety and well-being.",
      icon: <Star size={32} />
    },
    {
      title: "Loving Senior Care",
      description: "Compassionate caregivers who treat your loved ones with the warmth, dignity, and respect they would show their own family.",
      icon: <Heart size={32} />
    },
    {
      title: "Personalized Care",
      description: "Tailored care plans designed specifically around the unique physical, emotional, and social needs of each individual.",
      icon: <UserCheck size={32} />
    },
    {
      title: "Home-Like Atmosphere",
      description: "Providing support that preserves comfort, independence, and familiarity right in the convenience of your own home.",
      icon: <Home size={32} />
    },
    {
      title: "Thoughtful Caregivers",
      description: "A meticulously vetted and highly trained team dedicated to emotional well-being just as much as physical health.",
      icon: <Users size={32} />
    }
  ];

  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <div className="section-label">Our Difference</div>
          <h2 className={styles.title}>Why Choose Seren Place?</h2>
          <p className={styles.subtitle}>
            We go beyond just providing care. We build relationships, foster independence, and deliver peace of mind through our unwavering commitment to excellence.
          </p>
        </div>

        <div className={styles.grid}>
          {reasons.map((reason, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                {reason.icon}
              </div>
              <div className={styles.cardContent}>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
