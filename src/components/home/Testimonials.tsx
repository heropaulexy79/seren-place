import React from "react";
import { Star, Quote } from "lucide-react";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Family Daughter",
    text: "Seren Place changed everything for us. The level of professionalism and genuine heart they bring to my mother's daily care has given our family complete peace of mind.",
    rating: 5
  },
  {
    name: "Robert Miller",
    role: "Spouse",
    text: "Finding specialized dementia care was difficult until we found Seren. Their caregivers are not only trained experts but also incredibly patient and kind.",
    rating: 5
  },
  {
    name: "Elena Rodriguez",
    role: "Family Niece",
    text: "The companionship services have transformed my uncle's quality of life. He looks forward to every visit, and the stories they share are beautiful.",
    rating: 5
  },
  {
    name: "Michael Thompson",
    role: "Family Son",
    text: "The clinical oversight provided for my father's post-surgery recovery was exceptional. The nursing team was thorough, professional, and kept us informed every step of the way.",
    rating: 5
  },
  {
    name: "Linda Garrison",
    role: "Spouse",
    text: "The meal preparation and extra help with errands have been a lifesaver. It has allowed me to focus on spending quality time with my husband without the stress of daily chores.",
    rating: 5
  },
  {
    name: "David Wright",
    role: "Family Member",
    text: "From the initial consultation to the daily care visits, the experience has been seamless. Their expertise in Alzheimer's care is evident in everything they do.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <div className="section-label">Testimonials</div>
          <h2 className={styles.title}>Real Stories from Grateful Families</h2>
          <p className={styles.subtitle}>
            We are honored to be part of so many families' journeys, providing the support needed to thrive at home.
          </p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.stars}>
                {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="var(--secondary)" color="var(--secondary)" />)}
              </div>
              <Quote className={styles.quoteIcon} size={32} />
              <p className={styles.text}>{t.text}</p>
              <div className={styles.author}>
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
