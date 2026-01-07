"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import styles from "./Manifesto.module.css";

const MANIFESTO = [
    "Innovation without scale is merely novelty.",
    "Scale without purpose is waste.",
    "",
    "We are resolving the friction between",
    "scientific breakthrough and industrial application.",
    "",
    "Celestial Labs acts as the transmission gear for the future—",
    "identifying critical technologies and supplying the capital,",
    "engineering, and operational architecture",
    "required to deploy them globally.",
    "",
    "Our mandate is practical:",
    "To build the systems that safeguard",
    "and advance the human condition.",
    "",
    "We operate where others cannot.",
    "Deep Science. Heavy Industry. Sovereign Capital.",
    "",
    "We are not just investors. We are builders.",
    "Constructing the power plants, the propulsion systems,",
    "and the intelligence layers of the next century.",
    "",
    "Uncompromising. Essential. Permanent.",
    "This is Celestial Labs."
];

export default function Manifesto() {
    const containerRef = useRef(null);

    return (
        <section id="manifesto" ref={containerRef} className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.label}>
                    001 // THE MANIFESTO
                </h2>

                <div className={styles.content}>
                    {MANIFESTO.map((line, i) => (
                        <motion.p
                            key={i}
                            initial={{ opacity: 0.1, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.8, delay: i * 0.05 }}
                            className={line === "" ? styles.spacer : styles.line}
                        >
                            {line}
                        </motion.p>
                    ))}
                </div>
            </div>
        </section>
    );
}
