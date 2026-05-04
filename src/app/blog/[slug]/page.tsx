import React from "react";
import { notFound } from "next/navigation";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import styles from "./BlogPost.module.css";
import { Calendar, User, Tag, ChevronLeft } from "lucide-react";
import Link from "next/link";

const blogData: Record<string, any> = {
  "navigating-home-health-care": {
    title: "Navigating Home Health Care: A Guide for Charlotte Families",
    date: "May 2, 2026",
    category: "Local Guide",
    author: "Seren Clinical Team",
    image: "https://images.unsplash.com/photo-1573497620053-ea5310f94a17?q=80&w=2070&auto=format&fit=crop",
    content: `
      <p>Finding the right care for a loved one in Charlotte can feel overwhelming. With so many options available, how do you know which one is right for your family's unique situation?</p>
      <p>Home health care offers a personalized alternative to assisted living facilities, allowing seniors to remain in the comfort and familiarity of their own homes while receiving professional support.</p>
      <h3>Understanding Your Options in North Carolina</h3>
      <p>In Charlotte, home health services range from medical-grade nursing care to non-medical companionship and daily living assistance. Seren Place specializes in a family-first approach that bridges the gap between these needs.</p>
      <p>When evaluating agencies, consider their licensing, the training of their caregivers, and their specific expertise in areas like dementia or Alzheimer's care.</p>
    `
  },
  "personalized-care-plans": {
    title: "Personalized Care Plans: Why 'One Size' Doesn't Fit All",
    date: "April 28, 2026",
    category: "Quality Care",
    author: "Director of Care",
    image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2070&auto=format&fit=crop",
    content: `
      <p>At Seren Place, we believe that effective care starts with understanding the individual. A generic care plan often misses the subtle nuances that contribute to a senior's emotional and physical well-being.</p>
      <p>Personalized care plans are more than just a list of medical requirements; they are a roadmap for quality of life.</p>
      <h3>The Components of a Custom Plan</h3>
      <ul>
        <li>Clinical Assessment: Understanding physical health needs.</li>
        <li>Personality Matching: Pairing the right caregiver with the right resident.</li>
        <li>Family Goals: Aligning care with the family's expectations and values.</li>
        <li>Dynamic Adjustments: Care plans that evolve as needs change.</li>
      </ul>
    `
  },
  "preventing-falls-at-home": {
    title: "Safety First: How Professional Caregivers Prevent Falls at Home",
    date: "April 22, 2026",
    category: "Safety",
    author: "Safety Coordinator",
    image: "https://images.unsplash.com/photo-1586773860418-d3b3a998055c?q=80&w=2066&auto=format&fit=crop",
    content: `
      <p>Falls are the leading cause of injury among seniors, but most are preventable with the right environmental adjustments and professional oversight.</p>
      <p>A professional caregiver does more than just watch over a loved one; they are trained to identify and mitigate hazards before accidents happen.</p>
      <h3>Safety Strategies for Home Care</h3>
      <p>From ensuring proper lighting to assisting with mobility during high-risk times of the day, professional caregivers provide a layer of protection that gives families peace of mind.</p>
    `
  },
  "transitioning-to-home-care": {
    title: "10 Tips for Transitioning a Loved One to Home Care",
    date: "April 10, 2026",
    category: "Family Advice",
    author: "Family Relations Manager",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43552e?q=80&w=2070&auto=format&fit=crop",
    content: `
      <p>The transition to receiving professional help at home can be an emotional journey for both the senior and their family. Preparation and empathy are key to a successful start.</p>
      <p>Here are 10 tips to make the transition smoother, including open communication, setting clear expectations, and involving the senior in the decision-making process.</p>
    `
  },
  "social-interaction-for-seniors": {
    title: "The Importance of Social Interaction for Seniors",
    date: "April 5, 2026",
    category: "Emotional Well-being",
    author: "Wellness Coach",
    image: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?q=80&w=2070&auto=format&fit=crop",
    content: `
      <p>Isolation is a significant health risk for seniors, impacting everything from cognitive function to cardiovascular health. Meaningful social interaction is a cornerstone of our care philosophy.</p>
      <p>Our companionship services focus on building real relationships, engaging in hobbies, and ensuring that our residents feel seen, heard, and valued.</p>
    `
  },
  "early-signs-of-dementia": {
    title: "Understanding Early Signs of Dementia",
    date: "March 28, 2026",
    category: "Clinical Insights",
    author: "Clinical Director",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2043&auto=format&fit=crop",
    content: `
      <p>Recognizing the early signs of dementia can lead to better outcomes and more effective care planning. While every journey is different, common indicators include memory loss that disrupts daily life and challenges in planning or solving problems.</p>
      <p>Early intervention allows families to establish a support system that focuses on safety and quality of life from the very beginning.</p>
    `
  },
  "future-of-aging-2026": {
    title: "The Future of Aging: Trends in In-Home Support for 2026",
    date: "March 15, 2026",
    category: "Industry Trends",
    author: "CEO, Seren Place",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2070&auto=format&fit=crop",
    content: `
      <p>The landscape of home healthcare is evolving rapidly, driven by technology and a growing preference for aging in place. In 2026, we are seeing a shift toward more holistic, personalized support systems.</p>
      <p>From AI-assisted monitoring to more specialized memory care training, the future of aging at home is brighter and safer than ever before.</p>
    `
  },
  "personalized-memory-care-dementia": {
    title: "Personalized Memory Care: A Lifeline for Families with Dementia",
    date: "May 4, 2026",
    category: "Memory Care",
    author: "Memory Care Specialist",
    image: "/images/blog/memory-care.png",
    content: `
      <p>Dementia doesn't just affect the individual; it impacts the entire family. At Seren Place, our memory care approach is rooted in compassion, patience, and personalized engagement.</p>
      <h3>Creating a Safe and Engaging Environment</h3>
      <p>Our caregivers are trained in specialized techniques to manage the unique challenges of dementia, focusing on maintaining dignity and quality of life. We believe in "meeting the resident where they are," tailoring activities to their current cognitive abilities and personal history.</p>
      <p>From sensory stimulation to structured daily routines, we provide a supportive environment that reduces anxiety and promotes a sense of security.</p>
    `
  },
  "nutrition-for-seniors-at-home": {
    title: "Nutrition for Seniors: Simple Steps to Better Health at Home",
    date: "May 3, 2026",
    category: "Wellness",
    author: "Nutrition Coordinator",
    image: "/images/blog/nutrition-seniors.png",
    content: `
      <p>As we age, our nutritional needs change. Proper hydration and a balanced diet are critical for maintaining energy levels, supporting the immune system, and managing chronic conditions.</p>
      <h3>Practical Tips for Healthy Eating</h3>
      <ul>
        <li>Focus on Nutrient-Dense Foods: Prioritize vegetables, fruits, and lean proteins.</li>
        <li>Hydration is Key: Encourage regular water intake throughout the day.</li>
        <li>Meal Planning: Simplify healthy eating with organized meal prep and easy-to-digest options.</li>
        <li>Social Dining: Whenever possible, make mealtime a social and enjoyable experience.</li>
      </ul>
      <p>Our caregivers assist with meal preparation, ensuring that seniors receive delicious, home-cooked meals that meet their dietary requirements.</p>
    `
  },
  "combating-senior-loneliness-companionship": {
    title: "Combating Senior Loneliness: The Power of Professional Companionship",
    date: "May 2, 2026",
    category: "Emotional Health",
    author: "Wellness Coach",
    image: "/images/blog/companionship.png",
    content: `
      <p>Loneliness is often called the "silent epidemic" among seniors. It can lead to depression, cognitive decline, and physical health issues. Professional companionship offers a vital bridge to social connection.</p>
      <h3>More Than Just a Visit</h3>
      <p>Companionship at Seren Place isn't just about "watching" a loved one; it's about building meaningful relationships. Whether it's playing a favorite board game, sharing stories, or accompanying a senior on a walk, our caregivers provide the emotional support that makes every day brighter.</p>
      <p>By fostering genuine human connection, we help our residents feel less isolated and more engaged with the world around them.</p>
    `
  }
};

