import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { BookOpen, FileText, Video, HeartPulse } from "lucide-react";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Caregiving Resources & Guides | Seren Place",
  description: "Comprehensive guides, articles, and resources to help families navigate home care, Alzheimer's support, and senior wellness.",
};

const categories = [
  {
    title: "Dementia & Alzheimer's",
    icon: <HeartPulse className={styles.categoryIcon} />,
    description: "Expert advice on communicating and caring for memory-impaired loved ones."
  },
  {
    title: "Family Caregiving",
    icon: <BookOpen className={styles.categoryIcon} />,
    description: "Guides to avoid caregiver burnout and balance family life."
  },
  {
    title: "Financial Planning",
    icon: <FileText className={styles.categoryIcon} />,
    description: "Understanding Medicare, Medicaid, and long-term care insurance strategies."
  },
  {
    title: "Webinars & Videos",
    icon: <Video className={styles.categoryIcon} />,
    description: "Watch expert interviews and training sessions on senior wellness."
  }
];

const featuredArticles = [
  {
    title: "The 5 Signs It's Time for In-Home Care",
    category: "Family Caregiving",
    readTime: "5 min read",
    excerpt: "Recognizing when a loved one needs help can be difficult. Here are the key indicators that professional support is needed.",
    slug: "signs-its-time-for-home-care",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Understanding Memory Loss: Age vs. Alzheimer's",
    category: "Dementia & Alzheimer's",
    readTime: "7 min read",
    excerpt: "Learn how to distinguish between normal age-related forgetfulness and the early stages of dementia.",
    slug: "understanding-memory-loss",
    image: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "How to Pay for Home Care in 2026",
    category: "Financial Planning",
    readTime: "10 min read",
    excerpt: "A comprehensive breakdown of funding options available to families seeking premium in-home support.",
    slug: "how-to-pay-for-home-care",
    image: "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?auto=format&fit=crop&q=80&w=800"
  }
];

export default function ResourcesPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <h1 className={styles.title}>Caregiving Resource Hub</h1>
          <p className={styles.subtitle}>
            Empowering families with expert knowledge, practical guides, and deep insights into senior health and wellness.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className={styles.categoriesSection}>
        <div className="container">
          <h2 className={styles.sectionHeading}>Browse by Topic</h2>
          <div className={styles.categoriesGrid}>
            {categories.map((cat, idx) => (
              <div key={idx} className={styles.categoryCard}>
                {cat.icon}
                <h3>{cat.title}</h3>
                <p>{cat.description}</p>
                <Link href={`/resources/category/${cat.title.toLowerCase().replace(/ /g, '-')}`} className={styles.viewLink}>
                  View Articles
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className={styles.articlesSection}>
        <div className="container">
          <h2 className={styles.sectionHeading}>Featured Articles</h2>
          <div className={styles.articlesGrid}>
            {featuredArticles.map((article, idx) => (
              <article key={idx} className={styles.articleCard}>
                <div className={styles.imageWrapper}>
                   {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={article.image} alt={article.title} className={styles.articleImage} />
                  <span className={styles.categoryBadge}>{article.category}</span>
                </div>
                <div className={styles.articleContent}>
                  <div className={styles.meta}>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className={styles.articleTitle}>{article.title}</h3>
                  <p className={styles.articleExcerpt}>{article.excerpt}</p>
                  <Link href={`/resources/${article.slug}`} className={styles.readMore}>
                    Read Full Article
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className={styles.newsletterSection}>
        <div className="container">
          <div className={styles.newsletterBox}>
            <h2>Stay Informed</h2>
            <p>Subscribe to our monthly caregiving newsletter for expert tips and resources delivered straight to your inbox.</p>
            <form className={styles.form}>
              <label htmlFor="newsletter-email" className="sr-only">Email Address</label>
              <input 
                type="email" 
                id="newsletter-email"
                placeholder="Enter your email address" 
                className={styles.input}
                required 
              />
              <button type="submit" className={styles.subscribeBtn}>Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
