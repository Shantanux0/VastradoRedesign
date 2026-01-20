import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import lifeWalking from '../../assets/life_smiling_friends.png';
import lifeDetail from '../../assets/life_detail_tea.png';

export const EverydayLife = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section style={{ padding: 'var(--spacing-xl) 0', background: 'var(--color-bg)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
                    <h2 className="text-serif" style={{ fontSize: isMobile ? '2.5rem' : '3rem' }}>Everyday Moments</h2>
                    <p className="text-sans" style={{ maxWidth: '600px', margin: '1rem auto', opacity: 0.7 }}>
                        Clothing that feels like home, wherever you are.
                    </p>
                </div>

                <div style={{
                    display: isMobile ? 'flex' : 'grid',
                    flexDirection: 'column',
                    gridTemplateColumns: 'repeat(12, 1fr)',
                    gap: 'var(--spacing-md)',
                    height: isMobile ? 'auto' : '800px'
                }}>
                    {/* Grid item 1 (Large - Friends) */}
                    <motion.div
                        style={{
                            gridColumn: 'span 8',
                            gridRow: 'span 2',
                            overflow: 'hidden',
                            borderRadius: '4px',
                            minHeight: isMobile ? '400px' : 'auto'
                        }}
                        whileHover={{ opacity: 0.95 }}
                    >
                        <img src={lifeWalking} alt="Friends laughing along street" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </motion.div>

                    {/* Grid item 2 (Quote) */}
                    <motion.div
                        style={{
                            gridColumn: 'span 4',
                            gridRow: 'span 1',
                            overflow: 'hidden',
                            borderRadius: '4px',
                            background: '#e3dfd6',
                            minHeight: isMobile ? '200px' : 'auto'
                        }}
                    >
                        <div style={{ padding: '2rem', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                            <p className="text-serif" style={{ fontSize: '1.5rem', fontStyle: 'italic' }}>
                                "The fabric softens with every wash, just like memories."
                            </p>
                        </div>
                    </motion.div>

                    {/* Grid item 3 (Detail - Tea) */}
                    <motion.div
                        style={{
                            gridColumn: 'span 4',
                            gridRow: 'span 1',
                            overflow: 'hidden',
                            borderRadius: '4px',
                            minHeight: isMobile ? '300px' : 'auto'
                        }}
                    >
                        <img src={lifeDetail} alt="Hand holding tea cup" style={{ width: '100%', height: '100%', objectFit: 'cover', transform: isMobile ? 'scale(1)' : 'scale(1.5)' }} />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
