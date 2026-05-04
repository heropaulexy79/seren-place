import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";
import styles from "./BlogPage.module.css";

const posts = [
  {
    slug: "navigating-home-health-care",
    title: "Navigating Home Health Care: A Guide for Charlotte Families",
    date: "May 2, 2026",
    category: "Local Guide",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2070&auto=format&fit=crop" // Family bonding
  },
  {
    slug: "personalized-care-plans",
    title: "Personalized Care Plans: Why 'One Size' Doesn't Fit All",
    date: "April 28, 2026",
    category: "Quality Care",
    image: "https://images.unsplash.com/photo-1576091160550-2173dad99988?q=80&w=2070&auto=format&fit=crop" // Caregiver and senior talking
  },
  {
    slug: "preventing-falls-at-home",
    title: "Safety First: How Professional Caregivers Prevent Falls at Home",
    date: "April 22, 2026",
    category: "Safety",
    image: "https://images.unsplash.com/photo-1581578731548-c64695ce6958?q=80&w=2070&auto=format&fit=crop" // Caregiver assisting mobility
  },
  {
    slug: "transitioning-to-home-care",
    title: "10 Tips for Transitioning a Loved One to Home Care",
    date: "April 10, 2026",
    category: "Family Advice",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop" // Warm greeting
  },
  {
    slug: "social-interaction-for-seniors",
    title: "The Importance of Social Interaction for Seniors",
    date: "April 5, 2026",
    category: "Emotional Well-being",
    image: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?q=80&w=2070&auto=format&fit=crop" // Seniors laughing
  },
  {
    slug: "early-signs-of-dementia",
    title: "Understanding Early Signs of Dementia",
    date: "March 28, 2026",
    category: "Clinical Insights",
    image: "https://images.unsplash.com/photo-1501770118606-b1d640529346?q=80&w=2043&auto=format&fit=crop" // Reflective senior
  },
  {
    slug: "future-of-aging-2026",
    title: "The Future of Aging: Trends in In-Home Support for 2026",
    date: "March 15, 2026",
    category: "Industry Trends",
    image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2070&auto=format&fit=crop" // Senior with technology
  }
];

export default function BlogPage() {
  return (
    <div className={styles.blogPage}>
      <section className={styles.hero}>
        <div className="container">
          <SectionHeader 
            title="Care Education & Insights" 
            subtitle="Resources, tips, and professional advice to help your family navigate the journey of aging at home."
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {posts.map((post, index) => (
              <Link href={`/blog/${post.slug}`} key={index} className={styles.card}>
                <div className={styles.imageCol}>
                  <img src={post.image} alt={post.title} className={styles.postImage} />
                  <span className={styles.category}>{post.category}</span>
                </div>
                <div className={styles.content}>
                  <span className={styles.date}>{post.date}</span>
                  <h3>{post.title}</h3>
                  <span className={styles.readMore}>Read Article →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
