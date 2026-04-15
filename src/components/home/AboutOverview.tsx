import React from "react";
import Button from "../ui/Button";
import styles from "./AboutOverview.module.css";
import { Heart, Users, Clock } from "lucide-react";

const AboutOverview = () => {
  return (
    <section className={`section ${styles.aboutSection}`}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.imageCol}>
          <div className={styles.imageDecoration} />
          <img 
            src="https://images.unsplash.com/photo-1573164060897-425983c79440?q=80&w=2069&auto=format&fit=crop" 
            alt="Compassionate home care" 
            className={styles.mainImage}
          />
          <div className={styles.floatingCard}>
            <Heart className={styles.heartIcon} />
            <div>
              <strong>15+ Years</strong>
              <span>of Heartfelt Care</span>
            </div>
          </div>
        </div>

        <div className={styles.contentCol}>
          <h2 className={styles.title}>Your Family Is Our Family. That’s The Seren Way.</h2>
          <p className={styles.lead}>
            At Seren Place, we believe that home is where the heart is, and care should be as unique as the individuals receiving it.
          </p>
          <p className={styles.description}>
            Founded on the principles of dignity, respect, and professional excellence, we provide premium home healthcare services that prioritize the emotional and physical well-being of our clients. Our team of licensed caregivers is dedicated to ensuring your loved ones live safe, joyful, and independent lives.
          </p>

          <div className={styles.features}>
            <div className={styles.feature}>
              <Users className={styles.featureIcon} size={24} />
              <div>
                <h4>Personalized Matching</h4>
                <p>We pair caregivers based on personality and specialized needs.</p>
              </div>
            </div>
            <div className={styles.feature}>
              <Clock className={styles.featureIcon} size={24} />
              <div>
                <h4>24/7 Support</h4>
                <p>Always available, ensuring someone is there whenever needed.</p>
              </div>
            </div>
          </div>

          <div className={styles.actions}>
            <Button variant="primary" href="/about">Learn Our Story</Button>
            <Button variant="outline" href="/contact">Book a Visit</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOverview;
