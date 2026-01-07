"use client";
import React from 'react';
import { motion } from "framer-motion";
import styles from "./page.module.css";
import Footer from "@/components/Footer";
import Link from 'next/link';

const ENGAGEMENTS = [
    {
        id: "01",
        title: "AUM REQUEST",
        desc: "Capital Allocation & Sovereign Asset Management. Request institutional deployment or submit assets for management under the Celestial Protocol.",
        link: "/signup?type=aum"
    },
    {
        id: "02",
        title: "RESEARCH SERVICE",
        desc: "Deep Science Collaboration. Partner with our labs on non-standard physics, biological extension, and energy systems.",
        link: "/signup?type=research"
    },
    {
        id: "03",
        title: "SYSTEMS & PLATFORM",
        desc: "Developer Services. API access to the Celestial operating layer, computational infrastructure, and intelligence grids.",
        link: "/signup?type=dev"
    },
];

export default function Relations() {
    return (
        <>
            <main className={styles.section}>
                <div className="container mx-auto">
                    <header className={styles.header}>
                        <h1 className={styles.title}>ENGAGEMENT PROTOCOLS</h1>
                        <p className={styles.subtitle}>
                            Select the nature of your inquiry. All channels are monitored. Access is granted on a needs-basis only.
                        </p>
                    </header>

                    <div className={styles.grid}>
                        {ENGAGEMENTS.map((item, i) => (
                            <Link href={item.link} key={i} className="contents">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className={styles.card}
                                >
                                    <span className={styles.cardIcon}>PROTOCOL // {item.id}</span>
                                    <div>
                                        <h2 className={styles.cardTitle}>{item.title}</h2>
                                        <p className={styles.cardDesc}>{item.desc}</p>
                                    </div>
                                    <div className={styles.arrow}>→</div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
