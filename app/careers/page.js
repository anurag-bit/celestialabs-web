"use client";
import { motion } from "framer-motion";
import styles from "./page.module.css";
import Footer from "@/components/Footer";

const ROLES = [
    {
        title: "FOUNDING ENGINEER",
        desc: "You are not here to maintain. You are here to architect the systems that will outlive us all. You understand that code is the DNA of the new world. We do not ask for languages; we ask for fluency in logic and the will to build the impossible.",
    },
    {
        title: "INVESTMENT PARTNER",
        desc: "Capital is fuel. You decide where it burns. We are looking for the vision to recognize potential before it is manifest, and the conviction to back it with the GDP of a small nation.",
    },
    {
        title: "RESEARCHER",
        desc: "The books are finished. The map is drawn. We need those who are willing to walk off the edge. If you are comfortable with the unknown, with the darkness between the stars, then you may begin.",
    },
];

export default function Careers() {
    return (
        <>
            <main className={styles.section}>
                <div className="container mx-auto">
                    <header className={styles.header}>
                        <h1 className={styles.title}>MISSION ASSIGNMENT</h1>
                        <p className={styles.subtitle}>
                            We do not hire employees. We recruit builders. The following mandates are open for execution.
                        </p>
                    </header>

                    <div className={styles.grid}>
                        {ROLES.map((role, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className={styles.card}
                            >
                                <div>
                                    <h2 className={styles.roleTitle}>{role.title}</h2>
                                    <p className={styles.roleDesc}>{role.desc}</p>
                                </div>
                                <button className={styles.action}>Initiate Protocol</button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
