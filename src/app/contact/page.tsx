"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import styles from "./ContactPage.module.css";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "", phone: "", email: "", service: "", message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      } else {
        setStatus("success");
      }
    } catch (err) {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  return (
    <div className={styles.contactPage}>
      <header className={styles.hero}>
        <div className="container">
          <div className="text-center">
            <span className="section-label">Reach Out</span>
            <h1 style={{ fontSize: "2.75rem", fontWeight: "800", color: "var(--secondary)", marginBottom: "16px" }}>Get Professional Support Today</h1>
            <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", maxWidth: "680px", margin: "0 auto" }}>
              Speak with our care coordinators to schedule a free, no-obligation clinical assessment.
            </p>
          </div>
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
                <p>Available 24/7 for emergency support.</p>
                <strong><a href="tel:+19107107977" style={{ color: "var(--primary)" }}>+1 910-710-7977</a></strong>
              </div>
            </div>

            <div className={styles.infoBlock}>
              <div className={styles.iconWrapper}><Mail size={24} /></div>
              <div>
                <h3>Email Inquiries</h3>
                <p>We aim to respond to all general inquiries within 2 hours.</p>
                <strong><a href="mailto:info@serenplace.com" style={{ color: "var(--primary)" }}>info@serenplace.com</a></strong>
              </div>
            </div>

            <div className={styles.infoBlock}>
              <div className={styles.iconWrapper}><MapPin size={24} /></div>
              <div>
                <h3>Main Office</h3>
                <p>Charlotte, NC 28273</p>
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

            {status === "success" ? (
              <div style={{
                textAlign: "center",
                padding: "48px 32px",
                background: "var(--teal-50)",
                borderRadius: "var(--radius-xl)",
                border: "1px solid var(--teal-200)",
              }}>
                <CheckCircle size={64} color="var(--primary)" style={{ marginBottom: "20px" }} />
                <h3 style={{ fontSize: "1.6rem", color: "var(--secondary)", marginBottom: "12px" }}>
                  Thank You! We'll Be in Touch Soon.
                </h3>
                <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: "1.7", maxWidth: "420px", margin: "0 auto 24px" }}>
                  Your consultation request has been received. A member of our Care Coordination team will reach out to you within <strong>24 hours</strong>. Please also check your email inbox for a confirmation.
                </p>
                <p style={{ fontSize: "0.95rem", color: "var(--neutral-500)" }}>
                  Urgent? Call us directly at{" "}
                  <a href="tel:+19107107977" style={{ color: "var(--primary)", fontWeight: "700" }}>+1 910-710-7977</a>
                </p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder="(555) 000-0000"
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="service">Interested Service</label>
                  <select
                    id="service"
                    name="service"
                    value={formState.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service...</option>
                    <option value="Senior Care Services">Senior Care Services</option>
                    <option value="Dementia Care">Dementia Care</option>
                    <option value="Alzheimer's Care">Alzheimer's Care</option>
                    <option value="Senior Companionship">Senior Companionship</option>
                    <option value="Extra Help with Seniors">Extra Help with Seniors</option>
                    <option value="Meal Preparation">Meal Preparation</option>
                    <option value="Respite Care">Respite Care</option>
                    <option value="Other Inquiry">Other Inquiry</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">How can we help?</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your loved one's needs..."
                  />
                </div>

                {status === "error" && (
                  <div style={{
                    background: "#fff5f5",
                    border: "1px solid #fed7d7",
                    borderRadius: "var(--radius-md)",
                    padding: "14px 18px",
                    color: "#c53030",
                    fontSize: "0.95rem",
                    marginBottom: "16px",
                  }}>
                    ⚠️ {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className={styles.submitBtn}
                  style={{
                    width: "100%",
                    padding: "16px 32px",
                    background: status === "submitting"
                      ? "var(--neutral-300)"
                      : "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)",
                    color: "white",
                    border: "none",
                    borderRadius: "var(--radius-full)",
                    fontSize: "1.1rem",
                    fontWeight: "700",
                    cursor: status === "submitting" ? "not-allowed" : "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: status === "submitting" ? "none" : "0 10px 28px rgba(30,82,93,0.25)",
                    fontFamily: "inherit",
                  }}
                >
                  {status === "submitting" ? "Sending your request..." : "Schedule Assessment"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
