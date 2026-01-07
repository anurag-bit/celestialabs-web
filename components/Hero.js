"use client";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={`${styles.backgroundGrid} grid-bg`} />

            <div className={styles.content}>
                <motion.h1
                    initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
                    className={styles.title}
                >
                    <span className="block text-[var(--platinum)]">CELESTIAL</span>
                    <span className="block text-[var(--starlight)]">LABS</span>
                </motion.h1>

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
