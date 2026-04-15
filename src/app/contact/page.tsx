import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import styles from "./ContactPage.module.css";

export default function ContactPage() {
  return (
    <div className={styles.contactPage}>
      <header className={styles.hero}>
        <div className="container">
          <SectionHeader 
            title="Get Professional Support Today" 
            subtitle="Speak with our care coordinators to schedule a free, no-obligation clinical assessment."
          />
        </div>
      </header>

      <section className="section">
        <div className={`container ${styles.grid}`}>
          {/* Contact Details */}
          <div className={styles.contactInfo}>
            <div className={styles.infoBlock}>
              <div className={styles.iconWrapper}><Phone size={24} /></div>
              <div>
                <h3>Call Our Care Team</h3>
                <p>Available 24/7 for emergency clinical support.</p>
                <strong>(800) SERENITY</strong>
              </div>
            </div>

            <div className={styles.infoBlock}>
              <div className={styles.iconWrapper}><Mail size={24} /></div>
              <div>
                <h3>Email Inquiries</h3>
                <p>We aim to respond to all general inquiries within 2 hours.</p>
                <strong>care@serenplace.com</strong>
              </div>
            </div>

            <div className={styles.infoBlock}>
              <div className={styles.iconWrapper}><MapPin size={24} /></div>
              <div>
                <h3>Main Headquarters</h3>
                <p>123 Wellness Way, Suite 100, City Heights, ST 12345</p>
              </div>
            </div>

            <div className={styles.infoBlock}>
              <div className={styles.iconWrapper}><Clock size={24} /></div>
              <div>
                <h3>Office Hours</h3>
                <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                <p>Sat - Sun: 9:00 AM - 2:00 PM</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={styles.formWrapper}>
            <h2 className={styles.formTitle}>Book Your Free Consultation</h2>
            <form className={styles.form}>
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" placeholder="Enter your name" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" placeholder="(555) 000-0000" required />
                </div>
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="email@example.com" required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="service">Interested Service</label>
                <select id="service">
                  <option value="">Select a service...</option>
                  <option value="dementia">Dementia & Alzheimer's Care</option>
                  <option value="senior">General Senior Care</option>
                  <option value="companionship">Companionship</option>
                  <option value="respite">Respite Care</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">How can we help?</label>
                <textarea id="message" rows={4} placeholder="Tell us about your loved one's needs..."></textarea>
              </div>

              <Button type="submit" variant="primary" className={styles.submitBtn}>
                Schedule Assessment
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
