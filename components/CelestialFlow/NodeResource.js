"use client";
import { Handle, Position } from 'reactflow';
import styles from './CelestialCanvas.module.css';

export default function NodeResource({ data }) {
    return (
        <div className={styles.resourceNode}>
            <div className={styles.nodeHeader}>
                <span className={styles.nodeTitle}>{data.label}</span>
                <div
                    className={styles.nodeStatus}
                    style={{ background: data.status === 'active' ? '#4CAF50' : '#FF5722', boxShadow: `0 0 8px ${data.status === 'active' ? '#4CAF50' : '#FF5722'}` }}
                />
            </div>
            <div className={styles.nodeBody}>
                <div className={styles.nodeRow}>
                    <span>LOAD</span>
                    <span className={styles.nodeValue}>{data.load || '0%'}</span>
                </div>
                <div className={styles.nodeRow}>
                    <span>UPTIME</span>
                    <span className={styles.nodeValue}>{data.uptime || '0h'}</span>
                </div>
            </div>

            <Handle type="target" position={Position.Top} className={styles.handle} />
            <Handle type="source" position={Position.Bottom} className={styles.handle} />
        </div>
    );
}
