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
    image: "/images/blog/navigating-home-care.png"
  },
  {
    slug: "personalized-care-plans",
    title: "Personalized Care Plans: Why 'One Size' Doesn't Fit All",
    date: "April 28, 2026",
    category: "Quality Care",
    image: "/images/blog/personalized-care.png"
  },
  {
    slug: "preventing-falls-at-home",
    title: "Safety First: How Professional Caregivers Prevent Falls at Home",
    date: "April 22, 2026",
    category: "Safety",
    image: "/images/blog/preventing-falls.png"
  },
  {
    slug: "transitioning-to-home-care",
    title: "10 Tips for Transitioning a Loved One to Home Care",
    date: "April 10, 2026",
    category: "Family Advice",
    image: "/images/blog/transitioning-home-care.png"
  },
  {
    slug: "social-interaction-for-seniors",
    title: "The Importance of Social Interaction for Seniors",
    date: "April 5, 2026",
    category: "Emotional Well-being",
    image: "/images/blog/social-interaction.png"
  },
  {
    slug: "early-signs-of-dementia",
    title: "Understanding Early Signs of Dementia",
    date: "March 28, 2026",
    category: "Clinical Insights",
    image: "/images/blog/early-signs-dementia.png"
  },
  {
    slug: "future-of-aging-2026",
    title: "The Future of Aging: Trends in In-Home Support for 2026",
    date: "March 15, 2026",
    category: "Industry Trends",
    image: "/images/blog/future-aging.png"
  },
  {
    slug: "personalized-memory-care-dementia",
    title: "Personalized Memory Care: A Lifeline for Families with Dementia",
    date: "May 4, 2026",
    category: "Memory Care",
    image: "/images/blog/memory-care.png"
  },
  {
    slug: "nutrition-for-seniors-at-home",
    title: "Nutrition for Seniors: Simple Steps to Better Health at Home",
    date: "May 3, 2026",
    category: "Wellness",
    image: "/images/blog/nutrition-seniors.png"
  },
  {
    slug: "combating-senior-loneliness-companionship",
    title: "Combating Senior Loneliness: The Power of Professional Companionship",
    date: "May 2, 2026",
    category: "Emotional Health",
    image: "/images/blog/companionship.png"
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
