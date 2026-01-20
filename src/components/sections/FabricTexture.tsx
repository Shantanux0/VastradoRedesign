import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import textureImg from '../../assets/texture.png';

export const FabricTexture = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);

    return (
        <section ref={ref} style={{ position: 'relative', height: '80vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <motion.div
                style={{
                    position: 'absolute',
                    top: '-20%',
                    left: 0,
                    width: '100%',
                    height: '140%',
                    backgroundImage: `url(${textureImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    y
                }}
            />

            {/* Overlay */}
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.2)' }} />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{ position: 'relative', zIndex: 1, textAlign: 'center', color: '#fff', maxWidth: '600px', padding: '0 2rem' }}
            >
                <h3 className="text-serif" style={{ fontSize: '3.5rem', marginBottom: '1rem', textShadow: '0 4px 10px rgba(0,0,0,0.2)' }}>
                    Pure Cotton. Pure Comfort.
                </h3>
                <p className="text-sans" style={{ fontSize: '1.2rem', letterSpacing: '0.05em', opacity: 0.9 }}>
                    Feel the breath of the fabric on your skin.
                </p>
            </motion.div>
        </section>
    );
};
