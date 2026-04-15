"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Phone, Menu, X, Mail, MapPin } from "lucide-react";
import Button from "../ui/Button";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Services",
      href: "/services",
      dropdown: [
        { name: "Senior Care Services", href: "/services/senior-care" },
        { name: "Dementia Care", href: "/services/dementia-care" },
        { name: "Alzheimer’s Care", href: "/services/alzheimers-care" },
      ],
    },
    {
      name: "In-Home Care",
      href: "/in-home-care",
      dropdown: [
        { name: "Extra Help With Seniors", href: "/in-home-care/extra-help" },
        { name: "Senior Companionship", href: "/in-home-care/companionship" },
        { name: "Senior Meal Preparation", href: "/in-home-care/meal-prep" },
        { name: "Respite Care", href: "/in-home-care/respite-care" },
      ],
    },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className={`${styles.headerWrapper} ${isScrolled ? styles.scrolled : ""}`}>
      {/* TopBar - Disappears on scroll */}
      <div className={styles.topBar}>
        <div className={`container ${styles.topBarContainer}`}>
          <div className={styles.topBarLeft}>
            <div className={styles.topBarItem}>
              <MapPin size={14} />
              <span>123 Wellness Way, Suite 100, City Heights</span>
            </div>
            <div className={styles.topBarItem}>
              <Mail size={14} />
              <span>care@serenplace.com</span>
            </div>
          </div>
          <div className={styles.topBarRight}>
            <div className={styles.topBarItem}>
              <Phone size={14} />
              <span>(800) SERENITY</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar - Sticky */}
      <nav className={styles.navbar}>
        <div className={`container ${styles.navContainer}`}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <span className={styles.logoText}>Seren </span>
            <span className={styles.logoAccent}>Place</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className={styles.navLinks}>
            {navLinks.map((link) => (
              <li
                key={link.name}
                className={styles.navItem}
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link href={link.href} className={styles.navLink}>
                  {link.name}
                  {link.dropdown && <ChevronDown size={14} className={styles.chevron} />}
                </Link>

                {link.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.ul
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className={styles.dropdown}
                      >
                        {link.dropdown.map((item) => (
                          <li key={item.name}>
                            <Link href={item.href} className={styles.dropdownItem}>
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className={styles.navActions}>
            <Button variant="accent" href="/contact">Book Now</Button>
          </div>


          {/* Mobile Toggle */}
          <button
            className={styles.mobileToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className={styles.mobileMenu}
            >
              <div className="container">
                <ul className={styles.mobileLinks}>
                  {navLinks.map((link) => (
                    <li key={link.name} className={styles.mobileNavItem}>
                      <div className={styles.mobileNavLinkWrapper}>
                        <Link
                          href={link.href}
                          className={styles.mobileNavLink}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {link.name}
                        </Link>
                      </div>
                      {link.dropdown && (
                        <ul className={styles.mobileSubLinks}>
                          {link.dropdown.map((item) => (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className={styles.mobileSubLink}
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                  <li className={styles.mobileActions}>
                     <Button variant="primary" href="/contact" className={styles.fullWidth}>
                      Book Consultation
                    </Button>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
