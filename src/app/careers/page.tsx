import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import styles from "./CareersPage.module.css";
import { Star, Shield, Heart, Award } from "lucide-react";

export default function CareersPage() {
  const jobListings = [
    { title: "Registered Nurse (RN)", type: "Full-time", location: "City Heights" },
    { title: "Certified Nursing Assistant (CNA)", type: "Part-time", location: "Westside" },
    { title: "Senior Companion", type: "Flexible", location: "Multiple Regions" }
  ];

  return (
    <div className={styles.careersPage}>
      <section className={styles.hero}>
        <div className="container">
          <SectionHeader 
            title="Join the Heart of Home Care" 
            subtitle="At Seren Place, we believe that caring for our caregivers is the first step in providing world-class care for our families."
          />
          <div className={styles.actions}>
            <Button variant="primary" href="#open-roles">View Open Roles</Button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.benefitsGrid}>
            <div className={styles.benefit}>
              <Award className={styles.icon} />
              <h3>Premium Pay</h3>
              <p>Competitive wages that reflect your expertise and dedication.</p>
            </div>
            <div className={styles.benefit}>
              <Shield className={styles.icon} />
              <h3>Full Benefits</h3>
              <p>Health, dental, and retirement plans for you and your family.</p>
            </div>
            <div className={styles.benefit}>
              <Star className={styles.icon} />
              <h3>Growth Paths</h3>
              <p>Continuous education and career advancement opportunities.</p>
            </div>
            <div className={styles.benefit}>
              <Heart className={styles.icon} />
              <h3>Supportive Culture</h3>
              <p>A true 'family-first' environment where every voice is heard.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="open-roles" className={`section section-alt ${styles.jobsSection}`}>
        <div className="container">
          <SectionHeader title="Current Openings" subtitle="Find your next meaningful career move with us." />
          <div className={styles.jobList}>
            {jobListings.map((job, index) => (
              <div key={index} className={styles.jobCard}>
                <div className={styles.jobInfo}>
                  <h3>{job.title}</h3>
                  <p>{job.type} • {job.location}</p>
                </div>
                <Button variant="outline" href="/contact">Apply Now</Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
