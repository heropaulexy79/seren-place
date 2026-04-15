import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { MapPin, Phone, Mail } from "lucide-react";
import styles from "./LocationsPage.module.css";

const regions = [
  {
    name: "Downtown & City Heights",
    address: "123 Wellness Way, Suite 100",
    phone: "(800) SEREN-01",
    email: "city@serenplace.com"
  },
  {
    name: "Westside Shores",
    address: "456 Coastal Blvd, Level 2",
    phone: "(800) SEREN-02",
    email: "westside@serenplace.com"
  },
  {
    name: "Valley Gardens",
    address: "789 Blossom Lane, Office B",
    phone: "(800) SEREN-03",
    email: "valley@serenplace.com"
  }
];

export default function LocationsPage() {
  return (
    <div className={styles.locationsPage}>
      <section className={styles.hero}>
        <div className="container">
          <SectionHeader 
            title="Service Areas" 
            subtitle="Seren Place provides premium home care across multiple regions. Find a local care coordinator near you."
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {regions.map((region, index) => (
              <div key={index} className={styles.locationCard}>
                <div className={styles.iconWrapper}><MapPin size={24} /></div>
                <h3>{region.name}</h3>
                <div className={styles.details}>
                  <div className={styles.detail}>
                    <MapPin size={16} /> <span>{region.address}</span>
                  </div>
                  <div className={styles.detail}>
                    <Phone size={16} /> <span>{region.phone}</span>
                  </div>
                  <div className={styles.detail}>
                    <Mail size={16} /> <span>{region.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`section section-alt ${styles.ctaSection}`}>
        <div className="container">
          <div className={styles.mapPlaceholder}>
             {/* Simulating a map visual */}
             <div className={styles.mapGraphic}>
                <MapPin className={styles.centerPin} size={48} />
                <p>Interactive Map Integration Coming Soon</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
