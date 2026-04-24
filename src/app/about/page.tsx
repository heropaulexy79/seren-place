import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import styles from "./AboutPage.module.css";
import { Heart, Shield, Users, Sun } from "lucide-react";

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      <section className={styles.hero}>
        <div className="container">
          <SectionHeader 
            title="Our Story: Care Beyond the Clinical" 
            subtitle="At Seren Place, we believe that every senior deserves to age with dignity, joy, and the highest standard of professional support."
          />
        </div>
      </section>

      <section className={`section ${styles.missionSection}`}>
        <div className={`container ${styles.grid}`}>
          <div className={styles.content}>
            <h2>A Legacy of Compassion</h2>
            <p>
              Seren Place was founded by a team of dedicated registered nurses and healthcare professionals who saw a need for something more in the home health industry. We wanted to move beyond simple task-based care and create a model centered on emotional connection and holistic well-being.
            </p>
            <p>
              Today, we are proud to be one of the region's leading premium home healthcare providers, known for our rigorous caregiver selection and our "family-first" philosophy.
            </p>
            <div className={styles.values}>
              <div className={styles.value}>
                <Heart className={styles.icon} />
                <span>Empathy-First Care</span>
              </div>
              <div className={styles.value}>
                <Shield className={styles.icon} />
                <span>Professional Excellence</span>
              </div>
              <div className={styles.value}>
                <Users className={styles.icon} />
                <span>Family Collaboration</span>
              </div>
              <div className={styles.value}>
                <Sun className={styles.icon} />
                <span>Joyful Living</span>
              </div>
            </div>
          </div>
          <div className={styles.imageCol}>
            <img 
              src="https://images.unsplash.com/photo-1581578731522-745d05db9ad0?q=80&w=2070&auto=format&fit=crop" 
              alt="Our team" 
              className={styles.aboutImage}
            />
          </div>
        </div>
      </section>

      <section className={`section section-alt ${styles.teamSection}`}>
        <div className="container">
          <SectionHeader title="Our Leadership" subtitle="Guided by experience, driven by heart." />
          <div className={styles.teamGrid}>
            {[1, 2, 3].map((member) => (
              <div key={member} className={styles.teamMember}>
                <div className={styles.memberImagePlaceholder} />
                <h3>Executive Care Director</h3>
                <p>Leading our clinical team with over 20 years of geriatric nursing experience.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <div className={styles.ctaBox}>
            <h2>Join Our Care Family</h2>
            <p>Whether you're looking for help for a loved one or want to start a career in care, we're here for you.</p>
            <div className={styles.ctaActions}>
              <Button variant="primary" href="/contact">Book Consultation</Button>
              <Button variant="outline" href="/careers">Join Our Team</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
