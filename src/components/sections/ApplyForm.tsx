"use client";

import React, { useState } from "react";
import Button from "../ui/Button";
import styles from "./ApplyForm.module.css";

const ApplyForm = ({ position }: { position?: string }) => {
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    phone: "",
    selectedPosition: position || "",
    experience: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formState.fullName,
          phone: formState.phone,
          email: formState.email,
          service: `Career Application: ${formState.selectedPosition || "General Application"}`,
          message: `Position: ${formState.selectedPosition}\nExperience: ${formState.experience} years\n\nWhy join Seren Place:\n${formState.message}`,
        }),
      });
    } catch (err) {
      console.error("Failed to send career application:", err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
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
            <input 
              type="text" 
              id="fullName" 
              placeholder="John Doe" 
              required 
              value={formState.fullName}
              onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              placeholder="john@example.com" 
              required 
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="phone">Phone Number</label>
            <input 
              type="tel" 
              id="phone" 
              placeholder="(704) 555-0123" 
              required 
              value={formState.phone}
              onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="position">Position Applying For</label>
            <select 
              id="position" 
              value={formState.selectedPosition}
              onChange={(e) => setFormState({ ...formState, selectedPosition: e.target.value })}
              required
            >
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
          <input 
            type="number" 
            id="experience" 
            min="0" 
            placeholder="e.g. 5" 
            required 
            value={formState.experience}
            onChange={(e) => setFormState({ ...formState, experience: e.target.value })}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="message">Why do you want to join Seren Place?</label>
          <textarea 
            id="message" 
            rows={4} 
            placeholder="Tell us about your passion for care..."
            value={formState.message}
            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
          />
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
          <Button variant="primary" type="submit" disabled={isSubmitting} className={styles.submitBtn}>
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ApplyForm;
