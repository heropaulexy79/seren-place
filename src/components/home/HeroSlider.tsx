"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Button from "../ui/Button";
import CareAssessmentModal from "../ui/CareAssessmentModal";
import styles from "./HeroSlider.module.css";

const slides = [
  {
    image: "/images/hero/hero_compassion.png",
    title: "Compassionate Care for Your Loved Ones",
    subtitle: "We provide the kind of heartfelt support that treats your family like our own.",
    cta: "Take Care Assessment",
    isAssessment: true
  },
  {
    image: "/images/hero/hero_joy.png",
    title: "Bringing Joy and Independence Home",
    subtitle: "Professional care that empowers seniors to live fulfilling, vibrant lives in the comfort of home.",
    cta: "Our Services",
    link: "/services"
  },
  {
    image: "/images/hero/hero_dementia_care_v2.png",
    title: "Specialized Dementia & Alzheimer's Care",
    subtitle: "Trained professionals focused on safety, engagement, and emotional well-being.",
    cta: "Learn More",
    link: "/services/dementia-care"
  },
  {
    image: "/images/hero/hero_peace_of_mind.png",
    title: "Peace of Mind for the Entire Family",
    subtitle: "Relieving the burden of caregiving with reliable, licensed, and insured support.",
    cta: "Join Our Team",
    link: "/careers"
  }
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);

  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  useEffect(() => {
    // Preload all hero images
    slides.forEach((slide) => {
      const img = new (window as any).Image();
      img.src = slide.image;
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 6000);
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <section className={styles.slider} aria-label="Hero Spotlight">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className={styles.slide}
        >
          <div className={styles.imageWrapper}>
            <Image 
              src={slides[current].image} 
              alt={slides[current].title} 
              fill
              priority={current === 0}
              quality={80}
              className={styles.backgroundImage}
              style={{ objectFit: "cover" }}
            />
            <div className={styles.overlay} />
          </div>

          <div className={`container ${styles.content}`}>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className={styles.textColumn}
            >
              <h1 className={styles.title}>{slides[current].title}</h1>
              <p className={styles.subtitle}>{slides[current].subtitle}</p>
              <div className={styles.actions}>
                {slides[current].isAssessment ? (
                  <Button variant="primary" className={styles.heroBtn} onClick={() => setIsAssessmentOpen(true)}>
                    {slides[current].cta}
                  </Button>
                ) : (
                  <Button variant="primary" className={styles.heroBtn} href={slides[current].link}>
                    {slides[current].cta}
                  </Button>
                )}
                <Button variant="outlineWhite" className={styles.heroBtn} href="/why-choose-us">
                  Why Choose Us
                </Button>
              </div>

            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div className={styles.controls}>
        <button onClick={prevSlide} className={styles.controlBtn} aria-label="Previous slide">
          <ChevronLeft size={24} />
        </button>
        <div className={styles.dots}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`${styles.dot} ${i === current ? styles.activeDot : ""}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <button onClick={nextSlide} className={styles.controlBtn} aria-label="Next slide">
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Assessment Modal */}
      <CareAssessmentModal 
        isOpen={isAssessmentOpen} 
        onClose={() => setIsAssessmentOpen(false)} 
      />
    </section>
  );
};

export default HeroSlider;
