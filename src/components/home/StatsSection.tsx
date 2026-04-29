import React from "react";
import styles from "./StatsSection.module.css";

const stats = [
  { value: "20+", label: "Happy Families" },
  { value: "50+", label: "Licensed Caregivers" },
  { value: "2+", label: "Years of Excellence" },
  { value: "4.9/5", label: "Family Rating" },
];

const StatsSection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.contentCol}>
            <div className="section-label">Our Impact</div>
            <h2 className={styles.title}>Why Families Trust Seren Place</h2>
            <p className={styles.text}>
              Our commitment to premium quality care is reflected in the lives we touch every single day. We don’t just provide caregivers; we build support systems.
            </p>
          </div>
          <div className={styles.statsCol}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.stat}>
                <span className={styles.value}>{stat.value}</span>
                <span className={styles.label}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
