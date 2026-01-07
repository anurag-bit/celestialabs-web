import styles from "./Footer.module.css";
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div>
                    <h4 className={styles.brandName}>CELESTIAL LABS</h4>
                    <p className={styles.meta}>EST. 2026 // EARTH</p>
                </div>

                <div className={styles.links}>
                    <Link href="/#manifesto" className={styles.link}>MANIFESTO</Link>
                    <Link href="/careers" className={styles.link}>CAREERS</Link>
                    <Link href="/relations" className={styles.link}>RELATIONS</Link>
                    <a href="mailto:cfo.psingh@celestiallabs.in" className={styles.link}>CONTACT</a>
                </div>
            </div>
        </footer>
    );
}
