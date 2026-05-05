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

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    instagram: `https://www.instagram.com/seren_place.homecare?igsh=ZWszdHdlOGY0bDcw&utm_source=qr`
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    alert("Link copied to clipboard!");
  };

  return (
    <div className={styles.shareButtons}>
      <a 
        href={shareLinks.facebook} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={styles.shareIcon}
        aria-label="Share on Facebook"
      >
        <Facebook size={20} />
      </a>
      <a 
        href={shareLinks.twitter} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={styles.shareIcon}
        aria-label="Share on Twitter"
      >
        <Twitter size={20} />
      </a>
      <a 
        href={shareLinks.linkedin} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={styles.shareIcon}
        aria-label="Share on LinkedIn"
      >
        <Linkedin size={20} />
      </a>
      <a 
        href={shareLinks.instagram} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={styles.shareIcon}
        aria-label="Visit Instagram"
      >
        <Instagram size={20} />
      </a>
      <button 
        onClick={copyToClipboard} 
        className={styles.shareIcon}
        aria-label="Copy Link"
      >
        <LinkIcon size={20} />
      </button>
    </div>
  );
};

export default ShareButtons;
