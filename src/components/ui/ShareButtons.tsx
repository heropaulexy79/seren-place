"use client";

import React from "react";
import { Facebook, Twitter, Linkedin, Instagram, Link as LinkIcon } from "lucide-react";
import styles from "./ShareButtons.module.css";

interface ShareButtonsProps {
  title: string;
  slug: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ title, slug }) => {
  const shareUrl = typeof window !== "undefined" ? window.location.href : `https://serenplace.com/blog/${slug}`;

  const handleShare = async (platform: string) => {
    const shareData = {
      title: title,
      text: `Check out this article: ${title}`,
      url: shareUrl,
    };

    // Use Web Share API if available (especially good for Instagram on mobile)
    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch (err) {
        console.log("Error sharing:", err);
      }
    }

    // Fallback links for desktop
    let url = "";
    switch (platform) {
      case "facebook":
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case "twitter":
        url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`;
        break;
      case "linkedin":
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        break;
      case "instagram":
        // Instagram doesn't have a direct share URL, so we fallback to copy link
        copyToClipboard();
        return;
      case "copy":
        copyToClipboard();
        return;
    }

    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    alert("Link copied! You can now paste and share this article on Instagram.");
  };

  return (
    <div className={styles.shareButtons}>
      <button 
        onClick={() => handleShare("facebook")} 
        className={styles.shareIcon}
        aria-label="Share on Facebook"
      >
        <Facebook size={20} />
      </button>
      <button 
        onClick={() => handleShare("twitter")} 
        className={styles.shareIcon}
        aria-label="Share on Twitter"
      >
        <Twitter size={20} />
      </button>
      <button 
        onClick={() => handleShare("linkedin")} 
        className={styles.shareIcon}
        aria-label="Share on LinkedIn"
      >
        <Linkedin size={20} />
      </button>
      <button 
        onClick={() => handleShare("instagram")} 
        className={styles.shareIcon}
        aria-label="Share on Instagram"
      >
        <Instagram size={20} />
      </button>
      <button 
        onClick={() => handleShare("copy")} 
        className={styles.shareIcon}
        aria-label="Copy Link"
      >
        <LinkIcon size={20} />
      </button>
    </div>
  );
};

export default ShareButtons;
