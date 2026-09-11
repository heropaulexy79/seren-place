"use client";

import Link from "next/link";
import { Users, HeartHandshake, ArrowRight, Phone, Mail, ShieldCheck } from "lucide-react";
import styles from "./TempLandingHero.module.css";

export default function TempLandingHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.glowTeal} />
      <div className={styles.glowNavy} />

      <div className="container">
        {/* Status Badge */}
        <div className={styles.badgeContainer}>
          <div className={styles.launchPill}>
            <span className={styles.liveDot} />
            <span className={styles.pillText}>Official Launch Coming Soon • Charlotte Metro & Union County</span>
          </div>
        </div>

        {/* Hero Header Text */}
        <div className={styles.heroHeader}>
          <h1 className={styles.mainTitle}>
            Welcome to <span className={styles.gradientText}>Seren Place Homecare</span>
          </h1>
          <p className={styles.mainBody}>
            Your trusted partner in non-medical home care. We are dedicated to providing compassionate, high-quality support to individuals and families throughout the Charlotte Metro and Union County areas.
          </p>

          <div className={styles.secondaryNotice}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", fontWeight: "700", marginBottom: "4px", color: "var(--secondary)" }}>
              <ShieldCheck size={20} color="var(--primary)" />
              <span>Pre-Launch Announcement</span>
            </div>
            As we prepare for our official launch, we are actively finalizing our licensing, building our client waitlist, and recruiting exceptional caregivers who share our commitment to elevating the standard of care. While we are not yet open for service, we are excited to serve our community very soon.
          </div>
        </div>

        {/* Side-By-Side Redesigned Cards */}
        <div className={styles.cardsGrid}>
          {/* Card 1: For Future Clients & Families */}
          <div className={styles.actionCard}>
            <div className={styles.actionCardHoverGlow} />
            <div>
              <div className={styles.cardHeader}>
                <div className={styles.cardIconBox}>
                  <HeartHandshake size={28} />
                </div>
                <span className={styles.cardBadge}>For Clients & Families</span>
              </div>

              <h2 className={styles.cardTitle}>Plan Ahead for Peace of Mind</h2>
              <p className={styles.cardText}>
                Secure a priority spot on our client waitlist. Be the first to know when our services go live so we can build a customized care plan for your loved one.
              </p>
            </div>

            <div>
              <Link href="/contact" className={`${styles.ctaButton} ${styles.clientCta}`}>
                <span>Join Our Client Waitlist</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          {/* Card 2: For Caregivers & CNAs */}
          <div className={styles.actionCard}>
            <div className={styles.actionCardHoverGlow} />
            <div>
              <div className={styles.cardHeader}>
                <div className={`${styles.cardIconBox} ${styles.cardIconBoxCaregiver}`}>
                  <Users size={28} />
                </div>
                <span className={`${styles.cardBadge} ${styles.cardBadgeCaregiver}`}>For Caregivers & CNAs</span>
              </div>

              <h2 className={styles.cardTitle}>Join Our Founding Care Team</h2>
              <p className={styles.cardText}>
                Are you a compassionate professional committed to making a difference? We are actively hiring top-tier caregivers to join our team ahead of our grand opening.
              </p>
            </div>

            <div>
              <Link href="/careers" className={`${styles.ctaButton} ${styles.caregiverCta}`}>
                <span>Apply Now</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Direct Contact Info Banner */}
        <div className={styles.contactBanner}>
          <div className={styles.contactItem}>
            <Phone size={18} color="var(--primary)" />
            <span>Call Us: <strong>+1 910-710-7977</strong></span>
          </div>
          <div className={styles.contactItem}>
            <Mail size={18} color="var(--primary)" />
            <span>Email: <strong>info@serenplace.com</strong></span>
          </div>

        </div>
      </div>
    </section>
  );
}
