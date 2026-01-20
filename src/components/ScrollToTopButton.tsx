import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={scrollToTop}
                    style={{
                        position: 'fixed' as const,
                        bottom: '1.5rem',
                        right: '1.5rem',
                        width: '44px',
                        height: '44px',
                        borderRadius: '12px',
                        background: '#3E3B36',
                        border: 'none',
                        cursor: 'pointer',
                        zIndex: 1000,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 12px rgba(62, 59, 54, 0.2)',
                        padding: 0
                    }}
                    aria-label="Scroll to top"
                >
                    {/* Simple Arrow */}
                    <motion.svg
                        animate={{ y: [-1, 1, -1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#F5F2EB"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M12 19V5M5 12l7-7 7 7" />
                    </motion.svg>

                    {/* Subtle accent line */}
                    <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '20px',
                        height: '2px',
                        background: '#C9A96E',
                        borderRadius: '2px'
                    }} />
                </motion.button>
            )}
        </AnimatePresence>
    );
};
