import Link from "next/link";
import { faqs } from "@/data/faqs";
import FAQItem from "@/components/ui/FAQItem";
import SectionHeader from "@/components/ui/SectionHeader";
import styles from "./FAQSection.module.css";

export default function FAQSection() {
  // Only display the first 4 FAQs on the homepage
  const homeFaqs = faqs.slice(0, 4);

  return (
    <section className={`section ${styles.faqSection}`}>
      <div className="container">
        <SectionHeader 
          label="FAQ"
          title="Common Questions About Home Care"
          description="Find answers to the most common questions about our services, pricing, and how we care for your loved ones."
          centered
        />
        
        <div className={styles.faqList}>
          {homeFaqs.map((faq, index) => (
            <FAQItem 
              key={index} 
              question={faq.question} 
              answer={faq.answer} 
            />
          ))}
        </div>

        <div className={styles.cta}>
          <Link href="/faqs" className="btn btn-secondary">
            View all FAQs
          </Link>
        </div>
      </div>
    </section>
  );
}
