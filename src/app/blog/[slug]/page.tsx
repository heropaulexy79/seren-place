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
    image: "/images/blog/navigating-home-care.png",
    content: `
      <p>Finding the right care for a loved one in Charlotte can feel overwhelming. With so many options available, how do you know which one is right for your family's unique situation? Home health care offers a personalized alternative to assisted living facilities, allowing seniors to remain in the comfort and familiarity of their own homes while receiving professional support.</p>
      
      <h3>Understanding Your Options in North Carolina</h3>
      <p>In Charlotte, home health services range from medical-grade nursing care to non-medical companionship and daily living assistance. Seren Place specializes in a family-first approach that bridges the gap between these needs. When evaluating agencies, consider their licensing, the training of their caregivers, and their specific expertise in areas like dementia or Alzheimer's care.</p>
      
      <h3>The Benefits of Aging in Place</h3>
      <p>Research consistently shows that seniors who "age in place" experience better mental health and overall satisfaction. Staying in a familiar environment reduces the stress and confusion often associated with moving to a facility. It also allows for more consistent family involvement and a truly personalized care schedule.</p>
      
      <h3>What to Look for in a Charlotte Care Agency</h3>
      <p>When searching for a partner in care, look for transparency in communication, a rigorous caregiver screening process, and a commitment to ongoing education. At Seren Place, we pride ourselves on our deep roots in the Charlotte community and our dedication to excellence in every visit.</p>
    `
  },
  "personalized-care-plans": {
    title: "Personalized Care Plans: Why 'One Size' Doesn't Fit All",
    date: "April 28, 2026",
    category: "Quality Care",
    author: "Director of Care",
    image: "/images/blog/personalized-care.png",
    content: `
      <p>At Seren Place, we believe that effective care starts with understanding the individual. A generic care plan often misses the subtle nuances that contribute to a senior's emotional and physical well-being. Personalized care plans are more than just a list of medical requirements; they are a roadmap for quality of life.</p>
      
      <h3>The Components of a Custom Plan</h3>
      <ul>
        <li><strong>Clinical Assessment:</strong> A thorough understanding of physical health needs and medication management.</li>
        <li><strong>Personality Matching:</strong> Pairing the right caregiver with the right resident based on shared interests and temperaments.</li>
        <li><strong>Family Goals:</strong> Aligning care with the family's expectations, values, and long-term vision.</li>
        <li><strong>Dynamic Adjustments:</strong> Care plans that evolve as the resident's needs change over time.</li>
      </ul>
      
      <h3>How Personalization Improves Outcomes</h3>
      <p>By tailoring activities and routines to the specific preferences of the resident, we see higher levels of engagement and faster recovery times. Whether it's continuing a lifelong hobby or maintaining a specific dietary preference, these "small" details make a world of difference in the daily life of a senior.</p>
    `
  },
  "preventing-falls-at-home": {
    title: "Safety First: How Professional Caregivers Prevent Falls at Home",
    date: "April 22, 2026",
    category: "Safety",
    author: "Safety Coordinator",
    image: "/images/blog/preventing-falls.png",
    content: `
      <p>Falls are the leading cause of injury among seniors, but most are preventable with the right environmental adjustments and professional oversight. A professional caregiver does more than just watch over a loved one; they are trained to identify and mitigate hazards before accidents happen.</p>
      
      <h3>Common Home Hazards to Address</h3>
      <p>Environmental safety starts with a thorough walk-through of the home. We look for loose rugs, inadequate lighting, and the lack of handrails in high-risk areas like bathrooms and stairways. Simple modifications can significantly reduce the risk of a life-altering fall.</p>
      
      <h3>Active Mobility Support</h3>
      <p>Professional caregivers provide hands-on assistance during transfers—such as getting out of bed or a chair—and help seniors navigate their environment safely. We also encourage gentle exercises designed to improve balance and core strength, further decreasing fall risks.</p>
      
      <h3>Peace of Mind for Families</h3>
      <p>Knowing that a trained professional is on-site to ensure safety gives families the freedom to focus on quality time rather than constant worry. At Seren Place, safety is our top priority, and we leave no stone unturned in protecting our residents.</p>
    `
  },
  "transitioning-to-home-care": {
    title: "10 Tips for Transitioning a Loved One to Home Care",
    date: "April 10, 2026",
    category: "Family Advice",
    author: "Family Relations Manager",
    image: "/images/blog/transitioning-home-care.png",
    content: `
      <p>The transition to receiving professional help at home can be an emotional journey for both the senior and their family. Preparation and empathy are key to a successful start. Here are our top strategies for making the transition as smooth as possible.</p>
      
      <h3>1. Open and Honest Communication</h3>
      <p>Involve your loved one in the conversation early. Discuss the benefits of home care as a way to maintain independence rather than a loss of it. Listen to their concerns and validate their feelings throughout the process.</p>
      
      <h3>2. Start Small</h3>
      <p>If possible, begin with a few hours of companionship a week before moving to a more intensive care schedule. This allows the senior to build a relationship with their caregiver at a comfortable pace.</p>
      
      <h3>3. Focus on Compatibility</h3>
      <p>Request an introductory meeting with the caregiver to ensure a good personality match. At Seren Place, we take great care in matching our staff with residents based on shared values and interests.</p>
      
      <h3>4. Set Clear Expectations</h3>
      <p>Define the roles and responsibilities of the caregiver clearly from day one. This prevents misunderstandings and ensures that all of your loved one's needs are being met consistently.</p>
    `
  },
  "social-interaction-for-seniors": {
    title: "The Importance of Social Interaction for Seniors",
    date: "April 5, 2026",
    category: "Emotional Well-being",
    author: "Wellness Coach",
    image: "/images/blog/social-interaction.png",
    content: `
      <p>Isolation is a significant health risk for seniors, impacting everything from cognitive function to cardiovascular health. Meaningful social interaction is a cornerstone of our care philosophy at Seren Place.</p>
      
      <h3>Building Real Relationships</h3>
      <p>Our companionship services focus on more than just "supervision." We aim to build real relationships based on mutual respect and shared experiences. Whether it's discussing the news, sharing stories, or engaging in a hobby together, these interactions keep the mind sharp and the spirit high.</p>
      
      <h3>The Impact on Cognitive Health</h3>
      <p>Socially active seniors show a slower rate of cognitive decline compared to those who are isolated. Interaction stimulates the brain, encourages problem-solving, and helps maintain verbal communication skills.</p>
      
      <h3>Community Engagement</h3>
      <p>We also help our residents stay connected to their broader community by assisting with visits to local senior centers, attending religious services, or simply taking walks in the park. At Seren Place, we believe that staying connected is staying alive.</p>
    `
  },
  "early-signs-of-dementia": {
    title: "Understanding Early Signs of Dementia",
    date: "March 28, 2026",
    category: "Clinical Insights",
    author: "Clinical Director",
    image: "/images/blog/early-signs-dementia.png",
    content: `
      <p>Recognizing the early signs of dementia can lead to better outcomes and more effective care planning. While every journey is different, common indicators include memory loss that disrupts daily life and challenges in planning or solving problems.</p>
      
      <h3>Common Early Indicators</h3>
      <ul>
        <li><strong>Memory Loss:</strong> Forgetting recently learned information or important dates.</li>
        <li><strong>Difficulty with Familiar Tasks:</strong> Struggling to follow a recipe or drive to a familiar location.</li>
        <li><strong>Confusion with Time or Place:</strong> Losing track of dates or forgetting where they are and how they got there.</li>
        <li><strong>Changes in Mood or Personality:</strong> Becoming unusually confused, suspicious, depressed, or anxious.</li>
      </ul>
      
      <h3>The Value of Early Intervention</h3>
      <p>Early intervention allows families to establish a support system that focuses on safety and quality of life from the very beginning. It also provides the opportunity for the senior to be involved in decisions about their future care while they are still able to do so.</p>
    `
  },
  "future-of-aging-2026": {
    title: "The Future of Aging: Trends in In-Home Support for 2026",
    date: "March 15, 2026",
    category: "Industry Trends",
    author: "CEO, Seren Place",
    image: "/images/blog/future-aging.png",
    content: `
      <p>The landscape of home healthcare is evolving rapidly, driven by technology and a growing preference for aging in place. In 2026, we are seeing a shift toward more holistic, personalized support systems.</p>
      
      <h3>Technology Integration</h3>
      <p>From smart home monitoring systems that can detect falls to AI-driven health tracking, technology is making home care safer and more efficient. We utilize these tools to provide real-time updates to families and improve the precision of our care delivery.</p>
      
      <h3>Specialized Memory Care</h3>
      <p>As the population ages, the demand for specialized dementia and Alzheimer's care is growing. We are seeing a move toward more "resident-centered" approaches that prioritize emotional well-being and cognitive stimulation over mere physical maintenance.</p>
      
      <h3>The Rise of "Care-as-a-Service"</h3>
      <p>Families are looking for more flexible, scalable care options. Seren Place is at the forefront of this trend, offering everything from short-term respite care to 24/7 intensive support, all tailored to the evolving needs of the modern family.</p>
    `
  },
  "personalized-memory-care-dementia": {
    title: "Personalized Memory Care: A Lifeline for Families with Dementia",
    date: "May 4, 2026",
    category: "Memory Care",
    author: "Memory Care Specialist",
    image: "/images/blog/memory-care.png",
    content: `
      <p>Dementia and Alzheimer's disease don't just affect the individual; they impact the entire family dynamic. At Seren Place, our memory care approach is rooted in compassion, patience, and a deep understanding of neurological health. We believe that a diagnosis doesn't mean the end of a meaningful life, but rather the beginning of a different kind of support journey.</p>
      
      <h3>The Importance of a Structured Routine</h3>
      <p>For seniors living with cognitive decline, the world can often feel unpredictable and overwhelming. A consistent, structured daily routine is one of the most effective ways to reduce anxiety and prevent "sundowning" or agitation. Our caregivers focus on creating a predictable flow to the day, ensuring that transitions between activities are smooth and stress-free.</p>
      
      <h3>Engaging the Senses</h3>
      <p>Memory is often tied closely to our senses. We incorporate sensory-based activities into our care plans—such as listening to favorite music from the resident's youth, engaging in gentle aromatherapy, or working on tactile crafts. These activities help maintain cognitive pathways and provide moments of genuine joy and connection.</p>
      
      <h3>Supporting the Caregiver: You Are Not Alone</h3>
      <p>One of the most overlooked aspects of dementia care is the well-being of the primary family caregiver. Burnout is a real risk. Seren Place provides not only care for the resident but also peace of mind for the family. We offer respite care and educational resources to help families understand the progression of the disease and how to communicate effectively with their loved ones.</p>
      
      <h3>Why Professional Help Matters</h3>
      <p>Managing the behavioral changes associated with dementia requires specialized training. Our team is equipped with the latest techniques in de-escalation and cognitive support, ensuring that your loved one remains safe, respected, and valued in the comfort of their own home.</p>
    `
  },
  "nutrition-for-seniors-at-home": {
    title: "Nutrition for Seniors: Simple Steps to Better Health at Home",
    date: "May 3, 2026",
    category: "Wellness",
    author: "Nutrition Coordinator",
    image: "/images/blog/nutrition-seniors.png",
    content: `
      <p>As we age, our body's nutritional requirements undergo significant changes. Metabolism slows down, and the ability to absorb certain vitamins and minerals may decrease. At Seren Place, we view nutrition as a cornerstone of preventive health and overall vitality.</p>
      
      <h3>Hydration: The Foundation of Health</h3>
      <p>Seniors are at a higher risk for dehydration because the sensation of thirst often diminishes with age. Dehydration can lead to confusion, urinary tract infections, and increased fall risks. We implement hydration tracking and encourage the intake of water-rich foods like cucumbers, melons, and broths to keep our residents hydrated throughout the day.</p>
      
      <h3>Overcoming Taste Changes and Appetite Loss</h3>
      <p>Many seniors experience a decrease in appetite or changes in taste due to medications or health conditions. We combat this by focusing on nutrient-dense, flavorful meals. Using herbs and spices instead of excessive salt can make food more appealing without compromising cardiovascular health.</p>
      
      <h3>Sample Nutrient-Rich Foods for Seniors</h3>
      <ul>
        <li><strong>Leafy Greens:</strong> Packed with Vitamin K and folate for cognitive health.</li>
        <li><strong>Lean Proteins:</strong> Essential for maintaining muscle mass and preventing frailty.</li>
        <li><strong>Omega-3 Fatty Acids:</strong> Found in salmon and walnuts, these support heart and brain health.</li>
        <li><strong>Whole Grains:</strong> Provide necessary fiber for digestive regularity.</li>
      </ul>
      
      <h3>The Role of Companionship at Mealtime</h3>
      <p>Eating is a social activity. When seniors eat alone, they are more likely to skip meals or choose less healthy options. Our caregivers don't just prepare the meals; they provide companionship, turning mealtime into an enjoyable social event that encourages better eating habits and emotional well-being.</p>
    `
  },
  "combating-senior-loneliness-companionship": {
    title: "Combating Senior Loneliness: The Power of Professional Companionship",
    date: "May 2, 2026",
    category: "Emotional Health",
    author: "Wellness Coach",
    image: "/images/blog/companionship.png",
    content: `
      <p>Loneliness is often described as the "silent epidemic" among the elderly population. Recent studies suggest that prolonged isolation can be as damaging to health as smoking 15 cigarettes a day. At Seren Place, we understand that mental and emotional health are just as important as physical well-being.</p>
      
      <h3>The Health Risks of Social Isolation</h3>
      <p>Social isolation has been linked to a 50% increased risk of dementia, a 29% increased risk of heart disease, and a 32% increased risk of stroke. By providing consistent social interaction, we help mitigate these risks and promote a more vibrant, engaged lifestyle for our residents.</p>
      
      <h3>Beyond Just Talking: Shared Activities</h3>
      <p>Our companionship services go beyond simple conversation. We engage our residents in activities they love—whether it's gardening, solving puzzles, reviewing old photo albums, or going for gentle walks in the neighborhood. These shared experiences help maintain cognitive function and provide a sense of purpose and joy.</p>
      
      <h3>Technology as a Bridge to Family</h3>
      <p>In today's digital world, technology can be a powerful tool to fight loneliness. Our caregivers assist seniors in using tablets or smartphones to video call their grandchildren, browse family photos, or listen to their favorite podcasts. We bridge the digital gap, ensuring that our residents stay connected to their loved ones regardless of distance.</p>
      
      <h3>Building Long-Term Trust</h3>
      <p>The most effective companionship is built on a foundation of trust and consistency. We pride ourselves on matching our residents with caregivers who share similar interests and temperaments, fostering genuine friendships that enrich the lives of both the senior and the caregiver. At Seren Place, you're not just a client; you're part of our family.</p>
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
