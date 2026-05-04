"use client";

import React, { useState } from "react";
import Button from "../ui/Button";
import styles from "./ApplyForm.module.css";

const ApplyForm = ({ position }: { position?: string }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to an API
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className={styles.success}>
        <div className={styles.successIcon}>✓</div>
        <h2>Application Received!</h2>
        <p>Thank you for your interest in joining Seren Place. Our hiring team in Charlotte will review your application and contact you soon.</p>
        <Button variant="outline" onClick={() => setIsSubmitted(false)}>Submit Another Application</Button>
      </div>
    );
  }

  return (
    <div id="apply" className={styles.formWrapper}>
      <div className={styles.header}>
        <h2>Apply to Join Our Team</h2>
        <p>Complete the form below and start your journey with Seren Place in Charlotte, NC.</p>
      </div>
      
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" placeholder="John Doe" required />
          </div>
          <div className={styles.field}>
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="john@example.com" required />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" placeholder="(704) 555-0123" required />
          </div>
          <div className={styles.field}>
            <label htmlFor="position">Position Applying For</label>
            <select id="position" defaultValue={position || ""}>
              <option value="" disabled>Select a position</option>
              <option value="rn">Registered Nurse (RN) - Part-time</option>
              <option value="cna">Certified Nursing Assistant (CNA)</option>
              <option value="caregiver">Professional Caregiver</option>
              <option value="companion">Senior Companion</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className={styles.field}>
          <label htmlFor="experience">Relevant Experience (Years)</label>
          <input type="number" id="experience" min="0" placeholder="e.g. 5" required />
        </div>

        <div className={styles.field}>
          <label htmlFor="message">Why do you want to join Seren Place?</label>
          <textarea id="message" rows={4} placeholder="Tell us about your passion for care..."></textarea>
        </div>

        <div className={styles.field}>
          <label htmlFor="resume">Resume / CV (Optional)</label>
          <div className={styles.fileInput}>
            <input type="file" id="resume" accept=".pdf,.doc,.docx" />
            <span>Click to upload or drag and drop</span>
          </div>
        </div>

        <div className={styles.footer}>
          <p className={styles.notice}>By submitting, you agree to our recruitment privacy policy.</p>
          <Button variant="primary" type="submit" className={styles.submitBtn}>Submit Application</Button>
        </div>
      </form>
    </div>
  );
};

export default ApplyForm;
