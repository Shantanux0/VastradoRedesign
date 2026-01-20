import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Mock Images for other categories (since original list was only shirts)
// In a real app, these would come from the backend/database
// Real Data scraped from Vastrado
// Real Data scraped from Vastrado
const products = [
    // Scraped Shirts
    {
        "title": "Versatile Navy & Copper Denim Plaid Checks Shirt",
        "price": "₹ 799",
        "imageUrl": "https://www.vastrado.com/cdn/shop/files/1_756cdf30-b1f6-4182-a697-733863798670.jpg?v=1768896465",
        "productUrl": "https://www.vastrado.com/products/versatile-navy-copper-denim-plaid-checks-shirt-ms7766a",
        "category": "Shirts"
    },
    {
        "title": "Duskwind Mauve Slub Oversized Side-Slit Button Crop Shirt",
        "price": "₹ 759",
        "imageUrl": "https://www.vastrado.com/cdn/shop/files/1_350bab54-bc2b-4b1a-bd66-2fd8553619ab.jpg?v=1768896137",
        "productUrl": "https://www.vastrado.com/products/duskwind-mauve-slub-oversized-side-slit-button-crop-shirt-ms7081a",
        "category": "Shirts"
    },
    {
        "title": "Solid Camel Beige Statement Shirt",
        "price": "₹ 659",
        "imageUrl": "https://www.vastrado.com/cdn/shop/files/1_e354ae49-cf45-4fdd-976d-36ce34c22abb.jpg?v=1768560351",
        "productUrl": "https://www.vastrado.com/products/solid-camel-beige-statement-shirt-ms8294a",
        "category": "Shirts"
    },
    {
        "title": "Ink Black Floral Jacquard Printed Shirt",
        "price": "₹ 799",
        "imageUrl": "https://www.vastrado.com/cdn/shop/files/1_ac3935b2-3833-4371-b810-413aac683e52.jpg?v=1768560487",
        "productUrl": "https://www.vastrado.com/products/ink-black-floral-jacquard-printed-shirt-ms8284a",
        "category": "Shirts"
    },
    {
        "title": "Peach & Black Static Brushed Corduroy Boxy Fit Crop Overshirt",
        "price": "₹ 899",
        "imageUrl": "https://www.vastrado.com/cdn/shop/files/1_8e6cd282-f9b7-46ab-84d2-491a4e5ce80c.jpg?v=1768560549",
        "productUrl": "https://www.vastrado.com/products/peach-black-static-brushed-corduroy-boxy-fit-crop-overshirt-ms8243a",
        "category": "Shirts"
    },
    {
        "title": "Warm Beige Checks Fine-Weave Boxy Fit Crop Shirt",
        "price": "₹ 799",
        "imageUrl": "https://www.vastrado.com/cdn/shop/files/1_dfbd68ca-ee98-40f6-8eff-2c8dd3e6b76d.jpg?v=1768560659",
        "productUrl": "https://www.vastrado.com/products/warm-beige-checks-fine-weave-boxy-fit-crop-shirt-ms8241a",
        "category": "Shirts"
    },

    // Existing Kurtas
    {
        "title": "Deep Brown Everyday Linen Kurta",
        "price": "₹ 859",
        "imageUrl": "https://www.vastrado.com/cdn/shop/files/1_7e36ba51-198f-4741-aa11-e87e176ba413.jpg?v=1768305397",
        "productUrl": "https://www.vastrado.com/products/deep-brown-everyday-linen-kurta-mp7927b",
        "category": "Kurtas"
    },
    {
        "title": "Timeless Navy Seersucker Kurta",
        "price": "₹ 699",
        "imageUrl": "https://www.vastrado.com/cdn/shop/files/1_6cc5fe43-123a-494f-9b64-e43bf87e52a4.jpg?v=1767611645",
        "productUrl": "https://www.vastrado.com/products/timeless-navy-seersucker-kurta-mk7069a",
        "category": "Kurtas"
    },
    {
        "title": "Minimalist Beige Multi-Stripe Burlap Linen Blend Kurta",
        "price": "₹ 759",
        "imageUrl": "https://www.vastrado.com/cdn/shop/files/1_2562be98-9ae3-4cf1-aeaf-ac7f7a31c4a2.jpg?v=1766737284",
        "productUrl": "https://www.vastrado.com/products/minimalist-beige-multi-stripe-burlap-linen-blend-kurta-mk7948a",
        "category": "Kurtas"
    },
    {
        "title": "Minimal Night Blue Line Weave Kurta",
        "price": "₹ 699",
        "imageUrl": "https://www.vastrado.com/cdn/shop/files/1_68c696b7-064e-4e37-a1cc-5f449489fa76.jpg?v=1766052674",
        "productUrl": "https://www.vastrado.com/products/minimal-night-blue-line-weave-kurta-mk7953a",
        "category": "Kurtas"
    },
    {
        "title": "Detailed Ash Grey Jacquard Grace Kurta",
        "price": "₹ 699",
        "imageUrl": "https://www.vastrado.com/cdn/shop/files/1_4c107a17-5f04-4214-9516-663988a4657e.jpg?v=1765885739",
        "productUrl": "https://www.vastrado.com/products/detailed-ash-grey-jacquard-grace-kurta-mk7959a",
        "category": "Kurtas"
    },
    {
        "title": "Classic Beige Leaf Printed Kurta",
        "price": "₹ 699",
        "imageUrl": "https://www.vastrado.com/cdn/shop/files/1_ad579e4f-e74f-4fcd-bfcd-981a3a939033.jpg?v=1765878698",
        "productUrl": "https://www.vastrado.com/products/classic-beige-leaf-printed-kurta-mk7952a",
        "category": "Kurtas"
    },

    // Existing Bottoms
    {
        "title": "Beige & Brown Seersucker Stripes Straight-Fit Trousers",
        "price": "₹ 859",
        "imageUrl": "https://www.vastrado.com/cdn/shop/files/1_ede0ab0f-d984-4e39-ad47-38e0b8fc4759.jpg?v=1768895907",
        "productUrl": "https://www.vastrado.com/products/beige-brown-seersucker-stripes-straight-fit-trousers-mp8028a",
        "category": "Bottoms"
    },
    {
        "title": "Rouge Pink Wide-Leg Crepe Trousers",
        "price": "₹ 1,074",
        "imageUrl": "https://www.vastrado.com/cdn/shop/files/1_b9518637-db9e-42b4-bb0d-742d042f3d60.jpg?v=1768310518",
        "productUrl": "https://www.vastrado.com/products/rouge-pink-wide-leg-crepe-trousers-mp7927b",
        "category": "Bottoms"
    },
    {
        "title": "Solid Stone Beige Tapered Trousers",
        "price": "₹ 949",
        "imageUrl": "https://www.vastrado.com/cdn/shop/files/1_0c113bb5-b96a-42a9-88ca-7ee38cfba4c3.jpg?v=1768310527",
        "productUrl": "https://www.vastrado.com/products/solid-stone-beige-tapered-trousers-mp8041c",
        "category": "Bottoms"
    },
    {
        "title": "Death Valley Beige Corduroy Tapered Trousers",
        "price": "₹ 1,074",
        "imageUrl": "https://www.vastrado.com/cdn/shop/files/2_357cc463-70e7-46f2-b734-554877831bf4.jpg?v=1768309839",
        "productUrl": "https://www.vastrado.com/products/death-valley-beige-corduroy-tapered-trousers-mp8037c",
        "category": "Bottoms"
    },
    {
        "title": "Charcoal Grey Slub Textured Wide-Leg Trousers",
        "price": "₹ 999",
        "imageUrl": "https://www.vastrado.com/cdn/shop/files/1_a17751c0-6e3f-461c-83d4-b9631aa72276.jpg?v=1768309384",
        "productUrl": "https://www.vastrado.com/products/charcoal-grey-slub-textured-wide-leg-trousers-mp7922b",
        "category": "Bottoms"
    },
    {
        "title": "Classic Black Double Cloth Straight-Fit Trousers",
        "price": "₹ 999",
        "imageUrl": "https://www.vastrado.com/cdn/shop/files/1_18fba16f-91cd-4c14-b5bf-163d18c5d929.jpg?v=1767941840",
        "productUrl": "https://www.vastrado.com/products/classic-black-double-cloth-straight-fit-trousers-mp7917a",
        "category": "Bottoms"
    }
];

