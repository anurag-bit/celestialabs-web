"use client";

import React, { useState, useEffect } from 'react';
import styles from './page.module.css';

export default function StreamedText({ text }) {
    const [displayedText, setDisplayedText] = useState('');
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        let index = 0;
        setDisplayedText('');
        setIsComplete(false);

        const intervalId = setInterval(() => {
            if (index < text.length) {
                setDisplayedText((prev) => prev + text.charAt(index));
                index++;
            } else {
                setIsComplete(true);
                clearInterval(intervalId);
                // Optional: Restart loop after delay
                setTimeout(() => {
                    index = 0;
                    setDisplayedText('');
                    setIsComplete(false);
                }, 5000);
            }
        }, 30); // Speed of typing

        return () => clearInterval(intervalId);
    }, [text]);

    return (
        <div className={styles.aiStreamContainer}>
            <div className={styles.aiHeader}>
                <div className={styles.aiIndicator}></div>
                <span>Cortex AI_v9.2</span>
            </div>
            <div>
                {displayedText}
                <span className={styles.aiCursor}></span>
            </div>
        </div>
    );
}
