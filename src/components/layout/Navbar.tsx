"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Phone, Menu, X, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import Button from "../ui/Button";
import styles from "./Navbar.module.css";

const TikTokIcon = ({ size = 14 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpenSubmenu, setMobileOpenSubmenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

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
              <span>Charlotte, NC 28273</span>
            </div>
            <div className={styles.topBarItem}>
              <Mail size={14} />
              <span>info@serenplace.com</span>
            </div>
          </div>
          <div className={styles.topBarRight}>
            <div className={styles.topBarSocials}>
              <a href="https://facebook.com/serenplace" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><Facebook size={14} /></a>
              <a href="https://instagram.com/serenplace" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><Instagram size={14} /></a>
              <a href="https://tiktok.com/@serenplace" aria-label="TikTok" target="_blank" rel="noopener noreferrer"><TikTokIcon size={14} /></a>
            </div>
            <div className={styles.topBarItem}>
              <Phone size={14} />
              <span>(800) SERENITY</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar - Sticky */}
      <nav className={styles.navbar} aria-label="Main Navigation">
        <div className={`container ${styles.navContainer}`}>
          {/* Logo */}
          <Link href="/" className={styles.logo} aria-label="Seren Place Home">
            <Image
              src="/logo.png"
              alt="Seren Place — Compassionate Care for Your Loved Ones"
              width={200}
              height={60}
              style={{ objectFit: "contain" }}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className={styles.navLinks} role="menubar">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className={styles.navItem}
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
                role="none"
              >
                <Link 
                  href={link.href} 
                  className={styles.navLink}
                  role="menuitem"
                  aria-haspopup={link.dropdown ? "true" : "false"}
                  aria-expanded={activeDropdown === link.name}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown size={14} className={styles.chevron} aria-hidden="true" />}
                </Link>

                {link.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.ul
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className={styles.dropdown}
                        role="menu"
                        aria-label={`${link.name} submenu`}
                      >
                        {link.dropdown.map((item) => (
                          <li key={item.name} role="none">
                            <Link href={item.href} className={styles.dropdownItem} role="menuitem">
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
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className={styles.mobileMenu}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation Menu"
            >
              <div className="container">
                <ul className={styles.mobileLinks}>
                  {navLinks.map((link) => {
                    const isSubmenuOpen = mobileOpenSubmenu === link.name;
                    return (
                      <li key={link.name} className={styles.mobileNavItem}>
                        <div className={styles.mobileNavLinkWrapper}>
                          {link.dropdown ? (
                            /* Parent with children: clicking toggles the submenu */
                            <button
                              className={styles.mobileNavToggle}
                              onClick={() =>
                                setMobileOpenSubmenu(isSubmenuOpen ? null : link.name)
                              }
                              aria-expanded={isSubmenuOpen}
                              aria-controls={`mobile-sub-${link.name}`}
                            >
                              <span>{link.name}</span>
                              <ChevronDown
                                size={18}
                                className={`${styles.mobileChevron} ${
                                  isSubmenuOpen ? styles.mobileChevronOpen : ""
                                }`}
                                aria-hidden="true"
                              />
                            </button>
                          ) : (
                            <Link
                              href={link.href}
                              className={styles.mobileNavLink}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {link.name}
                            </Link>
                          )}
                        </div>
                        {link.dropdown && (
                          <AnimatePresence initial={false}>
                            {isSubmenuOpen && (
                              <motion.ul
                                id={`mobile-sub-${link.name}`}
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25, ease: "easeInOut" }}
                                className={styles.mobileSubLinks}
                                style={{ overflow: "hidden" }}
                              >
                                {link.dropdown.map((item) => (
                                  <li key={item.name}>
                                    <Link
                                      href={item.href}
                                      className={styles.mobileSubLink}
                                      onClick={() => {
                                        setMobileMenuOpen(false);
                                        setMobileOpenSubmenu(null);
                                      }}
                                    >
                                      {item.name}
                                    </Link>
                                  </li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        )}
                      </li>
                    );
                  })}
                  <li className={styles.mobileActions}>
                    <Button 
                      variant="accent" 
                      href="/contact" 
                      className={styles.fullWidth}
                      onClick={() => setMobileMenuOpen(false)}
                    >
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
