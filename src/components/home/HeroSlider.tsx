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
    image: "file:///C:/Users/HP/.gemini/antigravity/brain/0bc5bbd9-4e43-4a90-8aaa-238501469490/hero_slide_compassion_1776264463664.png",
    title: "Compassionate Care for Your Loved Ones",
    subtitle: "We provide the kind of heartfelt support that treats your family like our own.",
    cta: "Take Care Assessment",
    isAssessment: true
  },
  {
    image: "file:///C:/Users/HP/.gemini/antigravity/brain/0bc5bbd9-4e43-4a90-8aaa-238501469490/hero_slide_joy_1776264524902.png",
    title: "Bringing Joy and Independence Home",
    subtitle: "Professional care that empowers seniors to live fulfilling, vibrant lives in the comfort of home.",
    cta: "Our Services",
    link: "/services"
  },
  {
    image: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?q=80&w=2070&auto=format&fit=crop",
    title: "Specialized Dementia & Alzheimer's Care",
    subtitle: "Trained professionals focused on safety, engagement, and emotional well-being.",
    cta: "Learn More",
    link: "/services/dementia-care"
  },
  {
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2043&auto=format&fit=crop",
    title: "Peace of Mind for the Entire Family",
    subtitle: "Relieving the burden of caregiving with reliable, licensed, and insured support.",
    cta: "Join Our Team",
    link: "/careers"
  }
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);

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
             {/* Using standard img for local path visibility in development if Image fails with file:// */}
            <img 
              src={slides[current].image} 
              alt={slides[current].title} 
              className={styles.backgroundImage}
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
                  <Button variant="accent" onClick={() => setIsAssessmentOpen(true)}>
                    {slides[current].cta}
                  </Button>
                ) : (
                  <Button variant="accent" href={slides[current].link}>
                    {slides[current].cta}
                  </Button>
                )}
                <Button variant="outlineWhite" href="/about">
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
