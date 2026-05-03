import React from "react";
import { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";
import styles from "./TermsPage.module.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Seren Place",
  description: "Read the Terms of Service for using Seren Place's website and services.",
};

export default function TermsPage() {
  return (
    <div className={styles.termsPage}>
      <header className={styles.hero}>
        <div className="container">
          <SectionHeader 
            title="Terms of Service" 
            subtitle="Effective Date: May 3, 2026"
          />
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className={styles.content}>
            <p>Welcome to Seren Place. By accessing or using our website, you agree to comply with and be bound by the following Terms of Service. If you do not agree with these terms, please do not use our website.</p>

            <h3>1. Acceptance of Terms</h3>
            <p>By accessing our site, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service, as well as our <Link href="/privacy">Privacy Policy</Link>.</p>

            <h3>2. Services Offered</h3>
            <p>Seren Place provides a range of family and home care services, including but not limited to senior care services, dementia and Alzheimer’s care, personal care, meal preparation, companionship, and respite care. By using our services, you agree to the terms outlined regarding service delivery and client responsibilities.</p>

            <h3>3. Client Responsibilities</h3>
            <p>Clients are responsible for providing accurate information about their care needs and any health-related issues. It is essential to communicate any changes in health status promptly to ensure the safety and effectiveness of our services.</p>

            <h3>4. Use of the Website</h3>
            <ul>
              <li><strong>Eligibility:</strong> You must be at least 18 years old to use our website. By using the site, you represent and warrant that we meet this age requirement.</li>
              <li><strong>License:</strong> We grant you a limited, non-exclusive, non-transferable license to access and use our website for personal, non-commercial purposes.</li>
            </ul>

            <h3>5. User Accounts</h3>
            <ul>
              <li><strong>Registration:</strong> To access certain features of our site, you may need to create an account. You agree to provide accurate, current, and complete information during the registration process.</li>
              <li><strong>Security:</strong> You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</li>
            </ul>

            <h3>6. Confidentiality and Privacy</h3>
            <p>We are committed to maintaining the confidentiality of all client information, including health records. Any data collected will be handled in accordance with our <Link href="/privacy">Privacy Policy</Link>.</p>

            <h3>7. Health and Safety Compliance</h3>
            <p>Seren Place adheres to all applicable health and safety regulations. Clients and caregivers must follow all safety protocols to ensure a safe environment, particularly those related to current health issues.</p>

            <h3>8. Third-Party Links</h3>
            <p>Our website may contain links to third-party websites. We do not endorse or assume any responsibility for the content, privacy policies, or practices of these websites.</p>

            <h3>9. Disclaimer of Warranties</h3>
            <p>Our website and services are provided on an “as-is” and “as-available” basis. We make no warranties or representations regarding the accuracy, reliability, or availability of the site.</p>

            <h3>10. Limitation of Liability</h3>
            <p>To the fullest extent permitted by law, Seren Place shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the website or any services provided.</p>

            <h3>11. Indemnification</h3>
            <p>You agree to indemnify, defend, and hold harmless Seren Place from any claims arising from your use of our services or violation of these Terms of Service.</p>

            <h3>12. Changes to Terms</h3>
            <p>We reserve the right to modify these Terms of Service at any time. Changes will be effective upon posting on our website. Your continued use of the site after any changes constitutes your acceptance of the new Terms.</p>

            <h3>13. Governing Law</h3>
            <p>These Terms of Service shall be governed by the laws of the State of North Carolina. Any disputes shall be subject to the exclusive jurisdiction of the courts located in Charlotte, NC.</p>

            <h3>14. Contact Us</h3>
            <p>If you have any questions or concerns about these Terms of Service, please contact us at <a href="mailto:info@serenplace.com">info@serenplace.com</a>.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
