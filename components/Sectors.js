"use client";
import { motion } from "framer-motion";
import styles from "./Sectors.module.css";

const SECTORS = [
    {
        id: "01",
        title: "CAPITAL",
        desc: "Infinite resources deployed with institutional precision.",
        align: styles.span2,
    },
    {
        id: "02",
        title: "DEEP SCIENCE",
        desc: "Unrestricted research into the fundamental nature of reality.",
        align: styles.span1,
    },
    {
        id: "03",
        title: "AEROSPACE",
        desc: "The vehicles of our ascension.",
        align: styles.span1,
    },
    {
        id: "04",
        title: "ENGINEERING",
        desc: "Building the infrastructure of a Type I civilization.",
        align: styles.span2,
    },
];

export default function Sectors() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.label}>
                    002 // OPERATIONS
                </h2>

                <div className={styles.grid}>
                    {SECTORS.map((sector) => (
                        <motion.div
                            key={sector.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className={`${styles.card} ${sector.align}`}
                        >
                            <div className={styles.cardInner}>
                                <span className={styles.cardId}>{sector.id}</span>
                                <div>
                                    <h3 className={styles.cardTitle}>
                                        {sector.title}
                                    </h3>
                                    <p className={styles.cardDesc}>
                                        {sector.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