const filters = ['All', 'Shirts', 'Kurtas', 'Bottoms'];

export const Shop = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [cartCount, setCartCount] = useState(0);

    const filteredProducts = activeFilter === 'All'
        ? products
        : products.filter(p => p.category === activeFilter);

    const addToCart = (e: any, title: string) => {
        e.preventDefault();
        e.stopPropagation();
        setCartCount(prev => prev + 1);
        // In a real app, this would use Context or Redux
        alert(`Added ${title} to cart! Total: ${cartCount + 1}`);
    };

    return (
        <section style={{
            paddingTop: '120px',
            paddingBottom: '80px',
            background: '#F5F2EB',
            minHeight: '100vh',
            width: '100vw'
        }}>
            <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="text-serif"
                        style={{
                            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                            fontWeight: 400,
                            color: '#3E3B36',
                            marginBottom: '1rem'
                        }}
                    >
                        Shop All
                    </motion.h1>

                    {/* Filter Tabs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '1rem',
                            flexWrap: 'wrap',
                            marginTop: '2rem'
                        }}
                    >
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                style={{
                                    background: activeFilter === filter ? '#3E3B36' : 'transparent',
                                    color: activeFilter === filter ? '#F5F2EB' : '#3E3B36',
                                    border: '1px solid #3E3B36',
                                    padding: '0.6rem 1.8rem',
                                    borderRadius: '50px',
                                    fontSize: '0.9rem',
                                    cursor: 'pointer',
                                    letterSpacing: '0.05em',
                                    transition: 'all 0.3s ease',
                                    fontFamily: 'var(--font-sans)'
                                }}
                            >
                                {filter}
                            </button>
                        ))}
                    </motion.div>
                </div>

                {/* Product Grid */}
                <motion.div
                    layout
                    className="shop-product-grid"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredProducts.map((product) => (
                            <motion.div // Changed to div to handle inner button better
                                key={product.title} // Use unique key
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                style={{ display: 'flex', flexDirection: 'column' }}
                            >
                                <a href={product.productUrl} style={{ textDecoration: 'none', color: 'inherit', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    {/* Image Container */}
                                    <div style={{
                                        background: '#f0ede6',
                                        borderRadius: '8px',
                                        overflow: 'hidden',
                                        marginBottom: '1rem',
                                        aspectRatio: '0.8',
                                        position: 'relative'
                                    }}>
                                        <motion.img
                                            src={product.imageUrl}
                                            alt={product.title}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                mixBlendMode: 'multiply' // Blend image nicely with background
                                            }}
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.6, ease: "easeOut" }}
                                        />
                                        {/* Category Badge */}
                                        <div style={{
                                            position: 'absolute',
                                            top: '10px',
                                            left: '10px',
                                            background: 'rgba(255,255,255,0.7)',
                                            backdropFilter: 'blur(4px)',
                                            padding: '0.3rem 0.8rem',
                                            borderRadius: '20px',
                                            fontSize: '0.7rem',
                                            color: '#3E3B36',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em'
                                        }}>
                                            {product.category}
                                        </div>
                                    </div>

                                    {/* Details */}
                                    <div style={{ paddingLeft: '0.5rem', flex: 1 }}>
                                        <h3 className="text-sans" style={{
                                            fontSize: '0.9rem',
                                            fontWeight: 500,
                                            color: '#3E3B36',
                                            marginBottom: '0.5rem',
                                            letterSpacing: '0.02em',
                                            lineHeight: 1.4
                                        }}>
                                            {product.title}
                                        </h3>
                                        <span className="text-serif" style={{
                                            fontSize: '1.1rem',
                                            color: '#6B4E3D',
                                            fontStyle: 'italic',
                                            display: 'block',
                                            marginBottom: '1rem'
                                        }}>
                                            {product.price}
                                        </span>
                                    </div>
                                </a>

                                {/* Add to Cart Button */}
                                <button
                                    onClick={(e) => addToCart(e, product.title)}
                                    style={{
                                        width: '100%',
                                        padding: '0.8rem',
                                        background: 'transparent',
                                        border: '1px solid #3E3B36',
                                        color: '#3E3B36',
                                        borderRadius: '4px',
                                        cursor: 'pointer',
                                        textTransform: 'uppercase',
                                        fontSize: '0.8rem',
                                        letterSpacing: '0.1em',
                                        marginTop: 'auto',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.background = '#3E3B36';
                                        e.currentTarget.style.color = '#fff';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.background = 'transparent';
                                        e.currentTarget.style.color = '#3E3B36';
                                    }}
                                >
                                    Add to Cart
                                </button>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

            </div>
        </section>
    );
};
