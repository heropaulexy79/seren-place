import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Brand & Mission */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              <Image
                src="/logo.png"
                alt="Seren Place"
                width={150}
                height={44}
                style={{ objectFit: "contain" }}
                className={styles.logoImg}
              />
            </Link>
            <p className={styles.mission}>
              Premium, family-centered care designed to bring peace of mind and professional support to your doorstep.
            </p>
            <div className={styles.socials}>
              <a href="#" className={styles.socialLink}><Facebook size={20} /></a>
              <a href="#" className={styles.socialLink}><Twitter size={20} /></a>
              <a href="#" className={styles.socialLink}><Instagram size={20} /></a>
              <a href="#" className={styles.socialLink}><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.linksCol}>
            <h3>Company</h3>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/locations">Locations</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className={styles.linksCol}>
            <h3>Services</h3>
            <ul>
              <li><Link href="/services/senior-care">Senior Care</Link></li>
              <li><Link href="/services/dementia-care">Dementia Care</Link></li>
              <li><Link href="/in-home-care/companionship">Companionship</Link></li>
              <li><Link href="/in-home-care/meal-prep">Meal Preparation</Link></li>
              <li><Link href="/in-home-care/respite-care">Respite Care</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.contactCol}>
            <h3>Get in Touch</h3>
            <div className={styles.contactItem}>
              <Phone size={18} />
              <span>(800) SERENITY</span>
            </div>
            <div className={styles.contactItem}>
              <Mail size={18} />
              <span>care@serenplace.com</span>
            </div>
            <div className={styles.contactItem}>
              <MapPin size={18} />
              <span>123 Wellness Way, Suite 100, City Heights, ST 12345</span>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {currentYear} Seren Place. All rights reserved.</p>
          <div className={styles.legal}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <span className={styles.trustBadge}>HIPAA Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
