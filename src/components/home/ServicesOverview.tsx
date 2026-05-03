"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Brain, Heart, Users, Utensils, Shield, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/Button";
import styles from "./ServicesOverview.module.css";

const services = [
  {
    icon: <Brain size={24} />,
    title: "Dementia & Alzheimer's",
    desc: "Specialized memory care that focuses on safety, familiarity, and dignity.",
    href: "/services/dementia-care",
    image: "/images/services/dementia.png"
  },
  {
    icon: <Users size={24} />,
    title: "Senior Companionship",
    desc: "Meaningful interaction and emotional support to combat loneliness.",
    href: "/in-home-care/companionship",
    image: "/images/services/companionship.png"
  },
  {
    icon: <Heart size={24} />,
    title: "Senior Care Services",
    desc: "Comprehensive daily assistance tailored to specific health requirements.",
    href: "/services/senior-care",
    image: "/images/services/senior_care.png"
  },
  {
    icon: <Utensils size={24} />,
    title: "Meal Preparation",
    desc: "Nutritious, chef-inspired meals designed for senior dietary needs.",
    href: "/in-home-care/meal-prep",
    image: "/images/services/meal_prep.png"
  },
  {
    icon: <Sparkles size={24} />,
    title: "Extra Help",
    desc: "Assistance with light housekeeping, errands, and specialized tasks.",
    href: "/in-home-care/extra-help",
    image: "/images/services/extra_help.png"
  },
  {
    icon: <Shield size={24} />,
    title: "Respite Care",
    desc: "Giving family caregivers a much-needed break while ensuring continuity of care.",
    href: "/in-home-care/respite-care",
    image: "/images/services/respite_care.png"
  }
];

const ServicesOverview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1 >= services.length - (itemsPerPage - 1) ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? services.length - itemsPerPage : prev - 1));
  };

  const visibleServices = services.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section className={`section section-alt ${styles.servicesSection}`}>
      <div className="container">
        <div className={styles.header}>
          <div className="section-label">OUR SERVICES</div>
          <h2 className={styles.title}>Premium Care Services</h2>
          <p className={styles.subtitle}>
            Comprehensive home health solutions designed with a focus on dignity, professional excellence, and family peace of mind.
          </p>
        </div>

        <div className={styles.sliderWrapper}>
          <button className={`${styles.navBtn} ${styles.prev}`} onClick={prevSlide} aria-label="Previous services">
            <ChevronLeft size={32} />
          </button>

          <div className={styles.sliderWindow}>
            <motion.div 
              className={styles.grid}
              initial={false}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <AnimatePresence mode="popLayout">
                {visibleServices.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Link href={service.href} className={styles.card}>
                      <div className={styles.imageBox}>
                        <img src={service.image} alt={service.title} />
                        <div className={styles.iconTag}>{service.icon}</div>
                      </div>
                      <div className={styles.cardBody}>
                        <h3>{service.title}</h3>
                        <p>{service.desc}</p>
                        <span className={styles.learnMore}>Explore Service →</span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

          <button className={`${styles.navBtn} ${styles.next}`} onClick={nextSlide} aria-label="Next services">
            <ChevronRight size={32} />
          </button>
        </div>

        <div className={styles.footer}>
          <p>Don’t see what you’re looking for? <strong>We offer custom care packages.</strong></p>
          <Button variant="outline" href="/services">View All Services</Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
