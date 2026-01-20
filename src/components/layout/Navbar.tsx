import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingBag, User } from 'lucide-react';
import { SearchModal } from '../modals/SearchModal';
import { CartSidebar } from '../modals/CartSidebar';
import { Hamburger } from '../Hamburger';

export const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const handleLogoClick = (e: React.MouseEvent) => {
        e.preventDefault();
        navigate('/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Check if we are on an internal page (Shop/Story)
    const isInternalPage = location.pathname === '/shop' || location.pathname === '/story';

    // Handle Scroll Effect
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock Body Scroll when Menu is Open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto'; // or '' to reset
        }
        return () => { document.body.style.overflow = 'auto'; };
    }, [isMobileMenuOpen]);

    // Determine Nav Style
    // Home: Transparent -> Solid on scroll
    // Internal: Always Solid (or transparent -> solid if desired, but let's stick to user preference for stability)
    // Actually, user liked the "Adaptive" fix.
    // Let's make it:
    // Home: Transparent (white text, difference blend) -> Solid White (dark text) on scroll
    // Internal: Solid White (dark text) always

    // Glassmorphism: Lighter opacity + Stronger Blur for "Merging" effect
    // Note: We keep 'normal' on scroll to ensure text readability against the glass. 
    // If we want difference blend on Home HERO only (not scrolled), we should check !isScrolled

    // Final Mix Blend Logic: ALWAYS Normal. 'Difference' is too unpredictable.
    const finalMixBlend = 'normal';

    // Text Color Logic:
    // Home + Top = White
    // Scrolled OR Internal = Dark
    const isHomeTop = !isInternalPage && !isScrolled && !isMobileMenuOpen;
    const finalTextColor = isHomeTop ? '#fff' : '#3E3B36';

    // Background Logic:
    // Home + Top = Subtle Gradient for readability
    // Scrolled / Internal = Glass
    const glassBackground = 'rgba(245, 242, 235, 0.6)';
    const gradientBackground = 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%)';

    const finalBackground = isMobileMenuOpen ? 'transparent' : (isHomeTop ? gradientBackground : glassBackground);
    const finalBackdrop = (isHomeTop || isMobileMenuOpen) ? 'none' : 'blur(20px) saturate(180%)';

    return (
        <>
            <motion.nav
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    padding: '1.5rem 5%',
                    zIndex: 105, // Higher than overlay
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: finalBackground,
                    backdropFilter: finalBackdrop,
                    mixBlendMode: finalMixBlend as any,
                    color: finalTextColor,
                    transition: 'all 0.5s ease' // Slower transition for gradient
                }}
            >
                {/* Logo */}
                <Link
                    to="/"
                    onClick={handleLogoClick}
                    className="text-serif"
                    style={{ fontSize: '1.5rem', fontWeight: 600, letterSpacing: '1px', textDecoration: 'none', color: 'inherit', zIndex: 106 }}
                >
                    VASTRADO
                </Link>

                {/* Desktop Links */}
                <div className="desktop-nav desktop-only" style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
                    <NavLinks textColor={finalTextColor} />
                </div>

                {/* Icons & Mobile Menu Toggle */}
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', zIndex: 106 }}>
                    <Search size={20} style={{ cursor: 'pointer' }} onClick={() => setIsSearchOpen(true)} />
                    <ShoppingBag size={20} style={{ cursor: 'pointer' }} onClick={() => setIsCartOpen(true)} />
                    <Link to="/profile" className="desktop-only">
                        <User size={20} style={{ cursor: 'pointer' }} />
                    </Link>

                    {/* Mobile Menu Button */}
                    <div className="mobile-only">
                        <Hamburger
                            isOpen={isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            color={finalTextColor}
                        />
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100vw',
                            height: '100vh',
                            background: '#F5F2EB',
                            zIndex: 102,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '8rem 2rem 2rem 2rem'
                        }}
                    >
                        {/* Top Section - Navigation */}
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.5rem',
                            alignItems: 'center',
                            width: '100%'
                        }}>
                            {/* Search Bar */}
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setIsSearchOpen(true);
                                }}
                                style={{
                                    width: '100%',
                                    maxWidth: '400px',
                                    padding: '0.9rem 1.2rem',
                                    background: '#fff',
                                    border: '1px solid #D9D5CA',
                                    borderRadius: '50px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    cursor: 'pointer',
                                    marginBottom: '1rem'
                                }}
                            >
                                <Search size={18} color="#7A7670" />
                                <span style={{
                                    fontSize: '0.9rem',
                                    color: '#7A7670',
                                    fontFamily: 'var(--font-sans)'
                                }}>
                                    Search for products...
                                </span>
                            </motion.div>

                            <MobileLink to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</MobileLink>
                            <MobileLink to="/shop" onClick={() => setIsMobileMenuOpen(false)}>Shop</MobileLink>
                            <MobileLink to="/collections" onClick={() => setIsMobileMenuOpen(false)}>Collections</MobileLink>
                            <MobileLink to="/story" onClick={() => setIsMobileMenuOpen(false)}>Story</MobileLink>
                            <MobileLink to="/profile" onClick={() => setIsMobileMenuOpen(false)}>My Account</MobileLink>
                        </div>

                        {/* Bottom Section - Vastrado Branding */}
                        <Link
                            to="/"
                            onClick={(e) => {
                                handleLogoClick(e);
                                setIsMobileMenuOpen(false);
                            }}
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                style={{
                                    textAlign: 'center',
                                    borderTop: '1px solid #D9D5CA',
                                    paddingTop: '2rem',
                                    width: '100%',
                                    maxWidth: '400px',
                                    cursor: 'pointer'
                                }}
                            >
                                <h2 className="text-serif" style={{
                                    fontSize: '2rem',
                                    fontWeight: 600,
                                    color: '#3E3B36',
                                    marginBottom: '0.5rem',
                                    letterSpacing: '2px'
                                }}>
                                    VASTRADO
                                </h2>
                                <p className="text-serif" style={{
                                    fontSize: '0.95rem',
                                    fontStyle: 'italic',
                                    color: '#6B4E3D',
                                    marginBottom: '0.75rem'
                                }}>
                                    Rooted in Tradition, Woven with Love
                                </p>
                                <div style={{
                                    display: 'flex',
                                    gap: '0.5rem',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <div style={{
                                        width: '30px',
                                        height: '1px',
                                        background: '#C9A96E'
                                    }} />
                                    <span style={{
                                        fontSize: '0.7rem',
                                        color: '#A89F91',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.1em'
                                    }}>
                                        Indian Heritage
                                    </span>
                                    <div style={{
                                        width: '30px',
                                        height: '1px',
                                        background: '#C9A96E'
                                    }} />
                                </div>
                            </motion.div>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Modals */}
            <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
            <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </>
    );
};

const NavLinks = ({ textColor }: { textColor: string }) => (
    <>
        <Link to="/shop" style={{ textDecoration: 'none', color: textColor, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem' }}>Shop All</Link>
        <Link to="/collections" style={{ textDecoration: 'none', color: textColor, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem' }}>Collections</Link>
        <Link to="/story" style={{ textDecoration: 'none', color: textColor, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem' }}>Story</Link>
    </>
);

const MobileLink = ({ to, children, onClick }: any) => (
    <Link
        to={to}
        onClick={onClick}
        className="text-serif"
        style={{
            fontSize: '2rem',
            color: '#3E3B36',
            textDecoration: 'none'
        }}
    >
        {children}
    </Link>
);
