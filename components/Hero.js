"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import styles from "./Hero.module.css";

const SECTORS = [
    "LABS",
    "CAPITAL",
    "RESEARCH",
    "VENTURES",
    "INVESTMENTS",
    "SECURITIES",
    "BIONICS",
    "GROUP"
];

export default function Hero() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % SECTORS.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="hero" className={styles.hero}>
            <div className={`${styles.backgroundGrid} grid-bg`} />

            <div className={styles.content}>
                <h1 className={styles.title}>
                    <motion.span
                        initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
                        className="block text-[var(--platinum)]"
                    >
                        CELESTIAL
                    </motion.span>
                    <div className={styles.dynamicWrapper}>
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={SECTORS[index]}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="block text-[var(--starlight)]"
                            >
                                {SECTORS[index]}
                            </motion.span>
                        </AnimatePresence>
                    </div>
                </h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 2 }}
                    className={styles.subtitleWrapper}
                >
                    <div className={styles.separator} />
                    <p className={styles.subtitle}>
                        The Lab for Existence
                    </p>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 1 }}
                className={styles.scrollPrompt}
            >
                SCROLL TO INITIALIZE
            </motion.div>
        </section>
    );
}
