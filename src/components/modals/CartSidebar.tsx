import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';

interface CartSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

const initialCartItems: CartItem[] = [
    { id: 1, name: 'Deep Brown Kurta', price: 859, quantity: 1, image: 'https://www.vastrado.com/cdn/shop/files/1_7e36ba51-198f-4741-aa11-e87e176ba413.jpg?v=1768305397' },
    { id: 2, name: 'Solid Camel Shirt', price: 659, quantity: 2, image: 'https://www.vastrado.com/cdn/shop/files/1_e354ae49-cf45-4fdd-976d-36ce34c22abb.jpg?v=1768560351' },
];

export const CartSidebar = ({ isOpen, onClose }: CartSidebarProps) => {
    const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);

    const updateQuantity = (id: number, delta: number) => {
        setCartItems(prev =>
            prev.map(item =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                    : item
            )
        );
    };

    const removeItem = (id: number) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = 99;
    const total = subtotal + shipping;

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

                    {/* Sidebar */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            right: 0,
                            width: '90%',
                            maxWidth: '450px',
                            height: '100vh',
                            background: '#F5F2EB',
                            zIndex: 201,
                            display: 'flex',
                            flexDirection: 'column',
                            boxShadow: '-10px 0 40px rgba(0,0,0,0.2)'
                        }}
                    >
                        {/* Header */}
                        <div style={{
                            padding: '1.5rem 2rem',
                            borderBottom: '1px solid #D9D5CA',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <h3 className="text-serif" style={{ fontSize: '1.5rem', color: '#3E3B36' }}>
                                Your Cart ({cartItems.length})
                            </h3>
                            <X size={24} onClick={onClose} style={{ cursor: 'pointer', color: '#3E3B36' }} />
                        </div>

                        {/* Cart Items */}
                        <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem 2rem' }}>
                            {cartItems.length > 0 ? (
                                cartItems.map((item) => (
                                    <div
                                        key={item.id}
                                        style={{
                                            display: 'flex',
                                            gap: '1rem',
                                            marginBottom: '1.5rem',
                                            paddingBottom: '1.5rem',
                                            borderBottom: '1px solid #E5E1D8'
                                        }}
                                    >
                                        {/* Image */}
                                        <div style={{
                                            width: '80px',
                                            height: '100px',
                                            borderRadius: '8px',
                                            overflow: 'hidden',
                                            background: '#E5E1D8',
                                            flexShrink: 0
                                        }}>
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                            />
                                        </div>

                                        {/* Details */}
                                        <div style={{ flex: 1 }}>
                                            <h4 className="text-sans" style={{
                                                fontSize: '0.95rem',
                                                color: '#3E3B36',
                                                marginBottom: '0.5rem',
                                                lineHeight: 1.3
                                            }}>
                                                {item.name}
                                            </h4>
                                            <p className="text-serif" style={{
                                                fontSize: '1rem',
                                                color: '#6B4E3D',
                                                fontStyle: 'italic',
                                                marginBottom: '0.75rem'
                                            }}>
                                                ₹ {item.price}
                                            </p>

                                            {/* Quantity Controls */}
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                <button
                                                    onClick={() => updateQuantity(item.id, -1)}
                                                    style={{
                                                        width: '28px',
                                                        height: '28px',
                                                        border: '1px solid #3E3B36',
                                                        borderRadius: '4px',
                                                        background: 'transparent',
                                                        cursor: 'pointer',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center'
                                                    }}
                                                >
                                                    <Minus size={14} color="#3E3B36" />
                                                </button>
                                                <span style={{ minWidth: '30px', textAlign: 'center', fontSize: '0.9rem' }}>
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, 1)}
                                                    style={{
                                                        width: '28px',
                                                        height: '28px',
                                                        border: '1px solid #3E3B36',
                                                        borderRadius: '4px',
                                                        background: 'transparent',
                                                        cursor: 'pointer',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center'
                                                    }}
                                                >
                                                    <Plus size={14} color="#3E3B36" />
                                                </button>
                                                <button
                                                    onClick={() => removeItem(item.id)}
                                                    style={{
                                                        marginLeft: 'auto',
                                                        background: 'transparent',
                                                        border: 'none',
                                                        cursor: 'pointer',
                                                        padding: '0.25rem'
                                                    }}
                                                >
                                                    <Trash2 size={18} color="#8B7E74" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div style={{ textAlign: 'center', padding: '3rem 0', color: '#7A7670' }}>
                                    <p>Your cart is empty</p>
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        {cartItems.length > 0 && (
                            <div style={{
                                padding: '1.5rem 2rem',
                                borderTop: '1px solid #D9D5CA',
                                background: '#EFEAE0'
                            }}>
                                <div style={{ marginBottom: '1rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span style={{ fontSize: '0.9rem', color: '#5A564C' }}>Subtotal</span>
                                        <span style={{ fontSize: '0.9rem', color: '#3E3B36' }}>₹ {subtotal}</span>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                        <span style={{ fontSize: '0.9rem', color: '#5A564C' }}>Shipping</span>
                                        <span style={{ fontSize: '0.9rem', color: '#3E3B36' }}>₹ {shipping}</span>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        paddingTop: '1rem',
                                        borderTop: '1px solid #D9D5CA'
                                    }}>
                                        <span className="text-serif" style={{ fontSize: '1.1rem', fontWeight: 600, color: '#3E3B36' }}>Total</span>
                                        <span className="text-serif" style={{ fontSize: '1.1rem', fontWeight: 600, color: '#3E3B36' }}>₹ {total}</span>
                                    </div>
                                </div>

                                <button
                                    style={{
                                        width: '100%',
                                        padding: '1rem',
                                        background: '#3E3B36',
                                        color: '#fff',
                                        border: 'none',
                                        borderRadius: '4px',
                                        fontSize: '0.9rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.1em',
                                        cursor: 'pointer',
                                        transition: 'background 0.3s'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.background = '#2D2A26'}
                                    onMouseLeave={(e) => e.currentTarget.style.background = '#3E3B36'}
                                >
                                    Proceed to Checkout
                                </button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
