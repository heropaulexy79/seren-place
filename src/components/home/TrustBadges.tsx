import React from "react";
import { ShieldCheck, Award, Lock, CheckCircle } from "lucide-react";
import styles from "./TrustBadges.module.css";

const badges = [
  { icon: <ShieldCheck size={32} />, title: "Licensed & Bonded", desc: "Fully certified state agency" },
  { icon: <Award size={32} />, title: "Premium Quality", desc: "Top-rated care providers" },
  { icon: <Lock size={32} />, title: "HIPAA Compliant", desc: "Your privacy is our priority" },
  { icon: <CheckCircle size={32} />, title: "Insured Care", desc: "Complete peace of mind" },
];

const TrustBadges = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {badges.map((badge, index) => (
            <div key={index} className={styles.badge}>
              <div className={styles.iconWrapper}>{badge.icon}</div>
              <div className={styles.text}>
                <h4>{badge.title}</h4>
                <p>{badge.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
