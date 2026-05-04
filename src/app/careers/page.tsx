import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import ApplyForm from "@/components/sections/ApplyForm";
import styles from "./CareersPage.module.css";
import { Star, Shield, Heart, Award, MapPin, Clock } from "lucide-react";

export default function CareersPage() {
  const jobListings = [
    { 
      title: "Registered Nurse (RN)", 
      type: "Part-time", 
      location: "Charlotte, NC",
      desc: "Provide clinical oversight and compassionate nursing care to our residents in the Charlotte area."
    },
    { 
      title: "Certified Nursing Assistant (CNA)", 
      type: "Full-time", 
      location: "Charlotte, NC",
      desc: "Assist with daily living activities and ensure the comfort and safety of our clients."
    },
    { 
      title: "Senior Companion", 
      type: "Flexible", 
      location: "Charlotte, NC",
      desc: "Provide meaningful social interaction and emotional support to combat loneliness."
    },
    { 
      title: "Professional Caregiver", 
      type: "Full-time / Part-time", 
      location: "Charlotte, NC",
      desc: "Provide essential daily living support and personalized care to our residents in their homes."
    }
  ];

  return (
    <div className={styles.careersPage}>
      <section className={styles.hero}>
        <div className="container">
          <SectionHeader 
            title="Join the Heart of Home Care" 
            subtitle="At Seren Place, we believe that caring for our caregivers is the first step in providing world-class care for our families in Charlotte, NC."
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
          <SectionHeader title="Current Openings" subtitle="Find your next meaningful career move in Charlotte, NC." />
          <div className={styles.jobList}>
            {jobListings.map((job, index) => (
              <div key={index} className={styles.jobCard}>
                <div className={styles.jobInfo}>
                  <div className={styles.jobHeader}>
                    <h3>{job.title}</h3>
                    <div className={styles.tags}>
                      <span className={styles.tag}><Clock size={14} /> {job.type}</span>
                      <span className={styles.tag}><MapPin size={14} /> {job.location}</span>
                    </div>
                  </div>
                  <p>{job.desc}</p>
                </div>
                <Button variant="outline" href="#apply">Apply Now</Button>
              </div>
            ))}
          </div>

          <ApplyForm />
        </div>
      </section>
    </div>
  );
}
