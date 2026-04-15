import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import styles from "./ServiceDetail.module.css";
import { CheckCircle } from "lucide-react";

interface ServiceDetailProps {
  title: string;
  description: string;
  image: string;
  benefits: string[];
  audience: string;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ title, description, image, benefits, audience }) => {
  return (
    <div className={styles.serviceDetail}>
      <section className={styles.hero}>
        <div className="container">
          <SectionHeader title={title} centered={false} />
          <div className={styles.heroGrid}>
            <div className={styles.textCol}>
              <p className={styles.description}>{description}</p>
              <div className={styles.audience}>
                <strong>Ideal For:</strong> {audience}
              </div>
              <Button variant="primary" href="/contact" className={styles.cta}>Book Consultation</Button>
            </div>
            <div className={styles.imageCol}>
              <img src={image} alt={title} className={styles.mainImage} />
            </div>
          </div>
        </div>
      </section>

      <section className={`section section-alt ${styles.benefitsSection}`}>
        <div className="container">
          <h2>Key Benefits & Features</h2>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <div key={index} className={styles.benefitCard}>
                <CheckCircle className={styles.icon} size={24} />
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.ctaBanner}>
            <h2>Custom Care for Your Unique Needs</h2>
            <p>Every family is different. We tailor our {title.toLowerCase()} to meet your specific preferences and schedule.</p>
            <Button variant="secondary" href="/contact">Get a Personalized Quote</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
