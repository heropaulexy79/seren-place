"use client";

import React from "react";
import Link from "next/link";
import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "secondary" | "outlineWhite" | "accent" | "solidWhite";
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  href?: string;
  ariaLabel?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  onClick,
  type = "button",
  className = "",
  href,
  ariaLabel,
  disabled = false,
}) => {
  const buttonClass = `${styles.btn} ${styles[variant]} ${className}`;

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');
    
    if (isExternal) {
      return (
        <a 
          href={href} 
          className={buttonClass} 
          aria-label={ariaLabel}
          target={href.startsWith('http') ? "_blank" : undefined}
          rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={buttonClass} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={buttonClass} 
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
