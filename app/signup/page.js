"use client";
import styles from "../auth.module.css";
import Link from 'next/link';

export default function Signup() {
    return (
        <main className={styles.container}>
            <div className={styles.card}>
                <div className={styles.header}>
                    <h1 className={styles.title}>REQUEST CLEARANCE</h1>
                    <p className={styles.subtitle}>THE ROSTER IS CLOSED. APPLY FOR REVIEW.</p>
                </div>

                <form className={styles.form}>
                    <div className={styles.group}>
                        <label className={styles.label}>DESIGNATION</label>
                        <input type="text" className={styles.input} placeholder="FULL NAME" />
                    </div>

                    <div className={styles.group}>
                        <label className={styles.label}>COMMS CHANNEL</label>
                        <input type="email" className={styles.input} placeholder="EMAIL" />
                    </div>

                    <div className={styles.group}>
                        <label className={styles.label}>KEY GENERATION</label>
                        <input type="password" className={styles.input} />
                    </div>

                    <button className={styles.button}>SUBMIT FOR REVIEW</button>
                </form>

                <div className={styles.footer}>
                    ALREADY VERIFIED? <Link href="/login" className={styles.link}>ACCESS TERMINAL</Link>
                </div>
            </div>
        </main>
    );
}