export async function generateStaticParams() {
  return Object.keys(blogData).map((slug) => ({
    slug: slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogData[slug];

  if (!post) {
    notFound();
  }

  return (
    <div className={styles.blogPostPage}>
      <header className={styles.hero}>
        <div className="container">
          <Link href="/blog" className={styles.backLink}>
            <ChevronLeft size={20} /> Back to Blog
          </Link>
          <div className={styles.meta}>
            <span className={styles.category}>{post.category}</span>
          </div>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.postMeta}>
            <div className={styles.metaItem}><Calendar size={18} /> <span>{post.date}</span></div>
            <div className={styles.metaItem}><User size={18} /> <span>{post.author}</span></div>
          </div>
        </div>
      </header>

      <section className="section">
        <div className={`container ${styles.grid}`}>
          <article className={styles.article}>
            <div className={styles.featuredImage}>
              <img src={post.image} alt={post.title} />
            </div>
            <div 
              className={styles.postContent}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          <aside className={styles.sidebar}>
            <div className={styles.sidebarBox}>
              <h3>Need Personalized Advice?</h3>
              <p>Speak with a Care Coordinator today to discuss your family's unique needs.</p>
              <Button variant="primary" href="/contact" className={styles.sidebarBtn}>
                Book Free Consultation
              </Button>
            </div>

            <div className={styles.sidebarBox}>
              <h3>Share this Article</h3>
              <div className={styles.shareIcons}>
                {/* Simplified share icons */}
                <div className={styles.shareIcon}>FB</div>
                <div className={styles.shareIcon}>TW</div>
                <div className={styles.shareIcon}>LI</div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
