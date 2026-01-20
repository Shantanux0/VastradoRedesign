import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroImg from '../../assets/hero.png';

export const Hero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={containerRef} style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
            {/* Background Image with Parallax */}
            <motion.div
                initial={{ scale: 1, filter: 'grayscale(100%)' }}
                animate={{ scale: 1.1, filter: 'grayscale(0%)' }}
                transition={{
                    scale: { duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" },
                    filter: { duration: 3, ease: "easeOut", delay: 0.5 }
                }}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '110%',
                    backgroundImage: `url(${heroImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    y
                }}
            />

            {/* Film Grain Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.05\'/%3E%3C/svg%3E")',
                pointerEvents: 'none',
                zIndex: 1
            }} />

            {/* Dark Gradient Overlay for text readability */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 100%)',
                zIndex: 1
            }} />

            {/* Content */}
            <motion.div
                style={{
                    position: 'relative',
                    zIndex: 2,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#fff',
                    textAlign: 'center',
                    opacity
                }}
            >
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                    className="text-serif"
                    style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', fontWeight: 400, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}
                >
                    VASTRADO
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                    className="text-sans"
                    style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', fontWeight: 300, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.9 }}
                >
                    Indian roots. Everyday wear.
                </motion.p>


            </motion.div>

            {/* Breathing Leaf Animation (Subtle CSS) */}
            <motion.div
                animate={{ scale: [1, 1.05, 1], opacity: [0.6, 0.8, 0.6] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: 'absolute',
                    bottom: '5%',
                    right: '5%',
                    width: '50px',
                    height: '50px',
                    zIndex: 2,
                    opacity: 0.7
                }}
            >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2.05 20.5a.5.5 0 0 1 .5-.5c.78.07 3.5.3 5.45-1.7 2.3-2.3 2.15-5.9 2-7.5.9 2.6 3.15 4.7 5.5 5.5 1.6.1 5.2.3 7.5-2 .35-.35 1-2.9 1-2.9s-2.55.65-2.9 1c-2.3 2.3-5.9 2.15-7.5 2C13.5 13.5 11.4 11.25 10.6 8.9c.15-1.6.3-5.2-2-7.5-.35-.35-2.9-1-2.9-1s.65 2.55 1 2.9c2.3 2.3 2.15 5.9 2 7.5-.9 2.6-3.15 4.7-5.5 5.5-1.6.1-5.2.3-7.5-2-.35-.35-1-2.9-1-2.9z" />
                </svg>
            </motion.div>
        </section>
    );
};
