"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, ArrowRight, User, Heart, Clock } from "lucide-react";
import styles from "./CareAssessmentModal.module.css";
import Button from "./Button";

interface CareAssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const questions = [
  {
    id: "who",
    title: "Who needs care?",
    options: [
      { label: "Myself", icon: <User size={20} /> },
      { label: "My Parent", icon: <Heart size={20} /> },
      { label: "My Spouse", icon: <Heart size={20} /> },
      { label: "Another Family Member", icon: <User size={20} /> },
    ],
  },
  {
    id: "type",
    title: "What primary type of care is needed?",
    options: [
      { label: "Companionship & Daily Errands", icon: <User size={20} /> },
      { label: "Personal Care (Bathing, Dressing)", icon: <Heart size={20} /> },
      { label: "Dementia / Alzheimer's Care", icon: <Heart size={20} /> },
      { label: "24/7 Live-in Care", icon: <Clock size={20} /> },
    ],
  },
  {
    id: "timeline",
    title: "How soon do you need services?",
    options: [
      { label: "Immediately", icon: <Clock size={20} /> },
      { label: "Within 1-2 Weeks", icon: <Clock size={20} /> },
      { label: "Within a Month", icon: <Clock size={20} /> },
      { label: "Just Researching", icon: <User size={20} /> },
    ],
  },
];

export default function CareAssessmentModal({ isOpen, onClose }: CareAssessmentModalProps) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [contactInfo, setContactInfo] = useState({ name: "", phone: "", email: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleOptionSelect = (questionId: string, option: string) => {
    setAnswers({ ...answers, [questionId]: option });
    setTimeout(() => {
      setStep(step + 1);
    }, 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here we would typically send data to a backend API
    console.log("Assessment Data:", { answers, contactInfo });
    setIsSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className={styles.overlay} onClick={onClose}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className={styles.modal}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={24} />
          </button>

          {!isSubmitted ? (
            <>
              <div className={styles.header}>
                <h2 id="modal-title" className={styles.title}>Care Assessment</h2>
                <p className={styles.subtitle}>Help us understand your needs</p>
              </div>

              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  style={{ width: `${((step + 1) / (questions.length + 1)) * 100}%` }}
                />
              </div>

              <div className={styles.questionContainer}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {step < questions.length ? (
                      <div>
                        <h3 className={styles.questionTitle}>{questions[step].title}</h3>
                        <div className={styles.optionsGrid}>
                          {questions[step].options.map((option, idx) => (
                            <button
                              key={idx}
                              className={styles.optionButton}
                              onClick={() => handleOptionSelect(questions[step].id, option.label)}
                            >
                              {option.icon}
                              {option.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit}>
                        <h3 className={styles.questionTitle}>Where should we send your care plan?</h3>
                        
                        <div className={styles.formGroup}>
                          <label htmlFor="name" className={styles.label}>Full Name</label>
                          <input
                            type="text"
                            id="name"
                            required
                            className={styles.input}
                            value={contactInfo.name}
                            onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                          />
                        </div>
                        
                        <div className={styles.formGroup}>
                          <label htmlFor="phone" className={styles.label}>Phone Number</label>
                          <input
                            type="tel"
                            id="phone"
                            required
                            className={styles.input}
                            value={contactInfo.phone}
                            onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                          />
                        </div>

                        <div className={styles.formGroup}>
                          <label htmlFor="email" className={styles.label}>Email Address</label>
                          <input
                            type="email"
                            id="email"
                            required
                            className={styles.input}
                            value={contactInfo.email}
                            onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                          />
                        </div>

                        <div className={styles.actions}>
                          <button type="button" className={styles.backButton} onClick={() => setStep(step - 1)}>
                            Back
                          </button>
                          <button type="submit" className={styles.submitButton}>
                            Get Care Plan <ArrowRight size={16} style={{display: 'inline', marginLeft: 8, verticalAlign: 'middle'}}/>
                          </button>
                        </div>
                      </form>
                    )}
                  </motion.div>
                </AnimatePresence>

                {step < questions.length && step > 0 && (
                  <div className={styles.actions}>
                    <button className={styles.backButton} onClick={() => setStep(step - 1)}>
                      Back
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className={styles.successMessage}
            >
              <CheckCircle size={64} className={styles.successIcon} />
              <h2 className={styles.successTitle}>Assessment Complete!</h2>
              <p className={styles.successText}>
                Thank you for sharing your needs. A Care Coordinator will review your information and reach out shortly to discuss your custom care options.
              </p>
              <Button onClick={onClose} variant="primary">
                Return to Site
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
