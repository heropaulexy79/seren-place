import React from "react";
import { Search, ClipboardList, UserPlus, ShieldCheck } from "lucide-react";
import styles from "./HowItWorks.module.css";

const steps = [
  {
    icon: <Search size={32} />,
    title: "1. Free Consultation",
    desc: "We start with a thorough clinical assessment in the comfort of your home."
  },
  {
    icon: <ClipboardList size={32} />,
    title: "2. Personalized Plan",
    desc: "Our registered nurses create a custom care plan tailored to specific medical and luxury needs."
  },
  {
    icon: <UserPlus size={32} />,
    title: "3. Caregiver Matching",
    desc: "We pair your family with a caregiver who matches your personality and specialized requirements."
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "4. Professional Oversight",
    desc: "Continuous monitoring and adjustments to ensure the highest standard of care."
  }
];

const HowItWorks = () => {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Simple Path to Exceptional Care</h2>
          <p className={styles.subtitle}>
            We make the journey to professional home care as seamless and stress-free as possible.
          </p>
        </div>

        <div className={styles.grid}>
          {steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.iconWrapper}>
                {step.icon}
                <div className={styles.line} />
              </div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
