"use client";
import React, { useState, useEffect } from 'react';
import styles from "./PrecisionIndex.module.css";

const SECTIONS = [
    { id: "hero", label: "HERO" },
    { id: "manifesto", label: "MANIFESTO" },
    { id: "sectors", label: "SECTORS" },
    { id: "services", label: "CAPABILITIES" },
    { id: "footer", label: "CONTACT" }
];

export default function PrecisionIndex() {
    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-40% 0px -40% 0px" // Trigger when section is in middle of viewport
            }
        );

        SECTIONS.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={styles.indexContainer}>
            <div className={styles.line} />
            <ul className={styles.list}>
                {SECTIONS.map((section, idx) => (
                    <li
                        key={section.id}
                        className={`${styles.item} ${activeSection === section.id ? styles.active : ''}`}
                        onClick={() => scrollToSection(section.id)}
                    >
                        <span className={styles.number}>{`0${idx + 1}`}</span>
                        <span className={styles.label}>{section.label}</span>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
