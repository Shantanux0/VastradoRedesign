import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import productShirt from '../../assets/product_1.png'; // Original shirt
import productKurta from '../../assets/product_kurta_khadi.png';
import productTrousers from '../../assets/product_trousers_everyday.png';
import productOvershirt from '../../assets/product_overshirt_sunset.png';

const products = [
    { id: 1, name: 'Linen Breeze Shirt', price: '₹2,499', tag: 'Best for Summer', img: productShirt },
    { id: 2, name: 'Khadi Cotton Kurta', price: '₹3,299', tag: 'Handspun', img: productKurta },
    { id: 3, name: 'Everyday Trousers', price: '₹2,899', tag: 'Relaxed Fit', img: productTrousers },
    { id: 4, name: 'Sunset Overshirt', price: '₹3,999', tag: 'Evening Wear', img: productOvershirt },
];

export const FeaturedProducts = () => {
    const scrollRef = useRef(null);

    return (
        <section style={{ padding: 'var(--spacing-xl) 0', background: 'var(--color-bg)' }}>
            <div className="container" style={{ marginBottom: 'var(--spacing-md)', display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'space-between', alignItems: 'end' }}>
                <h2 className="text-serif" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>Essential Collection</h2>
                <motion.button whileHover={{ x: 10 }} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem', opacity: 0.7 }}>
                    View All <ArrowRight size={20} />
                </motion.button>
            </div>

            <div
                ref={scrollRef}
                style={{
                    display: 'flex',
                    gap: 'var(--spacing-md)',
                    overflowX: 'auto',
                    padding: '0 5% var(--spacing-md) 5%',
                    scrollSnapType: 'x mandatory',
                    scrollbarWidth: 'none', // Hide scrollbar Firefox
                    msOverflowStyle: 'none',  // Hide scrollbar IE
                }}
            >
                {products.map((product, i) => (
                    <motion.div
                        key={product.id}
                        style={{ minWidth: '280px', scrollSnapAlign: 'center', position: 'relative' }}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.1 }}
                    >
                        <div style={{ background: '#f0ede6', borderRadius: '12px', overflow: 'hidden', marginBottom: '1rem' }}>
                            <motion.img
                                src={product.img}
                                alt={product.name}
                                style={{ width: '100%', aspectRatio: '0.8', objectFit: 'cover' }}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.5 }}
                            />
                        </div>

                        {/* Handwriting notes */}
                        {product.tag && (
                            <span
                                className="text-serif"
                                style={{
                                    position: 'absolute',
                                    top: '1rem',
                                    left: '1rem',
                                    background: 'rgba(255,255,255,0.8)',
                                    padding: '0.2rem 0.8rem',
                                    borderRadius: '20px',
                                    fontSize: '0.9rem',
                                    fontStyle: 'italic'
                                }}
                            >
                                {product.tag}
                            </span>
                        )}

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <div>
                                <h4 className="text-serif" style={{ fontSize: '1.5rem', fontWeight: 500 }}>{product.name}</h4>
                                <p className="text-sans" style={{ fontSize: '1rem', opacity: 0.6 }}>{product.price}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
