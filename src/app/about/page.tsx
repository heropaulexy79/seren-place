import React from "react";
import { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import styles from "./AboutPage.module.css";
import { Heart, Shield, Users, Sun, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "About Seren Place | Our Story & Compassionate Care Philosophy",
  description: "Learn about Seren Place, a premium home healthcare agency founded by nurses. Discover our family-first philosophy and commitment to professional excellence.",
  openGraph: {
    title: "About Seren Place | Our Story & Care Philosophy",
    description: "Premium home healthcare founded on empathy, professional excellence, and family collaboration.",
    url: "https://serenplace.com/about",
  }
};

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      <section className={styles.hero}>
        <div className="container">
          <SectionHeader 
            title="About Seren Place" 
            subtitle="Redefining senior living by offering more than just a care facility."
          />
        </div>
      </section>

      <section className={`section ${styles.aboutSection}`}>
        <div className={`container ${styles.grid}`}>
          <div className={styles.content}>
            <h2>A Refreshing Alternative</h2>
            <p>
              At Seren Place, we redefine senior living by offering more than just a care facility. We foster a warm and supportive home environment that is customized to meet the distinctive needs of each resident. 
            </p>
            <p>
              As an age-in-place community, we provide a refreshing alternative to conventional senior care settings. Our in-home care services ensure that your loved ones receive attentive and personalized care in the comfort of their own home. Reach out to us today to discover the Seren Place difference.
            </p>
            <p>
              Seren Place is a licensed, private senior care facility with a capacity of six residents, located in Charlotte, North Carolina. Our commitment lies in delivering exceptional care for seniors, ensuring that your loved ones reside in a safe, clean, and tranquil environment. Seren Place exemplifies these qualities within our welcoming facility.
            </p>
          </div>
          <div className={styles.imageCol}>
            <img 
              src="/images/hero/hero_joy.png" 
              alt="Compassionate care at Seren Place" 
              className={styles.aboutImage}
            />
          </div>
        </div>
      </section>

      <section className={`section section-alt ${styles.missionSection}`}>
        <div className="container">
          <div className={styles.missionBox}>
            <SectionHeader title="Our Mission" subtitle="" centered />
            <p className={styles.missionText}>
              At Seren Place, we strive to create a distinct independent living experience, setting ourselves apart from traditional senior living facilities. We offer an all-inclusive, quality, and affordable senior care solution that guarantees continuous support for our residents.
            </p>
          </div>
        </div>
      </section>

      <section className={`section ${styles.teamSection}`}>
        <div className={`container ${styles.grid}`}>
          <div className={styles.imageCol}>
            <img 
              src="/images/hero/hero_compassion.png" 
              alt="Our dedicated team" 
              className={styles.aboutImage}
            />
          </div>
          <div className={styles.content}>
            <h2>Our Team</h2>
            <p>
              Our caregivers are selected through a meticulous process that emphasizes their training, skills, and passion for creating a nurturing environment. This process includes thorough background checks, drug testing, and CPR certifications.
            </p>
            <p>
              We adhere to the educational and training guidelines set forth by the State of North Carolina, consistently updating our training resources to reflect the latest best practices in long-term care. 
            </p>
            <p>
              With a staff-to-resident ratio of 1:6, occasionally reaching 2:6, our dedicated team includes experienced registered nurses. Our blend of expertise, empathy, and commitment to exceptional care makes Seren Place a reliable choice for your loved one’s needs.
            </p>
          </div>
        </div>
      </section>

      <section className={`section section-alt ${styles.whySection}`}>
        <div className="container">
          <SectionHeader title="Why Choose Us" subtitle="Discover what sets Seren Place apart" centered />
          <div className={styles.whyGrid}>
            <div className={styles.whyItem}>
              <div className={styles.whyIcon}><Shield size={24} /></div>
              <h3>Exceptional Quality of Care</h3>
              <p>At Seren Place, a family-owned and operated facility, we take immense pride in delivering the highest standards of care and support for our residents.</p>
            </div>
            <div className={styles.whyItem}>
              <div className={styles.whyIcon}><Heart size={24} /></div>
              <h3>Compassionate Senior Care</h3>
              <p>As a licensed, private senior care home accommodating six residents, we prioritize creating a safe, clean, and tranquil environment. With flexible options for families.</p>
            </div>
            <div className={styles.whyItem}>
              <div className={styles.whyIcon}><Users size={24} /></div>
              <h3>Tailored Care Solutions</h3>
              <p>We provide a thoughtful alternative to larger senior care facilities by focusing on individualized, high-quality care that is both effective and affordable for all our residents.</p>
            </div>
            <div className={styles.whyItem}>
              <div className={styles.whyIcon}><Sun size={24} /></div>
              <h3>Inviting Atmosphere</h3>
              <p>Our welcoming environment reflects the quality of care we offer, designed to feel like home. Seren Place is staffed around the clock, providing numerous amenities and services at no additional cost.</p>
            </div>
            <div className={styles.whyItem}>
              <div className={styles.whyIcon}><Heart size={24} /></div>
              <h3>Family-Driven Commitment</h3>
              <p>We recognize that sometimes seniors simply need a bit of extra support to maintain their independence and dignity. Our compassionate caregivers genuinely enjoy making a positive impact in the lives of our residents.</p>
            </div>
            <div className={styles.whyItem}>
              <div className={styles.whyIcon}><Shield size={24} /></div>
              <h3>Experienced Professionals</h3>
              <p>At Seren Place, our team consists of qualified professionals with extensive experience in caring for individuals with dementia and Alzheimer’s, ensuring your loved ones receive the specialized care they deserve.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.officeSection}`}>
        <div className="container text-center">
          <div className={styles.officeBox}>
            <MapPin className={styles.officeIcon} size={48} />
            <h2>Our Office</h2>
            <p>13030 Noble View Drive, Suite 106<br />Charlotte, NC 28273</p>
            <Button variant="primary" href="/contact" className={styles.officeBtn}>Contact Us Today</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
