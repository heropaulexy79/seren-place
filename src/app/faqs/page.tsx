import React from "react";
import { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";
import FAQItem from "@/components/ui/FAQItem";
import { faqs } from "@/data/faqs";
import styles from "./FAQPage.module.css";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Seren Place Home Care",
  description: "Find answers to common questions about Seren Place home care services, pricing, payment options, and care plans.",
};

export default function FAQPage() {
  return (
    <div className={styles.faqPage}>
      <section className={styles.hero}>
        <div className="container">
          <SectionHeader 
            title="Frequently Asked Questions" 
            subtitle="Everything you need to know about Seren Place services and care."
            centered
          />
        </div>
      </section>

      <section className={`section ${styles.faqContent}`}>
        <div className="container">
          <div className={styles.faqList}>
            {faqs.map((faq, index) => (
              <FAQItem 
                key={index} 
                question={faq.question} 
                answer={faq.answer} 
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
