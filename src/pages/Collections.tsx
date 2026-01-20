import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

// Using existing category assets
import kurtaImg from '../assets/category_1.png';
import shirtImg from '../assets/category_shirt_stack.png';
import bottomImg from '../assets/category_bottoms.png';

// Additional assets for new collections
import radImg from '../assets/product_overshirt_sunset.png';
import texturedImg from '../assets/texture.png';
import printedImg from '../assets/printed_shirt.webp';
import flannelImg from '../assets/flannel_shirt.webp';

const collections = [
    {
        id: 'kurtas',
        title: 'The Royal Kurtas',
        description: 'Timeless elegance for every occasion.',
        img: kurtaImg,
    },
    {
        id: 'shirts',
        title: 'Linen Shirts',
        description: 'Breathable luxury suited for the modern day.',
        img: shirtImg,
    },
    {
        id: 'bottoms',
        title: 'Essential Bottoms',
        description: 'Crafted for comfort, styled for you.',
        img: bottomImg,
    },
    // New Collections
    {
        id: 'rad',
        title: 'THE RAD COLLECTION',
        description: 'Bold choices for the bold soul.',
        img: radImg,
    },
    {
        id: 'flannels',
        title: 'FLANNEL SHIRTS',
        description: 'Warm, rugged, and unmistakably classic.',
        img: flannelImg,
    },
    {
        id: 'textured',
        title: 'TEXTURED SHIRTS',
        description: 'Feel the difference in every thread.',
        img: texturedImg,
    },
    {
        id: 'printed',
        title: 'PRINTED SHIRTS',
        description: 'Art you can wear. Vibrant and alive.',
        img: printedImg,
    }
];

// Simple check for touch/mobile device
const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches;

const CollectionCard = ({ item, index }: any) => {
    return (
        <Link to="/shop" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
            <motion.div
                initial="idle"
                whileInView={isMobile ? "active" : undefined} // Mobile: Activate on scroll
                whileHover={!isMobile ? "active" : undefined} // Desktop: Activate on hover
                viewport={{ once: true, margin: "-10%" }}
                animate="idle" // Ensure idle state is base
                transition={{ duration: 0.8, delay: index * 0.2 }}
                style={{ position: 'relative', overflow: 'hidden', borderRadius: '4px', cursor: 'pointer' }}
            >
                {/* Image Container */}
                <div style={{ position: 'relative', width: '100%', aspectRatio: '3/4', overflow: 'hidden' }}>
                    <motion.img
                        src={item.img}
                        alt={item.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        variants={{
                            active: { scale: 1.05, filter: 'grayscale(0%)' },
                            idle: { scale: 1, filter: 'grayscale(100%)' }
                        }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                    {/* Dark Overlay */}
                    <motion.div
                        style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.2)' }}
                        variants={{
                            active: { opacity: 0.4 },
                            idle: { opacity: 0.1 }
                        }}
                        transition={{ duration: 0.3 }}
                    />
                </div>

                {/* Content Overlay - Bottom */}
                <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                    <h3 className="text-serif" style={{ fontSize: '1.75rem', marginBottom: '0.5rem', color: '#3E3B36' }}>
                        {item.title}
                    </h3>
                    <p className="text-sans" style={{ fontSize: '0.9rem', color: '#5A564C', opacity: 0.8, letterSpacing: '0.05em', marginBottom: '1rem' }}>
                        {item.description}
                    </p>

                    <motion.button
                        style={{
                            background: 'transparent',
                            border: '1px solid #3E3B36',
                            borderRadius: '50px',
                            padding: '0.8rem 2rem',
                            fontSize: '0.8rem',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            color: '#3E3B36',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}
                        whileHover={{ background: '#3E3B36', color: '#fff' }}
                    >
                        Shop Now <ArrowUpRight size={16} />
                    </motion.button>
                </div>
            </motion.div>
        </Link>
    );
};

export const Collections = () => {
    return (
        <div style={{ background: '#F5F2EB', minHeight: '100vh', paddingTop: '120px', paddingBottom: '4rem' }}>
            <div className="container">
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-serif"
                        style={{ fontSize: '3.5rem', color: '#3E3B36', marginBottom: '1rem' }}
                    >
                        Our Collections
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-serif"
                        style={{ fontSize: '1.2rem', fontStyle: 'italic', color: '#5A564C' }}
                    >
                        "Tradition is not the worship of ashes, but the preservation of fire."
                    </motion.p>
                </div>

                {/* Grid Layout */}
                <div className="collections-grid">
                    {collections.map((item, index) => (
                        <CollectionCard key={item.id} item={item} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};
