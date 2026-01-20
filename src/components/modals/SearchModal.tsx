import { motion, AnimatePresence } from 'framer-motion';
import { X, Search as SearchIcon } from 'lucide-react';
import { useState } from 'react';

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const demoProducts = [
    { name: 'Deep Brown Kurta', price: '₹ 859', category: 'Kurtas' },
    { name: 'Navy Seersucker Kurta', price: '₹ 699', category: 'Kurtas' },
    { name: 'Solid Camel Shirt', price: '₹ 659', category: 'Shirts' },
    { name: 'Ink Black Floral Shirt', price: '₹ 799', category: 'Shirts' },
    { name: 'Stone Beige Trousers', price: '₹ 949', category: 'Bottoms' },
];

export const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredProducts = searchQuery
        ? demoProducts.filter(p =>
            p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.category.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : demoProducts;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            background: 'rgba(0,0,0,0.5)',
                            zIndex: 200,
                            backdropFilter: 'blur(4px)'
                        }}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            position: 'fixed',
                            top: '10%',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '90%',
                            maxWidth: '600px',
                            background: '#F5F2EB',
                            borderRadius: '12px',
                            padding: '2rem',
                            zIndex: 201,
                            boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
                        }}
                    >
                        {/* Header */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                            <h3 className="text-serif" style={{ fontSize: '1.5rem', color: '#3E3B36' }}>Search Products</h3>
                            <X size={24} onClick={onClose} style={{ cursor: 'pointer', color: '#3E3B36' }} />
                        </div>

                        {/* Search Input */}
                        <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
                            <SearchIcon
                                size={20}
                                style={{
                                    position: 'absolute',
                                    left: '1rem',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    color: '#5A564C'
                                }}
                            />
                            <input
                                type="text"
                                placeholder="Search for kurtas, shirts, bottoms..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                autoFocus
                                style={{
                                    width: '100%',
                                    padding: '1rem 1rem 1rem 3rem',
                                    border: '1px solid #C9C5BA',
                                    borderRadius: '8px',
                                    fontSize: '1rem',
                                    background: '#fff',
                                    outline: 'none',
                                    fontFamily: 'var(--font-sans)'
                                }}
                            />
                        </div>

                        {/* Results */}
                        <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                            {filteredProducts.length > 0 ? (
                                filteredProducts.map((product, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            padding: '1rem',
                                            borderBottom: '1px solid #E5E1D8',
                                            cursor: 'pointer',
                                            transition: 'background 0.2s'
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.background = '#E5E1D8'}
                                        onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                                    >
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <div>
                                                <p className="text-sans" style={{ fontSize: '0.95rem', color: '#3E3B36', marginBottom: '0.25rem' }}>
                                                    {product.name}
                                                </p>
                                                <span style={{ fontSize: '0.75rem', color: '#7A7670', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                                    {product.category}
                                                </span>
                                            </div>
                                            <span className="text-serif" style={{ fontSize: '1rem', color: '#6B4E3D', fontStyle: 'italic' }}>
                                                {product.price}
                                            </span>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p style={{ textAlign: 'center', padding: '2rem', color: '#7A7670' }}>
                                    No products found matching "{searchQuery}"
                                </p>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
