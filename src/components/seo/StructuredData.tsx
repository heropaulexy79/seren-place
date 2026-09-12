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
      "streetAddress": "",
      "addressLocality": "Charlotte",
      "addressRegion": "NC",
      "postalCode": "28273",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1 910-710-7977",
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
    "@type": ["LocalBusiness", "HomeHealthService"],
    "name": "Seren Place Homecare",
    "image": "https://serenplace.com/og-image.png",
    "telephone": "+1 910-710-7977",
    "email": "info@serenplace.com",
    "url": "https://serenplace.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Charlotte",
      "addressRegion": "NC",
      "postalCode": "28273",
      "addressCountry": "US"
    },
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Charlotte Metro Area, NC"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Union County, NC"
      },
      {
        "@type": "City",
        "name": "Charlotte"
      },
      {
        "@type": "City",
        "name": "Monroe"
      },
      {
        "@type": "City",
        "name": "Waxhaw"
      },
      {
        "@type": "City",
        "name": "Indian Trail"
      },
      {
        "@type": "City",
        "name": "Weddington"
      },
      {
        "@type": "City",
        "name": "Matthews"
      },
      {
        "@type": "City",
        "name": "Stallings"
      }
    ],
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
