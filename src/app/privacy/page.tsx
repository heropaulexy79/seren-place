import React from "react";
import { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";
import styles from "./PrivacyPage.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy | Seren Place",
  description: "Learn how Seren Place collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className={styles.privacyPage}>
      <header className={styles.hero}>
        <div className="container">
          <SectionHeader 
            title="Privacy Policy" 
            subtitle="Effective Date: May 3, 2026"
          />
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className={styles.content}>
            <p>At Seren Place, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website or use our services. By accessing our site or services, you agree to the terms of this policy.</p>

            <h3>1. Information We Collect</h3>
            <ul>
              <li><strong>Personal Information:</strong> We collect personal data that you provide to us when you leave comments, create an account, or use our services. This may include your name, email address, phone number, and any health-related information relevant to the services we provide.</li>
              <li><strong>Comments and Media:</strong> When you leave comments on our website, we collect the data in the comments form, your IP address, and browser user agent string to help detect spam. If you upload images, please ensure they do not contain embedded location data (EXIF GPS).</li>
              <li><strong>Cookies:</strong> We use cookies to enhance your experience on our website. Cookies are small files stored on your device that help us remember your preferences and improve site functionality. You have the option to disable cookies in your browser settings.</li>
            </ul>

            <h3>2. How We Use Your Information</h3>
            <p>We use the information we collect for various purposes, including:</p>
            <ul>
              <li>Providing and managing our services</li>
              <li>Communicating with you regarding your account or services</li>
              <li>Improving our website and services</li>
              <li>Ensuring compliance with legal obligations</li>
              <li>Preventing fraudulent activity</li>
            </ul>

            <h3>3. Data Sharing Practices</h3>
            <ul>
              <li><strong>Third-Party Services:</strong> We do not sell or rent your personal information to third parties. However, we may share your information with trusted third-party service providers who assist us in operating our website and servicing you, so long as those parties agree to keep this information confidential.</li>
              <li><strong>Legal Compliance:</strong> We may also disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
            </ul>

            <h3>4. Confidentiality and Security</h3>
            <p>We take the confidentiality and security of your personal information seriously. We implement reasonable security measures to protect your data from unauthorized access, use, or disclosure. However, no method of transmission over the internet or method of electronic storage is 100% secure.</p>

            <h3>5. Your Rights Over Your Data</h3>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal data we hold about you</li>
              <li>Request correction of any inaccurate information</li>
              <li>Request deletion of your personal data, subject to legal obligations</li>
            </ul>
            <p>To exercise these rights, please contact us at <a href="mailto:info@serenplace.com">info@serenplace.com</a>.</p>

            <h3>6. Health and Safety Compliance</h3>
            <p>Seren Place adheres to all applicable health and safety regulations in managing client information. We ensure that your personal health information is handled in compliance with relevant laws and guidelines.</p>

            <h3>7. Changes to This Privacy Policy</h3>
            <p>We reserve the right to update this Privacy Policy at any time. We will notify you of any changes by posting the new policy on our website. Your continued use of the site after any changes constitutes your acceptance of the new Privacy Policy.</p>

            <h3>8. Contact Us</h3>
            <p>If you have any questions or concerns about this Privacy Policy or your personal information, please contact us at <a href="mailto:info@serenplace.com">info@serenplace.com</a>.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
