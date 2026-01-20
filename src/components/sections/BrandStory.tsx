import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import storyImg from '../../assets/story.png';

export const BrandStory = () => {
    return (
        <section style={{ padding: 'var(--spacing-xl) 0', background: 'var(--color-bg)' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-xl)', alignItems: 'center' }}>
                {/* Left Image */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    style={{ position: 'relative' }}
                >
                    <div style={{ overflow: 'hidden', borderRadius: '4px' }}>
                        <img src={storyImg} alt="Quiet Indian courtyard" style={{ width: '100%', height: 'auto', display: 'block', transform: 'scale(1.05)' }} />
                    </div>
                    {/* Decorative line */}
                    <div style={{ position: 'absolute', top: '-20px', left: '-20px', width: '100%', height: '100%', border: '1px solid var(--color-gold)', zIndex: -1 }} />
                </motion.div>

                {/* Right Text */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-serif"
                        style={{ fontSize: '3rem', fontWeight: 400, color: 'var(--color-text)' }}
                    >
                        Dreamt in India, <br /> Made in India.
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 }}
                        style={{ width: '50px', height: '1px', background: 'var(--color-accent)' }}
                    />

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-serif"
                        style={{ fontSize: '1.25rem', lineHeight: 1.6, color: 'rgba(62, 59, 54, 0.9)' }}
                    >
                        Led by Mr. Tushar & Mr. Vishwanshu Agarwal, Vastrado is a tribute to India's rich textile heritage. We blend traditional artistry with modern confidence.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="text-sans"
                        style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(62, 59, 54, 0.7)' }}
                    >
                        More than just a fashion label, Vastrado is a movement towards confident, effortless dressing. From intricate stitching to superior comfort, every piece is designed to make an impression. Proudly made in India, styled for the world.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.8 }}
                        style={{ marginTop: '0.5rem' }}
                    >
                        <Link to="/shop" style={{ textDecoration: 'none' }}>
                            <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: '#2c2a26', color: '#fff' }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    padding: '1rem 3rem',
                                    background: '#3E3B36',
                                    color: '#F5F2EB',
                                    border: 'none',
                                    borderRadius: '50px',
                                    fontSize: '0.9rem',
                                    fontWeight: 500,
                                    letterSpacing: '0.1em',
                                    textTransform: 'uppercase',
                                    cursor: 'pointer',
                                    fontFamily: 'var(--font-sans)',
                                    transition: 'background-color 0.3s ease'
                                }}
                            >
                                Shop Now
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
