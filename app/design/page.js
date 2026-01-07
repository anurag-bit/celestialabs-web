import StreamedText from './StreamedText';
import CelestialCanvas from '@/components/CelestialFlow/CelestialCanvas';
import styles from './page.module.css';

export const metadata = {
    title: "Design System | Celestial Labs",
    description: "Documentation of the Celestial Labs design language and UI library.",
};

export default function DesignPage() {
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Design System</h1>
                    <p className={styles.subtitle}>Version 1.0 • Celestial Labs UI Kit</p>
                </header>

                {/* Colors Section */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>01. Color Palette</h2>
                    <div className={styles.colorGrid}>
                        <ColorCard name="&quot;Void&quot;" variable="--void" hex="#050505" />
                        <ColorCard name="Night" variable="--nebula" hex="#1A1D23" />
                        <ColorCard name="Starlight" variable="--starlight" hex="#F5F5F7" />
                        <ColorCard name="Platinum" variable="--platinum" hex="#E5E4E2" />
                        <ColorCard name="Grid Line" variable="--grid-line" hex="rgba(255,255,255,0.08)" />
                    </div>
                </section>

                {/* Typography Section */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>02. Typography</h2>
                    <div className={styles.typeStack}>
                        <div className={styles.typeRow}>
                            <span className={styles.typeLabel}>Display</span>
                            <div style={{ fontSize: 'var(--font-display-desktop)', fontWeight: 600, letterSpacing: '-0.05em', lineHeight: 0.85 }}>
                                The Convergence<br />of Existence
                            </div>
                        </div>
                        <div className={styles.typeRow}>
                            <span className={styles.typeLabel}>Heading 1</span>
                            <div style={{ fontSize: '3rem', fontWeight: 300, letterSpacing: '-0.05em' }}>
                                Infinite Capital & Absolute Innovation
                            </div>
                        </div>
                        <div className={styles.typeRow}>
                            <span className={styles.typeLabel}>Heading 2</span>
                            <div style={{ fontSize: '2rem', fontWeight: 300, letterSpacing: '-0.025em' }}>
                                Building the future infrastructure
                            </div>
                        </div>
                        <div className={styles.typeRow}>
                            <span className={styles.typeLabel}>Body</span>
                            <div style={{ fontSize: '1rem', lineHeight: 1.6, color: 'var(--platinum)', opacity: 0.7, maxWidth: '600px' }}>
                                At Celestial Labs, we believe in the power of unstructured innovation. Our mission is to provide the canvas for the next generation of builders, thinkers, and creators to reshape reality itself.
                            </div>
                        </div>
                        <div className={styles.typeRow}>
                            <span className={styles.typeLabel}>Mono / Label</span>
                            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                System Status: Operational
                            </div>
                        </div>
                    </div>
                </section>

                {/* Components Section */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>03. Components</h2>
                    <div className={styles.componentGrid}>

                        {/* Cards */}
                        <div className={styles.componentCard}>
                            <span className={styles.typeLabel}>Card Component</span>
                            <div style={{ border: '1px solid var(--grid-line)', padding: '2rem', width: '100%' }}>
                                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', marginBottom: '1rem', opacity: 0.5 }}>01</div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 300 }}>Feature Card</h3>
                                <p style={{ color: 'var(--platinum)', opacity: 0.7, fontSize: '0.875rem', lineHeight: 1.6 }}>
                                    Standard card container used for features, sectors, and content blocks.
                                </p>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className={styles.componentCard}>
                            <span className={styles.typeLabel}>Buttons</span>
                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                <button className={styles.button}>Secondary Action</button>
                                <button className={`${styles.button} ${styles.buttonPrimary}`}>Primary Action</button>
                            </div>
                        </div>

                        {/* Inputs */}
                        <div className={styles.componentCard}>
                            <span className={styles.typeLabel}>Form Elements</span>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%' }}>
                                <div className={styles.inputGroup}>
                                    <label className={styles.inputLabel}>Text Input</label>
                                    <input type="text" placeholder="Standard input..." className={styles.input} />
                                </div>
                                <label className={styles.checkboxWrapper}>
                                    <input type="checkbox" className={styles.checkbox} defaultChecked />
                                    <span className={styles.inputLabel}>System Check</span>
                                </label>
                                <div className={styles.toggleWrapper}>
                                    <div className={`${styles.toggle} ${styles.toggleChecked}`}></div>
                                    <span className={styles.inputLabel}>Active State</span>
                                </div>
                                <div className={styles.toggleWrapper}>
                                    <div className={styles.toggle}></div>
                                    <span className={styles.inputLabel}>Inactive State</span>
                                </div>
                                <div className={styles.selectWrapper}>
                                    <label className={styles.inputLabel} style={{ marginBottom: '0.5rem', display: 'block' }}>Select Option</label>
                                    <select className={styles.select}>
                                        <option>System Default</option>
                                        <option>High Performance</option>
                                        <option>Power Saver</option>
                                    </select>
                                </div>
                                <div className={styles.searchWrapper}>
                                    <label className={styles.inputLabel} style={{ marginBottom: '0.5rem', display: 'block' }}>Search</label>
                                    <span className={styles.searchIcon}>🔍</span>
                                    <input type="text" placeholder="Search systems..." className={`${styles.input} ${styles.searchInput}`} />
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Navigation Section */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>04. Navigation</h2>
                    <div className={styles.componentCard} style={{ width: '100%' }}>
                        <div className={styles.tabs}>
                            <div className={`${styles.tab} ${styles.tabActive}`}>Overview</div>
                            <div className={styles.tab}>Specs</div>
                            <div className={styles.tab}>Logs</div>
                            <div className={styles.tab}>Settings</div>
                        </div>
                        <div className={styles.breadcrumbs}>
                            <span>Home</span>
                            <span className={styles.breadcrumbDivider}>/</span>
                            <span>Systems</span>
                            <span className={styles.breadcrumbDivider}>/</span>
                            <span style={{ color: 'var(--starlight)', opacity: 1 }}>Core</span>
                        </div>
                    </div>
                </section>

                {/* Feedback Section */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>05. Feedback & Status</h2>
                    <div className={styles.componentGrid}>
                        <div className={styles.componentCard}>
                            <span className={styles.typeLabel}>Alerts</span>
                            <div style={{ width: '100%' }}>
                                <div className={`${styles.alert} ${styles.alertSuccess}`}>
                                    <span>✓</span> System Operational
                                </div>
                                <div className={`${styles.alert} ${styles.alertWarning}`}>
                                    <span>⚠</span> Capacity nearing limit (85%)
                                </div>
                            </div>
                        </div>
                        <div className={styles.componentCard}>
                            <span className={styles.typeLabel}>Badges</span>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                <span className={styles.badge}>Default</span>
                                <span className={`${styles.badge} ${styles.badgeFilled}`}>Filled</span>
                                <span className={styles.badge} style={{ borderColor: '#4CAF50', color: '#4CAF50' }}>Success</span>
                                <span className={styles.badge} style={{ borderColor: '#F44336', color: '#F44336' }}>Error</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Data Display Section */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>06. Data Display</h2>
                    <div className={styles.componentCard} style={{ width: '100%' }}>
                        <span className={styles.typeLabel}>Data Table</span>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Node</th>
                                    <th>Status</th>
                                    <th>Latency</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>#8A2</td>
                                    <td>Orbital Relay 1</td>
                                    <td><span className={styles.badge} style={{ color: '#4CAF50', borderColor: '#4CAF50' }}>Active</span></td>
                                    <td>12ms</td>
                                </tr>
                                <tr>
                                    <td>#9B4</td>
                                    <td>Ground Station</td>
                                    <td><span className={styles.badge} style={{ color: '#FFC107', borderColor: '#FFC107' }}>Syncing</span></td>
                                    <td>45ms</td>
                                </tr>
                                <tr>
                                    <td>#C3X</td>
                                    <td>Deep Space Array</td>
                                    <td><span className={styles.badge} style={{ color: '#F44336', borderColor: '#F44336' }}>Offline</span></td>
                                    <td>--</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className={styles.componentCard} style={{ marginTop: '2rem', width: '100%' }}>
                        <span className={styles.typeLabel}>Tags</span>
                        <div className={styles.tagContainer}>
                            <span className={styles.tag}>React</span>
                            <span className={styles.tag}>Next.js</span>
                            <span className={styles.tag}>CSS Modules</span>
                            <span className={styles.tag}>Design System</span>
                        </div>
                    </div>
                </section>

                {/* Overlays Section */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>07. Overlays</h2>
                    <div className={styles.componentGrid}>
                        <div className={styles.componentCard}>
                            <span className={styles.typeLabel}>Modal Dialog</span>
                            <div className={styles.modalOverlay}>
                                <div className={styles.modal}>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 300 }}>Confirm Sequence</h3>
                                    <p style={{ color: 'var(--platinum)', opacity: 0.7, fontSize: '0.875rem', lineHeight: 1.6 }}>
                                        Initiating this sequence will consume 45% of available power reserves. Proceed?
                                    </p>
                                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                                        <button className={`${styles.button} ${styles.buttonPrimary}`} style={{ fontSize: '0.75rem', padding: '0.75rem 1.5rem' }}>Confirm</button>
                                        <button className={styles.button} style={{ fontSize: '0.75rem', padding: '0.75rem 1.5rem' }}>Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.componentCard}>
                            <span className={styles.typeLabel}>Tooltips</span>
                            <div style={{ display: 'flex', gap: '3rem', alignItems: 'center', height: '100%', justifyContent: 'center' }}>
                                <div className={styles.tooltipWrapper}>
                                    Hover Me
                                    <div className={styles.tooltip}>System ID: #882-A</div>
                                </div>
                                <div className={styles.tooltipWrapper}>
                                    Status
                                    <div className={styles.tooltip}>Operational</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advanced Data Section */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>08. Advanced Data</h2>
                    <div className={styles.componentGrid}>

                        <div className={styles.componentCard}>
                            <span className={styles.typeLabel}>Stat Cards</span>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', width: '100%' }}>
                                <div className={styles.statCard}>
                                    <div className={styles.statValue}>98<span style={{ fontSize: '1.5rem', opacity: 0.5 }}>%</span></div>
                                    <div className={styles.statLabel}>System Health</div>
                                </div>
                                <div className={styles.statCard}>
                                    <div className={styles.statValue}>2.4<span style={{ fontSize: '1.5rem', opacity: 0.5 }}>TB</span></div>
                                    <div className={styles.statLabel}>Data Processed</div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.componentCard}>
                            <span className={styles.typeLabel}>Progress & Avatars</span>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%' }}>
                                <div className={styles.progressWrapper}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
                                        <span>Upload Status</span>
                                        <span>75%</span>
                                    </div>
                                    <div className={styles.progressBar}>
                                        <div className={styles.progressFill} style={{ width: '75%' }}></div>
                                    </div>
                                </div>

                                <div className={styles.avatarGroup}>
                                    <div className={styles.avatar}>A</div>
                                    <div className={styles.avatar}>B</div>
                                    <div className={styles.avatar}>C</div>
                                    <div className={styles.avatar} style={{ background: 'transparent', color: 'var(--platinum)', borderColor: 'var(--platinum)', opacity: 0.5 }}>+2</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Additional Navigation Section */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>09. Process Visualization</h2>
                    <div className={styles.componentCard} style={{ width: '100%' }}>
                        <span className={styles.typeLabel}>Stepper</span>
                        <div className={styles.stepper} style={{ marginTop: '1rem' }}>
                            <div className={`${styles.step} ${styles.stepActive}`}>
                                <div className={styles.stepCircle}>1</div>
                                <span className={styles.stepLabel}>Config</span>
                            </div>
                            <div className={`${styles.step} ${styles.stepActive}`}>
                                <div className={styles.stepCircle}>2</div>
                                <span className={styles.stepLabel}>Review</span>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.stepCircle}>3</div>
                                <span className={styles.stepLabel}>Deploy</span>
                            </div>
                        </div>
                    </div>
                </section>



                {/* System Utilities Section */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>10. System Utilities</h2>
                    <div className={styles.componentGrid}>

                        <div className={styles.componentCard}>
                            <span className={styles.typeLabel}>Terminal / Log</span>
                            <div className={styles.terminal}>
                                <div className={styles.terminalHeader}>
                                    <div className={styles.terminalDot} style={{ background: '#FF5F56' }}></div>
                                    <div className={styles.terminalDot} style={{ background: '#FFBD2E' }}></div>
                                    <div className={styles.terminalDot} style={{ background: '#27C93F' }}></div>
                                </div>
                                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', lineHeight: 1.6 }}>
                                    <span className={styles.codeLine}><span style={{ color: 'var(--platinum)', opacity: 0.5 }}>09:14:22</span> [INFO] System initialization started</span>
                                    <span className={styles.codeLine}><span style={{ color: 'var(--platinum)', opacity: 0.5 }}>09:14:24</span> [INFO] Loading core modules...</span>
                                    <span className={styles.codeLine}><span style={{ color: '#4CAF50' }}>[SUCCESS]</span> Core modules loaded (42ms)</span>
                                    <span className={`${styles.codeLine} ${styles.codeCommand}`}>npm run build</span>
                                    <span className={styles.codeLine} style={{ opacity: 1, color: '#FFC107' }}>⚠ Warning: Deprecated dependency detected</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.componentCard}>
                            <span className={styles.typeLabel}>Loaders & Skeleton</span>
                            <div className={styles.loaderWrapper} style={{ width: '100%', alignItems: 'center', justifyContent: 'center', minHeight: '150px' }}>
                                <div className={styles.spinner}></div>
                                <div style={{ width: '100%', marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <div className={styles.skeleton} style={{ width: '60%' }}></div>
                                    <div className={styles.skeleton}></div>
                                    <div className={styles.skeleton}></div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.componentCard} style={{ gridColumn: '1 / -1' }}>
                            <span className={styles.typeLabel}>Accordion</span>
                            <div className={styles.accordion}>
                                <div className={`${styles.accordionItem} ${styles.accordionOpen}`}>
                                    <div className={styles.accordionHeader}>
                                        System Parameters
                                        <span className={styles.accordionIcon}>▼</span>
                                    </div>
                                    <div className={styles.accordionContent}>
                                        Core operating frequency must be maintained within 0.5% variance. Any deviation results in immediate shutdown of non-essential sectors to preserve data integrity.
                                    </div>
                                </div>
                                <div className={styles.accordionItem}>
                                    <div className={styles.accordionHeader}>
                                        Security Protocols
                                        <span className={styles.accordionIcon}>▼</span>
                                    </div>
                                </div>
                                <div className={styles.accordionItem}>
                                    <div className={styles.accordionHeader}>
                                        Override history
                                        <span className={styles.accordionIcon}>▼</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Interactive Inputs Section */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>11. Interactive Inputs</h2>
                    <div className={styles.componentGrid}>

                        <div className={styles.componentCard}>
                            <span className={styles.typeLabel}>Range Slider</span>
                            <div className={styles.rangeWrapper}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', opacity: 0.7 }}>
                                    <span>Power Output</span>
                                    <span>78%</span>
                                </div>
                                <input type="range" className={styles.rangeInput} min="0" max="100" defaultValue="78" />
                            </div>
                        </div>

                        <div className={styles.componentCard}>
                            <span className={styles.typeLabel}>File Upload Zone</span>
                            <div className={styles.uploadZone}>
                                <div className={styles.uploadIcon}>☁</div>
                                <div className={styles.uploadText}>
                                    Drag & Drop system logs here<br />
                                    <span style={{ opacity: 0.5 }}>or click to browse</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* States & Feedback Section */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>12. States & Feedback</h2>
                    <div className={styles.componentGrid}>

                        <div className={styles.componentCard}>
                            <span className={styles.typeLabel}>Empty State</span>
                            <div className={styles.emptyState}>
                                <div className={styles.emptyIcon}>∅</div>
                                <div style={{ textAlign: 'center' }}>
                                    <div className={styles.emptyTitle}>No Signals Detected</div>
                                    <div className={styles.emptyDesc}>System is dormant. Initiate a manual scan or check connection nodes.</div>
                                </div>
                                <button className={`${styles.button} ${styles.buttonPrimary}`}>Initiate Scan</button>
                            </div>
                        </div>

                        <div className={styles.componentCard}>
                            <span className={styles.typeLabel}>Activity Feed</span>
                            <div className={styles.activityFeed}>
                                <div className={styles.activityItem}>
                                    <div className={styles.activityDot}></div>
                                    <div className={styles.activityContent}>
                                        <div className={styles.activityText}>System update initiated by user <strong>Admin_01</strong></div>
                                        <div className={styles.activityTime}>2 minutes ago</div>
                                    </div>
                                </div>
                                <div className={styles.activityItem}>
                                    <div className={styles.activityDot} style={{ background: 'var(--nebula)', borderColor: 'var(--platinum)' }}></div>
                                    <div className={styles.activityContent}>
                                        <div className={styles.activityText}>Backup procedure completed successfully.</div>
                                        <div className={styles.activityTime}>1 hour ago</div>
                                    </div>
                                </div>
                                <div className={styles.activityItem}>
                                    <div className={styles.activityDot} style={{ borderColor: '#FFC107' }}></div>
                                    <div className={styles.activityContent}>
                                        <div className={styles.activityText}>Connection interrupted at Node #89. Auto-retrying...</div>
                                        <div className={styles.activityTime}>4 hours ago</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Media Section */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>13. Media</h2>
                    <div className={styles.componentGrid}>

                        <div className={styles.componentCard}>
                            <span className={styles.typeLabel}>Video Player</span>
                            <div className={styles.videoWrapper}>
                                <div className={styles.videoPlaceholder}>
                                    <div className={styles.playButton}></div>
                                </div>
                                <div className={styles.videoControls}>
                                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#fff' }}>00:45 / 03:20</span>
                                    <div style={{ flex: 1, height: '4px', background: 'rgba(255,255,255,0.2)', borderRadius: '2px', position: 'relative' }}>
                                        <div style={{ width: '30%', height: '100%', background: 'var(--starlight)', borderRadius: '2px' }}></div>
                                    </div>
                                    <span style={{ fontSize: '0.875rem' }}>🔊</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.componentCard}>
                            <span className={styles.typeLabel}>Audio Player</span>
                            <div className={styles.audioPlayer}>
                                <div className={styles.audioControls}>
                                    <button className={styles.audioBtn}>⏮</button>
                                    <button className={styles.audioBtn}>▶</button>
                                    <button className={styles.audioBtn}>⏭</button>
                                </div>
                                <div className={styles.waveform}>
                                    {[...Array(20)].map((_, i) => (
                                        <div key={i} className={`${styles.waveBar} ${i < 8 ? styles.waveBarActive : ''}`} style={{ animationDelay: `${i * 0.1}s` }}></div>
                                    ))}
                                </div>
                                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', opacity: 0.5 }}>01:24</span>
                            </div>
                        </div>

                    </div>
                </section>

                {/* AI Interaction Section */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>14. AI Interaction</h2>
                    <div className={styles.componentGrid}>

                        <div className={styles.componentCard} style={{ gridColumn: '1 / -1' }}>
                            <span className={styles.typeLabel}>AI Input Modal</span>
                            <div className={styles.aiInputWrapper}>
                                <div className={styles.aiInputContainer}>
                                    <textarea className={styles.aiInput} placeholder="Ask the system..." value="Analyze the sector 7 consumption patterns and optimize for efficiency." readOnly />
                                    <div className={styles.aiFooter}>
                                        <div className={styles.aiActions}>
                                            <button className={styles.aiActionBtn}>Attach File</button>
                                            <button className={styles.aiActionBtn}>Use Voice</button>
                                        </div>
                                        <button className={`${styles.button} ${styles.buttonPrimary}`} style={{ padding: '0.5rem 1rem', fontSize: '0.75rem' }}>Generate</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.aiSuggestions}>
                                <div className={styles.aiChip}>✨ Generate Report</div>
                                <div className={styles.aiChip}>🔍 Analyze Logs</div>
                                <div className={styles.aiChip}>🛡️ Run Security Scan</div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Data Visualization Section */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>15. Data Visualization</h2>
                    <div className={styles.componentGrid}>

                        <div className={styles.componentCard}>
                            <span className={styles.typeLabel}>Growth Charts</span>
                            <div className={styles.chartContainer}>
                                <div className={styles.chartBar} style={{ height: '40%' }} data-value="40"></div>
                                <div className={styles.chartBar} style={{ height: '70%' }} data-value="70"></div>
                                <div className={styles.chartBar} style={{ height: '50%' }} data-value="50"></div>
                                <div className={styles.chartBar} style={{ height: '90%', background: 'var(--starlight)' }} data-value="90"></div>
                                <div className={styles.chartBar} style={{ height: '60%' }} data-value="60"></div>
                            </div>
                        </div>

                        <div className={styles.componentCard}>
                            <span className={styles.typeLabel}>Radial Gauges</span>
                            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', width: '100%' }}>
                                <div className={styles.gaugeWrapper}>
                                    <div className={styles.gaugeCircle}></div>
                                    <div className={styles.gaugeValue}>78%</div>
                                </div>
                                <div className={styles.gaugeWrapper}>
                                    <div className={styles.gaugeCircle} style={{ borderTopColor: '#FFC107', borderRightColor: '#FFC107' }}></div>
                                    <div className={styles.gaugeValue}>42%</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* App Structure Section */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>16. App Structure</h2>
                    <div className={styles.componentGrid}>

                        <div className={styles.componentCard}>
                            <span className={styles.typeLabel}>Sidebar Navigation</span>
                            <div className={styles.sidebarPreview}>
                                <div className={styles.sidebarHeader}>CELESTIAL</div>
                                <div className={`${styles.sidebarItem} ${styles.sidebarItemActive}`}>Dashboard</div>
                                <div className={styles.sidebarItem}>Analytics</div>
                                <div className={styles.sidebarItem}>Infrastructure</div>
                                <div className={styles.sidebarItem}>Settings</div>
                            </div>
                        </div>

                        <div className={styles.componentCard}>
                            <span className={styles.typeLabel}>Context Menu</span>
                            <div style={{ height: '300px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.02)' }}>
                                <div className={styles.contextMenuPreview}>
                                    <div className={styles.menuItem}>Copy ID <span>⌘C</span></div>
                                    <div className={styles.menuItem}>Edit Node...</div>
                                    <div style={{ height: '1px', background: 'var(--grid-line)', margin: '0.5rem 0' }}></div>
                                    <div className={styles.menuItem} style={{ color: '#F44336' }}>Terminate</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Notifications Section */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>17. Notifications</h2>
                    <div className={styles.componentGrid}>

                        <div className={styles.componentCard}>
                            <span className={styles.typeLabel}>Toast Messages</span>
                            <div className={styles.toastWrapper}>
                                <div className={styles.toast}>
                                    <div className={styles.toastContent}>
                                        <div className={styles.toastTitle}>Deployment Complete</div>
                                        <div className={styles.toastMsg}>Node #8B has been successfully initialized.</div>
                                    </div>
                                    <div className={styles.toastClose}>×</div>
                                </div>
                                <div className={styles.toast} style={{ borderLeftColor: '#F44336' }}>
                                    <div className={styles.toastContent}>
                                        <div className={styles.toastTitle} style={{ color: '#F44336' }}>Connection Failed</div>
                                        <div className={styles.toastMsg}>Retrying in 5 seconds...</div>
                                    </div>
                                    <div className={styles.toastClose}>×</div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.componentCard}>
                            <span className={styles.typeLabel}>Notification Center</span>
                            <div className={styles.notificationCenter}>
                                <div className={styles.ncHeader}>
                                    <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Notifications</span>
                                    <span style={{ fontSize: '0.75rem', opacity: 0.5 }}>Mark all read</span>
                                </div>
                                <div className={styles.ncBody}>
                                    <div style={{ padding: '1rem', borderBottom: '1px solid var(--grid-line)' }}>
                                        <div style={{ fontSize: '0.75rem', opacity: 0.5, marginBottom: '0.25rem' }}>Just now</div>
                                        <div style={{ fontSize: '0.875rem' }}>System capacity reached 90%</div>
                                    </div>
                                    <div style={{ padding: '1rem', borderBottom: '1px solid var(--grid-line)' }}>
                                        <div style={{ fontSize: '0.75rem', opacity: 0.5, marginBottom: '0.25rem' }}>2h ago</div>
                                        <div style={{ fontSize: '0.875rem' }}>New orbital relay detected</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Authentication Section */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>18. Authentication</h2>
                    <div className={styles.componentCard} style={{ width: '100%', alignItems: 'center' }}>
                        <span className={styles.typeLabel} style={{ width: '100%', textAlign: 'left' }}>Login & MFA</span>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', width: '100%' }}>

                            {/* Login */}
                            <div className={styles.authCard}>
                                <h3 className={styles.authTitle}>Welcome Back</h3>
                                <p className={styles.authSubtitle}>Enter your credentials to access the terminal.</p>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <div className={styles.inputGroup}>
                                        <label className={styles.inputLabel}>Operative ID</label>
                                        <input type="text" className={styles.input} />
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <label className={styles.inputLabel}>Access Key</label>
                                        <input type="password" className={styles.input} />
                                    </div>
                                    <button className={`${styles.button} ${styles.buttonPrimary}`} style={{ marginTop: '1rem', width: '100%' }}>Authenticate</button>
                                </div>
                            </div>

                            {/* MFA */}
                            <div className={styles.authCard}>
                                <h3 className={styles.authTitle}>Security Check</h3>
                                <p className={styles.authSubtitle}>Enter the 4-digit code sent to your device.</p>
                                <div className={styles.mfaInputWrapper}>
                                    <input type="text" className={styles.mfaDigit} maxLength="1" defaultValue="8" />
                                    <input type="text" className={styles.mfaDigit} maxLength="1" />
                                    <input type="text" className={styles.mfaDigit} maxLength="1" />
                                    <input type="text" className={styles.mfaDigit} maxLength="1" />
                                </div>
                                <button className={styles.button} style={{ width: '100%' }}>Verify Code</button>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Developer Experience Section */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>19. Developer Experience</h2>
                    <div className={styles.componentGrid}>

                        <div className={styles.componentCard}>
                            <span className={styles.typeLabel}>Code Snippet</span>
                            <div className={styles.codeSnippet}>
                                <div className={styles.snippetHeader}>
                                    <span className={styles.snippetLang}>TypeScript</span>
                                    <button className={styles.copyBtn}>Copy</button>
                                </div>
                                <div style={{ opacity: 0.8 }}>
                                    <span style={{ color: '#ff0080' }}>const</span> <span style={{ color: '#7928ca' }}>initSystem</span> = () <span style={{ color: '#ff0080' }}>=&gt;</span> {'{'}<br />
                                    &nbsp;&nbsp;<span style={{ color: '#7928ca' }}>connect</span>(<span style={{ color: '#0070f3' }}>'ws://node-8'</span>);<br />
                                    &nbsp;&nbsp;<span style={{ color: '#666' }}>// Protocols loaded</span><br />
                                    &nbsp;&nbsp;<span style={{ color: '#ff0080' }}>return</span> <span style={{ color: '#0070f3' }}>true</span>;<br />
                                    {'}'}
                                </div>
                            </div>
                        </div>

                        <div className={styles.componentCard}>
                            <span className={styles.typeLabel}>API Key Manager</span>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
                                <div className={styles.apiKeyWrapper}>
                                    <span style={{ opacity: 0.5 }}>pk_live_</span>
                                    <span className={styles.maskedKey}>••••••••••••••••</span>
                                    <button className={styles.copyBtn} style={{ border: 'none' }}>Reveal</button>
                                </div>
                                <div className={styles.apiKeyWrapper} style={{ background: 'rgba(255,0,0,0.05)', borderColor: 'rgba(255,0,0,0.2)' }}>
                                    <span style={{ opacity: 0.5, color: '#F44336' }}>sk_test_</span>
                                    <span className={styles.maskedKey} style={{ color: '#F44336' }}>••••••••••••••••</span>
                                    <button className={styles.copyBtn} style={{ border: 'none', color: '#F44336' }}>Revoke</button>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className={styles.componentCard} style={{ marginTop: '3rem', width: '100%' }}>
                        <span className={styles.typeLabel}>Code Editor IDE</span>
                        <div className={styles.ideContainer}>
                            <div className={styles.ideHeader}>
                                <div className={styles.ideWindowControls}>
                                    <div className={styles.windowDot} style={{ background: '#FF5F56' }}></div>
                                    <div className={styles.windowDot} style={{ background: '#FFBD2E' }}></div>
                                    <div className={styles.windowDot} style={{ background: '#27C93F' }}></div>
                                </div>
                                <div className={styles.ideTabs}>
                                    <div className={`${styles.ideTab} ${styles.ideTabActive}`}>
                                        <span style={{ color: '#50fa7b', fontSize: '10px' }}>●</span> system.config.ts
                                    </div>
                                    <div className={styles.ideTab}>
                                        <span style={{ color: '#ffb86c', fontSize: '10px' }}>●</span> utils.js
                                    </div>
                                    <div className={styles.ideTab}>
                                        README.md
                                    </div>
                                </div>
                            </div>
                            <div className={styles.ideBody}>
                                <div className={styles.ideGutter}>
                                    1<br />2<br />3<br />4<br />5<br />6<br />7<br />8<br />9<br />10<br />11
                                </div>
                                <div className={styles.ideContent}>
                                    <span className={styles.keyword}>import</span> {'{'} <span className={styles.variable}>CelestialNode</span>, <span className={styles.variable}>Protocol</span> {'}'} <span className={styles.keyword}>from</span> <span className={styles.string}>'@celestial/core'</span>;<br /><br />
                                    <span className={styles.comment}>/** <br /> * Initialize the primary uplink to the central relay.<br /> * @param nodeId string<br /> */</span><br />
                                    <span className={styles.keyword}>export const</span> <span className={styles.function}>configureNode</span> <span className={styles.operator}>=</span> (<span className={styles.variable}>options</span>) <span className={styles.operator}>=&gt;</span> {'{'}<br />
                                    &nbsp;&nbsp;<span className={styles.keyword}>return new</span> <span className={styles.function}>CelestialNode</span>({'{'}<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;id: <span className={styles.string}>"882-Alpha"</span>,<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;powerMode: <span className={styles.variable}>Protocol</span>.<span className={styles.variable}>SAVINGS</span>,<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;encryption: <span className={styles.keyword}>true</span>,<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;retryAttempts: <span className={styles.number}>12</span><br />
                                    &nbsp;&nbsp;{'}'});<br />
                                    {'}'};
                                </div>
                            </div>
                            <div className={styles.ideStatus}>
                                <span><span style={{ color: '#ff79c6' }}>master*</span> &nbsp;&nbsp; src/config/system.config.ts</span>
                                <span>TypeScript • UTF-8 • 4 Spaces</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Commerce Section */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>20. Commerce</h2>
                    <div className={styles.componentGrid}>

                        <div className={styles.pricingCard}>
                            <div className={styles.priceTier}>Explorer</div>
                            <div className={styles.priceAmount}>$0<span className={styles.pricePeriod}>/mo</span></div>
                            <div className={styles.featureList}>
                                <div className={styles.featureItem}><span>✓</span> Access to public nodes</div>
                                <div className={styles.featureItem}><span>✓</span> Basic analytics</div>
                                <div className={styles.featureItem} style={{ opacity: 0.3 }}><span>×</span> Deep space telemetry</div>
                            </div>
                            <button className={styles.button}>Current Plan</button>
                        </div>

                        <div className={styles.pricingCard} style={{ borderColor: 'var(--starlight)' }}>
                            <div style={{ position: 'absolute', top: 0, right: 0, background: 'var(--starlight)', color: 'var(--void)', padding: '0.25rem 0.5rem', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em' }}>POPULAR</div>
                            <div className={styles.priceTier}>Vanguard</div>
                            <div className={styles.priceAmount}>$49<span className={styles.pricePeriod}>/mo</span></div>
                            <div className={styles.featureList}>
                                <div className={styles.featureItem}><span>✓</span> Unlimited node relays</div>
                                <div className={styles.featureItem}><span>✓</span> Real-time telemetry</div>
                                <div className={styles.featureItem}><span>✓</span> Priority support</div>
                            </div>
                            <button className={`${styles.button} ${styles.buttonPrimary}`}>Upgrade</button>
                        </div>

                    </div>

                    <div className={styles.componentCard} style={{ marginTop: '3rem', width: '100%' }}>
                        <span className={styles.typeLabel}>Transaction History</span>
                        <div style={{ width: '100%' }}>
                            <div className={styles.invoiceRow} style={{ borderBottom: '1px solid var(--grid-line)', opacity: 0.5, fontSize: '0.75rem' }}>
                                <span>INVOICE ID</span>
                                <span>DATE</span>
                                <span>AMOUNT</span>
                                <span>STATUS</span>
                                <span></span>
                            </div>
                            <div className={styles.invoiceRow}>
                                <span style={{ fontFamily: 'var(--font-mono)' }}>INV-2024-001</span>
                                <span>Oct 24, 2024</span>
                                <span>$49.00</span>
                                <span className={styles.badge} style={{ borderColor: '#4CAF50', color: '#4CAF50' }}>Paid</span>
                                <span style={{ cursor: 'pointer', opacity: 0.5 }}>⬇</span>
                            </div>
                            <div className={styles.invoiceRow}>
                                <span style={{ fontFamily: 'var(--font-mono)' }}>INV-2024-002</span>
                                <span>Nov 24, 2024</span>
                                <span>$49.00</span>
                                <span className={styles.badge} style={{ borderColor: '#FFC107', color: '#FFC107' }}>Processing</span>
                                <span style={{ cursor: 'pointer', opacity: 0.5 }}>⬇</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Visual Effects Section */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>21. Visual Effects</h2>
                    <div className={styles.componentGrid}>

                        <div className={styles.componentCard}>
                            <span className={styles.typeLabel}>Holographic Card</span>
                            <div className={styles.hologramCard}>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 300, marginBottom: '0.5rem', letterSpacing: '-0.025em' }}>Glassmorphism</h3>
                                <p style={{ opacity: 0.7, fontSize: '0.875rem', lineHeight: 1.6 }}>
                                    Gaussian blur filters with dynamic noise gradients to simulate holographic projections on the event horizon.
                                </p>
                            </div>
                        </div>



                        <div className={styles.componentCard}>
                            <span className={styles.typeLabel}>Radar Scan</span>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', minHeight: '220px' }}>
                                <div className={styles.radarWrapper}>
                                    <div className={styles.radarScan}></div>
                                    <div className={styles.radarPip} style={{ top: '30%', left: '60%' }}></div>
                                    <div className={styles.radarPip} style={{ top: '70%', left: '25%', animationDelay: '1s' }}></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* AI Interfaces Section */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>22. AI Interfaces</h2>
                    <div className={styles.componentGrid}>
                        <div className={styles.componentCard} style={{ width: '100%' }}>
                            <span className={styles.typeLabel}>Streamed Text Generation</span>
                            <StreamedText text="Analyzing neural pathways... Connection established. Accessing deep space telemetry nodes [882-Alpha, 991-Beta]. Data stream synchronized. Waiting for user command." />
                        </div>
                    </div>
                </section>

                {/* System Architecture Section */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>23. System Architecture</h2>
                    <CelestialCanvas />
                </section>

            </div>
        </div >
    );
}



function ColorCard({ name, variable, hex }) {
    return (
        <div className={styles.colorCard}>
            <div className={styles.swatch} style={{ backgroundColor: `var(${variable})` }}></div>
            <div className={styles.colorName}>{name}</div>
            <div className={styles.colorValue}>{variable}</div>
            <div className={styles.colorValue}>{hex}</div>
        </div>
    );
}
