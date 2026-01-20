import { motion } from 'framer-motion';
import loomImg from '../assets/story_loom.png'; // Updated authentic image
import heroImg from '../assets/hero.png';

export const Story = () => {
    // Heritage Pattern (SVG)
    const heritagePattern = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4c5a9' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;

    return (
        <section style={{ background: '#F5F2EB', minHeight: '100vh', width: '100vw', fontFamily: 'var(--font-serif)' }}>

            {/* Hero Section */}
            <div style={{ position: 'relative', height: '60vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                    backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center',
                    filter: 'sepia(30%) contrast(0.9) brightness(0.6)'
                }} />
                <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', color: '#fff' }}>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                        style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 400, letterSpacing: '0.05em' }}
                    >
                        The Legacy
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.3 }}
                        style={{ fontFamily: 'var(--font-sans)', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.9rem', color: '#EAE6DB' }}
                    >
                        Dreamt in India. Made in India.
                    </motion.p>
                </div>
            </div>

            {/* The Origins - Ethnic design with texture */}
            <div style={{ padding: '8rem 2rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                    backgroundImage: heritagePattern, backgroundSize: '60px'
                }} />

                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        style={{ padding: '10px', border: '1px solid #C4B294', borderRadius: '2px' }} // Framing
                    >
                        <img src={loomImg} alt="Indian Handloom" style={{ width: '100%', display: 'block', filter: 'sepia(15%)' }} />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#6B4E3D' }}>Born from the Soil</h2>
                        <p style={{ fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '1.5rem', color: '#3E3B36' }}>
                            Vastrado is more than just a brand; it is a quiet rebellion against the fast. Rooted deeply in India's rich textile heritage, we sought to bring back the dignity of the artisan and the soul of the fabric.
                        </p>
                        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', lineHeight: 1.8, color: '#A89F91' }}>
                            Every thread tells a story of generations. Of hands that weave rhythmically to the hum of the loom. Of colors birthed from the earth itself.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* The Founders - Royal vibe */}
            <div style={{ padding: '4rem 1.5rem', background: '#EAE6DB' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', marginBottom: '1rem', color: '#3E3B36' }}>The Visionaries</h2>
                        <div style={{ width: '60px', height: '2px', background: '#6B4E3D', margin: '0 auto 2rem' }} />
                        <p style={{ fontSize: 'clamp(1rem, 3vw, 1.5rem)', fontStyle: 'italic', marginBottom: '2rem', color: '#6B4E3D' }}>
                            "Fashion is not just what you wear, it's a statement of who you are."
                        </p>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#3E3B36' }}>
                            Led by <strong>Mr. Tushar Agarwal</strong> & <strong>Mr. Vishwanshu Agarwal</strong>, Vastrado was founded on a simple promise: to blend timeless Indian elegance with the confidence of the modern world.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Philosophy Grid */}
            <div style={{ padding: '6rem 1.5rem' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                    {[
                        { title: "Craftsmanship", desc: "Every stitch is a testament to the master artisans who dedicate their lives to perfection." },
                        { title: "Sustainability", desc: "We tread lightly on the earth, chosing natural fibers and slow production methods." },
                        { title: "Culture", desc: "We don't just sell clothes; we keep the vibrant tapestry of Indian culture alive." }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.2 }}
                            style={{ padding: '2rem', border: '1px solid #D6D1C4', textAlign: 'center' }}
                        >
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#6B4E3D' }}>{item.title}</h3>
                            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', lineHeight: 1.6, color: '#A89F91' }}>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

        </section>
    );
};
