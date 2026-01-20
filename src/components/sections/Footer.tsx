export const Footer = () => {
    return (
        <footer style={{ background: '#2c2a26', color: '#e6e2d8', padding: 'clamp(3rem, 5vw, 8rem) 0', marginTop: 'var(--spacing-xl)' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 className="text-serif" style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', fontWeight: 400, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>VASTRADO</h2>
                <p className="text-serif" style={{ fontSize: '1.2rem', marginBottom: '3rem', fontStyle: 'italic', opacity: 0.8 }}>
                    Thank you for being part of our journey.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                    <a href="#" style={{ textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em' }}>Instagram</a>
                    <a href="#" style={{ textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em' }}>Facebook</a>
                    <a href="#" style={{ textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em' }}>Pinterest</a>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', fontSize: '0.8rem', opacity: 0.4 }}>
                    © 2026 Vastrado. crafted with care.
                </div>
            </div>
        </footer>
    );
};
