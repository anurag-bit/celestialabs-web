"use client";
import styles from "./SchematicFrame.module.css";

export default function SchematicFrame({ label }) {
    return (
        <div className={styles.frame}>
            {/* Top Left Bracket */}
            <div className={styles.bracketTL}></div>

            {/* Top Right Bracket */}
            <div className={styles.bracketTR}></div>

            {/* Bottom Left Bracket */}
            <div className={styles.bracketBL}></div>

            {/* Bottom Right Bracket */}
            <div className={styles.bracketBR}></div>

            {/* Label */}
            {label && <div className={styles.label}>{label}</div>}

            {/* Technical Metadata (Decorations) */}
            <div className={styles.metaTop}>WIDTH: 100%</div>
            <div className={styles.metaBottom}>SEC: ACTIVE</div>
        </div>
    );
}
