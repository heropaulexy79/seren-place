import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";
import styles from "./BlogPage.module.css";

const posts = [
  {
    title: "10 Tips for Transitioning a Loved One to Home Care",
    date: "April 10, 2026",
    category: "Family Advice",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43552e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "The Importance of Social Interaction for Seniors",
    date: "April 5, 2026",
    category: "Emotional Well-being",
    image: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Understanding Early Signs of Dementia",
    date: "March 28, 2026",
    category: "Clinical Insights",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2043&auto=format&fit=crop"
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
              <Link href="#" key={index} className={styles.card}>
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
