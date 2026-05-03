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
            subtitle="Your privacy is paramount to us at Seren Place."
          />
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className={styles.content}>
            <h2>Welcome to Seren Place</h2>
            <p>At Seren Place, we prioritize your privacy and are committed to protecting your personal information.</p>

            <h3>Information We Collect from Visitors</h3>
            <p>
              When you leave comments on our website, we gather the data you provide through the comment form, as well as your IP address and browser user agent string to enhance our spam detection efforts.
            </p>
            <p>
              To determine if you are using the Gravatar service, we may send an anonymized string derived from your email address (known as a hash). You can review Gravatar’s privacy policy here. Once your comment is approved, your profile picture will be displayed publicly alongside your comment.
            </p>

            <h3>Media Uploads</h3>
            <p>
              If you choose to upload images to our site, please ensure that they do not contain embedded location data (EXIF GPS). Visitors have the ability to download and extract location information from images featured on our platform.
            </p>

            <h3>Cookies Policy</h3>
            <p>
              When you leave a comment, you may opt to save your name, email address, and website in cookies for convenience, allowing you to avoid re-entering these details for future comments. These cookies will remain active for one year.
            </p>
            <p>
              Upon visiting our login page, a temporary cookie will be established to check if your browser accepts cookies. This cookie does not contain any personal information and will be discarded once you close your browser.
            </p>
            <p>
              When you log in, we will set several cookies to store your login details and display preferences. Login cookies will expire after two days, while display option cookies will last one year. If you select the “Remember Me” option, your login will persist for two weeks. Logging out will remove these cookies.
            </p>
            <p>
              If you edit or publish an article, an additional cookie will be generated, containing no personal data but indicating the post ID of the article you edited. This cookie will expire after one day.
            </p>

            <h3>Embedded Content from Other Websites</h3>
            <p>
              Our articles may feature embedded content, such as videos, images, or articles, that behaves as if you have visited the respective external sites. These sites may collect data about you, use cookies, employ third-party tracking, and monitor your interaction with the embedded content, particularly if you are logged into those sites.
            </p>

            <h3>Data Sharing Practices</h3>
            <p>
              If you request a password reset, your IP address will be included in the reset email for verification purposes.
            </p>

            <h3>Data Retention Policy</h3>
            <p>
              Comments and their metadata are retained indefinitely to ensure we can recognize and approve any follow-up comments automatically, thus bypassing the moderation queue.
            </p>
            <p>
              For registered users on our site, we store the personal information provided in user profiles. All users can view, edit, or delete their personal information at any time (with the exception of their username). Website administrators also have access to view and edit this information.
            </p>

            <h3>Your Rights Over Your Data</h3>
            <p>
              If you have an account on our site or have previously commented, you can request an exported file of your personal data that we hold, including any information you have provided. You may also request the deletion of any personal data we retain about you, excluding information we are required to keep for administrative, legal, or security reasons.
            </p>

            <h3>Automated Spam Detection</h3>
            <p>
              Visitor comments may be subject to automated checks through a spam detection service to maintain the quality of our community interactions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
