import React from 'react';

interface StructuredDataProps {
  dynamicSchema?: Record<string, any> | Record<string, any>[];
}

const StructuredData = ({ dynamicSchema }: StructuredDataProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Seren Place",
    "alternateName": "Seren Place Home Healthcare",
    "url": "https://serenplace.com",
    "logo": "https://serenplace.com/logo.png",
    "description": "Premium, compassionate, and family-centered home care specializing in adult care, dementia care, and companionship.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Wellness Way, Suite 100",
      "addressLocality": "City Heights",
      "addressRegion": "ST",
      "postalCode": "12345",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-SERENITY",
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://facebook.com/serenplace",
      "https://twitter.com/serenplace",
      "https://instagram.com/serenplace",
      "https://linkedin.com/company/serenplace"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Seren Place",
    "image": "https://serenplace.com/og-image.png",
    "telePhone": "+1-800-SERENITY",
    "email": "care@serenplace.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Wellness Way, Suite 100",
      "addressLocality": "City Heights",
      "addressRegion": "ST",
      "postalCode": "12345",
      "addressCountry": "US"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {dynamicSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dynamicSchema) }}
        />
      )}
    </>
  );
};

export default StructuredData;
