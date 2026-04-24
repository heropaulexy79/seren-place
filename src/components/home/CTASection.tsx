import React from "react";
import Button from "../ui/Button";
import styles from "./CTASection.module.css";

const CTASection = () => {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h2 className={styles.title}>Peace of Mind is Just a Phone Call Away.</h2>
          <p className={styles.text}>
            Ready to experience the Seren Place difference? Speak with one of our care experts today for a free, no-obligation consultation.
          </p>
          <div className={styles.actions}>
            <Button variant="solidWhite" href="/contact">Book Free Consultation</Button>
            <a href="tel:+1800SERENITY" className={styles.phoneLink}>
              Or call (800) SERENITY
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
