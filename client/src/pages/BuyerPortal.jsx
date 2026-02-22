import { useState } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import AnimatedBackground from '../components/AnimatedBackground';
import GlassCard from '../components/GlassCard';

const categories = [
    {
        id: 'grade-b',
        icon: '🏨',
        title: 'Grade B — Commercial Supply',
        desc: 'Quality produce for hotels, mess halls, food processing factories and wholesale vendors. Fresh, locally sourced within your radius.',
        tags: ['Hotels', 'Restaurants', 'Factories', 'Wholesale'],
        className: 'grade-b',
        accent: 'var(--green-glow)',
    },
    {
        id: 'grade-c',
        icon: '🐄',
        title: 'Grade C — Animal Feed',
        desc: 'Reliable, affordable feed for animal care centers, shelters and livestock farms. Sourced directly from local agricultural networks.',
        tags: ['Animal Shelters', 'Dairy Farms', 'Poultry', 'Livestock'],
        className: 'grade-c',
        accent: 'var(--gold-accent)',
    },
    {
        id: 'compost',
        icon: '🌱',
        title: 'Compost — Raw Material',
        desc: 'Organic waste converted to nutrient-rich compost. Perfect for composting companies, community gardens, and organic farming operations.',
        tags: ['Composting', 'Organic Farms', 'Gardens', 'Soil Health'],
        className: 'compost',
        accent: 'var(--compost-brown)',
    },
];

const sampleItems = [
    { icon: '🍅', name: 'Tomatoes — Grade B', farm: 'Sharma Farm, Nashik', distance: '23 km', grade: 'Grade B' },
    { icon: '🌾', name: 'Wheat — Grade C', farm: 'Patel Agro, Indore', distance: '67 km', grade: 'Grade C' },
    { icon: '🥕', name: 'Carrots — Grade B', farm: 'Green Valley, Pune', distance: '41 km', grade: 'Grade B' },
    { icon: '🍌', name: 'Bananas — Compost', farm: 'Kumar Plantation, Satara', distance: '55 km', grade: 'Compost' },
    { icon: '🥬', name: 'Spinach — Grade C', farm: 'Fresh Fields, Solapur', distance: '89 km', grade: 'Grade C' },
    { icon: '🍚', name: 'Rice — Grade B', farm: 'Deshmukh Farms, Kolhapur', distance: '32 km', grade: 'Grade B' },
];

export default function BuyerPortal() {
    const [radius, setRadius] = useState(100);
    const [activeCategory, setActiveCategory] = useState(null);

    const filteredItems = sampleItems.filter((item) => {
        const d = parseInt(item.distance);
        if (d > radius) return false;
        if (!activeCategory) return true;
        if (activeCategory === 'grade-b') return item.grade === 'Grade B';
        if (activeCategory === 'grade-c') return item.grade === 'Grade C';
        if (activeCategory === 'compost') return item.grade === 'Compost';
        return true;
    });

    return (
        <PageTransition>
            <section className="portal-page section">
                <AnimatedBackground />
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <motion.div
                        className="portal-header"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1>
                            🏢 <span className="glow-text">Buyer Portal</span>
                        </h1>
                        <p>
                            Browse sustainable harvest categories and discover locally
                            sourced produce matched to your needs.
                        </p>
                    </motion.div>

                    <div className="buyer-dashboard">
                        {/* Category Cards */}
                        <div className="category-grid">
                            {categories.map((cat, i) => (
                                <GlassCard
                                    key={cat.id}
                                    className={`category-card ${cat.className}`}
                                    delay={i * 0.12}
                                >
                                    <span className="category-icon">{cat.icon}</span>
                                    <h3>{cat.title}</h3>
                                    <p>{cat.desc}</p>
                                    <div className="category-tags">
                                        {cat.tags.map((tag) => (
                                            <span key={tag} className="category-tag">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <motion.button
                                        className="category-link"
                                        onClick={() =>
                                            setActiveCategory(
                                                activeCategory === cat.id ? null : cat.id
                                            )
                                        }
                                        whileHover={{ x: 4 }}
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            color:
                                                activeCategory === cat.id
                                                    ? cat.accent
                                                    : 'var(--green-light)',
                                        }}
                                    >
                                        {activeCategory === cat.id
                                            ? 'Show All'
                                            : 'Browse Available'}{' '}
                                        →
                                    </motion.button>
                                </GlassCard>
                            ))}
                        </div>

                        {/* Area Filter */}
                        <motion.div
                            className="buyer-filter glass"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3>
                                📍 Area Radius Filter
                                <span
                                    style={{
                                        marginLeft: 'auto',
                                        fontFamily: 'Outfit',
                                        fontSize: '1.3rem',
                                        color: 'var(--green-light)',
                                    }}
                                >
                                    {radius} km
                                </span>
                            </h3>
                            <div className="filter-slider-container">
                                <input
                                    type="range"
                                    className="filter-slider"
                                    min="10"
                                    max="100"
                                    step="5"
                                    value={radius}
                                    onChange={(e) => setRadius(Number(e.target.value))}
                                    style={{
                                        background: `linear-gradient(90deg, var(--green-glow) 0%, var(--gold-accent) ${radius}%, rgba(34,197,94,0.15) ${radius}%)`,
                                    }}
                                />
                                <div className="filter-labels">
                                    <span>10 km</span>
                                    <span>25 km</span>
                                    <span>50 km</span>
                                    <span>75 km</span>
                                    <span>100 km</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Available Items */}
                        <div className="available-items">
                            <h3 style={{ marginBottom: 20, fontSize: '1.15rem' }}>
                                🌿 Available Near You{' '}
                                <span
                                    style={{
                                        fontSize: '0.85rem',
                                        color: 'var(--text-muted)',
                                        fontWeight: 400,
                                    }}
                                >
                                    ({filteredItems.length} listings)
                                </span>
                            </h3>
                            <div className="item-list">
                                {filteredItems.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        className="item-row glass-subtle"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: i * 0.06 }}
                                        whileHover={{
                                            x: 6,
                                            backgroundColor: 'rgba(34, 197, 94, 0.06)',
                                        }}
                                    >
                                        <div className="item-icon">{item.icon}</div>
                                        <div className="item-info">
                                            <h4>{item.name}</h4>
                                            <p>{item.farm}</p>
                                        </div>
                                        <div className="item-meta">
                                            <div className="item-distance">{item.distance}</div>
                                            <div className="item-grade">{item.grade}</div>
                                        </div>
                                    </motion.div>
                                ))}
                                {filteredItems.length === 0 && (
                                    <motion.div
                                        className="glass-subtle"
                                        style={{
                                            padding: 40,
                                            textAlign: 'center',
                                            color: 'var(--text-muted)',
                                        }}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                    >
                                        <div style={{ fontSize: '2rem', marginBottom: 12 }}>
                                            🔍
                                        </div>
                                        No listings found within {radius}km for the selected
                                        category. Try increasing the radius or removing the filter.
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PageTransition>
    );
}
