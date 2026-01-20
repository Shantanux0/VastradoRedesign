import { motion } from 'framer-motion';
import categoryKurta from '../../assets/category_1.png'; // Keeping original kurta image
import categoryShirts from '../../assets/category_shirt_stack.png';
import categoryBottoms from '../../assets/category_bottoms.png';

const categories = [
    { id: 1, name: 'Kurtas', img: categoryKurta },
    { id: 2, name: 'Shirts', img: categoryShirts },
    { id: 3, name: 'Bottoms', img: categoryBottoms },
];

export const Categories = () => {
    return (
        <section style={{ padding: 'var(--spacing-xl) 0', background: 'var(--color-bg)' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--spacing-md)' }}>
                {categories.map((cat, i) => (
                    <motion.div
                        key={cat.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.2 }}
                        style={{ position: 'relative', cursor: 'pointer' }}
                        className="category-card"
                    >
                        <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '0.8' }}>
                            <motion.img
                                src={cat.img}
                                alt={cat.name}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.8 }}
                            />
                            {/* Overlay on hover could go here */}
                        </div>
                        <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                            <h3 className="text-serif" style={{ fontSize: '2rem', fontWeight: 400 }}>{cat.name}</h3>
                            <p className="text-sans" style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.5rem', opacity: 0.6 }}>View Collection</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
