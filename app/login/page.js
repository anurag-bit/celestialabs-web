"use client";
import styles from "../auth.module.css";
import Link from 'next/link';

export default function Login() {
    return (
        <main className={styles.container}>
            <div className={styles.card}>
                <div className={styles.header}>
                    <h1 className={styles.title}>IDENTITY VERIFICATION</h1>
                    <p className={styles.subtitle}>SECURE TERMINAL // S-1</p>
                </div>

                <form className={styles.form}>
                    <div className={styles.group}>
                        <label className={styles.label}>IDENTIFIER</label>
                        <input type="text" className={styles.input} placeholder="USR-..." />
                    </div>

                    <div className={styles.group}>
                        <label className={styles.label}>ACCESS KEY</label>
                        <input type="password" className={styles.input} />
                    </div>

                    <button className={styles.button}>AUTHENTICATE</button>
                </form>

                <div className={styles.footer}>
                    NO ACCESS? <Link href="/signup" className={styles.link}>REQUEST CLEARANCE</Link>
                </div>
            </div>
        </main>
    );
}
