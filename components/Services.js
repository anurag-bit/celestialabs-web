"use client";
import styles from "./Services.module.css";

const SERVICES = [
    {
        title: "STRATEGIC ARCHITECTURE",
        desc: "We do not advise. We construct the logic models for institutional dominance.",
        tags: ["ROADMAP", "SCALABILITY", "VISION"]
    },
    {
        title: "SOVEREIGN SYSTEMS",
        desc: "Deploying self-reliant technological infrastructure immune to external reliance.",
        tags: ["SECURITY", "HOSTING", "PROTOCOL"]
    },
    {
        title: "DEEP TECH DILIGENCE",
        desc: "Forensic analysis of emerging technologies to separate signal from noise.",
        tags: ["AUDIT", "VALIDATION", "FORECAST"]
    }
];

export default function Services() {
    return (
        <section id="services" className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.label}>
                    003 // CAPABILITIES
                </h2>

                <div className={styles.content}>
                    <h3 className={styles.headline}>
                        TECHNOLOGY CONSULTANCY
                    </h3>
                    <p className={styles.subtext}>
                        Celestial Labs acts as the high-command for your technological operations.
                        We align your capital deployment with rigorous engineering precision.
                    </p>

                    <div className={styles.grid}>
                        {SERVICES.map((service, index) => (
                            <div key={index} className={styles.card}>
                                <div className={styles.cardHeader}>
                                    <span className={styles.index}>0{index + 1}</span>
                                    <div className={styles.decoration} />
                                </div>
                                <h4 className={styles.cardTitle}>{service.title}</h4>
                                <p className={styles.cardDesc}>{service.desc}</p>
                                <div className={styles.tags}>
                                    {service.tags.map(tag => (
                                        <span key={tag} className={styles.tag}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
